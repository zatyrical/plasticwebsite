# Treatment-hub responsive image delivery — 7 October 2026

## Scope and observed evidence

This checkpoint inspected the two treatment-listing hubs after closing the already-completed body-contouring/tummy-tuck decision-content candidate.

| URL | Live evidence before change | Disposition |
|---|---|---|
| `/aesthetic-surgery` | 12 treatment-tile images were lazy-loaded, but none had a `sizes` hint. The generated markup offered fixed-density 750px and 1920px candidates even though the four-column desktop cards render at about 272px. | Add a responsive `sizes` value matching the actual two-column mobile and four-column desktop layout. |
| `/reconstructive-surgery` | All eight treatment-tile images had `loading="eager"`, although the tile grid begins below the hero content. | Remove forced eager loading and retain responsive `sizes`, allowing the default lazy-loading behaviour. |

The source assets total roughly 1.5 MB across the aesthetic list and 0.6 MB across the reconstructive list before Next.js optimisation. This is not a claim about bytes transferred to every visitor; the browser, viewport, device pixel ratio, cache and negotiated output format affect the actual response.

## Technical basis

[Next.js Image documentation](https://nextjs.org/docs/app/api-reference/components/image) states that:

- `sizes` lets the browser choose an appropriate candidate from the generated `srcset`;
- when responsive CSS is used and `sizes` is absent, the browser can assume a viewport-wide image and download a larger candidate than needed;
- preloading/eager treatment is intended for the Largest Contentful Paint or above-the-fold image.

The hub hero areas contain no treatment image. Their tile grids begin in the following section, so forcing every reconstructive tile to load eagerly was not justified.

## Implemented change

- Added `sizes="(max-width: 900px) calc(50vw - 27px), 272px"` to both tile grids. This matches the CSS layout: two columns with 22px container padding and a 10px gap on mobile; four columns inside a 1,180px container with 22px side padding and 16px gaps on desktop.
- Removed `loading="eager"` from reconstructive treatment tiles. Next.js therefore emits lazy loading for those below-fold images.
- Updated sitemap `lastmod` only for `/aesthetic-surgery` and `/reconstructive-surgery` to `2026-10-07`.
- Did not alter image files, alternative text, visible procedure copy, forms, tracking, structured medical claims, canonicals or URLs.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed; 44 generated routes completed.
- Rendered HTML assertions: all 12 aesthetic and eight reconstructive tile images carry the exact responsive `sizes` value; all 20 are lazy-loaded; neither page contains an eager treatment-tile image.
- Rendered sitemap assertions: both changed URLs carry `lastmod` `2026-10-07`.
- `git diff --check`: passed.
- Vercel preview, expected-head merge and public-domain verification remain publication gates.

This repair should reduce unnecessary early image work and improve responsive candidate selection. It does not establish a field Core Web Vitals improvement, ranking gain or enquiry increase; those require later real-user and analytics evidence.

## Rollback

Revert the PR. The prior single-line image elements and previous sitemap dates can be restored without affecting content or routes.

## Queue

- READY: inspect a new, unaudited clinical-authority or patient-journey cohort; do not repeat the body/tummy decision-content or current image-delivery audits.
- WAITING analytics: after 8 October 2026, 09:08 SGT.
- WAITING GBP moderation/public propagation: after 7 October 2026, 23:54 SGT, only if authenticated access is available.
