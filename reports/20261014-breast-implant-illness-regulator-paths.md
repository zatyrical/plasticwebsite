# Breast implant illness symptom-to-assessment and regulator-path audit — 14 October 2026

## Question tested

Does the existing breast-implant-illness guide clearly route systemic and breast-local symptoms to appropriate assessment, and does it give patients direct access to current implant-safety sources?

## Evidence and disposition

The current guide already answers the main patient decision comprehensively:

- it acknowledges reported systemic symptoms without assuming causation;
- it explains that other medical causes should be assessed;
- it links directly to the current FDA systemic-symptom reporting page and the cited 2025 systematic review;
- it avoids promising that explantation or a particular capsulectomy technique will resolve symptoms;
- it separates systemic concerns from breast-specific findings and explains whether a plastic surgeon or another practitioner may be the appropriate first assessment.

No new symptom list, diagnostic algorithm, explantation claim, FAQ, page or visual was warranted. A proposed BII-versus-BIA-ALCL clinical explanation was not added because it would be material new medical copy requiring clinician review.

## Distinct gap implemented

The existing pre-augmentation and breast-local warning-sign sections did not link to the most relevant official patient sources. Added navigation only:

- FDA: Things to Consider Before Getting Breast Implants — `https://www.fda.gov/medical-devices/breast-implants/things-consider-getting-breast-implants`
- Singapore Health Sciences Authority: Risk of Breast Implant Associated-Anaplastic Large Cell Lymphoma — `https://www.hsa.gov.sg/announcements/risk-of-breast-implant-associated-anaplastic-large-cell-lymphoma--bia-alcl-/`

The HSA page was live when checked on 14 October 2026 and had a site footer update date of 9 October 2026. Its underlying advisory is dated 10 May 2019, so it is presented as Singapore regulator guidance rather than a newly issued 2026 advisory.

The page's machine-readable `dateModified` and sitemap `lastModified` were advanced together to 14 October 2026. The clinical `lastReviewed` date remains unchanged because no clinical paragraph was revised.

## Scope boundary

No new medical claim, symptom, risk estimate, recommendation, outcome promise, price, credential, title, description, canonical, form, tracking event, FAQ or structured-data type was added. No competitor text was copied.

## Validation and rollback

- Run TypeScript, the production build, FAQ parity and sitemap/schema-date parity.
- Verify generated HTML contains both new source URLs, `dateModified: 2026-10-14` and the unchanged clinical-review date.
- After merge, verify the public page and sitemap from fresh responses.
- Rollback: revert the isolated pull-request merge commit.

## Measurement boundary

Publication establishes a clearer official-source path, not ranking, AI-citation or enquiry uplift. Continue outcome measurement only with settled query/page, organic landing-page and genuine successful-enquiry data.
