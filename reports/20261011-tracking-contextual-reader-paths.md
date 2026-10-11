# Symptom tracking and digital monitoring: contextual reader paths — 11 October 2026

## Evidence and scope

Reconciled campaign issue #7 through PR142 and fetched main `7b2a4e516632f750e76051c1fb6b931f1b0b4926`. No active overlapping checkpoint was found. This batch addresses observed gaps on two previously unaudited Lymphedasia posts, rather than padding links to improve a plugin score.

- Post3504, `/how-to-track-and-record-lymphedema-symptoms/`: fresh raw source was last modified 7 August 2026 and had two internal contextual links, neither to diagnosis-report guidance nor assessment.
- Post3992, `/lymphedema-management-with-digital-health-tools/`: fresh raw source was last modified 25 August 2026 and linked only to the LVA guide. Its symptom-diary, cellulitis and clinical-assessment passages had no contextual destinations.
- Post3618, `/lymphedema-checkups/`: inspected and HELD. Two passages give a blanket 3–6 month follow-up interval. Clinician input is needed before replacing this material medical advice; no new links to this article were added.

The screenshot's domain, reporting date, coverage denominator and scoring method remain unconfirmed. The active site has Link Whisper installed, but that alone does not establish the report's origin. The changes below do not establish an improvement from 36.99%, restore tracked clicks, or certify site-wide absence of broken links.

Google's [link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) were checked 11 October 2026: use descriptive, concise, relevant contextual anchors and crawlable hrefs; there is no ideal number of links. The 3–7 word score is not used as a Google requirement.

## Implemented and published

Five match-once anchor insertions preserve every existing visible word:

| Source post | Existing anchor | Direct destination |
|---|---|---|
|3504|lymphedema diagnosis|/lymphedema-diagnosis-report-explained/|
|3504|lymphedema specialist|/private-lymphedema-consultation-singapore/|
|3992|cellulitis episodes|/lymphedema-and-cellulitis/|
|3992|simple symptom diary|/how-to-track-and-record-lymphedema-symptoms/|
|3992|clinical assessment|/private-lymphedema-consultation-singapore/|

This connects self-monitoring to assessment and related education without creating new medical advice or a duplicate article. No new efficacy, urgency, outcome, interval, price, credential or review claim was introduced. Existing clinical statements are not newly endorsed by this navigation edit.

## Safeguards and verification

- Read WPVibe Gutenberg and content-edit documentation. Post3504 uses Gutenberg; post3992 is plain HTML in post_content. Neither has Elementor content data; the shared Elementor template displays their body.
- Exact original bodies and patch strings committed to isolated branch before WordPress writes: backup commit `7417e945e7e49c84839c1b5b9ab9d91053344bca`.
- Fresh modified/content guard before edits found no intervening changes.
- Supported `/wpvibe/v1/content/edit` used; each edit reported exactly one replacement and no validation error. WordPress creates normal revisions.
- Fresh authenticated source equals original plus only the planned anchors. Titles, published status, author 5, featured_media 0 and August 2026 clinical review dates remain unchanged.
- After timestamps: post3504 `2026-10-11T11:02:45`; post3992 `2026-10-11T11:03:03` (WordPress timestamps).
- Ordinary public HTTP verification passed for both sources and all four destinations:200, direct final URL, both sources self-canonical/indexable/single-H1, all five links present exactly once in the article body.
- Initial local verification parser did not recognize the Elementor theme-post-content wrapper. Correcting the selector resolved the test; no live-page defect or additional edit occurred.
- No Dr Jeremy Sun application source changed. A repeat Next.js build is unnecessary for this WordPress-only navigation batch and repository documentation.
- No enquiry, test email, tracking event or outbound message submitted.

Live evidence: `reports/20261011-tracking-live-verification.json`. Backups: `reports/backups/20261011-tracking-post3504-before.json` and `reports/backups/20261011-tracking-post3992-before.json`. Patches: `reports/20261011-tracking-navigation-patches.json`.

## Rollback

Reverse each new_content to old_content through the supported match-once route, only after confirming it still matches once. Alternatively restore the WordPress revision. A full backup restore requires reconciliation of intervening edits. Reverting this GitHub documentation PR alone does not undo WordPress publication.

## Ranked queue and next checks

|Rank|URL / item|Observed gap and approved-content boundary|Action|Status / blocker|Next eligible|
|---|---|---|---|---|---|
|1|/lymphedema-checkups/|Blanket3–6month frequency in body and FAQ; no documented approval for a new clinical replacement|Clinician prompt: How should follow-up intervals vary by treatment phase, symptoms and clinical stability? What wording avoids a universal timetable?|HELD; clinician explanation needed|When evidence arrives|
|2|/how-to-track-and-record-lymphedema-symptoms/|Diary FAQ already answers recording swelling, pain, skin changes, triggers and treatments|Do not create another diary FAQ/article; diagnosis and assessment links now published|CLOSED / published|No immediate repeat|
|3|/lymphedema-management-with-digital-health-tools/|Already covers useful tracking and limits; lacked contextual care paths|Three existing phrases linked to maintained resources|CLOSED / published|No immediate repeat|
|4|Remaining low-link educational posts|Screenshot does not identify real orphan URLs; full 187-post body graph has not been inspected|Audit a fresh patient-journey cluster; validate existing answers and relevant maintained destinations first|READY; no plugin-score padding|Next discovery|
|5|GSC/GA4 settled measurement|Latest checkpoint records expired GSC Wizard subscription/trial affecting both GSC and GA4|Preserve planned 2–8 October vs 25 September–1 October comparison; retry when reporting access restored|WAITING / reporting access|After restoration; at most daily|
|6|GBP|All pending changes publicly propagated at 11 October 07:57 checkpoint|No repeat factual edits; daily access-aware review only|WAITING|12 October>=07:57 SGT|
|7|Overseas-guide crawl|Prior inspection interval applies|Read actual index result|WAITING|12 October>=19:00 SGT|
|8|Lower-eyelid/profile crawl|Prior inspection interval applies|Read actual index result|WAITING|13 October>=09:00 SGT|
|9|Native AI responses and final assessment|No native fixed-prompt response access; referrals are not mentions|Keep platform/location/mention/citation separate; final baseline assessment|WAITING / response access|16 October outcome checkpoint;17 October final|

No ranking, qualified-enquiry or AI-citation improvement is inferred from these links.
