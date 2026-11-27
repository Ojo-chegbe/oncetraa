import { attachDatabasePool } from '@vercel/functions';
import pg from 'pg';

let pool;

export async function query(text, parameters) {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    if (!connectionString) throw new Error('Volunteer database is unavailable');
    pool = new pg.Pool({ connectionString, max: 3, connectionTimeoutMillis: 8000 });
    pool.on('error', error => console.error('Volunteer database pool error', error.code));
    attachDatabasePool(pool);
  }
  return (await pool.query(text, parameters)).rows;
}

export async function saveVolunteer(application, runQuery = query) {
  await runQuery(
    `INSERT INTO volunteer_applications (application_id, answers)
     VALUES ($1, $2::jsonb)
     ON CONFLICT (application_id) DO NOTHING`,
    [application.application_id, JSON.stringify(application)],
  );
}
