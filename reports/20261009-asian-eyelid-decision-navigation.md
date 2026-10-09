# Asian-eyelid decision navigation — 9 October 2026

## Evidence and disposition

Reconciled issue #7 and main `371ebc9f0cc49917dada5518a4a71a9f0145d1c7`. PR112 was complete; no overlapping checkpoint remained.

Inspected the existing Asian-eyelid page, lower-blepharoplasty guide and current Singapore Association of Plastic Surgeons pages:

- https://www.saps.org.sg/asian-blepharoplasty
- https://www.saps.org.sg/upper-eyelid-surgery
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable

The published upper-eyelid guide already answers crease planning, incisional/suture selection, ptosis, recovery, risks and revision limitations. Its related-card set already contains lower blepharoplasty, face/neck lift, lasers/injectables and fat grafting. **Closed:** no new article, medical rewrite or related-card reorder.

Observed navigation gaps: the contents list omitted existing suitability, revision and risks sections; the lower-eyelid guide was linked only at the end; heading-based fragment targets did not receive the existing section-based sticky-header clearance.

## Implemented

- Added contents entries and unique heading IDs for suitability, revision and risks.
- Added one contextual link at consultation to the existing lower-blepharoplasty consultation section, preserving the separate upper/lower decision and avoiding any implication that procedures must be combined. Source: existing upper-eyelid scope and approved lower-eyelid guide/reciprocal link.
- Added 100px scroll clearance scoped to this page's anchored headings.
- Updated only this route's sitemap modification date to 9 October. Clinical review date, canonical, metadata, schema and tracking stay intact.

## Validation and publication safeguards

- `npm run build`: passed, including TypeScript, 45 routes.
- `git diff --check`: passed.
- Generated HTML: one H1, self-canonical; all same-page fragments resolve; three new heading IDs occur once; the cross-page consultation ID exists and the contextual link occurs once.
- Exact-head preview READY, current-main guard, expected-head squash merge, production READY and ordinary live HTML verification required before completion. Publication proof belongs in issue #7.

## Next queue

| URL / candidate | Evidence and source | Action | Status / blocker | Next eligible |
|---|---|---|---|---|
| `/asian-eyelid-surgery-singapore` existing answer coverage | Existing approved copy and SAPS comparison | Do not repeat answered questions or reorder suitable related cards | CLOSED | Only new evidence |
| Upper-eyelid reversibility / age / pain FAQs | SAPS discusses these; own guide has no original approved answer | Prepare focused clinician prompts before any new clinical answer | HELD: clinician evidence | When supplied |
| `/lasers-injectables-singapore` related patient paths | Shared template fallback, no dedicated navigation review located | Inspect actual output and existing face/neck, thread and fat decision paths; publish only relevant routes | READY discovery | Next independent inspection |
| FTM / gender-affirming chest overlap | Prior built audit shows anatomical link mismatch and overlapping intent | Review query/page evidence before consolidation or redirects | WAITING: settled GSC | 10 Oct >=09:08 SGT |
| GBP, GSC/GA4, crawl and final outcomes | Existing issue #7 checkpoint | Respect intervals; do not infer gains from edits | WAITING | GBP 10 Oct >=07:06; analytics >=09:08; eyebag/profile 10 Oct; overseas guide >=12 Oct 19:00; outcomes 16/final17 Oct |

Clinician prompts for the held candidate: which crease changes can reasonably be revised versus reversed, what limits remain after tissue removal, and what age/consent or pain expectations should this practice explain? These are editorial questions, not established search-demand measurements.

## Review-reply reconciliation

Windsor confirmed the three authorised owner replies (Eric Lim, Jjeeaann, Ailin P) as published on 9 October at 22:48 SGT. Existing replies were preserved. No treatment details were disclosed. This confirms connector publication, not independent public propagation or GBP performance uplift.

## Rollback and measurement

Revert this batch's route, scoped CSS and sitemap changes (or its PR). Existing section wording and lower-eyelid destination remain available. No ranking, enquiry or AI-citation change is inferred from these navigation improvements.
