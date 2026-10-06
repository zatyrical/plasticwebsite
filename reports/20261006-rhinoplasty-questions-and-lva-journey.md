# Rhinoplasty question audit and LVA journey — 6 October 2026

Base main: dd9c936208ffcbc82a5d26c8b7ef04d0d9ff62db. Branch: seo/rhinoplasty-question-map-20261006. PR34 was complete before this work began.

## Actual competitor-page review

Inspected on 6 October:
- https://www.femsurgery.com/revision-rhinoplasty-in-singapore-why-some-patients-need-a-second-nose-surgery
- https://www.drleoplasticsurgery.com/blog/do-you-need-a-revision-rhinoplasty
- https://www.therhinoplastyclinic.com.sg/services/reconstructive-revision-rhinoplasty/

Observed question patterns: previous procedures and records; cartilage availability; breathing versus appearance; timing of revision; donor-site recovery; expectations and recovery uncertainty. These pages are discovery evidence, not evidence of ranking causes or permission to copy medical claims. No competitor text, numeric outcomes or waiting intervals were reused.

| Question | Current own coverage | Disposition |
|---|---|---|
| Does every revision need rib cartilage? | Rib indications, alternatives and FAQ | Already answered; no new URL |
| Can rhinoplasty avoid an implant? | Asian materials comparison published PR28 | Already answered; no duplicate article |
| How do fillers or previous surgery affect planning? | Asian revision-fillers; rib risks and FAQ | Existing clinical text consolidated into focused rib revision section; four contextual anchors |
| What about breathing and appearance? | Asian assessment/goals/questions | Included as a consultation question; no new treatment claim |
| Will rib harvest leave a scar and require separate recovery? | Rib consultation/recovery/FAQ | Already answered; link to recovery at revision decision point |
| Exactly when can revision be considered? | General healing variability only | Clinician input needed; do not import competitor one-year/12–18-month rules |
| Exact time off work, glasses use or splint duration? | Individual instructions and gradual healing | Clinician input needed before publishing exact intervals |

Clinician interview draft for later input: How do you decide when a revision assessment or operation is appropriate, including exceptions? What prior-treatment details do you want patients to prepare? How do work demands, glasses, nasal healing and the donor site change your personalised recovery advice? No answers invented or outreach sent.

## Implemented website batch

Dr site: existing rib/Asian guides gain focused revision planning, four contextual links and consultation questions synthesized from current approved own text. No new page, medical review date or outcome claim. Corrected the PR34 report count from six to five anchors.

Lymphedasia: inspected live consultation page4698, recovery page4705 and candidacy page5074. They use post_content/Gutenberg, with empty Elementor edit mode. Read builder documentation; backed up all three raw bodies on this branch before mutation. Fresh modified timestamps matched before saving. Match-once supported content/edit saves removed five lines forming a duplicate FAQ section on recovery, including malformed old heading comments; the remaining three-question FAQ and matching schema were preserved. Added recovery links from candidacy and consultation, plus a consultation-to-candidacy link. The assessment-enquiry card on consultation page4698 pointed to its own page: corrected that loop to /contact/ after verifying its live form and current Paragon contact details. No clinical answers invented.

Live verification: consultation and candidacy contain recovery anchors; the consultation assessment-enquiry card leads to /contact/; recovery has one FAQ heading, no old duplicate question and FAQPage markup matching the visible retained answers. URLs:
- https://lymphedasia.com/private-lymphedema-consultation-singapore/
- https://lymphedasia.com/am-i-candidate-for-lva-surgery/
- https://lymphedasia.com/lva-surgery-recovery-singapore/

Validation: TypeScript, production build with 45 routes, diff check and rendered fragment targets passed. Public output verified after publication; CI and merge proof recorded in issue7. Rollback Dr site: revert PR squash commit. WP: restore affected snippets from reports/backups/20261006-journey-page{4698,4705,5074}.txt through supported content/edit, preserving later changes; full restore only if unchanged.

## Ranked next queue

| URL / cluster | Candidate gap and evidence | Approved source / next action | State / blocker |
|---|---|---|---|
| Lymphedasia ICG/ultrasound/candidacy | Consultation journey audited; next investigate actual imaging pages for missing decision paths | Existing own imaging articles; inspect before linking | READY next run |
| Eyebag guide | Next unaudited patient concern: limits of lower eyelid surgery versus hollowing/skin | User-approved transconjunctival and selected implant guidance; map actual existing answers/competitor questions first | READY investigation |
| Rib revision | Exact timing and practical recovery intervals absent | Draft clinician prompts above | WAITING for clinical input; no invented interval |

## Eligible waiting checks

Analytics: 7 October >=09:08 SGT. Crawl/index: 7 October. GBP: 6 October after23:54 SGT. Native AI fixed-prompt testing requires actual platform responses; unavailable in this run. No new rank, AI-citation or qualified-enquiry gain claimed.

Primary guidance checked 6 October: https://developers.google.com/search/docs/fundamentals/creating-helpful-content and https://developers.google.com/search/docs/appearance/ai-features . Original useful answers, accessible text and meaningful internal links; no special AI schema required or placement guaranteed.
