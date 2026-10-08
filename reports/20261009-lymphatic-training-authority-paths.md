# Lymphatic training authority paths — 9 October 2026

## Scope

- Base: `f22d711540c403e769b88413e98c9755dd8b7129`
- Live crawl: 39 sitemap URLs on `www.drjeremysun.com`
- Cluster reviewed: lymphoedema/LVA training, surgeon selection and first-person Japan fellowship journey

## Observed gap

The priority procedure pages already had adequate contextual internal-link coverage. The first-person Japan training journey had only three contextual inbound sources: the blog index, the lymphoedema surgery guide and the LVA guide. Two highly relevant authority pages did not connect to that account, while the journey did not link back to the complete training record.

## Implemented

1. Added a descriptive link from `/training-and-fellowships` to `/journey-to-lymphedema-surgery-japan` within the existing Japan lymphatic-training entry.
2. Added the journey to the related-pages list on `/how-to-choose-lymphedema-surgeon-singapore`.
3. Added a reciprocal link from the journey FAQ to `/training-and-fellowships`.

This raises the journey's contextual inbound source count from three to five in the audited cluster. The batch adds no new clinical claims, metadata, structured data, tracking or URLs.

## Validation

- `git diff --check`: pass
- `npm run build`: pass; Next.js generated 44 routes
- Generated static HTML contains all three intended links and descriptive anchor text
- All linked routes are included in the successful static build

## Rollback

Revert the merge commit for this batch. No content migration or data rollback is required.

## Waiting checkpoints

- Google Business Profile: next eligible check 9 October 2026 at or after 06:54 SGT
- GSC and GA4: next eligible check 9 October 2026 at or after 09:08 SGT
- Crawl/index checks: next eligible 10 October 2026

## Next ready rotation

Inspect a distinct, unaudited procedure or patient-decision path. Do not repeat this link-graph audit unless new crawl evidence indicates a regression.
