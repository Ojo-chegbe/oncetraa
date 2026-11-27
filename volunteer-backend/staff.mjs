import { createRemoteJWKSet, jwtVerify } from 'jose';
import { readJson } from './intake.mjs';

const ID_PATTERN = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/i;
const STAGES = ['New', 'In review', 'Shortlisted', 'Invited', 'Confirmed', 'Waitlisted', 'Not selected'];
const SORTS = {
  newest: 'received_at DESC, application_id DESC',
  role: "lower(answers->>'preferred_area'), received_at DESC, application_id DESC",
  availability: `CASE answers->>'hours'
    WHEN '1–2 hours' THEN 1 WHEN '3–5 hours' THEN 2 WHEN '6–10 hours' THEN 3
    WHEN 'More than 10 hours' THEN 4 ELSE 5 END, received_at DESC, application_id DESC`,
};
const PAGE_SIZE = 40;
const authUrl = process.env.NEON_AUTH_BASE_URL?.replace(/\/$/, '');
const allowedUsers = new Set((process.env.VOLUNTEER_STAFF_IDS || '').split(',').map(id => id.trim()).filter(Boolean));
const jwks = authUrl ? createRemoteJWKSet(new URL(authUrl + '/.well-known/jwks.json')) : null;

export async function authorizeStaff(request) {
  const token = request.headers.get('Authorization')?.match(/^Bearer ([\w.-]{1,12000})$/i)?.[1];
  if (!jwks || !allowedUsers.size) return { status: 503 };
  if (!token) return { status: 401 };
  let payload;
  try {
    const origin = new URL(authUrl).origin;
    ({ payload } = await jwtVerify(token, jwks, {
      algorithms: ['EdDSA'], issuer: origin, audience: origin, requiredClaims: ['sub', 'exp'],
    }));
  } catch {
    return { status: 401 };
  }
  return { status: allowedUsers.has(payload.sub) ? 200 : 403 };
}

function reply(status, body) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' } });
}

function dateValue(value) {
  if (value === '' || value === null) return null;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith('0000-')) return undefined;
  const parsed = new Date(value);
  return Number.isFinite(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value ? value : undefined;
}

export async function staffRequest(request, query, authorize = authorizeStaff) {
  const identity = await authorize(request);
  if (identity.status !== 200) return reply(identity.status, { error: 'staff_access' });

  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (id !== null && !ID_PATTERN.test(id)) return reply(400, { error: 'invalid' });

  try {
    if (request.method === 'GET' && id) {
      const [application] = await query(
        `SELECT application_id, received_at, answers, status, reviewer, assigned_role,
                decision_notes, to_char(last_contacted, 'YYYY-MM-DD') AS last_contacted, revision
         FROM volunteer_applications WHERE application_id = $1`, [id],
      );
      return application ? reply(200, { application }) : reply(404, { error: 'missing' });
    }

    if (request.method === 'GET') {
      const view = url.searchParams.get('view') || 'all';
      const stages = { review: ['New', 'In review'], shortlisted: ['Shortlisted'], awaiting: ['Invited'] };
      const status = url.searchParams.get('status') || '';
      const sort = url.searchParams.get('sort') || 'newest';
      const page = Number(url.searchParams.get('page') || 1);
      const role = url.searchParams.get('role') || '';
      const hours = url.searchParams.get('hours') || '';
      if (!Object.hasOwn(SORTS, sort) || (view !== 'all' && !Object.hasOwn(stages, view))
        || (status && !STAGES.includes(status)) || !Number.isInteger(page) || page < 1 || page > 500
        || role.length > 100 || hours.length > 100) return reply(400, { error: 'invalid' });
      const stageFilter = view === 'all' ? (status ? [status] : []) : stages[view];
      const rows = await query(
        `SELECT application_id, received_at, status, reviewer,
                answers->>'name' AS name, answers->>'preferred_area' AS preferred_area,
                answers->>'hours' AS hours, answers->>'working_arrangement' AS working_arrangement
         FROM volunteer_applications
         WHERE (cardinality($1::text[]) = 0 OR status = ANY($1))
           AND ($2 = '' OR answers->>'preferred_area' = $2)
           AND ($3 = '' OR answers->>'hours' = $3)
         ORDER BY ${SORTS[sort]}
         LIMIT $4 OFFSET $5`,
        [stageFilter, role, hours, PAGE_SIZE + 1, (page - 1) * PAGE_SIZE],
      );
      return reply(200, { applications: rows.slice(0, PAGE_SIZE), hasMore: rows.length > PAGE_SIZE });
    }

    if (request.method !== 'PATCH' || !id) return reply(405, { error: 'method' });
    if (request.headers.get('Origin') !== url.origin) return reply(403, { error: 'origin' });
    let input;
    try {
      input = await readJson(request, 27000);
    } catch {
      return reply(400, { error: 'invalid' });
    }
    if (!input || !STAGES.includes(input.status) || !Number.isInteger(input.revision) || input.revision < 0
      || ![['reviewer', 150], ['assigned_role', 100], ['decision_notes', 4000]].every(([field, limit]) =>
        typeof input[field] === 'string' && input[field].length <= limit && !input[field].includes('\0'))) {
      return reply(400, { error: 'invalid' });
    }
    const date = dateValue(input.last_contacted);
    if (date === undefined) return reply(400, { error: 'invalid' });
    const [updated] = await query(
      `UPDATE volunteer_applications
       SET status = $3, reviewer = $4, assigned_role = $5, decision_notes = $6,
           last_contacted = $7, revision = revision + 1
       WHERE application_id = $1 AND revision = $2
       RETURNING revision`,
      [id, input.revision, input.status, input.reviewer.trim(), input.assigned_role.trim(), input.decision_notes.trim(), date],
    );
    return updated ? reply(200, { revision: updated.revision }) : reply(409, { error: 'conflict' });
  } catch {
    return reply(503, { error: 'unavailable' });
  }
}
