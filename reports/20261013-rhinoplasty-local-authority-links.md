# Rhinoplasty local authority links — 13 October 2026

## Candidate disposition

The proposed bridge-versus-tip planning visual is **CLOSED — no new visual or clinical copy**. The current Asian-rhinoplasty page already separates bridge height, tip projection and nostril shape in its opening, assessment text, consultation map, materials table, questions and FAQs. Current Singapore pages reviewed on 13 October use the same bridge–tip–nostril decision frame, so a third diagram would repeat rather than clarify the patient decision.

## Observed authority gap

The Asian-rhinoplasty and rib-rhinoplasty guides linked to current ASPS safety and recovery information but not to Singapore professional or hospital patient information. Current public pages from the Singapore Association of Plastic Surgeons and SingHealth cover rhinoplasty assessment, bridge/tip/nostril concerns, graft or implant options, airway considerations, recovery and risks.

Verified sources:

- https://www.saps.org.sg/rhinoplasty
- https://www.singhealth.com.sg/symptoms-treatments/nose-rhinoplasty
- https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/safety
- https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/recovery

## Implemented

- Added the SAPS and SingHealth pages to the existing further-patient-information block on both rhinoplasty guides.
- Retained the ASPS risks and recovery links.
- Removed the redundant ASPS suitability link from that block to keep the source list concise.
- Advanced the two guide review/schema dates and matching sitemap dates to 13 October 2026 because visible source navigation changed.
- Did not change clinical claims, risks, recovery timings, metadata titles/descriptions, pricing, forms, tracking or URLs.

## Validation and rollback

- TypeScript check: pass.
- Production build: pass, 45 routes.
- Credential terminology audit: pass, 66 files.
- LLM source audit: pass, 39 bullets / 26 site URLs / no duplicate or missing routes.
- Internal-fragment audit: pass, 763 links across 39 static pages.
- Navigation accessibility audit: pass, 40 HTML files.
- FAQ parity: pass for both guides (10 Asian-rhinoplasty questions; 6 rib-rhinoplasty questions).
- Sitemap/schema date parity: pass for both guides at 13 October 2026.
- Built HTML: both pages contain the SAPS and SingHealth URLs and `dateModified` 2026-10-13.
- Live deployment verification remains required after merge.

Rollback: revert the isolated merge commit for this batch. The prior external-link block can be restored from the parent commit.

## Measurement boundary

This is a local authority and patient-navigation improvement. It is not evidence of ranking uplift, enquiries or an AI citation.
