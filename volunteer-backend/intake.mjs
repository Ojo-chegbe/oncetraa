const MAX_BODY_BYTES = 80_000;
const FIELDS = {
  name: 200, email: 254, phone: 16, country: 100, city_state: 200,
  current_status: 100, profession: 200, preferred_area: 100, secondary_area: 100,
  skills: 3000, motivation: 3000, qualifications: 3000,
  qualification_verification: 200, languages_and_proficiency: 3000, hours: 100,
  working_arrangement: 100, future_updates_consent: 200,
};
const REQUIRED = [
  'name', 'email', 'country', 'city_state', 'current_status', 'profession',
  'preferred_area', 'skills', 'motivation', 'hours', 'working_arrangement',
  'future_updates_consent',
];

export async function readJson(request, limit = MAX_BODY_BYTES) {
  if (!request.body || !/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') ?? '')) {
    throw new Error('Expected JSON');
  }
  const reader = request.body.getReader();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let size = 0;
  let source = '';
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) throw new Error('Submission too large');
      source += decoder.decode(value, { stream: true });
    }
    return JSON.parse(source + decoder.decode());
  } finally {
    await reader.cancel().catch(() => {});
  }
}

function applicationFrom(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const id = input.application_id;
  if (typeof id !== 'string' || !/^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/i.test(id)) return null;
  const application = { application_id: id.toLowerCase() };
  for (const [name, limit] of Object.entries(FIELDS)) {
    const value = input[name] ?? '';
    if (typeof value !== 'string' || value.length > limit || value.includes('\0')) return null;
    application[name] = value.trim();
  }
  if (!REQUIRED.every(field => application[field])) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email)) return null;
  return application;
}

function reply(status, code, extra = {}) {
  return Response.json({ success: status === 200, code, ...extra }, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export async function submitVolunteer(request, saveApplication, verifyVisitor) {
  if (request.headers.get('Origin') !== new URL(request.url).origin) return reply(403, 'origin');

  let input;
  try {
    input = await readJson(request);
  } catch {
    return reply(400, 'invalid');
  }
  const application = applicationFrom(input);
  if (!application) return reply(400, 'invalid');

  try {
    const verdict = await verifyVisitor();
    if (verdict.isBot !== false) return reply(403, 'verification');

    await saveApplication(application);
    return reply(200, 'received', { application_id: application.application_id });
  } catch {
    return reply(503, 'unavailable');
  }
}
