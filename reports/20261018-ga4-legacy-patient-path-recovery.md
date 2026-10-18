# GA4-discovered legacy patient-path recovery — 18 October 2026

## Published change

Two confirmed 404 URLs on Lymphedasia now permanently redirect to maintained, intent-matched guides. No article body, medical advice, clinical review date, tracking code, contact detail or existing redirect was changed.

| Old path | Maintained destination | New rule |
| --- | --- | --- |
| /difference-between-lymphedema-and-lipedema/ | https://lymphedasia.com/lipedema-vs-lymphedema-singapore/ | 47 |
| /lymphedema-precox-vs-tarda/ | https://lymphedasia.com/hereditary-lymphedema-milroy-disease/ | 48 |

Both slash and slashless variants return one HTTP301 directly to the expected HTTP200 destination. Each target has one H1, the expected self-canonical and no HTML noindex. These are ordinary public HTTP checks, not a Google crawl or indexing guarantee.

## Discovery and limits

Direct authenticated GA4 property410145787, Pages and screens, displayed20September–17October2026. A search for Page Not Found in Page title and screen class showed366views,372activeusers,1second average engagement and0keyevents. Adding Page path and screen class identified the paths below; switching the secondary dimension to Hostname showed all366reported views on lymphedasia.com.

These are historical all-traffic error-title events, not366 currently broken URLs, Singapore organic sessions, verified human visits, lost enquiries or an SEO decline. The Home card's92error-title views used a different11–17October period and must not be compared as the same window. No new qualified enquiry, ranking gain or AI citation is established.

| Path in displayed error-title report | Views | Ordinary current HTTP / disposition |
| --- | --- | --- |
| / |76|200 homepage; no blanket homepage redirect or tracking alteration justified. Historical event provenance remains unresolved.|
| /difference-between-lymphedema-and-lipedema/ |9|404 before; now301 to the maintained specific comparison guide.|
| /lymphedema-precox-vs-tarda/ |7|404 before; now301 to a guide explicitly explaining the historical congenital/praecox/tarda age-of-onset distinction.|
| /lymphoscintigraphy-for-lymphedema/ |6|404; retain for exact-resource investigation. ICG is not an interchangeable imaging topic.|
| /lymphedema-genetic-testing |5|Already redirects to the maintained hereditary guide. Existing recovery closed, not repeated.|
| /lymphedema-in-infants/ |5|404; investigate original intent and maintained paediatric coverage before any mapping.|
| /lymphedema-society/ |5|404; verify original organisation/resource intent, not a generic commercial redirect.|
| /about/ |4|404; inspect historical identity/navigation before choosing an equivalent.|
| /differential-diagnosis-of-skin-rash-in-pediatrics/ |4|404; unrelated broad clinical intent. Do not redirect to a lymphoedema page just to suppress an error.|
| /lymphedema-exercises/ |4|Already redirects to the maintained exercise guide. Existing recovery closed, not repeated.|

Only the displayed top10 rows were investigated; this does not inventory all366events. The two selected source rows total16views across the28day historical window, not16 confirmed patients or newly recovered visits.

## Intent, source and publication safeguards

Fresh main50ad64db49f92c44ae94b3b3de2ac5d5a585e5c3, latest issue7 completion6246880078, current reports and clean worktree were reconciled before selection. No open overlapping PR was found. In-progress checkpoint: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6247445446 . Isolated branch: seo/ga4-legacy-path-recovery-20261018.

The old comparison URL is retained by the search cache as Difference Between Lymphedema and Lipedema; its ordinary live HTTP response was404. The maintained comparison guide covers that exact intent. The hereditary guide's existing body explicitly explains praecox and tarda; this is an exact answer destination rather than a blanket redirect to a service/home page. Existing clinical content was not expanded or presented as newly clinically reviewed.

Authenticated posts and pages queries for both old slugs with status any returned empty arrays. The complete fresh Redirection read contained46rules, no matching source rule and maximum position45. Archived BEFORE configuration and exact create requests remotely in89fa275411578d36dcfb0f25cf1ff3ca29977fa0 before either external mutation.

Used the supported Redirection REST create endpoint for two non-regex, enabled301 URL rules in group1 at positions46/47. Each write returned its new ID,47 then48. No timed-out write or blind retry occurred. Fresh authenticated after-read returned48rules. Comparing every pre-existing rule's configuration found zero changed or missing rules; only operational hit/last-access counters were excluded from equality.

Backups:
- reports/backups/20261018-ga4-legacy-paths-before-and-plan.json
- reports/backups/20261018-ga4-legacy-paths-after.json

The AFTER archive includes complete returned configuration, exact new rules, four live source-variant checks and targeted rollback. It was saved remotely ind64dd23452f96550fd69db37ef33b61a3fbbe911.

## Validation and rollback

The normal production build passed:46mocked interaction/contact tests, TypeScript compilation, credential terminology, label/diagram contrast, enquiry focus, generated output, llms/source parity,789 internal fragments, navigation/comparison accessibility and full-size diagram guards. These tests did not send a real enquiry, email or analytics event. Repository app/public/scripts/dependencies/lock files are unchanged; this PR archives operational evidence only. Preview/merge/production receipt is recorded in issue7 after expected-head validation.

To roll back, first reconcile current rules and newer edits. Use POST /redirection/v1/bulk/redirect/disable with {"items":[47,48],"global":false}; verify live. Disable only these two new IDs. Do not replace the complete ruleset. A Git revert alone does not undo WordPress publication.

The elective-seo-playbook guided specific patient-journey repair using evidence and an existing maintained resource, without thin content or link/metadata churn. Primary technical guidance checked18October:
- https://redirection.me/developer/rest-api/
- https://developers.google.com/search/docs/crawling-indexing/301-redirects
- https://developers.google.com/crawling/docs/troubleshooting/http-status-codes

## Ranked READY / WAITING handoff

| Rank | URL / observed evidence | Approved or maintained source | Action | Status / blocker / next eligible |
| --- | --- | --- | --- | --- |
|1|Two legacy paths above; confirmed404s and exact maintained equivalents|Existing comparison and hereditary guides|Publish guarded specific301s, verify slash variants and preserve prior rules|COMPLETE18Oct; routine outcome comparison no earlier19Oct16:15SGT, allowing data lag. No re-creation needed.|
|2|/lymphoscintigraphy-for-lymphedema/, /lymphedema-in-infants/, /lymphedema-society/, /about/; live404s|Original intent evidence and maintained resource inventory still required|Investigate exact equivalents individually; do not bulk redirect|READY discovery next session; any genuinely new medical answer remains clinician-gated.|
|3|Both direct GA4 properties; current error-title report is not matched SEO analysis|Existing successful-enquiry definitions and direct authenticated reports|Complete exact-date Singapore Organic Search landing/event/keyevent/referral comparison|READY when session persists; this report must not substitute for that analysis. Avoid duplicating a completed checkpoint.|
|4|www.drjeremysun.com/tummy-tuck-singapore;7–13Oct vs30Sep–6Oct exact-page SGWeb impressions1vs267|18Oct direct GSC investigation6246416937/6246880078; live indexed/canonical checks|Observe after the single18Oct15:00SGT indexing request; do not rewrite blindly or resubmit|WAITING performance>=19Oct15:01SGT; routine crawl>=21Oct15:01SGT absent a concrete new fault. Cause not established.|
|5|Screening/prevention pages441/599/616; caption correction and relevant paths already present|Maintained ICG guide and original clinician source required for new protocols|Do not repeat completed caption/link changes; obtain evidence for wider prevention/compression claims|WAITING clinical source/approval for material new advice; independent work continues.|
|6|Native AI fixed prompts; independent response capture unavailable|Only actual permitted native-platform response can prove a mention/citation|Sample only when available; separate referrals, mentions and citations|WAITING access; no web-search proxy or guaranteed AI claims.|
|7|GSC Wizard payment_required18Oct; direct Google UI independently available|Actual authenticated direct GSC/GA4|Use direct reports; no paid-plan purchase or authentication bypass|Wizard ordinary probe>=19Oct or known restoration; not a blanket analytics blocker.|

The tummy investigation and request are historical completed work in this session's handoff, not newly repeated actions. Existing authority restrictions remain: ISAPS extra-link request closed; HealthXchange excluded; SCS already sent once with CGH credentials and no websites; no follow-up or additional external message was sent.
