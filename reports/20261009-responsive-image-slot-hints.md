# Responsive image slot hints — 9 October 2026

## Scope and reason

Base: `34401114dc8c838fbfafceb5cb90a46c4f216958` (current `main` at 01:01 SGT).

A source audit found that every remaining `next/image` component without a `sizes` hint was rendered inside a CSS-responsive slot. Next.js documents that `sizes` tells the browser which candidate to select from `srcset`, and that responsive images without it can download unnecessarily large files. This batch adds only layout-derived slot hints; it does not change page copy, clinical claims, image crops, or image assets.

Reference: [Next.js Image component — `sizes`](https://nextjs.org/docs/app/api-reference/components/image#sizes)

## Implemented

- Navigation logo: 40px mobile / 46px desktop slot.
- Homepage training strip: 33vw mobile; 250–320px desktop slots.
- Homepage media cards: full-width mobile / 367px desktop slots.
- Training and fellowships mentor collage: content width mobile / 180px desktop slot.
- Media archive cards: content width mobile / 776px desktop slot.
- Japan lymphatic-training figures: content width mobile / 776px desktop slot.

## Evidence

Production-build HTML before this change exposed oversized fixed-density choices, including:

- homepage training image: 1080px / 1920px candidates for a maximum 320px desktop slot;
- mentor image: 640px / 1920px candidates for a 180px desktop slot;
- media image: 1200px / 3840px candidates for a maximum 776px content slot.

After this change, each affected image emits an explicit `sizes` attribute and a width-descriptor `srcset`. At 2× desktop density, the browser can select approximately 640px for the 320px training slot, 384px for the 180px mentor slot, 750px for the 367px homepage media slot, and 1920px for the 776px media/article slot instead of the previous larger fixed candidates.

## Validation

- `git diff --check`: pass.
- Static audit: 0 remaining `Image` components without a `sizes` property.
- `npm run build`: pass; 44 routes generated and TypeScript passed.
- Built HTML inspection: explicit slot hints appear on `/`, `/training-and-fellowships`, `/media`, and `/journey-to-lymphedema-surgery-japan`.

## Rollback

Revert the merge commit for this batch. No content, image files, analytics, or external platform settings are changed.

## Next queue

- Keep GSC/GA4 and GBP checks on their recorded daily cadence; do not infer ranking impact from this technical delivery change.
- Rotate next discovery to a priority procedure page or Lymphedasia patient journey rather than repeating image metadata work.
