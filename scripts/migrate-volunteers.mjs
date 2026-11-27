import { readFile } from 'node:fs/promises';
import pg from 'pg';

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.POSTGRES_URL_NON_POOLING;
if (!connectionString || new URL(connectionString).hostname.includes('-pooler')) {
  throw new Error('Set the direct connection string for the target Neon branch before running this migration.');
}

const client = new pg.Client({ connectionString, connectionTimeoutMillis: 10000 });
await client.connect();
try {
  const sql = await readFile(new URL('../volunteer-backend/migrations/001-applications.sql', import.meta.url), 'utf8');
  await client.query(sql);
  console.log('Volunteer application schema is ready.');
} finally {
  await client.end();
}
