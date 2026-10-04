# SEO checkpoint — body contouring and abdominoplasty decision support

Date: 4 October 2026, Singapore

## Search evidence and page comparison

The latest settled Singapore Search Console comparison predates the October sprint publications. For 23–29 September, `body contouring singapore` recorded 49 impressions at average position 25.55; `tummy tuck singapore` recorded 56 impressions at 44.52; and `abdominoplasty singapore` recorded 68 impressions at 40.51. These are small, pre-change samples and do not establish current live rank.

Current Singapore pages inspected:

- SW1 Plastic Surgery — abdominoplasty
- The Aesthetic & Plastic Surgery Clinic — liposuction, abdominoplasty and body contouring
- Dr Terence Goh — body contouring
- The Plastic Surgery Practice — abdominoplasty
- Dr Jeremy Sun — body contouring / liposuction and tummy tuck / abdominoplasty

Competitor pages commonly use concise comparison tables or procedure-detail panels. Dr Sun's two guides already cover the broader decision pathway: fat versus loose skin versus abdominal-wall separation, suitability, alternatives, cost drivers, scars, recovery, risks, clinician review and enquiry routes. Adding another overlapping article or copying competitors' prescriptive recovery timelines was not justified.

## Implemented change

Added accessible, mobile-scrollable decision tables to the existing primary pages:

- Body contouring / liposuction: maps the main assessment finding to liposuction, abdominoplasty or skin excision, selected non-surgical treatment, or weight stabilisation / medical weight management / no procedure.
- Tummy tuck / abdominoplasty: compares liposuction, mini, full and extended tummy-tuck planning.

Every row restates information already present in the clinically reviewed guides. No new recovery duration, device claim, price, outcome promise or unsupported medical fact was introduced. Metadata, URLs and canonicals were not changed.

## Validation and measurement

- Production build and TypeScript completed successfully for 45 routes.
- Static rendered HTML contains semantic tables with captions and column/row headers on both target pages.
- Responsive styling preserves the full table through horizontal scrolling on narrow screens.
- Expected mechanism: faster patient comparison and clearer extractable text for search/AI systems. This is not a ranking guarantee.

Measure only after post-publication data settles: relevant query impressions/average position, organic landings, consultation-path actions and genuine successful enquiries. Do not interpret current pre-publication data as uplift.

Rollback: revert the associated pull request.
