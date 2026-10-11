# Skin-care navigation and wound-care drafting cleanup — 11 October 2026

## Observed faults and publication

After PR143, inspected two fresh Lymphedasia sources from main `5b14e31f87d7647cdbc84c49b93c06e040240644`.

1. Post3696, [skin infection prevention](https://lymphedasia.com/protecting-skin-from-lymphedema-infections/), had one contextual internal link, to lymphatic background. Its cellulitis, hot-weather and personalised-care passages lacked paths to maintained resources.
2. Post4163, [skin and wound care](https://lymphedasia.com/lymphedema-skin-wound-care/), contained four literal `[Insert Internal Link]` drafting remnants, with no actual internal links.

Published three anchors around unchanged wording in post3696:

|Existing phrase|Destination|
|---|---|
|cellulitis|/lymphedema-and-cellulitis/|
|hot weather|/lymphedema-and-heat/|
|personalized advice and treatment options|/private-lymphedema-consultation-singapore/|

Removed the four drafting remnants from post4163. No new medical wording, image, schema, metadata, review date or link into the wound-care page was introduced. This editorial cleanup does not endorse its existing clinical statements.

## Safeguards and checks

- Gutenberg/list-block and supported content-edit documentation read; both bodies are Gutenberg post_content without Elementor data.
- Backups persisted on the isolated `seo/skin-care-paths-20261011` branch before writes: post3696 commit `d27c5d8b033a4099cac9c62bb470162b45c059cb`; post4163 commit `b8a4346f7979c9a5e0a377a1736cce4e6707caf1`.
- Fresh source/modified guards found no intervening edits.
- Three supported match-once anchor edits each returned one replacement. Placeholder cleanup used supported replace_all and returned exactly four replacements. No block-validation error returned.
- Fresh source equals original plus only planned anchors (3696) or minus only four placeholders (4163).
- Titles, published state, author 5 and featured_media 0 unchanged. Both retain August 2026 clinical review dates.
- WordPress modification timestamps: 3696 `2026-10-11T11:10:53`; 4163 `2026-10-11T11:13:02`.
- Ordinary public checks: both source pages and all three link destinations return 200 directly; sources have one H1, self-canonical, indexable; all three new links appear once in skin-care article body; zero placeholders remain on wound-care page.
- No Dr Jeremy Sun application source changed. This repository PR is backups/evidence only; repeat Next.js builds are unnecessary.
- No test enquiries, messages, events or tracking changes.

Evidence and exact reverse patches are stored alongside this report. A GitHub report revert does not roll back WordPress. For 3696, reverse each anchor only after confirming an exact match; for 4163, restore the saved revision/content only after reconciling subsequent edits. Normal post edits create WordPress revisions.

## Clinical interview queue

|Priority|URL|Observed wording / evidence gap|Next action|Status|
|---|---|---|---|---|
|1|/lymphedema-skin-wound-care/|Compression continuation with an ulcer; advanced silver/growth-factor dressing efficacy; pharmacological/gene/stem-cell research assertions have no displayed primary sources|Clinician prompts: when must ulcer/compression care be assessed individually? Which dressing and emerging-treatment statements should remain, with what evidence?|HELD; clinical explanation and primary sources required|
|2|/lymphedema-checkups/|Blanket 3–6 month interval in body and FAQ, identified in PR143|Clinician prompt: what determines individual follow-up intervals?|HELD; no invented timetable|
|3|/protecting-skin-from-lymphedema-infections/|Antibacterial-soap advice and twice-daily moisturising timetable|Clinician prompt: which cleanser and moisturising instructions are appropriate as general advice?|HELD; no medical rewrite|
|4|/lymphedema-skin-wound-care/|Published drafting placeholders|Removed four, with backup and exact/live verification|CLOSED|
|5|/protecting-skin-from-lymphedema-infections/|No direct paths for existing cellulitis/heat/assessment passages|Published three existing-phrase links|CLOSED|

No internal traffic was added into the clinically held wound-care/checkup pages. More generic links would not resolve their medical-evidence limits. Independent discovery remains actionable: rotate to an unaudited procedure/authority/patient-journey source and substantiate a real gap before editing; do not manufacture links to satisfy plugin percentages.

## Waiting gates

GSC Wizard's expired subscription/trial remains the recorded GSC/GA4 access blocker; preserve the planned 2–8 October vs 25 September–1 October comparison until access is restored. No repeat attempt or measurable uplift claim in this batch. GBP>=12 October 07:57 SGT; overseas-guide crawl>=12 October 19:00 SGT; eyelid/profile crawl >=13 October 09:00 SGT. Native AI-response tests remain unavailable; referrals do not prove citations. Outcome checkpoint 16 October; final 17 October.

Current primary technical source: [Google link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), checked 11 October 2026. Contextual usefulness governs these edits, not a 3–7 word anchor threshold or a link-count target.
