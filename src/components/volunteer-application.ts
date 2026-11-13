export const STEPS = [
  { title: 'About you', description: 'Start with the basics' },
  { title: 'Your contribution', description: 'Find where you can help' },
  { title: 'Availability', description: 'Make it work for you' },
  { title: 'Final details', description: 'Review and send' },
] as const;

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
export const COUNTRIES = ('AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW')
  .split(' ')
  .map(code => ({ code, name: regionNames.of(code) || code }))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'));

export const STATUSES = ['Student', 'Recent graduate', 'Working professional', 'Other'] as const;
export const AREAS = [
  'Cancer Awareness & Health Education',
  'Research & Scientific Support',
  'Content Writing & Communications',
  'Graphic Design & Video Production',
  'Social Media & Digital Advocacy',
  'Community Outreach & Events',
  'Translation & Localisation',
  'Partnerships & Administration',
  'Other / Open to Opportunities',
] as const;
export const HOURS = ['1–2 hours', '3–5 hours', '6–10 hours', 'More than 10 hours', 'Occasional/project-based'] as const;
export const ARRANGEMENTS = ['Remote/online', 'In person', 'Both'] as const;

export interface VolunteerData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  status: string;
  profession: string;
  primaryArea: string;
  secondaryArea: string;
  skills: string;
  motivation: string;
  qualifications: string;
  languages: string;
  weeklyHours: string;
  arrangement: string;
  updatesConsent: boolean;
}

export type FieldName = keyof VolunteerData;
export type FormErrors = Partial<Record<FieldName, string>>;

export const EMPTY_APPLICATION: VolunteerData = {
  fullName: '', email: '', phone: '', country: '', city: '', status: '',
  profession: '', primaryArea: '', secondaryArea: '', skills: '', motivation: '',
  qualifications: '', languages: '', weeklyHours: '', arrangement: '',
  updatesConsent: false,
};

export function contributionFields(data: VolunteerData) {
  const selected = [data.primaryArea, data.secondaryArea];
  return {
    qualifications: selected.some(area => area === AREAS[0] || area === AREAS[1]),
    languages: selected.includes(AREAS[6]),
  };
}

export function validateStep(step: number, data: VolunteerData): FormErrors {
  const errors: FormErrors = {};
  const required = (field: FieldName, label: string) => {
    if (!String(data[field]).trim()) errors[field] = label;
  };
  const choice = (field: FieldName, options: readonly string[], message: string) => {
    if (!options.includes(String(data[field]))) errors[field] = message;
  };

  if (step === 0) {
    required('fullName', 'Enter your full name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Enter a valid email address.';
    if (data.phone.trim() && !/^\+[1-9]\d{6,14}$/.test(data.phone.replace(/[\s().-]/g, ''))) {
      errors.phone = 'Include + and your country code, followed by a 7–15 digit phone number.';
    }
    choice('country', COUNTRIES.map(country => country.name), 'Select a country from the list.');
    required('city', 'Enter your city or state.');
    choice('status', STATUSES, 'Select your current status.');
  }

  if (step === 1) {
    required('profession', 'Tell us your field of study, profession or experience.');
    choice('primaryArea', AREAS, 'Choose your preferred volunteering area.');
    if (data.secondaryArea && (!(AREAS as readonly string[]).includes(data.secondaryArea) || data.secondaryArea === data.primaryArea)) {
      errors.secondaryArea = 'Choose a different secondary area, or leave it blank.';
    }
    required('skills', 'Tell us about your skills and relevant experience.');
    required('motivation', 'Tell us why you would like to volunteer with Oncetra.');
    const fields = contributionFields(data);
    if (fields.languages) required('languages', 'Include the languages you can work in and your proficiency in each.');
  }

  if (step === 2) {
    choice('weeklyHours', HOURS, 'Choose your weekly time commitment.');
    choice('arrangement', ARRANGEMENTS, 'Choose your preferred working arrangement.');
  }

  return errors;
}

// Explicitly include all steps: unmounted inputs are not part of native FormData.
// Conditional answers are omitted when their volunteering area is no longer selected.
export function applicationPayload(data: VolunteerData): Record<string, string> {
  const fields = contributionFields(data);
  return {
    subject: 'New Oncetra volunteer application',
    from_name: 'Oncetra Volunteer Application',
    name: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim().replace(/[\s().-]/g, ''),
    country: data.country,
    city_state: data.city.trim(),
    current_status: data.status,
    profession: data.profession.trim(),
    preferred_area: data.primaryArea,
    secondary_area: data.secondaryArea,
    skills: data.skills.trim(),
    motivation: data.motivation.trim(),
    ...(fields.qualifications ? { qualifications: data.qualifications.trim(), qualification_verification: 'Pending verification before any clinical or scientific responsibilities are assigned.' } : {}),
    ...(fields.languages ? { languages_and_proficiency: data.languages.trim() } : {}),
    hours: data.weeklyHours,
    working_arrangement: data.arrangement,
    future_updates_consent: data.updatesConsent ? 'Yes — future volunteer opportunities and organisational updates' : 'No',
    updates_consent_recorded_at: new Date().toISOString(),
  };
}
