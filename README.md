# Oncetra

React + Vite website. Run `npm install`, then `npm run dev` for development.

## Form configuration

Contact enquiries, partnership enquiries, newsletter subscriptions, and volunteer applications in email-only mode use Web3Forms. `.env.production` includes the existing public form access key so production builds work from a clean Git checkout without the ignored local `.env` file. Web3Forms access keys are public email-routing identifiers; see the [Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq).

To change the destination, set `VITE_WEB3FORMS_ACCESS_KEY` in the hosting environment before building, then redeploy. Vite embeds the key at build time, so changing a hosting variable alone does not update an existing deployment. Local development can use `.env` or `.env.local`.

### Volunteer application tracking

The volunteer form can save applications in Neon Postgres through the existing Vercel project. The endpoint uses BotID Basic and saves each application ID once, including when the browser retries. Staff sign in at `/staff/volunteers` to filter by role or availability, assign reviewers, and track decisions from review through confirmation. The tracker has separate queues for new applications, shortlisted applicants, and invitations awaiting a response.

#### Setup

1. Connect an Oncetra-owned Neon database with Managed Better Auth enabled to the Vercel Preview environment. Use the Preview branch for synthetic tests. Set the pooled database connection on Vercel as `DATABASE_URL` (or `POSTGRES_URL`). Run `node scripts/migrate-volunteers.mjs` once with the direct Preview connection supplied as `DATABASE_URL_UNPOOLED` (or `POSTGRES_URL_NON_POOLING`). Keep both connection strings server-side.
2. Set `NEON_AUTH_BASE_URL` on Vercel and `VITE_NEON_AUTH_URL` to the same branch's public Neon Auth URL. Add the preview website origin to Neon Auth's trusted domains. Provision staff email/password accounts in Neon Auth, then set the corresponding user IDs in the server-only `VOLUNTEER_STAFF_IDS` variable as a comma-separated list. Staff APIs require both a valid session token and an approved user ID.
3. Set `VITE_VOLUNTEER_TRACKER_ENABLED=true` for Preview. Submit a fictional application and retry with the same application ID to verify one saved record. Sign in with an approved account, exercise the review queues and decision updates, and confirm an unapproved user cannot read the tracker. Check that a test contact enquiry still routes through Web3Forms and creates zero application rows.

For the live release, connect a separate Production database and run the migration there. Add `https://www.oncetra.org` under Neon Auth's trusted domains and configure `VOLUNTEER_STAFF_IDS` with the live reviewer IDs. Verify staff sign-in before enabling `VITE_VOLUNTEER_TRACKER_ENABLED` on the live site. Deploy from the project root on Vercel so the deployment includes both the site and the `api` functions.

When the flag is off, volunteer applications use email routing through Web3Forms. When the flag is on, the browser sends a Web3Forms backup in the background after Neon confirms the application. The staff page uses the copy in Neon. `VITE_VOLUNTEER_WEB3FORMS_ACCESS_KEY` can override the shared Web3Forms key for both volunteer modes.

Run `node --test tests/form-config.test.mjs tests/volunteer-backend.test.mjs` to check the form routing, submission handler, and staff API.

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
