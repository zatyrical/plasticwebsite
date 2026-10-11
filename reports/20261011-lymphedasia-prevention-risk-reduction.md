# LymphedAsia prevention-guide risk-reduction repair — 11 October 2026

## Outcome

Published an evidence-aligned correction on:

- Live URL: https://lymphedasia.com/how-to-prevent-lymphedema/
- WordPress post: 3517
- Source field: `post_content`
- Saved at: `2026-10-11T06:01:23` UTC / 14:01:23 SGT
- Pre-edit rollback: `reports/backups/20261011-lymphedasia-prevention-post3517.json`

The guide now explains that not every case of lymphedema can be prevented. It focuses on risk reduction, gradual return to activity, individual compression decisions, early recognition and appropriate assessment rather than promising prevention through self-care.

## Evidence reviewed

- US National Cancer Institute, *Lymphedema (PDQ), Health Professional Version*: higher BMI, lymph-node dissection, nodal radiation and infection are recognised risk factors; early concerns that exercise causes harm have not been confirmed; supervised progressive resistance exercise can be safe; prevention trials combining exercise and compression have mixed results; MLD trials do not show a consistent volume benefit across studies.
  - https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema/lymphedema-hp-pdq
- American Cancer Society / ASCO-reviewed exercise guidance, revised 1 July 2026: postoperative movement should follow the treating team's clearance, activity should be rebuilt gradually and new heaviness, tightness or swelling should prompt review.
  - https://www.cancer.org/cancer/types/breast-cancer/treatment/surgery-for-breast-cancer/exercises-after-breast-cancer-surgery.html
- Memorial Sloan Kettering patient guidance was inspected as a current comparison page. Its centre-specific claims and numerical risks were not imported.
  - https://www.mskcc.org/cancer-conditions/breast-cancer/treatment/surgery/lymphedema-after-breast-cancer-treatment

## Published corrections

- Reframed prevention as risk reduction plus early recognition; explicitly states that self-care cannot guarantee prevention.
- Replaced blanket avoidance of heavy lifting and strenuous activity with gradual, care-team-guided return to range-of-motion, aerobic and resistance activity.
- Clarified that compression is not automatically indicated for everyone merely at risk and should be selected after assessment.
- Recast BMI as an association rather than a deterministic mechanism and removed implication that diet guarantees lower risk.
- Added a clearer route for new symptoms, including differential assessment and a contextual consultation link.
- Qualified MLD as one possible element of complete decongestive therapy, not an essential treatment or cure for every patient.
- Removed unsubstantiated low-sodium, antioxidant and hydration treatment claims.
- Limited compression claims to established lymphedema and added fit/safety review cues.
- Added infection red flags and replaced the generic Wikipedia exit with maintained local guidance.
- Added contextual paths to the breast cancer-related lymphedema, consultation and core overview pages.
- Preserved the title, slug, August 2026 review date, metadata, author, featured-image state and enquiry/tracking behaviour.

## Supported save path

Authenticated WordPress REST showed the article in Gutenberg `post_content`. Six match-once `/wpvibe/v1/content/edit` calls were used; every call returned `status: edited` and `replaced: 1`. No Elementor layout data, raw SQL or full-field overwrite was used.

## Validation

- Fresh authenticated source remains published; modified `2026-10-11T06:01:23`; 13,053 bytes.
- Gutenberg integrity: 38 opening block markers and 38 closing block markers.
- All seven representative new evidence/triage phrases are present in authenticated source and fresh public Elementor post-content.
- Removed phrases are absent: blanket heavy-lifting avoidance, “significantly” reducing swelling with MLD, MLD as essential, the low-sodium/antioxidant prescription, and the Wikipedia link.
- Fresh public Elementor post-content contains the three intended contextual links.
- No form or test enquiry was submitted.

## Rollback

Prefer the immediately preceding WordPress revision. If a full restore is required, first reconcile post 3517 for intervening edits, then restore the exact `content.raw` value from the backup through the supported WordPress post update path. Reverting this report-only Git change does not roll back WordPress.

## Measurement and next gates

This is an accuracy, safety and patient-utility repair. It is not evidence of a ranking, enquiry, referral or AI-citation change. Search Console and GA4 measurement remain blocked by the documented GSC Wizard entitlement error; do not retry hourly.

- Overseas-care crawl: 12 October 2026 at or after 19:00 SGT.
- Lower-eyelid guide and primary surgeon-profile crawl: 13 October 2026 at or after 09:00 SGT.
