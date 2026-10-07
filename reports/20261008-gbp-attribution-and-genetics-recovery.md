# GBP reconnection, attribution and genetics path recovery

Date: 8 October 2026. External changes: COMPLETE and verified. Repository audit publication: pending PR checks.

## Evidence and implemented changes
Read issue7/latest reports and fresh main bead5df586c847e05cade3e86cd3c4ce8247b458 before work. Preserve the concurrent plastic-surgeon title-suffix correction and earlier sprint edits. User explicitly resumed the sprint.

Windsor discovery/read/write now succeeds. Fresh profile data fetched7Oct22:53:53UTC (8Oct06:53:53SGT) returns the confirmed Paragon290OrchardRoad#09-01/02 address,238859,65303573 and Mon–Fri09:00–17:00/Sat09:00–12:30 periods on both locations. Sunday has no open period. Categories returned Health consultant for Lymphedema Asia and Plastic surgeon for Dr Jeremy Sun; no category change made. The pending-edits field is null, so public approval/Maps propagation remains unverified. Five Lymphedema Asia services and twelve Dr Sun services were returned; existing wording preserved.

Both previously published educational posts returned LIVE:
- Dr Sun: https://local.google.com/place?id=14673714496954401326&use=posts&lpsid=CIHM0ogKEMrhl7Xp9dWREg
- Lymphedema Asia: https://local.google.com/place?id=12388355740866302386&use=posts&lpsid=CIHM0ogKENG-7sGe3cqj9wE
No repeated service/post edits.

Lymphedema Asia GBP website updated through discovered update_location schema, website_url only:
- Before: https://www.lymphedasia.com/
- After: https://lymphedasia.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp
This avoids the www hop and adds source/medium/campaign attribution. Tracked destination200, canonical https://lymphedasia.com/, index/follow. Connector write acknowledged success and a fresh normal read fetched7Oct22:58:42UTC returns the exact new URL. This verifies saved configuration, not Google's public moderation status or qualified enquiries.

Two remaining actual GSC missing-page examples recovered using supported authenticated Redirection REST API:
| Old path | Destination | Rule |
|---|---|---|
| /lymphedema-genetic-testing/ | /hereditary-lymphedema-milroy-disease/ |41 |
| /congenital-lymphedema-causes/ | /hereditary-lymphedema-milroy-disease/ |42 |

Both were404 before, had no existing rule and no WP post under the old slug (including status:any). Existing reviewed guide explicitly addresses testing/referral/negative results and congenital/Milroy developmental genetic causes. This is a broader maintained guide matching these questions; no assertion that every congenital case is hereditary. No clinical words, review dates or article metadata changed. Avoid duplicate topic articles.

## Verification and rollback
- Backup committed to isolated branch BEFORE external writes, head2dac43f603e06ae45e996b330203d7f21e5ec721.
- Both source GETs301 with exact intended Location, then200 at self-canonical index/follow target, oneH1; no tested chain or loop.
- Fresh full Redirection read42rules. Prior40 configurations compared excluding hits/last_access and are unchanged. Both new rules enabled, plain path matching,301.
- Pre/post proof files capture prior profiles/posts/services, all40rules and live URL responses. No contact-form tests/enquiry emails, duplicate GA4 tag or runtime/source changes.
- Rollback after checking newer edits: restore only prior GBP website_url through update_location; disable only rule IDs41,42 via /redirection/v1/bulk/redirect/disable with explicit items/global:false. Reverting this audit PR alone does not undo external changes.

## Stall prevention and limitations
Existing sprint resumed with45second local bounds on connector reads, at most one follow-up pending poll/two minutes per investigation. A timeout becomes a narrow blocker and independent website work continues. Do not repeat a timed-out write before reconciling its state.
Windsor TRIAL rejects force_refresh/hourly refresh. A normal read succeeds; no paid plan change requested or made. Connector date validation uses UTC day7October while Singapore is already8October; reads use the connector's supported date and convert fetched timestamp explicitly. Null pending-edit status remains unknown; current public profile approval not claimed.
Native AI response testing unavailable. Technical publication/saved tracking do not prove recrawl, first-page rank, qualified enquiry or AI citation.

## Ranked queue
| Priority | URL / question | Evidence | Next action / status | Eligible / blocker |
|---|---|---|---|---|
|1| Genetics missing paths + Lymphedema Asia GBP website | Actual404s and missing attribution | COMPLETE/live, do not repeat | Await Google recrawl/moderation |
|2| /services/ | Actual404, no exact successor established | READY inspect original history/service navigation | Next independent investigation |
|3| /lymphedema-tree-bark-skin-on-legs/ | Actual404, specific skin question not fully mapped | READY inspect existing advanced-skin resources | Clinical input if answer absent |
|4| Rib revision/face-neck alternatives | Current main already has answers/context links | CLOSED candidates, preserve | No thin duplicate |
|5| Alcohol/diuretic questions; inherited guide accuracy or other material new details | Appropriate reviewed answer not newly established | WAITING clinician source where needed | No fabricated answers |
|6| GSC/GA4 comparable checkpoint | Daily cadence | WAITING |8Oct>=09:08SGT |
|7| GBP public approval/propagation | Saved facts/post LIVE; pending flag null | WAITING narrow daily check |9Oct>=06:54SGT, normal read supported |
|8| Profile/eyebag routine URL inspection |72hour cadence | WAITING |10Oct absent real fault |

## Primary guidance checked8October
- https://developers.google.com/search/docs/crawling-indexing/301-redirects
- https://support.google.com/business/answer/3039617?hl=en
- https://redirection.me/developer/rest-api/
