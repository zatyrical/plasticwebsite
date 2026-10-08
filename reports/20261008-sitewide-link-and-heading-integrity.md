# Sitewide internal-link and heading integrity — 8 October 2026

## Scope

Fresh public checks were run after reading the current sprint ledger and main branch.

- Dr Jeremy Sun: all 39 sitemap URLs, with HTML integrity and internal destination/fragment checks.
- LymphedAsia: all 31 published page-sitemap URLs, followed by a narrowed internal-link check.
- Non-HTML files and WordPress shortlink metadata were separated from genuine page/anchor defects.

## Dr Jeremy Sun disposition

The body-contouring and abdominoplasty internal-link hypothesis is closed rather than expanded:

- all 38 HTML sitemap pages returned 200 with one H1, self-canonical output and no noindex or JSON-LD parse fault;
- `llms.txt` returned 200 and was correctly excluded from HTML heading/canonical expectations;
- 58 unique same-domain destinations/fragments produced no broken link, redirect hop or missing fragment;
- excluding each target page's own document, body contouring is exposed from 10 other rendered pages, tummy tuck from 9, mommy makeover from 8 and the liposuction-recovery guide from 3;
- the priority pages already contain reciprocal decision links and related-resource cards.

Adding more body/tummy links was not justified. Current low average positions should not be treated as proof of an internal-link defect.

## LymphedAsia findings

The page-sitemap audit found:

1. `/contact-thank-you/` rendered two H1s. Astra printed the page title while the Gutenberg HTML block also contained `<h1>Thank you.</h1>`.
2. `/primary-prevention/` linked to retired `/surgical-lymphovenous-shunts/`, adding a redirect before the maintained LVA page.
3. `/educational-resources/` linked to retired `/dr-jeremy-sun/`, adding a redirect before the maintained specialist profile.
4. The remaining page URLs had no observed canonical, noindex or JSON-LD parse error.
5. The many `?p={id}` redirects surfaced by the first pass are WordPress shortlink metadata, not user-facing anchors. They were deliberately left unchanged.

## Implemented WordPress repair

Supported builder-aware edits were used:

- Post 5120, Gutenberg HTML block: changed only the inner heading tag from H1 to H2. Text, inline visual styling, page title, URL, canonical and enquiry-message wording were preserved.
- Page 599, Elementor JSON: replaced the unique slug `surgical-lymphovenous-shunts` with `lva-surgery-singapore`.
- Page 443, Elementor JSON: replaced the unique slug `dr-jeremy-sun/` with `dr-jeremy-sun-lymphedema-specialist/`.

Each match was confirmed unique before editing. Rank Math sitemap cache, Elementor CSS cache and object cache were purged.

## Live verification

All five checked URLs returned HTTP 200, `index`, self-canonical output and one H1:

- `/contact-thank-you/`: one H1 plus the preserved visible “Thank you.” H2.
- `/primary-prevention/`: canonical LVA link present; retired surgical-shunts link absent.
- `/educational-resources/`: canonical specialist-profile link present; retired profile link absent.
- `/lva-surgery-singapore/`: destination remains indexable and self-canonical.
- `/dr-jeremy-sun-lymphedema-specialist/`: destination remains indexable and self-canonical.

No form was submitted. No clinical statement, metadata, author, schema claim, form logic or destination content changed.

## Rollback

- Post 5120: change the single inner `<h2>Thank you.</h2>` tag back to H1, or restore the automatically created prior WordPress revision.
- Page 599 Elementor meta: reverse `lva-surgery-singapore` to `surgical-lymphovenous-shunts` only at the recorded unique link.
- Page 443 Elementor meta: reverse `dr-jeremy-sun-lymphedema-specialist/` to `dr-jeremy-sun/` only at the recorded unique link.
- Purge the same caches after rollback.

## Limits

This removes duplicate heading hierarchy and two internal redirect hops. It does not establish a ranking, crawl-frequency, conversion or AI-citation change. The full 187-post LymphedAsia sitemap was not crawled in this pass after the broad crawl exceeded the bounded runtime; the check was narrowed to all 31 published pages so it could complete safely.
