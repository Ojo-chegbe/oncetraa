import React, { useId, useRef, useState } from 'react';
import { FiCheck, FiChevronDown, FiLoader } from 'react-icons/fi';
import {
  AREAS, ARRANGEMENTS, COUNTRIES, EMPTY_APPLICATION, HOURS, STATUSES, STEPS,
  applicationPayload, contributionFields, validateStep,
} from './volunteer-application';
import type { FieldName, FormErrors, VolunteerData } from './volunteer-application';
import './VolunteerApplication.css';

const fieldId = (name: FieldName) => `volunteer-${name}`;
const trackerEnabled = import.meta.env.VITE_VOLUNTEER_TRACKER_ENABLED === 'true';
const web3FormsEndpoint = 'https://api.web3forms.com/submit';

function volunteerEmailBody(application: Record<string, string>, accessKey: string) {
  const body = new FormData();
  for (const [key, value] of Object.entries(application)) body.append(key, value);
  body.append('access_key', accessKey);
  return body;
}

function Field({ name, label, optional = false, hint, error, children, wide = false }: {
  name: FieldName; label: string; optional?: boolean; hint?: string; error?: string;
  children: React.ReactNode; wide?: boolean;
}) {
  return (
    <div className={`va-field${wide ? ' va-wide' : ''}`}>
      <label htmlFor={fieldId(name)}>{label} {optional && <span className="va-optional">(optional)</span>}</label>
      {hint && <p id={`${fieldId(name)}-hint`} className="va-hint">{hint}</p>}
      {children}
      {error && <p id={`${fieldId(name)}-error`} className="va-error">{error}</p>}
    </div>
  );
}

function CountrySelect({ value, onChange, invalid, describedBy }: {
  value: string; onChange: (value: string) => void; invalid: boolean; describedBy?: string;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const results = COUNTRIES.filter(country => !query || query === value || country.name.toLowerCase().includes(query.trim().toLowerCase()) || country.code.toLowerCase() === query.toLowerCase());
  const choose = (name: string) => { onChange(name); setQuery(name); setOpen(false); setActive(0); };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return; }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const next = !open ? 0 : Math.max(0, Math.min(results.length - 1, active + (event.key === 'ArrowDown' ? 1 : -1)));
      setOpen(true); setActive(next);
      requestAnimationFrame(() => listRef.current?.children[next]?.scrollIntoView({ block: 'nearest' }));
    }
    if (event.key === 'Enter' && open) {
      event.preventDefault();
      if (results[active]) choose(results[active].name);
    }
  };

  return (
    <div className="va-country" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
        const match = COUNTRIES.find(country => country.name.toLowerCase() === query.trim().toLowerCase());
        if (match) choose(match.name);
        setOpen(false);
      }
    }}>
      <input id={fieldId('country')} name="country" role="combobox" autoComplete="off" required
        aria-autocomplete="list" aria-expanded={open} aria-controls={listId}
        aria-activedescendant={open && results[active] ? `${listId}-${active}` : undefined}
        aria-invalid={invalid} aria-describedby={describedBy} placeholder="Search for your country" value={query}
        onFocus={() => { setOpen(true); setActive(0); }} onKeyDown={onKeyDown}
        onChange={event => { setQuery(event.target.value); onChange(''); setActive(0); setOpen(true); }} />
      <FiChevronDown className="va-select-icon" aria-hidden="true" />
      {open && <ul id={listId} role="listbox" aria-label="Countries" ref={listRef} className="va-country-list">
        {results.map((country, index) => (
          <li key={country.code} id={`${listId}-${index}`} role="option" aria-selected={value === country.name}
            className={active === index ? 'is-active' : ''} onMouseDown={event => event.preventDefault()}
            onMouseEnter={() => setActive(index)} onClick={() => choose(country.name)}>
            {country.name}{value === country.name && <FiCheck aria-hidden="true" />}
          </li>
        ))}
        {!results.length && <li className="va-no-results" role="presentation">No countries found. Try another search.</li>}
      </ul>}
      <span className="sr-only" role="status">{open ? `${results.length} countries available. Use the arrow keys to browse and Enter to select.` : ''}</span>
    </div>
  );
}

function RadioGroup({ name, label, hint, options, value, onChange, error, compact = false }: {
  name: FieldName; label: string; hint?: string; options: readonly string[]; value: string;
  onChange: (value: string) => void; error?: string; compact?: boolean;
}) {
  return (
    <fieldset id={fieldId(name)} tabIndex={-1} className="va-radio-group" aria-invalid={!!error}
      aria-describedby={error ? `${fieldId(name)}-error` : undefined}>
      <legend>{label}</legend>
      {hint && <p className="va-hint">{hint}</p>}
      <div className={`va-options${compact ? ' va-options-compact' : ''}`}>
        {options.map(option => <label key={option} className={`va-option${value === option ? ' is-selected' : ''}`}>
          <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} required />
          <span>{option}</span>
        </label>)}
      </div>
      {error && <p id={`${fieldId(name)}-error`} className="va-error">{error}</p>}
    </fieldset>
  );
}

export default function VolunteerApplication() {
  const [data, setData] = useState<VolunteerData>({ ...EMPTY_APPLICATION });
  const [step, setStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const sendingRef = useRef(false);
  const applicationIdRef = useRef<string | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [returnToReview, setReturnToReview] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const conditional = contributionFields(data);

  const update = <K extends FieldName>(name: K, value: VolunteerData[K]) => {
    setData(previous => ({ ...previous, [name]: value,
      ...(name === 'primaryArea' && value === previous.secondaryArea ? { secondaryArea: '' } : {}),
    }));
    setErrors(previous => {
      const next = { ...previous };
      delete next[name];
      if (name === 'primaryArea' || name === 'secondaryArea') {
        delete next.qualifications; delete next.languages; delete next.secondaryArea;
      }
      return next;
    });
    setSubmitError('');
  };

  const focusStep = (next: number, nextErrors: FormErrors = {}) => {
    setStep(next); setErrors(nextErrors);
    setFurthestStep(previous => Math.max(previous, next));
    requestAnimationFrame(() => {
      const firstError = Object.keys(nextErrors)[0] as FieldName | undefined;
      const target = firstError ? document.getElementById(fieldId(firstError)) : headingRef.current;
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  };

  const navigate = (next: number) => {
    if (sendingRef.current) return;
    if (next > step) {
      for (let index = 0; index < next; index++) {
        const stepErrors = validateStep(index, data);
        if (Object.keys(stepErrors).length) { focusStep(index, stepErrors); return; }
      }
    }
    focusStep(next);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sendingRef.current) return;
    if (step < 3) {
      navigate(returnToReview ? 3 : step + 1);
      return;
    }
    for (let index = 0; index < STEPS.length; index++) {
      const stepErrors = validateStep(index, data);
      if (Object.keys(stepErrors).length) { focusStep(index, stepErrors); return; }
    }
    // Honeypot: genuine applicants never interact with this field.
    if (new FormData(event.currentTarget).get('botcheck')) return;
    const accessKey = import.meta.env.VITE_VOLUNTEER_WEB3FORMS_ACCESS_KEY?.trim()
      || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!trackerEnabled && !accessKey) {
      setSubmitError('Applications are temporarily unavailable. Your answers are still here. Please try again later or contact us through our Contact page.');
      return;
    }
    sendingRef.current = true; setSending(true); setSubmitError('');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      applicationIdRef.current ??= crypto.randomUUID();
      const application = { ...applicationPayload(data), application_id: applicationIdRef.current };
      const request: RequestInit = { method: 'POST', signal: controller.signal };
      let url = web3FormsEndpoint;
      if (trackerEnabled) {
        url = '/api/volunteer';
        request.headers = { 'Content-Type': 'application/json' };
        request.body = JSON.stringify(application);
      } else {
        request.body = volunteerEmailBody(application, accessKey);
      }
      const response = await fetch(url, request);
      const result = await response.json();
      if (!response.ok || result.success !== true
        || (trackerEnabled && result.application_id !== applicationIdRef.current)) {
        throw new Error('Submission failed');
      }
      if (trackerEnabled && accessKey) {
        void fetch(web3FormsEndpoint, {
          method: 'POST', body: volunteerEmailBody(application, accessKey), keepalive: true,
        }).then(async backup => {
          if (!backup.ok || (await backup.json()).success !== true) throw new Error('Backup request failed');
        }).catch(() => console.warn('Volunteer backup email request failed.'));
      }
      setSubmitted(true); setData({ ...EMPTY_APPLICATION }); setErrors({});
      requestAnimationFrame(() => {
        headingRef.current?.focus({ preventScroll: true });
        headingRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      });
    } catch (error) {
      setSubmitError(error instanceof Error && error.name === 'AbortError'
        ? 'The connection timed out, so we could not confirm receipt. Your answers are still here. Please try again, or contact us if you are unsure whether it arrived.'
        : 'We couldn’t send your application. Your answers are still here. Please check your connection and try again.');
    } finally {
      clearTimeout(timeout); sendingRef.current = false; setSending(false);
    }
  };

  const inputProps = (name: FieldName, hint = false) => ({
    id: fieldId(name), name, 'aria-invalid': !!errors[name],
    'aria-describedby': [hint ? `${fieldId(name)}-hint` : '', errors[name] ? `${fieldId(name)}-error` : ''].filter(Boolean).join(' ') || undefined,
  });

  const textField = (name: 'fullName' | 'email' | 'phone' | 'city' | 'profession', label: string, options: {
    optional?: boolean; hint?: string; placeholder?: string; type?: string; autoComplete?: string; wide?: boolean; maxLength?: number;
  } = {}) => <Field key={name} name={name} label={label} error={errors[name]} {...options}>
    <input {...inputProps(name, !!options.hint)} type={options.type || 'text'} value={data[name]}
      onChange={event => update(name, event.target.value)} required={!options.optional}
      placeholder={options.placeholder} autoComplete={options.autoComplete} maxLength={options.maxLength || 200}
      inputMode={name === 'phone' ? 'tel' : undefined} />
  </Field>;

  const selectField = (name: 'primaryArea' | 'secondaryArea', label: string, optional = false) => <Field name={name} label={label} optional={optional} error={errors[name]}>
    <div className="va-select-wrap">
      <select {...inputProps(name)} value={data[name]} onChange={event => update(name, event.target.value)} required={!optional}>
        <option value="">{optional ? 'No secondary preference' : 'Choose an area'}</option>
        {AREAS.filter(area => name !== 'secondaryArea' || area !== data.primaryArea).map(area => <option key={area}>{area}</option>)}
      </select>
      <FiChevronDown className="va-select-icon" aria-hidden="true" />
    </div>
  </Field>;

  const textarea = (name: 'skills' | 'motivation' | 'qualifications' | 'languages', label: string, hint: string, optional = false) => <Field
    name={name} label={label} optional={optional} hint={hint} error={errors[name]}>
    <textarea {...inputProps(name, !!hint)} rows={name === 'languages' ? 3 : 4} maxLength={3000}
      value={data[name]} onChange={event => update(name, event.target.value)} required={!optional} />
    <span className="va-character-count">{data[name].length.toLocaleString()} / 3,000</span>
  </Field>;

  const reviewSection = (title: string, target: number, rows: [string, string][]) => <section className="va-review-section">
    <div className="va-review-heading"><h4>{title}</h4><button type="button" className="va-edit" onClick={() => { setReturnToReview(true); focusStep(target); }}>
      Edit<span className="sr-only"> {title.toLowerCase()}</span>
    </button></div>
    <dl>{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || 'Not provided'}</dd></div>)}</dl>
  </section>;

  return (
    <section id="apply" className="volunteer-application" aria-labelledby="va-title">
      <div className="va-container">
        <div className="va-intro">
          <h2 id="va-title">Volunteer application</h2>
          <p>Tell us about yourself, your interests, and when you’re available.</p>
        </div>
        {submitted ? <div className="va-success">
          <h3 ref={headingRef} tabIndex={-1}>Application received</h3>
          <p>Your application has been received. Our team will review your interests and availability and get in touch by email about the next steps.</p>
          <a href="/" className="va-primary">Back to home</a>
        </div> : <div>
            <nav aria-label="Application steps"><ol className="va-steps">
              {STEPS.map((item, index) => <li key={item.title} className={`${index === step ? 'is-current' : ''} ${index < step ? 'is-complete' : ''}`}>
                <button type="button" aria-current={index === step ? 'step' : undefined} disabled={index > furthestStep || sending}
                  onClick={() => { setReturnToReview(false); navigate(index); }}>
                  <span className="va-step-number">{index + 1}.</span>
                  <span>{item.title}</span>
                </button>
              </li>)}
            </ol></nav>
          <form className="va-form" onSubmit={onSubmit} noValidate aria-busy={sending}>
            <input type="checkbox" name="botcheck" className="va-honeypot" tabIndex={-1} aria-hidden="true" />
            <header className="va-step-header">
              <p className="va-step-count" aria-live="polite">Step {step + 1} of 4</p>
              <h3 ref={headingRef} tabIndex={-1}>{STEPS[step].title}</h3>
              {step === 3 && <p>Check your answers before submitting. Use Edit to make changes.</p>}
              {step < 3 && <span className="va-required-note">All fields are required unless marked optional.</span>}
            </header>
            {Object.keys(errors).length > 0 && <p className="va-validation-message" role="alert">A few details need attention. Please check the highlighted fields below.</p>}
            <fieldset disabled={sending} className="va-form-body">
              {step === 0 && <div className="va-fields-grid">
                {textField('fullName', 'Full name', { placeholder: 'Your full name', autoComplete: 'name', maxLength: 150 })}
                {textField('email', 'Email address', { type: 'email', placeholder: 'you@example.com', autoComplete: 'email', maxLength: 254 })}
                {textField('phone', 'Phone / WhatsApp number', { type: 'tel', optional: true, placeholder: '+234 801 234 5678', hint: 'Include your country code, for example +234 for Nigeria.', autoComplete: 'tel', wide: true, maxLength: 40 })}
                <Field name="country" label="Country" error={errors.country}>
                  <CountrySelect value={data.country} onChange={value => update('country', value)} invalid={!!errors.country} describedBy={errors.country ? `${fieldId('country')}-error` : undefined} />
                </Field>
                {textField('city', 'City / State', { placeholder: 'e.g. Lagos, Lagos State', autoComplete: 'address-level2', maxLength: 150 })}
                <div className="va-wide"><RadioGroup name="status" label="Current status" options={STATUSES} value={data.status} onChange={value => update('status', value)} error={errors.status} compact /></div>
              </div>}

              {step === 1 && <div className="va-fields-stack">
                {textField('profession', 'Field of study, profession or area of experience', { placeholder: 'e.g. Public health, design, community organising' })}
                {selectField('primaryArea', 'Preferred volunteering area')}
                {selectField('secondaryArea', 'Secondary area of interest', true)}
                {textarea('skills', 'Skills and relevant experience', 'Include relevant work, study, or volunteering experience.')}
                {textarea('motivation', 'Why would you like to volunteer with Oncetra?', '')}
                {conditional.qualifications && <div className="va-conditional">
                  {textarea('qualifications', 'Relevant qualifications, research or clinical experience', 'Share qualifications, relevant training, or experience. Please do not include patient details or upload identity documents.', true)}
                  <p className="va-notice">Specialist professional qualifications must be verified before any clinical or scientific responsibilities are assigned.</p>
                </div>}
                {conditional.languages && <div className="va-conditional">{textarea('languages', 'Languages and proficiency', 'List each language and your proficiency, for example: English — fluent; Hausa — conversational.')}</div>}
              </div>}

              {step === 2 && <div className="va-fields-stack va-availability">
                <RadioGroup name="weeklyHours" label="Weekly time commitment" options={HOURS} value={data.weeklyHours} onChange={value => update('weeklyHours', value)} error={errors.weeklyHours} compact />
                <RadioGroup name="arrangement" label="Preferred working arrangement" options={ARRANGEMENTS} value={data.arrangement} onChange={value => update('arrangement', value)} error={errors.arrangement} />
              </div>}

              {step === 3 && <div className="va-fields-stack">
                <div className="va-review">
                  {reviewSection('About you', 0, [['Full name', data.fullName], ['Email address', data.email], ['Phone / WhatsApp', data.phone], ['Country', data.country], ['City / State', data.city], ['Current status', data.status]])}
                  {reviewSection('Your contribution', 1, [
                    ['Field / profession', data.profession], ['Preferred area', data.primaryArea], ['Secondary interest', data.secondaryArea], ['Skills and experience', data.skills], ['Why Oncetra', data.motivation],
                    ...(conditional.qualifications ? [['Relevant qualifications', data.qualifications] as [string, string]] : []),
                    ...(conditional.languages ? [['Languages and proficiency', data.languages] as [string, string]] : []),
                  ])}
                  {reviewSection('Availability', 2, [['Weekly commitment', data.weeklyHours], ['Working arrangement', data.arrangement]])}
                </div>
                <div className="va-consents">
                  <div className="va-privacy-notice"><p>Oncetra will use your application details to assess your suitability, contact you about your application, and match you with volunteering opportunities.</p></div>
                  <div className="va-updates"><label className="va-checkbox"><input {...inputProps('updatesConsent')} type="checkbox" checked={data.updatesConsent} onChange={event => update('updatesConsent', event.target.checked)} /><span>Send me future volunteer opportunities and organisational updates by email. <span className="va-optional">(optional)</span><small>You can unsubscribe at any time. This won’t affect your application.</small></span></label></div>
                </div>
              </div>}
              {submitError && <div className="va-submission-error" role="alert"><p>{submitError}</p><a href="/contact">Contact Oncetra</a></div>}
              <footer className="va-footer">
                {step > 0 ? <button type="button" className="va-back" onClick={() => { setReturnToReview(false); navigate(step - 1); }}>Back</button> : <span />}
                <button type="submit" className="va-primary" disabled={sending}>
                  {sending ? <><FiLoader className="va-spinner" aria-hidden="true" /> Sending application…</> : step === 3 ? 'Submit application' : returnToReview ? 'Save & return to review' : 'Continue'}
                </button>
              </footer>
            </fieldset>
            <p className="va-session-note">Answers are kept between steps. Leaving or refreshing this page will clear them.</p>
          </form>
        </div>}
      </div>
    </section>
  );
}
