# Lymphedasia successful-enquiry confirmation indexability

Date: 12 October 2026  
Target: `https://lymphedasia.com/contact-thank-you/` (WordPress page 5120)

| Observed evidence | Specific change | Expected mechanism | Metric | Status |
|---|---|---|---|---|
| HTTP 200 confirmation page; previous rendered robots `index, follow`; self-canonical; previously present in `page-sitemap.xml`; no independent search intent | Set the page to `noindex, follow` through Rank Math's supported per-post metadata route; keep it crawlable and preserve the successful-form redirect | Prevent a utility confirmation URL from competing in search or occupying sitemap/index coverage while retaining the user journey | Rendered robots directive; sitemap membership; page availability | Implemented and live-verified |

Google's current documentation says a `noindex` page must remain crawlable so the directive can be seen, and sitemaps should list the canonical URLs intended for search discovery:

- https://developers.google.com/search/docs/crawling-indexing/block-indexing
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

The exact pre-edit source and metadata are stored in `reports/backups/20261012-lymphedasia-contact-thank-you-page-5120.md`.

## Implementation and verification

- Active SEO plugin was verified as Rank Math SEO 1.0.268 plus Rank Math SEO PRO 3.0.67.
- The site's WordPress Abilities API exposed only two read-only core abilities and no Rank Math write ability.
- The isolated change therefore used Rank Math's own supported `/rankmath/v1/updateMeta` route with `objectType: post`, `objectID: 5120` and `rank_math_robots: ["noindex"]`.
- Supported WP-CLI read-back returned exactly `["noindex"]` for `rank_math_robots`.
- The live page remained HTTP 200 and rendered `<meta name="robots" content="follow, noindex"/>`.
- The live title, description, URL, publication/modified dates and visible confirmation content remained unchanged.
- Rank Math's sitemap cache was purged once after the metadata write.
- The refreshed `page-sitemap.xml` retained the homepage and `/contact/` but no longer contained `/contact-thank-you/`.

The result is intentionally `noindex` rather than a robots.txt block, so crawlers can still fetch the page and observe the directive.

## Safeguards

- no robots.txt block;
- no content, title, slug, status or canonical change;
- no form or redirect change;
- no analytics change;
- verify the public HTML and sitemap after the supported write;
- rollback by deleting the new per-page Rank Math robots override.
