# Remaining legacy patient paths — 18 October 2026

## Published repair

Two additional live404 paths now permanently resolve to maintained, intent-matched resources. These are separate from PR240's already completed comparison/praecox repairs.

| Source | Destination | New rule |
| --- | --- | --- |
| /lymphedema-in-infants/ | https://lymphedasia.com/pediatric-lymphedema-symptoms-children/ |49|
| /about/ | https://lymphedasia.com/dr-jeremy-sun-lymphedema-specialist/ |50|

Ordinary public checks verified slash and slashless variants: one301 directly to the exact200 destination, oneH1, expected self-canonical, noHTMLnoindex and noX-Robots-Tag indexing block. No extra redirect chain or invented fragment.

All48pre-existing redirect configurations, including PR240's47/48, are unchanged. Only new49/50 were created. No article text, clinical review date, tracking, contact detail, theme, plugin, robots, sitemap or existing canonical was edited.

## Evidence and intent

Latest issue7 completion6247562360 and the current PR240 report were read before work. Fresh mainc5602b091d4242e8d689e0322f11c83a85f00cc4, clean worktree and no open overlapping PR were confirmed. In-progress checkpoint: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6247589999 . Isolated branch: seo/remaining-legacy-patient-paths-20261018.

The previously captured GA4 error-title report included5views of the infant path and4views of About over20September–17October2026. These are historical alltraffic events, not9confirmed patients, organic visits, broken external links or recovered enquiries. The analytics comparison was not repeated in this batch.

A search cache retains the old infant page as Understanding Lymphedema in Infants: Early Diagnosis & Care. Current live source404 takes precedence over its cached body/status. The maintained paediatric guide explicitly includes babies/infants alongside causes, diagnostic assessment, management and follow-up. Its wider clinical/triage claims remain separate clinician-review candidates; redirecting does not certify the whole article as newly clinically reviewed.

The cached About page describes the educational resource's mission, audience and support/education role. The maintained specialist profile contains an explicit About Lymphedema Asia and Dr Jeremy Sun Q&A explaining the resource, its audience, the clinician and the education-versus-assessment distinction. It is therefore a specific identity destination, not a generic home-page fallback or an invented organisational affiliation. The full profile destination was used because no suitable existing sectionID was found.

Source posts/pages queries for all4candidate slugs with status any returned empty arrays. Complete Redirection read returned48rules, none matching the4sources. A second fresh configuration guard before the first write confirmed the same48configurations, excluding operational counters.

## Recovery safeguards and validation

- Complete BEFORE rules, source/target evidence, exact create requests and rollback plan archived remotely in2621a6896bcb1cfc583f3c55cbbd4abde4b4a314 before writes.
- Supported Redirection REST create endpoint returned49for infants and50for About. Non-regex, enabled301 URL rules, group1, positions48/49.
- Fresh authenticated AFTER read returned50rules. Every prior rule's configuration was preserved; hit and last-access counters alone excluded from equality.
- Complete AFTER plus4live variant checks archived remotely inaf1418fe1f8de80608d0050c2507b94f3f699e99.
- Normal production build passed, including mocked contact/analytics/navigation tests, TypeScript, terminology/accessibility/source and generated-output guards. No real enquiry, provider email or synthetic analytics event was sent.
- Repository application, public assets, scripts, dependency and lock files remain unchanged; this PR archives WordPress evidence. Exact preview/merge/production receipt is recorded in issue7. No protected preview fetch/share/bypass.

Files: reports/backups/20261018-remaining-legacy-paths-before-and-plan.json and reports/backups/20261018-remaining-legacy-paths-after.json.

Rollback: reconcile current state and any newer changes, then POST /redirection/v1/bulk/redirect/disable with {"items":[49,50],"global":false}. Verify live. Disable only these2new rules; do not replace the entire configuration or disable PR240's47/48. A Git revert alone does not undo WordPress.

The elective-seo-playbook guided existing-resource mapping, preserving clinical source boundaries and distinguishing operational repair from measured outcomes. Current primary technical sources checked18October:
- https://developers.google.com/search/docs/crawling-indexing/301-redirects
- https://redirection.me/developer/rest-api/

## Concrete dispositions and ranked queue

| Rank | URL / observed gap | Maintained or approved source | Action / owner | Status / blocker / next eligible |
| --- | --- | --- | --- | --- |
|1|/lymphedema-in-infants/ and /about/ returned404|Existing paediatric infant section and profile's organisation Q&A|Agent creates supported guarded301s and validates|COMPLETE18Oct; no duplicate creation or new clinical wording.|
|2|/lymphoscintigraphy-for-lymphedema/ remains404|Diagnosis-report guide has a scan subsection; original dedicated page and complete equivalent not established|Agent qualifies exact old intent/adequate destination; clinician supplies genuinely new scan guidance if needed|HELD mapping; do not redirect to ICG or a generic diagnosis article solely for a shared word. Revisit when new source/equivalence evidence is available.|
|3|/lymphedema-society/ remains404|No original society identity or equivalent established by the two search engines/current published-source checks|Agent obtains original organisation/resource evidence before any map|HELD mapping; no invented association, affiliation or homepage redirect. Revisit only with new evidence.|
|4|Lymphedasia direct GSC Singapore query/page comparison not completed in the latest daily checkpoint|Actual authenticated Search Console|Agent completes the unread property component with matched dates/filters when session exists|READY independent measurement; do not repeat completed DrSun/tummy or GA4acquisition/landing checks.|
|5|Rib/Asian/revision rhinoplasty or breast decision questions: rotate next substantive discovery|Existing approved procedure material and actual current competitor questions|Agent inspects a specific unaudited decision/authority/navigation gap before proposing a change|READY next session; no metadata churn, thin synonyms or new outcome claims.|
|6|GA4 source/medium and event-definition detail still unread; acquisition/landing totals completed18Oct|Direct authenticated reports, existing accepted-enquiry definitions|Agent completes only unread components; do not count the historical one event again|READY detail if session persists; repeat acquisition/landing no earlier19Oct16:20SGT.|
|7|Tummy-tuck index request already confirmed once18Oct15:00SGT|Issue6246880078; cause of drop unresolved|Observe on cadence; no blind restore/copy rewrite/resubmission|WAITING performance>=19Oct15:01; routine crawl>=21Oct15:01 absent new concrete fault.|
|8|Prevention/compression and paediatric clinical statements, fixed-prompt native AI mentions|Original clinician evidence and actual platform response required|Hold new medical protocols/first-person stories and unverified citation claims|WAITING respective source/approval/access; independent website work continues.|

No fresh ranking recovery, qualified enquiry gain or AI mention is asserted. No new outreach, GBP publication, quota reset, paid subscription or authentication bypass was attempted.
