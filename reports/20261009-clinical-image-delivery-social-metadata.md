# Clinical image delivery and social metadata — 9 October 2026

## Observed evidence

A generated-output audit found three clinically relevant routes with accurate page-specific Open Graph titles/descriptions but root-inherited Twitter titles and the generic homepage portrait:

- `/asian-eyelid-surgery-singapore`
- `/lymphovenous-bypass-lva-surgery-singapore`
- `/journey-to-lymphedema-surgery-japan`

All three already contained a genuine, subject-matched image. Two additional delivery faults were confirmed from the source assets:

- the Asian eyelid image is 1024×1024, while the page declared 720×860 intrinsic dimensions;
- the LVA intraoperative image used a raw `<img>` without declared dimensions or Next.js image optimisation.

Routes without a genuine relevant image were excluded. No generic placeholder was assigned.

## Implemented

1. Added complete page-specific Open Graph and Twitter image metadata to the three routes, with verified source dimensions and accessible alt text.
2. Corrected the Asian eyelid image declaration to the asset's true 1024×1024 dimensions.
3. Converted the LVA clinical image to `next/image`, preserving the existing image and alt text while adding 759×1280 dimensions and responsive sizing.

No visible copy, clinical statement, credential, URL, canonical, schema, form, tracking event or image asset changed.

## Validation

- `git diff --check`
- TypeScript via `npm run lint`
- Next.js production build via `npm run build`
- generated HTML inspection for self-canonicals, route-specific Open Graph/Twitter tags and correct image dimensions
- production deployment and live verification after merge

## Rollback

Revert the metadata additions and the two image-component dimension changes in the three route files. The prior image files and patient-facing copy remain unchanged.

## Measurement note

This improves representative previews, responsive image delivery and layout stability. It does not by itself establish ranking, AI-citation, traffic or enquiry uplift.
