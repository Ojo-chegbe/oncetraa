import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname } from 'node:path';
import sharp from 'sharp';
import { render, pages, SITE_URL } from '../.prerender/entry-server.mjs';

const template = (await readFile('dist/index.html', 'utf8')).replace(/<title>.*?<\/title>/s, '');
// Create a branded raster sharing card from the existing site artwork.
const overlay = Buffer.from(`<svg width="1200" height="630"><rect width="1200" height="630" fill="#122922" fill-opacity=".88"/><g fill="white" font-family="Arial, sans-serif"><text x="80" y="210" font-size="88" font-weight="700">Oncetra</text><text x="80" y="325" font-size="44">Cancer awareness, prevention</text><text x="80" y="385" font-size="44">and research in Africa.</text><text x="80" y="530" font-size="28" fill="#77d5a3">oncetra.org</text></g></svg>`);
await sharp('public/hero-bg.webp').resize(1200, 630, { fit: 'cover' }).composite([{ input: overlay }]).jpeg({ quality: 88 }).toFile('dist/social-preview.jpg');

for (const path of [...pages.map(page => page.path), '/404']) {
  let markup = render(path);
  const head = [];
  // React 19 hoists metadata. Place it in the document head for non-JS crawlers.
  markup = markup.replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>/g, tag => { head.push(tag); return ''; });
  const html = template.replace('</head>', `${head.join('\n')}\n</head>`).replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const output = path === '/' ? 'dist/index.html' : `dist${path}.html`;
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
await rm('.prerender', { recursive: true, force: true });
console.log(`Prerendered ${pages.length} indexable pages and a noindex 404 page.`);
