# Separate healthcare-provider verification route — 15 October 2026

Base main `03c6cd4da815b10d3a835953a1cc1e5b23a3fc75` (PR210 completed); branch `seo/local-provider-verification-20261015`; checkpoint6191647435. Fresh main and open-PR read found no overlap.

## Distinct observed gap
/plastic-surgeon-singapore#evaluate already gives the official professional specialist-register route (11October); it must not be duplicated. The checklist separately asks where surgery will take place, but offers no route for checking the healthcare service provider. Source and ordinary public200/oneH1 output confirmed PRS link present, HealthHub directory absent.

The overseas-surgery guide already distinguishes the surgeon's qualification from the facility licence. It addresses foreign facilities: adding a Singapore directory there as though it verified an overseas facility would be inappropriate. That guide remains unchanged.

## Primary evidence inspected15October
- MOH verification resources: https://www.moh.gov.sg/others/health-regulation/watchlist/ . Current page displays6October2026 update and explicitly identifies HealthHub Directory as the list of licensed Singapore healthcare service providers. No watchlist entry, absence from a watchlist or individual licence status is inferred.
- Followed actual MOH directory link: https://eservices.healthhub.sg/healthhubng/public/services/directory . It serves a JavaScript-required application; no provider search or result was inspected.
- MOH-contributed HealthHub explainer: https://www.healthhub.sg/highlights-and-insights/health-safety-advisory/protect-yourself-from-unlicensed-healthcare-services-and-professionals . Distinguishes professional registration from healthcare-service licensing and links the corresponding directories.
- Google descriptive crawlable-link guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable .

## Implemented
One extra list item immediately after the existing surgery-location/anaesthesia/follow-up question: check the healthcare service provider separately through the clearly named HealthHub licensed-provider directory, with visible “JavaScript required” notice.

Retain original PRS specialist link and every pre-existing paragraph,5FAQ answers, credential, biography, clinical-review date, title/description/social metadata, form and measurement code. Change only this genuinely modified page's schema dateModified and sitemap lastmod to15October. No individual provider licence, regulator endorsement, procedural authorisation or treatment suitability is asserted.

The elective-seo-playbook's verifiable-authority principle was applied to a distinct patient check, not another credential claim, ranking claim or duplicate procedure page.

## Validation and rollback
Clean rebuild from task-specific recoverable previous-.next backup:24 mocked tests,47 generated routes, TypeScript, credential audit68 files, LLM39 bullets/26 URLs,785 fragment links/41 pages, navigation42HTML, FAQ/date parity and git diff checks passed.
Targeted source comparison restores the entire original profile byte-for-byte after removing the single list item and reverting dateModified. Rendered output has direct HealthHub link, JS notice, retained PRS link, oneH1, dateModified15October and lastReviewed6September.
React checklist applied across both TSX components edited this session: static server-rendered anchors/conditional paragraph only; no new client boundary/hooks/effects/request waterfall/dependency, no forced new tab, no generic click-only control or hydration-sensitive state.
Exact-head preview/status and unchanged-base expected-head merge guards required; production/public proof recorded in issue7. No protected preview access. Rollback is an isolated PR revert after reconciling current main.

## Queue / dates
| Priority | URL / item | Evidence and source / next action | Status / eligible |
| --- | --- | --- | --- |
|1| /plastic-surgeon-singapore#evaluate | MOH directory route distinct from professional registration | Implemented; release proof in issue7 |
|2| /debulking-surgery/857 | Working fallback differs from malformed/stale builder source | HELD dual raw backup, full layout/content parity, controlled supported preview |
|3| Procedure protocols, legacy/pediatric medical claims and privacy | Original clinician/operator facts required | HELD; no invented answers |
|4| /consultation/ conditional asset trial | Supported reversible PHP deployment plus mobile/desktop fixtures missing | HELD; no repeated lab score |
|5| GSC/GA4 | Authorised access/export checkpoint |16October; final17October |
|6| Eyebag/profile crawl |72-hour cadence |16October>=09:00SGT |
|7| GBP3334046696687541456 | Accepted PROCESSING, no recreation |16October>=10:05SGT |
|8| Native fixed AI prompts | Actual platform responses unavailable | If accessible at comparison; search/referral not a native sample |

PR210 HSA resource is already live and retained. No WordPress, GBP, enquiry submission, analytics event or external outreach in this batch. These source/navigation publications establish no ranking, qualified-enquiry or AI-mention uplift.
