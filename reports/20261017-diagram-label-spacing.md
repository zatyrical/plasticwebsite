# Diagram label spacing — 17 October 2026

## Observed fault and scope

Base main: `bd06cef911f7fb21bf3150e9d2fdb5a32d513f6f`; no open PRs at the starting check. This follows PR233's contrast repair; no contrast edit is repeated.

Public Chrome inspection at a 1363 × 936 viewport confirmed:

- `/images/face-neck-lift-scar-planning-zones.svg`: the Hairline and Around-ear callouts overlapped numbered markers. Hairline subtitle rendered x118–277.34 while marker1 occupied x228–276; around-ear subtitle started x502 while marker2 occupied x476–524.
- `/images/rhinoplasty/asian-rhinoplasty-assessment-map.svg`: footer text rendered x159.73–1040.27, outside the dark pill x165–1035, leaving white characters over a pale background.
- `/images/body-contouring/tummy-tuck-assessment-layers.svg`: long right-card explanations exceeded their card edges; all four needed consistent wrapping.

The connected extension was unavailable in this context. A public cloud Chrome browser supplied visual evidence; no authenticated session, protected preview, enquiry submission or event simulation was used. Diagnostic visits are not evidence of patient traffic.

## Implementation

- Move the two scar callouts into clear panel space and reconnect their existing markers with elbow leader lines. Anatomy, marker positions and explanatory right cards stay unchanged.
- Widen the rhinoplasty footer pill to x95–1105, retaining the existing single line and font size.
- Give the tummy-tuck cards 8 extra vertical units and split their existing explanations into two explicit `tspan` lines, clear of badges and inside the cards. No smaller type or condensed glyphs.

All visible wording, titles, descriptions, caveats and colours are preserved exactly. Page content, image alt text, tracking and clinical statements are untouched. W3C SVG2 text guidance informed explicit positions and `tspan` line layout: https://www.w3.org/TR/SVG2/text.html (read 17 October 2026). The elective SEO playbook informed the choice to repair an observed readability fault, not create decorative assets or infer ranking benefits.

## Validation and publication

- Exact normalized text/title/description sequence compared against base for all three SVGs; identical.
- Sharp/librsvg raster review at 800 and 1200 pixels; this is supplementary renderer coverage, not a substitute for browser proof.
- Full build, mock regression suite and existing source/accessibility/link audits; lint, FAQ parity and sitemap date parity.
- Publication details and post-release Chrome containment checks will be recorded in issue7 after the guarded merge. Ordinary protected previews are not bypassed.

## Rollback

Restore these three SVG files from the base commit through a reviewed isolated PR. No database or WordPress mutation occurred.

## Ranked queue

| Priority | URL / task | Status and next action | Source / blocker | Next eligible |
| --- | --- | --- | --- | --- |
| 1 | Three SVGs above | READY: validate, publish, inspect live text containment | Existing approved wording only | This batch |
| 2 | Lymphedasia quote queue: posts4283,4288,4256,4277,4233 | WAITING: fresh raw source, backup, guarded removal of unsupported attributed quote only | Quote provenance review issue6226355341; preserve surrounding approved content; reserve recovery capacity | 17 Oct10:00 SGT capacity check |
| 3 | Both sites final baseline assessment | WAITING: distinguish missing measurements from success; consolidate documented changes and limits | GSC/GA4 payment_required; no purchase authorised; next ordinary retry18Oct00:06 or known restoration/export | Final17Oct assessment; no early data retry |
| 4 | GBP pending factual propagation | WAITING: verify only with actual access | Existing posts/services already live; no recreation | 17 Oct10:07:20 SGT |
| 5 | New clinical claims / case anecdotes | HELD: clinician wording/provenance required | No invented outcomes, recovery timelines, personal practice policies or study numbers | On clinician evidence |

No ranking, qualified-enquiry, native AI mention or WCAG-wide claim is made by this layout repair. Fixed native AI responses remain unavailable; referral sessions are not citations.
