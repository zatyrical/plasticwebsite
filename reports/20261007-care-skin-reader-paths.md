# Care-team and summer-skincare article navigation repair

Date: 7 October 2026

## Evidence and source

Main inspected: 10dfee6ec45159d454f6f32aef7da8818d861198.
Read campaign issue7, completed PR59/60 reports and the user-requested GSC follow-up before choosing this separate batch. No open PR or unresolved edit checkpoint.

Fresh authenticated Gutenberg sources and ordinary live responses:
- https://lymphedasia.com/building-a-comprehensive-lymphedema-care/ — post1232.
- https://lymphedasia.com/summer-skincare-tips-for-managing-lymphedema/ — post1277.
- Care article: empty H3 parent followed by H2 child, visible “H3:” draft prefix, seven H4 questions directly under H2.
- Skin article: visible “H2:” paragraph instead of a heading, its child title also stored as a paragraph, seven H4 questions directly under H2.
- Three unique existing destinations returned HTTP404: /preventing-infections-in-lymphedema/, /recent-advances-in-lymphedema-treatment/ and /summer-skincare-protection-for-lymphedema/. The missing advances URL occurred once in each article.
- Links described general management but led to diet-only or cooling topics; the skin symptom link led to the care-team article.
- Existing surgeon/LVA links redirected to maintained canonical pages.

No new clinical wording was introduced. Source wording is the existing published article; clinical claims were not re-approved by this technical audit.

## Published repairs

- Repaired the care article's parent/child outline and removed its draft prefix.
- Converted the skin article's two paragraph titles to a proper H2/H3 pair, removing the draft prefix.
- Corrected both FAQ outlines: all14 question blocks now H3 under their H2 parent, with matching Gutenberg metadata/HTML.
- Replaced four broken link instances with verified treatment/skin-care destinations.
- Corrected general-management and symptom links to relevant existing guides; removed unrelated generic cooling links.
- Used “skin care” as the descriptive anchor for the care article's existing skin-care sentence, preserving its plain text.
- Pointed existing surgeon and LVA links directly to their verified canonical destinations.
- No new page, tracking tag, schema promise, image or GBP post.

## Validation

- Both pre-edit contents persisted in isolated GitHub branch before any WordPress write.
- Fresh source guards confirmed both posts unchanged immediately before editing.
- Used19 exact server-side match-once content/edit patches.
- Saved source matched precisely the planned edits.
- Full plain-text comparison is identical except removal of the two draft H2/H3 prefixes.
- Gutenberg heading levels match the saved HTML tags.
- Both ordinary live pages HTTP200, one H1 each, seven H3 FAQ questions each, reviewer/date retained and repaired links present.
- All16 distinct first-party destinations in the resulting articles returned HTTP200, with no remaining redirect among these destinations.
- Metadata verification and individual URL results: reports/20261007-care-skin-live-verification.json.
- Repository application code is unchanged; PR stores reports/backups only. Deployment checks apply to that unchanged runtime tree.
- git diff --check passed.

## Rollback

For post1232 or1277, restore the corresponding “before” backup through the supported WordPress update/revision path after checking for newer edits. Reverting the audit PR alone does not revert WordPress.

## Ranked queue and clinical boundary

| Priority | URL | Observed gap/source | Action | Status | Blocker | Next eligible |
|---|---|---|---|---|---|---|
| 1 | Both articles above | Real outline faults, three HTTP404 destinations and mismatched navigation, published source | Supported block/link repair | COMPLETE/live | None | Revisit only for a new fault |
| 2 | /building-a-comprehensive-lymphedema-care/ | Existing sentence promises a good chance of compression freedom for the rest of life; another says only specially trained surgeons can achieve effective results | Clinician review: clarify eligibility, evidence, follow-up duration and compression limits; assess exclusivity wording before a material medical revision | WAITING | Clinician evidence/approval | When input supplied |
| 3 | /summer-skincare-tips-for-managing-lymphedema/ | Existing hydration, caffeine, heat/compression and outcome statements are not sourced in this article | Clinician review: confirm evidence, qualifications and patient-specific limitations before expanding advice | WAITING | Clinician evidence/approval | When input supplied |
| 4 | /quality-of-life-while-living-with-lymphedema/ | Fresh destination check HTTP200; detailed coping/self-care pathway not audited in this batch | Inspect actual questions, links and reader navigation; close already-answered candidates | READY investigation | None | Next independent discovery |
| 5 | /how-to-prevent-lymphedema-complications/ | Fresh destination check HTTP200; article evidence/outline not audited in this batch | Inspect actual technical/readability gaps against approved source | READY investigation | None | After priority4 |

No clinician interview or outreach was sent. This batch did not invent support for existing outcome claims or treat a generic review label as proof of new clinician approval.

## Waiting checkpoints

- Settled GSC/GA4 review: after8October2026 09:08SGT.
- Routine new-eyebag/profile inspection: no earlier than10October after7October checkpoint, absent an observed technical fault.
- GBP moderation/public propagation: after7October2026 23:54SGT, with authenticated access.
- Robots report: native PageIndexing example URLs remain unavailable pending browser fallback approval or supplied examples; no robots edit or validation request.
- Native AI platform responses unavailable; no web results substituted for platform mentions.
- No ranking uplift, successful enquiry or AI citation result is inferred from these repairs.

## Current primary guidance

Checked7October2026:
- https://www.w3.org/WAI/tutorials/page-structure/headings/ — headings represent the section outline; avoid skipping H2 directly toH4.
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — use crawlable anchors and text relevant to destination.
- Supported Gutenberg block structure and match-once edit workflow inspected in WPVibe documentation.
