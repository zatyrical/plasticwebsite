# Ultrasound and lower-eyelid decision paths — 6 October 2026

Base main: 91dc21f0f55f3ce21b8e75ac0d5974ad211c8be5. Branch: seo/ultrasound-eyebag-paths-20261006.

## Discovery evidence and disposition

The user-supplied ElectiveSEO method was applied as question discovery, not as proof of demand or rankings. Actual Singapore pages inspected:
- https://www.saps.org.sg/lower-eyelid-surgery
- https://www.colinthamplasticsurgery.sg/services/lower-eyelid-eyebag-surgery/
- https://www.healthxchange.sg/health-articles/how-to-manage/aesthetic/aesthetic-surgery-eye-bags-removal
- https://www.mhplasticsurgery.com.sg/services/eyebag-removal-surgery-fat-redistribution/

Observed recurring decisions: whether the concern is protruding fat, a groove/hollow or loose skin; whether an internal or external approach is being considered; fat removal versus repositioning; recovery, risks and next steps. Competitor claims were not reused as clinical evidence.

| Candidate question | Existing own coverage | Disposition |
|---|---|---|
| Is the concern a bag, hollow or loose skin? | Bag and hollow already differentiated; loose skin mentioned but not visible in the decision table | Added one loose-skin row using existing approved wording |
| Does transconjunctival access remove loose skin? | Existing guide says it treats through the inner lid and the incision itself does not remove excess skin | Reused in the decision table; no new claim |
| Is this the same as upper/double-eyelid surgery? | Existing opening answers no; related guide existed only in the general related-card block | Added a contextual link at consultation |
| What if lower-eyelid concerns sit within broader facial ageing concerns? | Face/neck guide already separates eyelid, volume and lifting decisions | Added a contextual link with an explicit no-combination disclaimer |
| Exact recovery interval or procedure selection | Requires individual plan | Existing variability wording retained; no competitor timelines imported |
| Dark circles/pigmentation or skin-treatment claims | Not covered by approved clinician content | Clinician-input candidate only; not published |

## Implemented batch

### Lymphedasia

Post 4786 is Gutenberg, not Elementor. A pre-edit raw backup is in reports/backups/20261006-lymphedasia-ultrasound-post4786.txt. The article already had strong ICG/LVA content, so no duplicate medical section was added.

The targeted match-once repair:
- corrected two heading/paragraph nesting errors, a malformed list close and an invalid post-content close;
- retained the existing clinically reviewed text;
- added direct links to the existing LVA recovery and private consultation pages;
- renamed the resource heading to “Related reading and next steps”.

Overall block delimiters now balance 52/52. WPVibe accepted the follow-up surgical edit without block-validation errors. Public output confirms the new heading and both links:
- https://lymphedasia.com/ultrasound-mapping-lva-surgery-singapore/
- https://lymphedasia.com/lva-surgery-recovery-singapore/
- https://lymphedasia.com/private-lymphedema-consultation-singapore/

Rollback: restore the changed block from the backup with supported match-once content editing, preserving later changes; use a full restore only if the post is unchanged.

### Dr Jeremy Sun site

The lower-eyelid guide now:
- adds “Loose lower-eyelid skin” to the existing concern/assessment/decision table;
- links the consultation section to the Asian eyelid surgery guide and the face/neck anatomy guide;
- states that reading related guides does not imply combined procedures.

No new URL, medical outcome, price, recovery interval or unapproved clinical assertion was created.

Validation: Next.js production build passed TypeScript and all 45 routes. Static HTML/RSC contains the new decision-table row and both intended links, including the valid #anatomy fragment. Vercel PR status and live deployment remain to be verified before merge.

## Ranked next queue

| URL / cluster | Observed gap | Approved source / action | State |
|---|---|---|---|
| Lymphedasia ultrasound article | Missing recovery/assessment next steps and malformed blocks | Existing own journey pages; repaired in this batch | COMPLETE |
| Dr lower-blepharoplasty guide | Loose-skin decision was dispersed rather than explicit; contextual related links were weak | Existing approved transconjunctival wording; implemented | PR / deployment validation |
| Lower-eyelid dark-circle and pigment limits | Competitors address this, but own approved answer is absent | Ask clinician which concerns surgery does not address and how assessment distinguishes them | WAITING clinician input; does not block other work |
| Body contouring / tummy tuck | Rotate to the next priority cluster and inspect actual patient-choice gaps rather than revisiting eyelids | Existing approved pages plus actual competitor questions | READY next run |
| Lymphedasia conservative-care to surgical reassessment | Existing pathway mentions 3–6 months; inspect whether the decision path is navigable from core care pages | Existing own clinical review and live pages | READY investigation |

Waiting: GBP after 6 October 23:54 SGT; crawl/index 7 October; analytics after 7 October 09:08 SGT. No rank, AI-citation or qualified-enquiry gain is claimed from publication alone.

Primary guidance checked: https://developers.google.com/search/docs/fundamentals/creating-helpful-content and https://developers.google.com/search/docs/appearance/ai-features — useful accessible text and meaningful internal links; no special AI schema or placement guarantee.
