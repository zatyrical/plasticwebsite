# Advocacy resources and hand-guide link repairs — 16 October 2026

Base main `5936caefc6fb9cbf76b755d4c7d06685ea8f5f55`; isolated branch `seo/advocacy-hand-resources-20261016`; issue7 checkpoint6208491202. Reconciled current main, latest reports and completion6207785030; no open PR or overlapping active edit.

## Implemented on WordPress

| Page | Observed gap and change | Status |
| --- | --- | --- |
| [Advocacy3986](https://lymphedasia.com/lymphedema-patient-advocacy-on-world-lymphedema-day/) | Five existing list phrases now link to early signs, therapy, compression garments, cellulitis and specialist consultation. One neutral paragraph links the Lymphatics Association of Singapore as a peer-support resource. | Published, exact authenticated readback and ordinary public HTML verified |
| [Hand guide3020](https://lymphedasia.com/understanding-lymphedema-in-the-hands/) | Replaced the broken alcohol-URL href on the generic “caused by lymphedema” anchor with the maintained overview; replaced two working legacy hrefs with primary/secondary and treatment-hub destinations. Anchor wording unchanged. | Published, exact authenticated readback and ordinary public HTML verified |

Six advocacy patches are the already-prepared PR215 batch, not a new clinical article. The earlier save was explicitly refused; no unknown write was retried. Hand-link mapping is from discovery6205741050: three of the nine queued href substitutions are now complete. The remaining six are NOT published.

The generic hand anchor is in a lymphatic-drainage paragraph, not an alcohol-causation answer. No global redirect of the unanswered alcohol-question URL was created. Existing surrounding treatment-effect wording is unchanged and is not newly approved by this technical audit.

## Capacity, supported edit path and rollback

- Ordinary13:03 capacity read:81/100 used,19 remaining. Site-info verification then82/100; WP6.9.10, WPVibe1.20.1, administrator, content_edit/content_search enabled.
- Read edit-content and Gutenberg documentation in full (including design dependency). Advocacy is plain HTML; hand guide is Gutenberg; both have empty Elementor edit mode/data. No builder conversion or Astra setting write.
- Fresh selected complete id/modified/status/link/title/content/author/media/template/meta BEFORE envelopes archived remotely BEFORE live saves in commits7ec6bbc753bbd3ad2fc25f9dc866768acce39ece and7976f9f4059a870387637ef9b753b8f5ce3a3e34; reversible patch set fbb160f66285b6d18763f1f83900e7a079d9d55f.
- Archived02:00 advocacy backup has content.raw only; fresh envelope also has rendered/protected/block_version. Initial whole-envelope equality was therefore false. Explicit comparison verified identical raw body and all other original fields, not a concurrent content change. Fresh full BEFORE snapshot replaces the old guard.
- Second fresh same-field reads immediately before saves matched both BEFORE snapshots: raw content and every selected non-rendered guard field.
- Nine sequential supported POST /wpvibe/v1/content/edit saves all returned status edited, replaced1. No timeout, ambiguous write, validation error, full-body PUT, raw SQL, alternate credentials, quota workaround or paid upgrade.
- Full AFTER reads match the exact expected raw bodies. Reverse patches in reverse order recover BEFORE raw content byte-for-byte. All selected non-content fields except legitimate modified timestamp are equal, including title/status/author/media/template/meta and empty Elementor fields.
- Modified timestamps returned by WordPress: hand2026-10-16T05:06:29; advocacy2026-10-16T05:06:56. These are source response values, not new clinical review dates.
- Full BEFORE/AFTER snapshots and exact patches: `reports/backups/20261016-1305-*`. Normal WordPress revisions also created by the supported post-content path; no revision ID invented.
- Rollback: fresh authenticated guard against AFTER, apply only these patches in reverse order through the same supported match-once save, then full readback and ordinary live verification. Do not restore an entire old post over later concurrent work. Reverting this documentation PR alone does NOT revert WordPress.
- Remaining allowance calculated at most3 calls after nine saves and four baseline/guard/two AFTER reads plus site-info; no extra capacity request to consume it. Other posts not partially edited. Next ordinary capacity checkpoint16Oct>=15:00SGT, eligibility not promised reset.

## Public verification

Fresh ordinary GET of both source pages:200, original URL, exactly one H1, self-canonical, index/follow. All nine intended hrefs present in article body; old broken alcohol href absent from the hand article. Both existing August2026 review statements still present. All raw clinical prose, FAQs, images, titles, authors, metadata, forms and tracking preserved, apart from the specified neutral peer-resource paragraph and anchor wrappers/hrefs. Advocacy still has three FAQ headings; hand HTML heading counts unchanged (not represented as20 FAQs).

Fresh direct destination GETs: all nine resources200 at their own URLs and canonicals (association canonical without trailing slash). Association homepage title “Lymphatics Association of Singapore” confirmed through ordinary GET; search reader could not render it. No affiliation, endorsement, newsletter/event availability or service-eligibility claim added.

Primary guidance checked16Oct:
https://developers.google.com/search/docs/crawling-indexing/links-crawlable
Native descriptive anchors/context support navigation and discovery; no ideal link count or guaranteed rank. The elective SEO playbook guided existing-page patient paths, rollback/evidence and avoidance of thin variants. Google guidance is not a controlled ranking experiment.

## Independent reconstructive discovery

Inspected current /reconstructive-surgery source and treatmentTiles after reconciling7Oct hub/hierarchy and13Oct education-hub reports. Existing hub already offers six care-pathway cards, consultation and LymphedAsia treatment-hub paths, plus eight treatment tiles. The breast/head-neck/lower-limb/scar/trauma/chest destinations are already exposed; no missing branch or duplicate new hub justified. Fresh ordinary live verification is recorded in issue7. Do not repeat PR218 comparison, PR214 diagram or clinical protocol answers.

## Validation and publication boundary

Unchanged DrJeremySun application: production build47routes,31mocked contact/analytics/navigation/motion tests, credential terminology68files, LLM source39bullets/26URLs,789fragments41pages,42navigationHTML and12comparison tables pass. TypeScript lint, FAQ30routes/date parity and diff check run for the documentation release. Exact-head READY preview, fresh-main/mergeability/tree guards, expected-head merge and production identity belong in issue7 completion. Vercel validates this repository release, not WordPress publication; the latter has separate authenticated and public proofs above.

No new real enquiry POST/email/analytics event, browser patient session, outreach, profile write or protected-preview bypass. No ranking, qualified-enquiry or AI-citation gain established.

## Ranked next queue

1. Pregnancy1243 clinical safety/triage HELD original clinician evidence/local wording,6204059809.
2. Six remaining href substitutions: scar3093 LVA; abdomen3022 primary/secondary, treatment, exercise; men3085 treatment, surgeon profile. READY/WAITING ordinary capacity>=16Oct15:00; fresh raw/builder/meta backup and guard required.
3. OT3099 off-target Phelps Health clause only, same capacity/guards; broader clinical claims HELD.
4. Actual mobile UI/detailed page LCP attribution conditional supported session/trace; no repeat of3.2s aggregate lab as field data.
5. Existing nutrition/workplace/family/checkups/older-adult/new clinical protocols/privacy/pagination/debulking holds unchanged. No new clinical approval inferred.
6. Next independent cosmetic investigation: check existing thread-lifting guide's original diagram/text alternative and exact selection/limitations navigation against prior reports; no new efficacy/duration claim or duplicate picture assumed.

GSC/GA4 payment_required16Oct00:05, next17Oct or known restoration/authorised export. Eyebag/profile crawl eligible by time but same access blocked. GBP next>=17Oct10:07:20; existing rapid-recovery post LIVE, not recreated. Native fixed-prompt AI responses unavailable; user-observed recommendations ONLY lymphoedema, not cosmetic/reconstructive. Final assessment17Oct: GSC average<=10 not verified live rank; referrals not citations; clicks/events not qualified enquiries.
