# Lymphedasia blog heading structure — 28 October 2026

Implemented and ordinarily live-verified at https://lymphedasia.com/blog/ (page1127). Reservation: issue7 comment6472706319. Started from fetched main0b63560bc2acd674516456e49ae3fe29e026ed79; unrelated PR252 and PR257 holds preserved.

## Evidence and selection

The public homepage menu successfully reaches Blog. Neither inspected view exposes a search control. No broken search endpoint was established; no guessed search URL or new search feature was introduced. This concrete discovery audit is disposed as an observation, not an invented defect.

The blog instead had one H1 followed directly by twelve article-card H3s, with no parent H2. Added the neutral native Elementor heading “Patient education articles” above the existing cards. This supplies a useful section label and heading hierarchy for reading/navigation, without adding clinical advice or implying a search-demand finding.

W3C WAI primary guidance inspected this session: https://www.w3.org/WAI/tutorials/page-structure/headings/ explains heading ranks and logical content organisation. This is a focused structural improvement, not a full accessibility-conformance or ranking claim. Applied elective-seo-playbook: source-led useful improvements; no thin page or metadata churn.

## Supported save and rollback

WP6.9.10, Elementor3.35.5, WPVibe1.20.1. Read current supported Elementor envelope/save and native heading-widget documentation before mutation. Authenticated edit/recovery access and adequate actual usage capacity verified.

Fresh complete raw page/meta plus forward/reverse envelopes archived on the isolated branch BEFORE mutation:
- reports/backups/20261028-blog1127-heading-before-patch.json
- archive commit56b52879b7f3faf3086c3b59391e63ef0c1c2d22, remotely read back byte-exact
- immediate fresh-current modified/raw guards matched

Used POST /wpvibe/v1/elementor/save-page once, id1127, page_template elementor_header_footer. warnings[]; modified_gmt2026-10-28T15:10:57.

Inserted only widget d54c8b1e under container8387bab before original posts widget dbb8ec2. title Patient education articles, header_size h2. Elementor normalised the new widget with elements:[] and regenerated its content.raw fallback and derived rendered excerpt. Initial strict comparison identified these normal save-lifecycle differences; the successful save was not repeated.

Fresh after snapshot: reports/backups/20261028-blog1127-heading-after.json. Removing only new widget from read-back data restores the original parsed builder tree exactly. All other exposed meta and original widget settings unchanged; title/status/slug/template/publication date/author/featured media and raw excerpt unchanged. No clinical review date changed.

Rollback: freshly read current page1127, uniquely locate d54c8b1e in8387bab, confirm its expected title/type/H2, remove only that widget from the current tree, then supported save and fresh raw/meta/live verification. Preserve intervening edits. Full old reverse data is usable only with a fresh exact current-state guard; do not blindly restore the whole historical snapshot. The Git evidence PR itself does not control the already-live WP page.

## Verification

Ordinary exact /blog/ GET200 before and after:
- BEFORE SHA256 e2fa76b23de86b938266ea669f6de30bac76181ad120abef1f057587e3d925d3
- AFTER SHA256 a897155e70af7aca61592ab7a7c725aa41e387cd0e13dbb5d6d3c1001e2ad5b3

One H1, one new H2; all12 original card titles/order and every anchor href identical. Served title, description, robots and canonical identical. Native pagination preserved, including the separate historical pagination/canonical release hold.

Ordinary public browser confirms visible H2 above readable cards; accessibility tree shows H1→H2→original H3 cards. Screenshot: reports/evidence/20261028-lymphedasia-blog-heading.jpg. Evidence-only repository change; no application/dependency changes and no synthetic enquiry. Appropriate checks are builder inverse, raw/meta parity, served metadata/link/card parity and actual live layout.

## READY / WAITING handoff

| State | URL | Observed evidence | Approved source | Action | Blocker / next eligible check |
|---|---|---|---|---|---|
| COMPLETE | https://lymphedasia.com/blog/ | H1 skipped to card H3s | Existing builder + W3C WAI headings | Added parent H2; live proof above | Closed; routine recheck only after a material change |
| READY | https://drjeremysun.com/breast-augmentation-singapore | Cosmetic rotation due after lymphoedema batch | Maintained existing material only | Inspect a distinct consultation-navigation/accessibility gap before selecting an edit | No observed defect yet; next session |
| WAITING | https://lymphedasia.com/blog/ | 15Oct pagination/canonical audit6192842982 | Existing raw/native posts config | Reconcile server-side pagination behaviour only on new evidence | Existing owner/release hold; no change in this batch |
| WAITING | https://search.google.com/search-console/ and https://analytics.google.com/ | 28Oct21:03 access check6469696655: Wizard payment_required, direct GSC public overview, GA4 navigation automatically rejected at auth boundary | Actual direct reports only | Matched Singapore Web/nonbrand and organic landing/events comparisons | Earliest ordinary29Oct21:05SGT or known restored authorised session/export; no bypass/reprobe today |
| WAITING | https://lymphedasia.com/ (PTSD post3554) | 6471116878: reviewed original studies do not validate unnamed trauma-therapy/adherence claim | Exact matching primary study or settled clinician revision | Resolve claim only with adequate source/approval | Parked until4Nov/new evidence; no substitute citation |
| WAITING | https://github.com/zatyrical/plasticwebsite/pull/252 and /pull/257 | Existing unrelated owner/clinical holds | Respective accepted source/reviewer decisions | Preserve held batches | Prerequisite only |
| WAITING | Both sites / native AI platforms | No permitted fixed-prompt response sample this session | Actual native responses, dated/platform/location | Record mention/citation/source separately when accessible | Unavailable; no web-search surrogate or citation claim |

GBP daily check already completed28Oct20:58; no duplicate check today, next ordinary29Oct20:59SGT. No outreach sent. Existing SCS message remains sent once, extra ISAPS link closed, HealthXchange excluded. No measured ranking/enquiry/AI-mention uplift claimed. This live implementation resets consecutive no-implementation counter to0 once completion is logged.
