# Overseas clinic-selection framing and procedure-fragment audit
Date: 9 October 2026. Main inspected: 07903e9b280cbecca6f2e10eb696092f8bae03ee.
Draft branch parent: 9b985d3f6bb076a002a4feca06670ce97589f87b. PR100 remains unpublished.

## Observed gap and implemented draft change
Dr Sun clarified that the intended audience is people searching for overseas clinics before booking. The prior draft H1 said only “safety questions”, its cost discussion followed the incident and follow-up sections, and the opening did not provide a usable clinic-shortlist comparison.

Updated the visible H1 to name Korea, Thailand, Vietnam and China; the opening names Shanghai within China. Added a concise comparison table covering surgeon/facility, total cost, anaesthesia, follow-up and consent/complaint process, all drawn from existing draft advice. Reordered the same sourced sections and made headings direct clinic-selection questions. Added implementation-only title/description, contextual discovery links and a page-specific Singapore measurement plan. No new country safety ranking, clinic recommendation, country-specific price or medical claim added in this framing batch.

Search demand remains unmeasured. New “plastic surgery clinic + destination” variants are editorial seeds. Connected own-site GSC does not measure the full Singapore market.

## Independent concrete technical investigation
Inspected current app/procedureArticles.ts, app/ProcedureArticle.tsx and app/ProcedureQuickLinks.tsx. Checked all seven explicit cross-page fragment links in the shared procedure renderer:
| URL fragment | Result |
|---|---|
| /face-neck-lift-singapore#neck-lift-decision | Exact section exists |
| /face-neck-lift-singapore#assessment | Exact section exists |
| /face-neck-lift-singapore#anatomy | Exact section exists |
| /asian-rhinoplasty-singapore#revision-fillers | Exact section exists |
| /rib-rhinoplasty-singapore#revision-planning | Exact section exists |
| /rib-rhinoplasty-singapore#alternatives | Exact section exists |
| /asian-rhinoplasty-singapore#materials | Exact section exists |

Also compared all single-slug conditional section branches with the corresponding procedure-section IDs: zero mismatches. Generic shortcuts derive from actual sections and the enquiry anchor is present. No change justified; candidate closed with source evidence. This is static source verification, not a claim of live search rank.

## Ranked queue
| Rank / URL | Observed gap / approved source | Action | Status | Blocker | Next eligible |
|---|---|---|---|---|---|
| 1 / proposed overseas guide | Clinic-selection framing requested by Dr Sun; existing sourced draft | H1, opening, shortlist table, cost-first question headings and publication/measurement specification | Implemented in draft | Existing clinical and legal section review before publication | On review |
| 2 / priority procedure fragment paths above | Seven explicit fragment targets checked in current source | Repair only if a target is missing | Closed: all present | None | Reopen only on concrete regression |
| 3 / approved overseas guide discovery paths | New guide is not yet public | Hub/sitemap/relevant contextual links, ordinary live verification and settled Singapore GSC check | Waiting | Guide review/publication | After publication |
| 4 / overseas keyword priority | Legitimate Singapore market volume unavailable | Use authorised Keyword Planner Singapore export if available | Waiting for data; optional prioritisation | Market-volume access | When available |
| 5 / other ready investigation | Existing clinical/provenance items remain held in latest issue7 | Rotate next to independent technical/accessibility discovery or supported existing content | Ready for discovery | None for read-only audit | Next batch |

## Validation / rollback
Documentation-only PR100. Source citations, clinical paragraphs and legal caveats retained; numbered headings checked in order; seven-fragment audit closed without edits. Expected-head guard required. No app/runtime, WordPress, GBP, tracking or enquiry change. Roll back only this draft commit if needed; do not delete prior draft work or reset concurrent changes.
Waiting checkpoints unchanged: GBP10Oct>=07:06SGT, settledGSC/GA4>=09:08SGT, eyebag/profile crawl10Oct.
