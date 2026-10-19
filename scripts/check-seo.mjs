import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
const paths = new Set(urls.map(url => url.pathname));
const titles = new Set();
const descriptions = new Set();
const documents = new Map();
for (const url of urls) {
  const html = await readFile(url.pathname === '/' ? 'dist/index.html' : `dist${url.pathname}.html`, 'utf8');
  documents.set(url.pathname, html);
  const head = html.split('</head>')[0];
  const title = [...head.matchAll(/<title[^>]*>(.*?)<\/title>/g)];
  assert.equal(title.length, 1, `${url}: one title`);
  assert(!titles.has(title[0][1]), `${url}: unique title`);
  titles.add(title[0][1]);
  const descriptionsOnPage = [...head.matchAll(/<meta name="description" content="([^"]+)"/g)];
  assert.equal(descriptionsOnPage.length, 1, `${url}: one description`);
  assert(!descriptions.has(descriptionsOnPage[0][1]), `${url}: unique description`);
  descriptions.add(descriptionsOnPage[0][1]);
  const canonicals = [...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  assert.equal(canonicals.length, 1, `${url}: one canonical`);
  assert.equal(canonicals[0][1], url.href);
  assert(!head.includes('noindex'), `${url}: indexable`);
  assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1, `${url}: one h1`);
  assert(head.includes('property="og:image"'), `${url}: social image`);
  assert(head.includes('name="twitter:image"'), `${url}: Twitter image`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  assert.equal(schemas.length, 1, `${url}: structured data`);
  const graph = JSON.parse(schemas[0][1])['@graph'];
  assert(graph.some(item => item['@type'] === 'Organization'));
  assert(graph.some(item => item['@type'] === 'BreadcrumbList'));
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert(/\balt="[^"]*"/.test(match[0]), `${url}: image alternative text`);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const target = match[1];
    if (/\.[a-z0-9]+$/i.test(target)) await access(`dist${target}`);
    else assert(paths.has(target), `${url}: broken internal link ${target}`);
  }
}
for (const [path, html] of documents) {
  for (const match of html.matchAll(/href="([^"?#]*?)#([^"\s]+)"/g)) {
    if (match[1] && !match[1].startsWith('/')) continue;
    const target = documents.get(match[1] || path);
    assert(target?.includes(`id="${match[2]}"`), `${path}: broken anchor ${match[0]}`);
  }
}
const missing = await readFile('dist/404.html', 'utf8');
assert(missing.includes('noindex, follow'));
assert(!missing.includes('rel="canonical"'));
assert(!sitemap.includes('/404'));
assert((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${urls[0].origin}/sitemap.xml`));
console.log(`SEO checks passed: ${urls.length} pages, unique metadata, canonicals, headings, schema, assets, internal links, anchors, and 404.`);
