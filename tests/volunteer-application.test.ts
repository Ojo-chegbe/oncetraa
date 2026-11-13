import assert from 'node:assert/strict';
import test from 'node:test';
import { AREAS, ARRANGEMENTS, COUNTRIES, EMPTY_APPLICATION, HOURS, STATUSES, applicationPayload, contributionFields, validateStep } from '../src/components/volunteer-application.ts';

const valid = {
  ...EMPTY_APPLICATION,
  fullName: 'Test Applicant', email: 'applicant@example.com', country: 'Nigeria', city: 'Lagos', status: STATUSES[0],
  profession: 'Public health', primaryArea: AREAS[5], skills: 'Community event planning', motivation: 'Support cancer awareness.',
  weeklyHours: HOURS[1], arrangement: ARRANGEMENTS[0],
};

test('all four steps accept a valid application without optional fields or updates consent', () => {
  for (let step = 0; step < 4; step++) assert.deepEqual(validateStep(step, valid), {});
});

test('missing personal details, invalid email and unknown countries are rejected', () => {
  const errors = validateStep(0, { ...valid, fullName: '  ', email: 'invalid@', country: 'Atlantis', city: '', status: '' });
  assert.deepEqual(Object.keys(errors).sort(), ['city', 'country', 'email', 'fullName', 'status']);
});

test('international phone formatting is accepted and local or excessively long numbers are rejected', () => {
  assert.equal(validateStep(0, { ...valid, phone: '+234 (801) 234-5678' }).phone, undefined);
  assert.ok(validateStep(0, { ...valid, phone: '08012345678' }).phone);
  assert.ok(validateStep(0, { ...valid, phone: '+0123456789' }).phone);
  assert.ok(validateStep(0, { ...valid, phone: '+1234567890123456' }).phone);
});

test('primary and secondary areas both trigger their relevant conditional questions', () => {
  assert.deepEqual(contributionFields({ ...valid, primaryArea: AREAS[1], secondaryArea: AREAS[3] }), { qualifications: true, languages: false });
  assert.equal(contributionFields({ ...valid, secondaryArea: AREAS[0] }).qualifications, true);
  assert.equal(contributionFields({ ...valid, primaryArea: AREAS[6] }).languages, true);
});

test('translation requires languages and proficiency when chosen as a primary or secondary interest', () => {
  for (const field of ['primaryArea', 'secondaryArea']) {
    assert.ok(validateStep(1, { ...valid, [field]: AREAS[6] }).languages);
    assert.equal(validateStep(1, { ...valid, [field]: AREAS[6], languages: 'English: fluent; Hausa: conversational' }).languages, undefined);
  }
});

test('blank required contributions and duplicate area choices are rejected', () => {
  const errors = validateStep(1, { ...valid, profession: ' ', skills: '', motivation: '', secondaryArea: valid.primaryArea });
  assert.deepEqual(Object.keys(errors).sort(), ['motivation', 'profession', 'secondaryArea', 'skills']);
});

test('availability requires a weekly commitment and working arrangement', () => {
  assert.deepEqual(Object.keys(validateStep(2, EMPTY_APPLICATION)).sort(), ['arrangement', 'weeklyHours']);
  assert.ok(validateStep(2, { ...valid, weeklyHours: 'arbitrary' }).weeklyHours);
});

test('final review has no required checkbox; updates consent is optional', () => {
  assert.deepEqual(validateStep(3, EMPTY_APPLICATION), {});
  assert.deepEqual(validateStep(3, { ...valid, updatesConsent: false }), {});
  assert.equal(applicationPayload(valid).future_updates_consent, 'No');
  assert.match(applicationPayload({ ...valid, updatesConsent: true }).future_updates_consent, /^Yes/);
});

test('payload contains answers from all steps, trims text, and normalises the phone number', () => {
  const payload = applicationPayload({ ...valid, fullName: ' Test Applicant ', phone: '+234 (801) 234-5678' });
  assert.equal(payload.name, 'Test Applicant');
  assert.equal(payload.phone, '+2348012345678');
  assert.equal(payload.country, 'Nigeria');
  assert.equal(payload.preferred_area, valid.primaryArea);
  assert.equal(payload.skills, valid.skills);
  assert.equal(payload.hours, valid.weeklyHours);
});

test('irrelevant conditional answers never leak into a submission after the applicant changes areas', () => {
  const payload = applicationPayload({ ...valid, qualifications: 'Old qualification', languages: 'Old languages' });
  assert.equal(payload.qualifications, undefined);
  assert.equal(payload.languages_and_proficiency, undefined);
  const researcher = applicationPayload({ ...valid, primaryArea: AREAS[1], qualifications: 'Relevant training' });
  assert.equal(researcher.qualifications, 'Relevant training');
  assert.match(researcher.qualification_verification, /Pending verification/);
});

test('country selector covers all 249 ISO countries and territories without duplicates', () => {
  assert.equal(COUNTRIES.length, 249);
  assert.equal(new Set(COUNTRIES.map(country => country.code)).size, 249);
  assert.ok(COUNTRIES.some(country => country.code === 'NG' && country.name === 'Nigeria'));
});
