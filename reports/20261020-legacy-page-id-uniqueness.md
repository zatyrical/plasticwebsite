# Lymphedasia legacy HTML identifier uniqueness — 20 October 2026

## Implemented and verified

Two existing Elementor pages contained imported rich-text wrappers with repeated HTML IDs. WHATWG requires an ID to be unique in its element tree: https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute . This is a concrete markup repair, not evidence of ranking loss, a diagnosed broken click, or a claim of full WCAG compliance.

| Page | Before | Supported change | Publication |
| --- | --- | --- | --- |
| https://lymphedasia.com/manual-lymphatic-drainage-and-compression/ (721) | `zrJEPA` repeated twice in two DIFFERENT MLD/compression descriptions | Rename only the later occurrence in text-editor `6bc6c44` to `zrJEPA-6bc6c44` | Saved 20 Oct 2026 08:04:56 SGT; ordinary live HTTP 200 |
| https://lymphedasia.com/educational-resources/ (443) | `z7ibDE`, `z-OyqY`, `zVGqK6`, `zyjZxH` each three times; `zrAA6t` twice | Suffix later duplicates with their existing text-editor owner `c5305c8` or `71cbe54`; nine attributes changed | Saved 20 Oct 2026 08:05:12 SGT; ordinary live HTTP 200 |

Ten id-attribute values across THREE existing editor settings changed. Each original ID's FIRST occurrence remains, preserving the original first-match fragment destination. No content blocks were removed. This does not repeat the historical duplicate-Compression-block removal. Elementor element IDs were not changed.

Page443's meaningful scholarly heading IDs (`resource-lymphovenous-shunts`, `resource-genital-elephantiasis`, `resource-surgical-prevention`) and their icon aria-labelledby references were preserved, together with PDF destinations, canonical profile destination and NHK programme-page wording. No clinical/reviewer dates, clinical wording, credentials, media, node order, layout or styles were intentionally edited.

## Selection and scope

Fresh main was fetched at ea5d1e50ce9450b7f3df781a0d582a98c3fec6f6 (PR260). Latest report and issue7 were read; only draft PR252 (link-style owner gate) and PR257 (clinical prose approval) were open, neither overlapping these page fields. Checkpoint: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6280072047 .

New, bounded corpus: all32 public WordPress PAGES (not the previously audited185 POSTS), 90 same-document nonempty fragment links; zero missing targets. URL-decoded IDs/named anchors and relative same-host/path links were checked. The two repeated-ID pages above were independently confirmed in ordinary complete live HTML. This is not a cross-page, JavaScript-generated TOC, browser keyboard, mobile or full-accessibility audit. No navigation edits were manufactured where the90 links already resolved.

Before the repair, none of the six legacy IDs appeared in href/aria-labelledby/aria-describedby/for or inline script/style references on either full live page. The current shared CSS URL returned HTTP200,1,525,316 bytes and no occurrence of any target ID:
https://lymphedasia.com/wp-content/cache/autoptimize/css/autoptimize_e4971206ca2d1e65fe90b92ea8e81390.css .
This is a literal source/reference scan, not full external-script dependency tracing, CSSOM inspection or pixel-layout certification.

## Safety, backups and checks

- Full Elementor and native text-editor guidance read before action. Fresh site_info confirmed Administrator, Astra4.12.3, WordPress6.9.10 and WPVibe1.20.1. Fresh quota read showed60 calls remaining, ample for readback/recovery; no purchase.
- Separate branch `seo/lymphedasia-legacy-id-uniqueness-20261020`; complete selected raw content, available meta and post metadata envelopes plus proposed full trees archived BEFORE mutation in commits bb74f5c644608a35cf09e570bf99e960913d0e99 and edf9d277b241276a2c8d2a3100e8b0ecc483c0ac. Remote blobs matched local backups: page721 cb7977390acc46be4fbf9e3f31100e5cd1e4d2df; page443 5fac40ca352042cb8cd93485b5fa16ac0740c0e3.
- Each expected old id occurred exactly once in its owning editor; new IDs absent. Deterministic inverse restored the exact parsed original tree. Immediately before EACH write the entire fresh selected metadata/raw/meta envelope matched its archived snapshot.
- Used Elementor Document lifecycle `POST /wpvibe/v1/elementor/save-page` with existing id and full guarded tree only; no generic protected-meta mutation, SQL, theme/code change or unsupported custom CSS. Both save responses warnings[].
- Fresh authenticated readback: parsed builder trees EXACTLY equal planned trees, with no additional default/normalisation changes. Selected metadata unchanged except modified timestamps, rendered output, builder-data string and (page443 only) regenerated raw fallback reflecting four of the id substitutions. Reversing only planned substitutions in fallback restores original raw content exactly for BOTH pages. Page721 raw fallback unchanged.
- Independent ordinary HTTP200 live reads: no duplicated IDs in either complete document. Each original ID still appears once and all ten suffixed IDs once in the expected page.
- Within each native Elementor page root, parsed event stream including tags/attributes/text (excluding id attributes only) has EXACT same SHA256 before/after. Text, all anchor attributes, image attributes and href/ARIA references also have identical separate hashes. Canonical, robots and H1 unchanged. Full vectors and raw readbacks in after backups. This is ordinary public HTML verification, not browser visual or interaction QA.
- Application code unchanged: four JSON evidence files and this report only. No DrJeremySun application build is needed to validate a WordPress-only id-attribute edit. Do not interpret absent CI/deployment records as a passed build; no protected preview bypass or forced deployment.
- This completed implementation resets the no-implementation-session count; no artificial edits were made to clinical content.

## Rollback

Read current pages721/443 afresh, confirm each listed suffixed id occurs exactly once in its original owning text-editor, and replace ONLY those exact attributes with their archived originals using the supported Elementor save-page lifecycle. Keep all subsequent unrelated edits. Re-read metadata/tree and ordinary live HTML. Never replay the whole old page/tree or use Git revert as if it rolls back WordPress. Historical whole-template backups (PR252/260) must not be replayed for this page repair.

## READY / WAITING handoff

| State | URL / evidence | Approved source / action | Blocker / next eligible check |
| --- | --- | --- | --- |
| COMPLETE | The two pages above; repeated IDs now unique; existing fragment destinations retained | WHATWG ID rule + fresh existing Elementor fields; repair only later duplicates | Recheck only if affected source changes or a technical fault is observed; no routine hourly recrawl |
| CLOSED — no edit | Public32-page corpus / same-document90 fragment links,0missing | Existing IDs/named anchors and parsed links | Missing-target hypothesis not supported within scope; reopen on source change or observed fault |
| WAITING | https://lymphedasia.com/ ; PR252 native c6e5c72 content-link cue lacks persistent non-colour cue | Existing content plus native supported style ownership | Need documented usable/rendered native link-style control; do not inject CSS/activate snippets or replay stale3901 tree. Main-landmark scope already done PR260 |
| WAITING | Proposed lymphoscintigraphy article, PR257 | Dr Sun's19Oct supplied clinical pointers + inspected study sources | Original clinician input EXISTS; exact final prose approval still needed before publishing. No universal ICG-specificity superiority/BMI cutoff or facility claim. Review when approval arrives |
| WAITING | GSC both domains / GA4 553866170 and410145787 | Matched settled Singapore Web queries/pages and Singapore Organic Search outcomes; last actual comparison18Oct | At20Oct08:00:02SGT Browser connection bootstrap returned Unknown tool(browser.js), no actual session UI. NOT an observed Google sign-out. No new outcome data. Next ordinary transport probe>=20Oct12:00SGT or known restoration, not hourly. Wizard last payment_required19Oct; next>=20Oct16:40/restoration; no subscription |
| WAITING | https://lymphedasia.com/lymphedema-screening/ video schema | Existing video; actual owner schema lacks verified thumbnail | Need original thumbnail/date/video facts and supported RankMath owner path. Prior image request returned SiteUnavailableHTML, not an image; no alternate-client/URL workaround |
| WAITING | Both GBP profiles;19Oct22:05 facts and five total LIVE posts authenticated | Supplied facts unchanged; no moderation/anonymous propagation inferred | Next>=20Oct22:06SGT or actual new notice; not due now |
| WAITING | Eyebag guide / surgeon profile routine inspections | Prior technical state; no new fault observed | Next21Oct>=15:01SGT; UTM>=17:30 absent observed fault; do not restart Validate Fix |
| WAITING | Fixed five native AI prompts | Actual permitted native response only | Native response surfaces unavailable; search results and referrals are not AI citations |

No fresh Singapore nonbrand uplift, verified live rank, qualified enquiry gain, AI mention/citation or independent earned backlink established. No analytics/tracking edit, test enquiry, review manipulation, outbound message or paid service. SCS pitch remains sent ONCE17Oct, no follow-up; HealthXchange excluded; ISAPS baseline retained and extra Dr link request closed. Owned LinkedIn not counted as earned authority. Ongoing authority/clinical/access holds do not block independently safe website work.

Elective playbook influenced selection: evidence first, existing useful pages over keyword/metadata churn, original-first fragment compatibility, narrow implementation/proof, and no outcome inference from technical publication.
