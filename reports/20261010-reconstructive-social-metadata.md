# Reconstructive and recovery social metadata — 10 October 2026

## Observed gap

A current-main production build showed seven pages with accurate page-specific Open Graph titles and descriptions but root-inherited Twitter metadata. Shared links therefore used the homepage title, general description and Dr Sun portrait instead of the subject of the page.

Affected routes:

- `/breast-reconstruction-singapore`
- `/compression-foam-lymphatic-massage-after-liposuction`
- `/gender-affirming-chest-reconstruction-singapore`
- `/head-neck-reconstruction-singapore`
- `/lower-limb-reconstruction-singapore`
- `/scar-reconstruction-singapore`
- `/trauma-lacerations-singapore`

Each route already had a relevant, licensed or first-party repository image: six 900×900 reconstructive treatment images and the existing 802×1280 postoperative compression/foam photograph. No new or decorative asset was introduced.

## Implemented

- Added page-specific Open Graph image metadata to the six reconstructive routes.
- Added matching page-specific Twitter title, description and image metadata to all seven routes.
- Used existing page wording and image descriptions; no clinical claim, page heading, URL, canonical, schema, form or tracking changed.
- Added truthful 10 October sitemap modification dates for the affected routes.

## Validation

- `git diff --check`
- TypeScript via `npm run lint`
- Next.js production build (45 routes)
- Generated HTML checks for self-canonical URLs, route-specific Open Graph and Twitter titles/descriptions/images, exact image dimensions, one H1 and no `noindex`
- Preview, guarded merge, exact production deployment and ordinary live HTML/image verification are required before completion.

## Scope and measurement

This corrects link-preview identity and associates existing educational imagery with the correct pages. It is not a ranking or AI-citation claim. Routes without a genuine subject-matched image remain unchanged rather than receiving a generic placeholder.

## Rollback

Revert the metadata additions and corresponding `latestModifiedPaths` entries. Existing visible copy and image files remain unchanged.
