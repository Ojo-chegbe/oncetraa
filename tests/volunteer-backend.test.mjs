import assert from 'node:assert/strict';
import test from 'node:test';
import { exportJWK, generateKeyPair, SignJWT } from 'jose';
import { submitVolunteer } from '../volunteer-backend/intake.mjs';
import { staffRequest } from '../volunteer-backend/staff.mjs';

const origin = 'https://www.oncetra.org';
const id = 'a1111111-b222-4333-8444-c55555555555';
const submission = {
  application_id: id, name: 'Synthetic Volunteer', email: 'volunteer@example.test',
  country: 'Nigeria', city_state: 'Abuja', current_status: 'Student',
  profession: 'Community programmes', preferred_area: 'Community Outreach & Events',
  skills: '=Literal text', motivation: 'Support local outreach', hours: '3\u20135 hours',
  working_arrangement: 'Both', future_updates_consent: 'No',
};
const approved = async () => ({ status: 200 });
const verified = async () => ({ isBot: false });

function request(path, method, body, sender = origin) {
  return new Request(origin + path, {
    method,
    headers: { 'Content-Type': 'application/json', Origin: sender },
    body: JSON.stringify(body),
  });
}

test('intake passes a stable ID and only volunteer fields to database storage', async () => {
  const received = [];
  const save = async application => received.push(application);
  for (const incomingId of [id, id.toUpperCase()]) {
    const response = await submitVolunteer(
      request('/api/volunteer', 'POST', { ...submission, application_id: incomingId, status: 'Confirmed' }),
      save, verified,
    );
    assert.equal(response.status, 200);
    assert.equal((await response.json()).application_id, id);
  }
  assert.equal(received.length, 2);
  assert.deepEqual(received[0], received[1]);
  assert.equal(received[0].skills, submission.skills);
  assert.equal(received[0].status, undefined);
});

test('contact payloads, cross-origin submissions and bots do not reach storage', async () => {
  const save = async () => assert.fail('Unexpected application write');
  const contact = { name: 'Synthetic contact', email: 'contact@example.test', subject: 'Enquiry', message: 'Test' };
  const path = '/api/volunteer';
  assert.equal((await submitVolunteer(request(path, 'POST', contact), save, verified)).status, 400);
  assert.equal((await submitVolunteer(request(path, 'POST', submission, 'https://other.example.test'), save, verified)).status, 403);
  assert.equal((await submitVolunteer(request(path, 'POST', submission), save, async () => ({ isBot: true }))).status, 403);
});

test('staff records require authorized identity before the database is queried', async () => {
  for (const status of [401, 403, 503]) {
    const response = await staffRequest(
      request('/api/volunteer-staff?id=' + id, 'GET'),
      async () => assert.fail('Unexpected application read'),
      async () => ({ status }),
    );
    assert.equal(response.status, status);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
  }
});

test('staff authentication checks the Neon token signature, issuer, expiration and approved ID', async t => {
  const issuer = 'https://neon-auth.example.test';
  const variables = { NEON_AUTH_BASE_URL: issuer + '/neondb/auth', VOLUNTEER_STAFF_IDS: 'approved-staff' };
  for (const [key, value] of Object.entries(variables)) {
    const previous = process.env[key];
    process.env[key] = value;
    t.after(() => {
      if (previous === undefined) delete process.env[key];
      else process.env[key] = previous;
    });
  }
  const { privateKey, publicKey } = await generateKeyPair('EdDSA', { extractable: true });
  const publicJwk = { ...await exportJWK(publicKey), kid: 'test-key', alg: 'EdDSA' };
  t.mock.method(globalThis, 'fetch', async url => {
    assert.equal(String(url), issuer + '/neondb/auth/.well-known/jwks.json');
    return Response.json({ keys: [publicJwk] });
  });
  const { authorizeStaff } = await import('../volunteer-backend/staff.mjs?test=jwt');
  const token = (subject, tokenIssuer = issuer, expiration = '5m') =>
    new SignJWT({}).setProtectedHeader({ alg: 'EdDSA', kid: 'test-key' })
      .setSubject(subject).setIssuer(tokenIssuer).setAudience(issuer).setExpirationTime(expiration).sign(privateKey);
  const access = async bearer => (await authorizeStaff(new Request(origin, {
    headers: bearer ? { Authorization: 'Bearer ' + await bearer } : {},
  }))).status;
  assert.equal(await access(), 401);
  assert.equal(await access(token('approved-staff')), 200);
  assert.equal(await access(token('unapproved-user')), 403);
  assert.equal(await access(token('approved-staff', 'https://other.example.test')), 401);
  assert.equal(await access(token('approved-staff', issuer, 1)), 401);
  assert.equal(await access('invalid.token.data'), 401);
});

test('shortlisted queue passes role and availability to the query and sorts by role', async () => {
  const search = new URLSearchParams({
    view: 'shortlisted', role: submission.preferred_area, hours: submission.hours, sort: 'role', page: '2',
  });
  const response = await staffRequest(request('/api/volunteer-staff?' + search, 'GET'), async (sql, values) => {
    assert.match(sql, /ORDER BY lower/);
    assert.deepEqual(values, [['Shortlisted'], submission.preferred_area, submission.hours, 41, 40]);
    return [{ application_id: id, status: 'Shortlisted' }];
  }, approved);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).applications[0].application_id, id);
});

test('review updates include the expected revision and preserve a newer decision on conflict', async () => {
  const path = '/api/volunteer-staff?id=' + id;
  const update = {
    revision: 4, status: 'Invited', reviewer: 'Reviewer', assigned_role: submission.preferred_area,
    decision_notes: "Applicant's note", last_contacted: '2026-10-02',
  };
  const result = await staffRequest(request(path, 'PATCH', update), async (sql, values) => {
    assert.match(sql, /application_id = \$1 AND revision = \$2/);
    assert.deepEqual(values, [id, 4, 'Invited', 'Reviewer', submission.preferred_area, "Applicant's note", '2026-10-02']);
    return [{ revision: 5 }];
  }, approved);
  assert.deepEqual(await result.json(), { revision: 5 });
  const stale = await staffRequest(request(path, 'PATCH', update), async () => [], approved);
  assert.equal(stale.status, 409);
});
