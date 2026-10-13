# Facial-laceration patient pathways and Singapore sources — 14 October 2026

## Scope and duplicate prevention

Resumed from current main `d475986ec2e59a1db7dbca95b66af5949b902c07` after reading campaign issue #7 and the latest trauma, scar and child-laceration reports.

The adult `/facial-laceration-repair-singapore` guide already answers the principal patient questions found on current Singapore pages: urgent features, deeper-structure assessment, layered closure, wound-edge eversion, first aid, child cooperation, scar care, risks and limits. Rewriting those sections or creating another facial-wound page would duplicate useful existing coverage.

The 13 October child-laceration batch changed only the child guide's hero/social/structured-data image. The adult page correctly retains the established trauma image, so no image churn was warranted.

## Observed gap

The live adult page's generated related block listed lower-limb reconstruction, head-and-neck reconstruction and child facial lacerations. It omitted the broader acute trauma/laceration guide and the later scar-assessment pathway, while lower-limb reconstruction was not a useful default next step for this facial-wound context.

The page's child and scar-care sections also mentioned these distinct next decisions without linking to the dedicated guides. It had no direct Singapore public/professional source navigation despite already containing cautious emergency and limitation wording.

Sources inspected on 14 October 2026:

- Ministry of Health Singapore, cuts and open wounds: https://www.moh.gov.sg/seeking-healthcare/getting-medical-help/conditions/cuts-and-open-wounds/
- Singapore Association of Plastic Surgeons, facial trauma: https://www.saps.org.sg/facial-trauma
- SingHealth, facial trauma and facial fractures: https://www.singhealth.com.sg/symptoms-treatments/facial-trauma
- Doctor Stitch, lacerations: https://www.doctorstitchsg.com/lacerations-singapore
- Pearl Plastic Surgery, lacerations and stitching: https://www.pearlplasticsurgery.com.sg/lacerations-and-stitching/
- MH Plastic Surgery, facial trauma: https://www.mhplasticsurgery.com.sg/services/facial-trauma-facial-laceration-repair-singapore/

Competitor pages were used only to confirm patient questions and pathway coverage. No competitor wording, prices, timelines or outcome claims were copied.

## Implemented

- Replaced the unrelated fallback related-page ordering with trauma/laceration, child facial laceration, scar reconstruction and head-and-neck reconstruction.
- Linked the child section to the distinct parent-focused child guide.
- Linked scar care to the mature-scar assessment and revision guide.
- Added MOH first-aid/escalation guidance plus SAPS and SingHealth facial-trauma sources.
- Updated the article and sitemap modification date to 14 October 2026.

No new clinical statement, recommendation, timing promise, price, credential, outcome claim, testimonial, tracking, form, schema type or image was added. Existing clinical copy and the clinical-review date remain unchanged.

## Validation and safeguards

- Production build/TypeScript, lint and diff checks.
- Generated output checks for the four intended related cards, absence of the lower-limb card in that block, contextual targets, Singapore sources, one H1, self-canonical and FAQ/schema parity.
- Exact-head preview, current-main guard and expected-head merge before publication; ordinary production output checked afterward.

## Rollback and measurement

Revert this batch's related mapping, four conditional link paragraphs, article date and sitemap override. Publication improves source navigation and separates acute, child and later-scar pathways; it does not by itself prove ranking, enquiry or AI-citation uplift.

## Queue disposition

| URL / gap | Evidence and action | Status | Next step |
|---|---|---|---|
| `/facial-laceration-repair-singapore` clinical expansion | Existing page already covers principal questions | CLOSED — duplicate avoided | No speculative rewrite |
| Adult page related/pathway navigation | Live output and existing dedicated guides | IMPLEMENTED | Validate publication |
| Adult page hero image | 13 October child-image report confirms intentional distinction | CLOSED — no image churn | Retain current adult image |
| GBP profile propagation | Existing daily checkpoint | WAITING | 14 October at or after 08:11 SGT if access persists |
| Eyebag/profile crawl and index status | Existing 72-hour checkpoint | WAITING | 16 October at or after 09:00 SGT |
