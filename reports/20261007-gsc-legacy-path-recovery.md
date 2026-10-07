# GSC legacy path recovery and coping-guide navigation
Date: 7 October 2026.

## Discovery and scope
Read issue7/latest reports and fresh origin/main2753bff before work. No concurrent mutation. Native authenticated Search Console exposed16 server-error examples and12 not-found examples. Report header says last update4October; two404 rows show last crawl5October. Record both as displayed, rather than assuming a single settled data cutoff.
- Server report: https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Alymphedasia.com&item_key=CAMYEyAC
- Missing-page report: https://search.google.com/search-console/index/drilldown?resource_id=sc-domain%3Alymphedasia.com&item_key=CAMYDSAC
- Current live checks found no5xx among the16: three existing redirects resolve200, and13 return404.
- All12 native404 examples still returned404 before this batch.
- The robots warning is closed as an intended /wp-admin/* exclusion; no robots change or admin indexing request.

## Implemented
Eleven observed404 paths now have non-regex, path-specific server-side301 redirects to maintained resources with matching reader intent. Existing29 redirect configurations are unchanged; now40 total. No broad homepage fallback and no change to current canonical URLs.

| Source path | Maintained destination |
|---|---|
| /combined-decongestive-therapy/ | /lymphedema-therapy/ |
| /difference-between-primary-and-secondary-lymphedema/ | /primary-vs-secondary-lymphedema/ |
| /lymphedema-surgery-treatment/ | /lymphedema-surgery-singapore/ |
| /lymphedema-surgical-treatment/ | /lymphedema-surgery-singapore/ |
| /lymphedema-singapore/ | /lymphedema-treatment/ |
| /lymphedema-diagnosis-and-treatment/ | /lymphedema-treatment/ |
| /lymphedema-education/ | /educational-resources/ |
| /lymphedema-exercises/ | /effective-exercises-for-lymphedema-relief/ |
| /top-3-exercises-for-leg-lymphedema/ | /effective-exercises-for-lymphedema-relief/ |
| /lymphedema-physical-therapy-exercises/ | /effective-exercises-for-lymphedema-relief/ |
| /lymphedema-leg-exercises/ | /effective-exercises-for-lymphedema-relief/ |

Destination scope was read before creation: the therapy guide explicitly answers complete decongestive therapy; primary-vs-secondary comparison addresses that exact question; surgery hub compares LVA/VLNT/reductive options; treatment hub covers Singapore diagnosis and treatment; resource hub covers education; practical exercise guide includes calf-pump/ankle movement, safe options and limitations. These are navigation decisions, not newly authored clinical advice.

The coping guide at https://lymphedasia.com/quality-of-life-while-living-with-lymphedema/ (post1177) now links its existing compression and skin-care wording to the verified topic guides. Existing three FAQs remain; they already answer the tested question candidates. No new medical wording, metadata churn, duplicate article, tracking or decorative media.

## Validation
- Before backups committed to isolated branch before WordPress edits/rule creation.
- Source unchanged guard for1177; one supported match-once content/edit patch.
- Saved source exactly equals expected patch; complete plain text is identical before/after.
- Live coping guide200, self-canonical, index/follow, oneH1, both context links visible. Both destinations200.
- Rules30–40 saved/enabled301, source paths absent before creation.
- All11 ordinary live source requests return301 with the exact intended Location, then200 at the target; target self-canonical and index/follow. No chain or loop on tested exact paths.
- Existing29 rules compared excluding traffic counters; configurations unchanged.
- App runtime/source unchanged. Repository changes are backups/reports only; preview deployment checks the same runtime. No contact-form tests or enquiry emails.
- This does not prove Google has recrawled the redirects, rankings improved or AI cited the site. Native AI-platform response testing remains unavailable.

## Rollback
After checking for newer edits, restore post1177 pre-edit content through supported update/revision. For redirect rollback, disable only newly created IDs30–40 through Redirection's supported bulk/disable API, with explicit items and global:false; do not replace/delete the prior29 rules. Audit PR revert does not undo external WordPress changes.

## Ranked queue
| Priority | URL/question | Observed evidence | Action/status | Blocker / next eligible |
|---|---|---|---|---|
| 1 | Eleven paths above + coping guide | Actual404s and missing context links | COMPLETE/live | Await recrawl; no repeat edits |
| 2 | /services/, /congenital-lymphedema-causes/ | Real404; no equivalence demonstrated in this batch | READY inspect original page history/current suitable destination before deciding | Next independent technical investigation |
| 3 | /lymphedema-genetic-testing/, /lymphedema-tree-bark-skin-on-legs/ | Actual404s; topic-specific answers not verified | READY inspect existing relevant genetics/skin content; queue clinician answer if missing | Next discovery |
| 4 | /can-alcoholism-cause-lymphedema/, /do-diuretics-help-lymphedema/ |404, medical questions not answered by tested targets | WAITING reviewed clinical answer or suitable verified existing resource | Clinician evidence if content absent |
| 5 | Seven /author/lymphedasia-com/page/* archive examples |404; retired author archives are not patient procedure pages | CLOSED for redirect batch; leave404 absent a demonstrated useful archive destination | No blanket redirects |
| 6 | /lymphoma/ |404; lymphoma differs from lymphoedema | CLOSED for this batch; do not redirect to unrelated lymphoedema care | No appropriate replacement proved |
| 7 | drjeremysun.com/rib-rhinoplasty-singapore | Current main has revision-planning, alternatives, donor scar, cost, recovery, risks and focused FAQs | CLOSED already answered candidate questions; preserve existing guide/images | No duplicate article |
| 8 | Implant-free rib planning specifics | Existing guide discusses graft/implant alternatives but detailed patient selection not newly verified | WAITING specific clinician explanation before expanding | Material new clinical content |

Next settled analytics8October>=09:08SGT; routine profile/eyebag inspection10October absent technical fault. GBP check after7October23:54SGT only with authenticated current access. This batch does not claim uninterrupted execution.

## Primary guidance checked7October
- https://developers.google.com/search/docs/crawling-indexing/301-redirects — permanent server-side redirects to maintained destinations.
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — descriptive crawlable topic links.
- https://developers.google.com/search/docs/appearance/ai-features — Google AI discovery requires indexed/snippet-eligible accessible content; no special AI schema or guaranteed placement.
- https://redirection.me/developer/rest-api/ — supported authenticated redirect create/update and narrow rollback routes.
- WPVibe edit-content documentation inspected; post edits create revisions.
