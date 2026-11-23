# SEO Audit: shayanmovers.ae (on-page + technical)

Date: 2026-11-23. Scope: the local Next.js 16 codebase, 15 routes. Evidence: two read-only code surveys, then local `next build`, `next start` and `curl` checks of every route. No live-site crawl, Search Console, analytics or log data was available, so nothing here measures rankings, indexation or traffic. No blended SEO score is given.

## Lanes run
| Lane | Result |
|---|---|
| Technical (rendering, robots, canonical, 404, headers) | Run. Fixed. |
| Structured data | Run. Fixed. |
| Page/content (titles, descriptions, headings, typos, claims) | Run. Fixed, except business decisions below. |
| Architecture / internal links | Run. Fixed. |
| Sitemap | Run. Fixed. |
| Images | Run. Fixed. |
| Local (NAP) | Run. Address, phone and hours made consistent. |
| AEO/GEO (FAQ quality, entity consistency) | Run. Entity fixed; FAQ content issues reported only. |
| Skipped | Performance (no Search Console/analytics), hreflang (one language), commerce, news/Discover, video, authority/backlinks, programmatic, competitor pages, AI-visibility monitoring. |

## Results
Nine errors (build, rendering, crawl or correctness defects) were found and fixed, listed below. The warnings that remain all need a business decision (see "Report only"). The counts are of the grouped findings in this document, not a score.

Verification: `tsc --noEmit` clean; `eslint` 0 errors (17 warnings, all pre-existing patterns: decorative `<img>`, unused imports); `next build` succeeds and **all 19 routes are static (○)**; every page returns 200 with exactly one H1, valid JSON-LD in the server HTML, absolute canonical, `og:locale`, `twitter:title`; unknown URLs return a real 404 with `noindex`.

## Errors fixed
1. **Whole site was server-rendered per request.** `PageBreadcrumbs` called `headers()` through `middleware.ts`. Now a client component using `usePathname()`; middleware removed. All routes prerender statically.
2. **Build breaker.** Non-page exports (`choiceList`, `servicesList`) in three `page.tsx` files failed Next's route-type validation. Made local constants.
3. **JSON-LD injected with `<Script strategy="beforeInteractive">`** on 11 pages (not reliably in server HTML). Replaced with plain `<script>` via the new `components/JsonLd.tsx` (escapes `<`).
4. **Localhost canonical risk.** `.env` has `APP_URL=http://localhost:3000`; breadcrumbs had no fallback. `App.ts` now falls back to `https://shayanmovers.ae` in production if the value is empty or localhost.
5. **No default metadata / `metadataBase`.** Added in `app/layout.tsx`, plus explicit viewport and theme colour; removed `notranslate`; `lang="en-AE"`.
6. **No site-wide business entity.** Added `MovingCompany` + `WebSite` graph (`lib/schema.ts`) with the Sharjah address, phone, email, logo, served cities and 24/7 hours (all already on the site). Service schemas on the villa and affordable pages now reference its `@id`. No `aggregateRating`.
7. **No custom 404 / error pages.** Added `app/not-found.tsx` (noindex, service links), `app/error.tsx`, `app/global-error.tsx`.
8. **Placeholder links.** Removed ~25 `href="#"` / `href="/"` placeholders: Footer About/Privacy/Terms/Sitemap now real; social links with no URLs removed; unfinished service entries no longer rendered (kept in `lib/navLinks.ts`, hidden until given a real href); service cards link to a real page or to `#contact-section`; relative link `movers-in-al-ain` fixed; the Dubai location card no longer links home.
9. **Wrong-city links.** Abu Dhabi, Ajman, RAK and Sharjah cards no longer send visitors to Dubai pages.

## Warnings fixed
- Metadata: "Shyan" typo (Ajman), titles/descriptions over length or with trailing spaces (Ajman, Office, House Furniture Abu Dhabi, House Dubai), RAK "0% Damage" title, RAK OG alt saying "al ain", About OG image was an SVG (now JPG), villa page OG/sitemap image now `villa-movers-in-dubai.jpg`, Twitter title/description/images and `og:locale` added.
- Copy: contact-page typos, "What Our Customers Says", "Bu Shaghara", stray " ." in an H1, footer phone format, privacy policy now says Google Tag Manager may set cookies (it said no tracking).
- Claims: "20+ years" used everywhere (removed "Founded in 2018" and "over 15 years"); "guaranteed", "zero-damage guarantee", "AED 1,000 protection", "licensed by Abu Dhabi Municipality / Dubai authorities" replaced with "covered by insurance for damage or loss, ask us for the details".
- Headings: Footer column headings no longer skip heading levels; the House page's second H1 became an H2.
- Sitemap: removed ignored `priority`/`changeFrequency`, fixed images, dated entries 2026-11-23; `robots.ts` cleaned.
- Accessibility: `tel:` links no longer open a new tab; button `aria-label`s no longer override visible text; menu button has a label and `aria-expanded`; dropdown works on keyboard focus; WhatsApp button contrast raised; decorative images use `alt=""`; CTA image has a real description.
- Performance: hero images use `preload` and `sizes`; `ServiceCard` and CTA have `sizes`; AVIF/WebP enabled; Inter loads as one variable font; `GTM` is a server component inside `<body>` with a `<noscript>` fallback; `poweredByHeader` off; security headers added.
- Assets: deleted unused `Gemini_Generated_Image_*.png` (1.9 MB) and `shayanmovers-logo.png`; `cta-image.png` 273 KB → `cta-image.webp` 55 KB; two JPGs recompressed (157→125 KB, 135→88 KB).
- New: visible breadcrumb trail (same data as BreadcrumbList), `manifest`, `llms.txt`.

## Report only (needs your decision, not changed)
- **Prices conflict across pages** (3-bedroom, studio, villa ranges differ between the home FAQ, `MovingCost`, house, Abu Dhabi and villa pages).
- **Keyword overlap:** house / villa / affordable (Dubai), and `/movers-and-packers-abu-dhabi` vs `/house-furniture-movers-abu-dhabi`. Differentiate intent or consolidate.
- **FAQ content (`lib/lists.jsx`):** the home FAQ has off-topic questions (Arabic, cost of living, tipping); a Dubai furniture-cost question appears in the Abu Dhabi and Office FAQs; the "cheapest way to move" question is duplicated.
- **"857 Google reviews"** is hard-coded in three places with no source link; review dates in the carousel are static text.
- **"Licensed & Insured"** is still used as a card title on the Ajman, Al Ain and Office pages. Keep only if you can show a licence and policy.
- **Schema gaps:** no `sameAs` (social/Google Business Profile URLs not provided) and no geo coordinates.
- **Repeated headings and review names** across ~10 pages ("What Our Customers Say", "Our 3-Step Moving Process", the same 10 review cards).
- **Logo:** `shayan-movers-logo.svg` is 169 KB because it wraps an embedded PNG; replace with a true vector.
- **Unused imports** (6 lint warnings) and an unused `Placeholder` helper plus redundant `faqsForDisplay` in the villa page (placeholders were removed from the page).
- **Hosting:** confirm `APP_URL` is set to `https://shayanmovers.ae` in production (now guarded, but set it anyway), and handle www/non-www redirects at the host.

## Limits and unverified
- The visible breadcrumb is absolutely positioned under the fixed header; I confirmed it renders in the HTML but did not check it visually in a browser on desktop and mobile.
- Markdown discovery: `llms.txt` was added, but no per-page Markdown versions exist. Full coverage was not attempted and would need a decision on source of truth.
- Nothing is committed.

## Files changed
Created: `components/JsonLd.tsx`, `lib/schema.ts`, `lib/navLinks.ts`, `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`, `app/manifest.ts`, `public/llms.txt`, `public/cta-image.webp`, `public/villa-movers-in-dubai.jpg`, `SEO-AUDIT.md`.
Deleted: `middleware.ts`, `public/Gemini_Generated_Image_in9w2hin9w2hin9w.png`, `public/cta-image.png`, `public/shayanmovers-logo.png`.
Edited: `App.ts`, `next.config.ts`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.tsx`, `lib/{MetaDataTemplate.ts,breadcumbs.ts,lists.jsx}`, `components/{Breadcrumbs,GTM,Navbar,Footer,Services,WhereWeWork,ServiceCard,CTA,Process,GoogleReviewCard,HeroSection,ContactSection,ActionButtons}.tsx`, `components/ui/button.tsx`, and every page under `app/` (JSON-LD helper, metadata, links, copy, images).
