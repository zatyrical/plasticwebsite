# Lower-eyelid card image accuracy — 7 October 2026

## Evidence and observed gap

- Base commit: `d7d5916976770da36719b8881b67223e4808f5fe`.
- The public homepage signature-treatment card and `/aesthetic-surgery` treatment card for “Eyebag removal / lower blepharoplasty” used `/images/aesthetic-ai/eyelid-surgery.jpg`.
- The same asset is correctly used for the separate upper-eyelid / double-eyelid card and visibly shows upper-eyelid surgical markings. Reusing it for the lower-eyelid card blurred two distinct patient decisions and made the lower-eyelid alternative text less accurate.
- The repository already contains the approved educational asset `/images/orbital-fat-repositioning-surface-landmarks.webp`, which labels the eye bag, tear-trough groove, lid-cheek junction and direction of orbital-fat repositioning. No new image or clinical statement was required.

## Implemented

In `app/treatmentTiles.ts`, changed both lower-eyelid card instances to the existing orbital-fat / tear-trough educational illustration and gave them accurate descriptive alternative text. The upper-eyelid card and image were left unchanged.

This is a visual-relevance and accessibility correction. It does not assert suitability, outcome or a required technique for every patient.

## Independent candidate closed

The live rapid-recovery breast-augmentation guide was also inspected as a fresh priority-page candidate. It already has a distinct educational hero, an answer-first explanation, suitability and limitation sections, external evidence links, a direct enquiry path, and related cards for the breast-augmentation, implant-evidence, breast-aesthetic and surgeon-selection resources. No additional content or link was justified in this run.

## Validation

- `npm run build`: passed with Next.js 16.3.4, TypeScript checks and all 45 routes generated.
- `git diff --check`: passed.
- Rendered homepage and `/aesthetic-surgery` HTML both contain the new lower-eyelid asset and accurate alternative text.
- The source asset already exists in the repository and is also used on the dedicated lower-blepharoplasty guide.

## Rollback

Revert the pull-request merge commit to restore the prior tile image and alternative text. No WordPress, tracking, schema, URL or clinical-content mutation is included.

## Next checkpoint

- Settled GSC/GA4 measurement remains waiting until 7 October 2026 at or after 09:08 SGT.
- The older/newer Lymphedasia oedema comparison URLs remain queued for query-by-page evidence before any consolidation decision.
