# Hub and lymphatic social-preview metadata — 10 October 2026

## Observed gap

Generated production HTML showed five subject-specific routes with page-specific Open Graph titles and descriptions but inherited homepage X/Twitter titles and the generic portrait image. Their Open Graph metadata also had no image. The routes were:

- `/aesthetic-surgery`
- `/reconstructive-surgery`
- `/lymphedema-surgery-singapore`
- `/how-to-choose-lymphedema-surgeon-singapore`
- `/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026`

## Change

- Added matching page-specific X/Twitter titles, descriptions and images.
- Added subject-relevant Open Graph images with exact dimensions and descriptive alt text.
- Reused existing on-site assets already assigned to the relevant aesthetic, reconstructive or lymphatic topic; no new image, clinical statement or credential was introduced.
- Updated sitemap modification dates only for the changed routes.

## Required validation

- `git diff --check`
- lint
- production build
- generated HTML checks for self-canonical, page-specific Open Graph and X/Twitter metadata, image dimensions, one H1 and no `noindex`
- exact-head Vercel preview before merge
- production deployment and public live-output verification after merge

## Limits

This corrects link-preview identification and image relevance. It does not demonstrate a search-ranking, traffic, enquiry or AI-mention improvement.
