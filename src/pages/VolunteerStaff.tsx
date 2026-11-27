import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { AREAS, HOURS } from '../components/volunteer-application';
import './VolunteerStaff.css';

const authUrl = import.meta.env.VITE_NEON_AUTH_URL;
const sessionFetch = { fetchOptions: { credentials: 'include' as const } };
const stages = ['New', 'In review', 'Shortlisted', 'Invited', 'Confirmed', 'Waitlisted', 'Not selected'];
const views = [
  ['all', 'All applications'], ['review', 'Needs review'],
  ['shortlisted', 'Shortlisted by role'], ['awaiting', 'Awaiting confirmation'],
];
const answersToShow = [
  ['email', 'Email'], ['phone', 'Phone'], ['country', 'Country'], ['city_state', 'City or state'],
  ['current_status', 'Current status'], ['profession', 'Field or profession'],
  ['preferred_area', 'Preferred role'], ['secondary_area', 'Secondary role'],
  ['hours', 'Weekly availability'], ['working_arrangement', 'Working arrangement'],
  ['skills', 'Skills and experience'], ['motivation', 'Motivation'], ['qualifications', 'Qualifications'],
  ['qualification_verification', 'Qualification verification'],
  ['languages_and_proficiency', 'Languages'], ['future_updates_consent', 'Updates consent'],
];

async function createStaffClient(url: string) {
  const { createAuthClient } = await import('@neon/auth');
  return createAuthClient(url);
}

type StaffClient = Awaited<ReturnType<typeof createStaffClient>>;
type Summary = {
  application_id: string;
  received_at: string;
  name: string;
  preferred_area: string;
  hours: string;
  working_arrangement: string;
  status: string;
  reviewer: string;
};
type Review = {
  status: string;
  reviewer: string;
  assigned_role: string;
  decision_notes: string;
  last_contacted: string | null;
  revision: number;
};
type Application = Review & {
  application_id: string;
  received_at: string;
  answers: Record<string, string>;
};
type Queue = { applications: Summary[]; hasMore: boolean };

class StaffRequestError extends Error {
  constructor(readonly status: number) {
    super('Volunteer tracker request failed');
  }
}

function requestMessage(error: unknown, fallback: string) {
  if (error instanceof StaffRequestError) {
    if (error.status === 401) return 'Your session has expired. Sign out and sign in again.';
    if (error.status === 403) return 'This account does not have access to the volunteer tracker.';
    if (error.status === 409) return 'Another reviewer changed this application. Reload it before saving.';
  }
  return fallback;
}

function StaffQueue({ client, email, onSignOut }: { client: StaffClient; email: string; onSignOut: () => void }) {
  const [view, setView] = useState('all');
  const [role, setRole] = useState('');
  const [hours, setHours] = useState('');
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [queue, setQueue] = useState<Queue | null>(null);
  const [queueError, setQueueError] = useState('');
  const [selected, setSelected] = useState('');
  const [application, setApplication] = useState<Application | null>(null);
  const [detailError, setDetailError] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [queueVersion, setQueueVersion] = useState(0);
  const [detailVersion, setDetailVersion] = useState(0);
  const detailPanel = useRef<HTMLElement | null>(null);

  const request = useCallback(async <T,>(params: URLSearchParams, options: RequestInit = {}): Promise<T> => {
    const { data } = await client.getSession(sessionFetch);
    const token = data?.session?.token;
    if (!token) throw new StaffRequestError(401);
    const headers = new Headers(options.headers);
    headers.set('Authorization', 'Bearer ' + token);
    const response = await fetch('/api/volunteer-staff?' + params, { ...options, headers, cache: 'no-store' });
    if (!response.ok) throw new StaffRequestError(response.status);
    return response.json();
  }, [client]);

  useEffect(() => {
    const controller = new AbortController();
    setQueue(null);
    setQueueError('');
    const params = new URLSearchParams({ view, role, hours, status, sort, page: String(page) });
    void request<Queue>(params, { signal: controller.signal })
      .then(data => { if (!controller.signal.aborted) setQueue(data); })
      .catch(error => {
        if (!controller.signal.aborted) setQueueError(requestMessage(error, 'Could not load applications. Try again.'));
      });
    return () => controller.abort();
  }, [view, role, hours, status, sort, page, queueVersion, request]);

  useEffect(() => {
    if (!selected) return;
    const controller = new AbortController();
    setApplication(null);
    setSaved(false);
    setDetailError('');
    detailPanel.current?.scrollIntoView({ block: 'start' });
    detailPanel.current?.focus({ preventScroll: true });
    void request<{ application: Application }>(new URLSearchParams({ id: selected }), { signal: controller.signal })
      .then(data => { if (!controller.signal.aborted) setApplication(data.application); })
      .catch(error => {
        if (!controller.signal.aborted) setDetailError(requestMessage(error, 'Could not load this application.'));
      });
    return () => controller.abort();
  }, [selected, detailVersion, request]);

  function changeFilter(setter: (value: string) => void, value: string) {
    setPage(1);
    setter(value);
  }

  function update(field: Exclude<keyof Review, 'revision'>, value: string) {
    setSaved(false);
    setApplication(previous => previous && { ...previous, [field]: value });
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!application || saving) return;
    setSaving(true);
    setSaved(false);
    setDetailError('');
    const { application_id, status, reviewer, assigned_role, decision_notes, last_contacted, revision } = application;
    try {
      const result = await request<{ revision: number }>(new URLSearchParams({ id: application_id }), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, reviewer, assigned_role, decision_notes, last_contacted, revision }),
      });
      setApplication(previous => previous && { ...previous, revision: result.revision });
      setSaved(true);
      setQueueVersion(value => value + 1);
    } catch (error) {
      setDetailError(requestMessage(error, 'Could not save your changes. Try again.'));
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <header className="staff-heading">
        <div><span className="staff-org">Oncetra</span><h1>Volunteer applications</h1></div>
        <div className="staff-account"><span>{email}</span><button className="staff-button" onClick={onSignOut}>Sign out</button></div>
      </header>
      <nav className="staff-views" aria-label="Application views">
        {views.map(([value, label]) => (
          <button type="button" key={value} aria-pressed={view === value} onClick={() => {
            changeFilter(setView, value);
            setSort(value === 'shortlisted' ? 'role' : 'newest');
          }}>{label}</button>
        ))}
      </nav>
      <section className="staff-card" aria-label="Application queue">
        <div className="staff-filters">
          <label>Preferred role<select value={role} onChange={event => changeFilter(setRole, event.target.value)}>
            <option value="">All roles</option>{AREAS.map(value => <option key={value}>{value}</option>)}
          </select></label>
          <label>Weekly availability<select value={hours} onChange={event => changeFilter(setHours, event.target.value)}>
            <option value="">Any availability</option>{HOURS.map(value => <option key={value}>{value}</option>)}
          </select></label>
          {view === 'all' && <label>Status<select value={status} onChange={event => changeFilter(setStatus, event.target.value)}>
            <option value="">All statuses</option>{stages.map(value => <option key={value}>{value}</option>)}
          </select></label>}
          <label>Sort by<select value={sort} onChange={event => changeFilter(setSort, event.target.value)}>
            <option value="newest">Newest first</option><option value="role">Preferred role</option><option value="availability">Weekly availability</option>
          </select></label>
        </div>
        {queueError ? <p className="staff-feedback" role="alert">{queueError}</p> : !queue ? (
          <p className="staff-feedback" role="status">Loading applications…</p>
        ) : queue.applications.length ? (
          <div className="staff-table-wrapper">
            <table className="staff-table">
              <thead><tr><th>Applicant</th><th>Preferred role</th><th>Availability</th><th>Status</th><th>Reviewer</th></tr></thead>
              <tbody>{queue.applications.map(item => (
                <tr key={item.application_id}>
                  <td><button className="staff-applicant" disabled={saving}
                    onClick={() => { setSelected(item.application_id); setDetailVersion(value => value + 1); }}>{item.name}</button></td>
                  <td>{item.preferred_area}</td>
                  <td>{item.hours}<small>{item.working_arrangement}</small></td>
                  <td><span className="staff-status" data-status={item.status}>{item.status}</span></td>
                  <td>{item.reviewer || 'Unassigned'}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        ) : <p className="staff-feedback">No applications match this view.</p>}
        {queue && (page > 1 || queue.hasMore) && <div className="staff-pages">
          <button className="staff-button" disabled={page === 1} onClick={() => setPage(value => value - 1)}>Previous</button>
          <span>Page {page}</span>
          <button className="staff-button" disabled={!queue.hasMore} onClick={() => setPage(value => value + 1)}>Next</button>
        </div>}
      </section>
      {selected && (
        <section ref={detailPanel} tabIndex={-1} className="staff-card staff-detail" aria-label="Selected application">
          <header className="staff-detail-heading">
            <h2>{application?.answers.name || 'Application details'}</h2>
            <button className="staff-button" disabled={saving} onClick={() => setSelected('')}>Close</button>
          </header>
          {detailError && <div className="staff-detail-error" role="alert">
            <p>{detailError}</p><button className="staff-button" onClick={() => setDetailVersion(value => value + 1)}>Reload application</button>
          </div>}
          {application ? (
            <div className="staff-detail-grid">
              <dl className="staff-answers">{answersToShow.map(([key, label]) => application.answers[key] && (
                <div key={key}><dt>{label}</dt><dd>{application.answers[key]}</dd></div>
              ))}</dl>
              <form className="staff-review" onSubmit={save}>
                <h3>Review</h3>
                <fieldset disabled={saving}>
                  <label>Status<select value={application.status} onChange={event => update('status', event.target.value)}>
                    {stages.map(value => <option key={value}>{value}</option>)}
                  </select></label>
                  <label>Reviewer<input maxLength={150} value={application.reviewer} onChange={event => update('reviewer', event.target.value)} /></label>
                  <label>Assigned role<select value={application.assigned_role} onChange={event => update('assigned_role', event.target.value)}>
                    <option value="">Unassigned</option>{AREAS.map(value => <option key={value}>{value}</option>)}
                  </select></label>
                  <label>Last contacted<input type="date" value={application.last_contacted || ''} onChange={event => update('last_contacted', event.target.value)} /></label>
                  <label>Decision notes<textarea rows={4} maxLength={4000} value={application.decision_notes} onChange={event => update('decision_notes', event.target.value)} /></label>
                  <button className="staff-button staff-primary" type="submit">{saving ? 'Saving…' : 'Save review'}</button>
                  {saved && <p role="status">Review saved.</p>}
                </fieldset>
              </form>
            </div>
          ) : !detailError && <p role="status">Loading application…</p>}
        </section>
      )}
    </>
  );
}

export default function VolunteerStaff() {
  const [client, setClient] = useState<StaffClient | null>(null);
  const [email, setEmail] = useState('');
  const [working, setWorking] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authUrl) { setWorking(false); return; }
    let active = true;
    void createStaffClient(authUrl).then(async instance => {
      if (!active) return;
      // The Neon client is callable, so pass it through a state updater.
      setClient(() => instance);
      const { data } = await instance.getSession(sessionFetch);
      if (active) setEmail(data?.user?.email || '');
    }).catch(() => {
      if (active) setError('Could not check your sign-in. Try again.');
    }).finally(() => { if (active) setWorking(false); });
    return () => { active = false; };
  }, []);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!client || working) return;
    const form = new FormData(event.currentTarget);
    setError('');
    setWorking(true);
    try {
      const { data, error: failure } = await client.signIn.email({
        email: String(form.get('email') || '').trim(), password: String(form.get('password') || ''),
        ...sessionFetch,
      });
      if (failure || !data?.user?.email) throw new Error('Invalid sign-in');
      setEmail(data.user.email);
    } catch {
      setError('Could not sign in. Check your staff email and password.');
    } finally {
      setWorking(false);
    }
  }

  async function signOut() {
    if (!client || working) return;
    setWorking(true);
    setError('');
    try {
      const { error: failure } = await client.signOut(sessionFetch);
      if (failure) throw new Error('Sign-out failed');
      setEmail('');
    } catch {
      setError('Could not sign out. Try again.');
    } finally {
      setWorking(false);
    }
  }

  return (
    <main className="volunteer-staff">
      <Helmet><title>Volunteer staff | Oncetra</title><meta name="robots" content="noindex, nofollow" /></Helmet>
      {email && client ? (
        <><StaffQueue client={client} email={email} onSignOut={signOut} />{error && <p role="alert">{error}</p>}</>
      ) : (
        <section className="staff-card staff-sign-in">
          <span className="staff-org">Oncetra</span><h1>Volunteer staff sign-in</h1>
          {working && !client ? <p role="status">Checking your sign-in…</p> : !client ? (
            <p role="status">Staff sign-in is temporarily unavailable.</p>
          ) : (
            <form onSubmit={signIn}>
              <label>Staff email<input name="email" type="email" autoComplete="username" required /></label>
              <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
              <button className="staff-button staff-primary" disabled={working} type="submit">{working ? 'Please wait…' : 'Sign in'}</button>
            </form>
          )}
          {error && <p role="alert">{error}</p>}
        </section>
      )}
    </main>
  );
}
