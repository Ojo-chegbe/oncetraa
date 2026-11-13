import assert from 'node:assert/strict';
import { copyFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { loadEnv } from 'vite';

test('production forms have a public access key without the ignored local .env file', async () => {
  const envDir = await mkdtemp(join(tmpdir(), 'oncetra-form-config-'));
  const override = process.env.VITE_WEB3FORMS_ACCESS_KEY;
  try {
    // Reproduce a deployment checkout with only the committed configuration.
    await copyFile(new URL('../.env.production', import.meta.url), join(envDir, '.env.production'));
    // A developer/CI override must not mask a missing key in the committed file.
    delete process.env.VITE_WEB3FORMS_ACCESS_KEY;
    const env = loadEnv('production', envDir, 'VITE_');
    assert.match(env.VITE_WEB3FORMS_ACCESS_KEY ?? '', /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i);
    const customKey = '11111111-2222-3333-4444-555555555555';
    process.env.VITE_WEB3FORMS_ACCESS_KEY = customKey;
    assert.equal(loadEnv('production', envDir, 'VITE_').VITE_WEB3FORMS_ACCESS_KEY, customKey);
  } finally {
    if (override === undefined) delete process.env.VITE_WEB3FORMS_ACCESS_KEY;
    else process.env.VITE_WEB3FORMS_ACCESS_KEY = override;
    await rm(envDir, { recursive: true, force: true });
  }
});
