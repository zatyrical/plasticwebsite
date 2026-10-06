# Breast aesthetic hub decision-path correction — 7 October 2026

## Evidence and observed gap

- Base commit: `b6be52c867e8c289df755fb046f49eedabdd2612`.
- Live audit: `https://www.drjeremysun.com/breast-aesthetic-surgery-singapore`.
- The hub's existing Related pages block linked to lower blepharoplasty, body contouring, tummy tuck and mommy makeover. Three closer decision resources already existed but were absent: the main breast-augmentation guide, the rapid-recovery guide and the breast-implant-illness evidence guide.
- This was a navigation and decision-path mismatch, not a reason to create another page.

## Implemented

In `app/ProcedureArticle.tsx`:

1. Replaced the generic related-page set for the breast aesthetic hub with:
   - `/breast-augmentation-singapore`
   - `/24-hour-rapid-recovery-breast-augmentation-singapore`
   - `/breast-implant-illness-singapore-evidence`
   - `/mommy-makeover-singapore`
2. Added contextual links at the relevant existing sections:
   - augmentation → implant sizing, placement, screening, cost and follow-up guide;
   - rapid-recovery augmentation → selection, early movement, activity limits and no-guarantee guide;
   - implants → evidence-based implant-illness guide for patients concerned about systemic symptoms.
3. Added no new clinical claim, outcome promise, price, credential or metadata change.

This applies the patient-question and competitor-gap method by connecting existing approved answers at the point where a patient is deciding, rather than producing a thin keyword page.

## Validation

- `npm run build`: passed with Next.js 16.3.4, TypeScript checks and all 45 routes generated.
- `git diff --check b6be52c867e8c289df755fb046f49eedabdd2612...HEAD`: passed.
- Rendered HTML: all three new contextual anchors present; Related pages resolves to the intended four breast-path resources; canonical remains `https://www.drjeremysun.com/breast-aesthetic-surgery-singapore`.

## Rollback

Revert the pull request merge commit. The change is isolated to the breast hub mapping and contextual-link blocks in `app/ProcedureArticle.tsx`.

## Measurement boundary and next queue

- Search/analytics measurement remains waiting until the settled checkpoint after 7 October 2026 09:08 SGT.
- Potential Lymphedasia overlap between the older and newer oedema/lymphoedema comparison URLs was recorded for query/page evidence at that checkpoint; no consolidation or redirect was made from title similarity alone.
- Next independent discovery target: Lymphedasia assessment-to-recovery navigation, unless current main shows it already resolved.
