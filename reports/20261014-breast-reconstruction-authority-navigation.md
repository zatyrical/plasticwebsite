# Breast-reconstruction authority and decision navigation

Date: 14 October 2026  
Page: https://www.drjeremysun.com/breast-reconstruction-singapore

## Prior work reconciled

The 7 October authority-markup batch added the visible and machine-readable treatment hierarchy, MedicalWebPage graph, maintained physician entity and reviewer path. The 9 October navigation batch added working contents links and sticky-header clearance for the existing recovery and risk sections. The 10 October FAQ-parity batch consolidated the visible and structured FAQs. These completed changes were retained and not repeated.

## Current-page disposition

The existing guide already covers when reconstruction may be considered; immediate, delayed and staged timing; implant, DIEP, other flap and oncoplastic options; multidisciplinary planning; consultation; recovery; risks; six FAQs; a lymphoedema pathway and an enquiry form. Further clinical expansion would duplicate answered questions or require fresh clinician review.

The remaining useful gap was independently checkable Singapore authority navigation. The page had no direct path to the current Singapore Association of Plastic Surgeons (SAPS) patient pages on immediate versus delayed reconstruction, reconstruction types or microsurgery. Its oncoplastic section also discussed selected fat grafting without linking to the site's maintained fat-grafting assessment guide.

## Implemented

- Added the SAPS immediate-and-delayed breast reconstruction page beside the existing timing explanation.
- Added the SAPS reconstruction-types and microsurgery pages beside the existing options explanation.
- Linked the existing fat-grafting phrase to the maintained fat-grafting guide.
- Aligned visible/schema and sitemap modification dates to the actual 14 October publication.

No clinical statement, recommendation, timing promise, price, outcome claim, credential, testimonial, image, form, tracking event, schema type, canonical or URL changed.

## Evidence checked

- SAPS breast reconstruction — immediate and delayed options: https://www.saps.org.sg/breast-reconstruction-options
- SAPS breast reconstruction — types of reconstruction: https://www.saps.org.sg/breast-reconstruction-types
- SAPS microsurgery: https://www.saps.org.sg/microsurgery

These sources provide patient information and an independently checkable local professional-society path. They do not establish suitability or outcomes for an individual patient and do not guarantee ranking or AI citation.

## Validation

- `npm run lint`
- `npm run build`
- `npm run audit:faq-parity`
- `npm run audit:sitemap-date-parity`
- `npm run audit:internal-fragments`
- generated HTML: one H1, self-canonical, six visible/schema FAQ pairs, three SAPS paths, fat-grafting route and enquiry form
- exact-head preview, guarded merge and public-output checks recorded in campaign issue #7 after publication

## Rollback

Revert the isolated publication PR. This removes only the three authority links, the contextual fat-grafting link, the 14 October modification-date alignment and this report.
