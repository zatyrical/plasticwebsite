# Lifestyle guide conservative-care navigation — 18 October 2026

Base main `8c94fb939625c2f93e54eacd8921d3dbc6f67780`; isolated branch `seo/lifestyle-care-paths-20261018`; issue7 checkpoint6248504794. Fresh main, latest issue6248024900, current reports and no open PR/active overlap reconciled before work. Today's completed redirects, profile datetime fix and analytics totals were not repeated.

## Observed gap and implemented change

Current Gutenberg post4165, https://lymphedasia.com/lymphedema-lifestyle-changes/, had only two body links: LVA and the breast-cancer lymphoedema guide. Existing exercise, decongestive-therapy and compression-fitting discussions did not give readers direct access to the maintained practical resources. The9October clinical-safety corrections were read and preserved; this is a distinct navigation improvement rather than a repeat diet/weight rewrite.

Added only three anchor wrappers around existing phrases:

| Existing words retained | Destination | Reader purpose |
| --- | --- | --- |
| Regular physical activity | https://lymphedasia.com/effective-exercises-for-lymphedema-relief/ | Existing safe options, progression, pause and compression questions |
| Decongestive therapy | https://lymphedasia.com/lymphedema-therapy/ | Existing complete-decongestive-therapy explanation and maintenance questions |
| Compression garments such as sleeves and stockings | https://lymphedasia.com/lymphedema-compression-garments-for-swelling/ | Existing fit, selection, discomfort and supervised-change guidance |

Each destination returned200 at its own canonical with oneH1 before publication. The therapy destination explicitly answers what complete decongestive therapy means; the broader physical-therapy article was inspected but not selected because the maintained therapy guide answers the exact term more directly. No new treatment advice, outcome, price, credential, first-person narrative or clinical-review claim was authored. Other legacy clinical assertions remain outside this navigation-only scope.

## Backup, supported save and rollback

Administrator connection, WP6.9.10, WPVibe1.20.1, content_edit feature and Astra4.12.3 verified. Raw post content is Gutenberg; Elementor fields are empty. Full edit-content and Gutenberg documentation read before writing. No theme, builder-meta, SQL or whole-body replacement used.

Exact raw/metadata BEFORE envelope and forward/reverse patches were archived remotely in77a12cbd before any mutation: `reports/backups/20261018-lifestyle-care-paths-before-and-plan.json`. Fresh raw and selected-metadata equality guard then passed against that archived source, last modified9October01:00:20. Three supported content/edit saves each returned edited/replaced1, with no block-validation error. Exact AFTER envelope/results/preservation check archived in50e571db: `reports/backups/20261018-lifestyle-care-paths-after.json`.

Authenticated readback: reverse only the three wrappers and the raw body is byte-identical to BEFORE. Title, slug, published status, author, featured media, excerpt, template, categories/tags and all exposed meta are identical. Body hrefs increased from2 to5. Operational modified time is18October10:00:29; visible clinical review remainsAugust2026. Original LVA and breast-cancer paths remain intact.

Rollback: reconcile current post and apply only the archived unique reverse snippets through supported content/edit, then verify raw/metadata and live output. Normal WordPress revisions also exist; no revision IDs were invented. Preserve intervening edits. A Git revert alone does not undo WordPress publication.

## Live proof and validation

Ordinary live GET of the source after the saves returned200 at the unchanged URL, exactly oneH1, expected self-canonical, noHTMLnoindex and exactly one copy of each new descriptive native anchor. August clinical-review text remains. Public destination status/canonical/heading checks and exact authenticated source parity establish publication; no real enquiry or analytics event was submitted.

Repository changes archive evidence only. App/public/scripts/dependencies remain unchanged. Relevant normal build checks and guarded PR release are recorded in issue7. No protected preview bypass/share-link fetch, new outbound message, paid tool or quota reset.

Google's current contextual link guidance was checked18October:
https://developers.google.com/search/docs/crawling-indexing/links-crawlable
The elective-seo-playbook guided improving existing patient pathways with concise descriptive anchors. There is no link-count target or ranking/AI-citation guarantee.

## Ready and waiting queue

| Rank | URL / evidence | Approved source and action | Status / blocker / next eligible |
| --- | --- | --- | --- |
|1|Lifestyle4165: exercise, therapy and fitting references lacked detailed paths|Three existing phrases linked to verified maintained guides|COMPLETE live; only revisit on a concrete fault|
|2|GA4 source/medium and event-definition detail unread|Direct authenticated reports; inspect only unread components, preserve historical single generate_lead|READY when actual session available; no tracking rewrite|
|3|Next distinct face/neck or lymphoedema patient-journey question|Inspect current page and prior report before choosing supported improvement|READY independent discovery; no duplicate closed questions|
|4|Both sites' daily GSC/GA4 totals already checked18October|Matched Singapore windows; no hourly repeats|WAITING DrSunGSC>=19Oct15:01, GA4acquisition/landing>=19Oct16:20, LymphGSC>=19Oct17:30SGT|
|5|ProfilePage datetime already fixed and Google validation started|PR242; no repeat ValidateFix|WAITING ordinary status check19October|
|6|Tummy indexing already requested once; tracked-homepage canonical passed|Existing exact reports; no blind redirects or new requests|WAITING routine crawl tummy>=21Oct15:01, UTM>=21Oct17:30SGT absent new fault|
|7|Implant imaging protocol; screening/prevention/compression claims; held404 intent maps|Original clinician/source evidence or exact old/destination equivalence needed|HELD; not inferred from memory or shared keywords|

No fresh rankings, qualified-enquiry gains or native-platform AI mentions established by these links. Today's measured outcome checkpoint remains issue6248024900 and the earlier direct GA4 report. Referral sessions do not prove mentions; contact/accepted events do not establish qualified consultations.
