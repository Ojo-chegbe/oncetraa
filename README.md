# Oncetra

React + Vite website. Run `npm install`, then `npm run dev` for development.

## Form configuration

Volunteer applications, contact enquiries, partnership enquiries, and newsletter subscriptions use Web3Forms. `.env.production` includes the existing public form access key so production builds work from a clean Git checkout without the ignored local `.env` file. Web3Forms access keys are public email-routing identifiers, not secret API credentials; see the [Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq).

To change the destination, set `VITE_WEB3FORMS_ACCESS_KEY` in the hosting environment before building, then redeploy. Vite embeds the key at build time, so changing a hosting variable alone does not update an existing deployment. Local development can use `.env` or `.env.local`.

Run `node --test tests/form-config.test.mjs` to verify production form configuration without local environment files.

## Production and SEO

Run `npm run build` and deploy **dist**. The build renders every public route to HTML, creates a 1200 x 630 social card, generates sitemap.xml and robots.txt, and runs SEO regression checks. Page content and metadata are present without JavaScript; React hydrates them for navigation and forms.

- `src/seo.ts`: canonical origin and indexable route inventory. The production domain is `https://www.oncetra.org`.
- `src/components/SEO.tsx`: canonical, indexing, Open Graph, Twitter, and Organization/WebSite/WebPage/BreadcrumbList/Article structured data. Page titles and descriptions live with their page components.
- `scripts/prerender.mjs`: static rendering and generated crawl assets. Generated robots.txt and sitemap.xml override the public copies in production. Dates are deliberately omitted rather than invented.
- `npm run check:seo`: checks built HTML for unique metadata, correct canonicals, one h1, structured data, image alt attributes, local assets, internal routes and anchor targets, and noindex on 404.
- `npm run typecheck`: TypeScript validation.

When adding a page, add its React route, page metadata, and entry in `src/seo.ts`. The build checks help catch missing route inventory entries.

Vercel uses clean URLs for the generated HTML and its native 404 behavior. Netlify uses the generated HTML and `public/_redirects` for a real 404 response. Other hosts must serve `/about` from `/about.html` (similarly for all public routes), normalize `.html` and trailing-slash variants to the canonical URL, and serve `404.html` with HTTP status 404 for unknown paths. Do not restore a catch-all 200 rewrite to index.html. Vite's development/preview fallback is not a production HTTP-status test.

## Launch verification

1. Confirm the canonical domain, configure HTTPS, and redirect alternate hostnames (including www) to it in the hosting dashboard. Keep preview deployments out of search using hosting-level access protection or an X-Robots-Tag noindex header.
2. Verify the deployed homepage, a nested resource page, robots.txt, sitemap.xml, social-preview.jpg, and a nonexistent URL. Valid pages must return 200 and unknown URLs 404. Check original page source for metadata and content.
3. Verify domain ownership in Google Search Console and Bing Webmaster Tools; submit `/sitemap.xml`. Ownership credentials are not stored in this repository.
4. Validate representative pages using Google's Rich Results Test and Schema Markup Validator. Structured data does not guarantee rich results or rankings.
5. Measure mobile Core Web Vitals with PageSpeed Insights and Search Console after deployment. Browser hydration/navigation and real-user performance need live verification.
6. Have qualified subject experts review the health resources, attach specific primary references to individual medical claims, and publish real author/reviewer details and genuine review dates. No credentials, review dates, product offers, or endorsements are invented by the SEO implementation.
7. Replace generic social platform links in the footer with verified Oncetra profile URLs when available. They are intentionally excluded from Organization sameAs structured data.

The changes do not submit forms, publish the site, register search accounts, or modify existing unrelated local work.
