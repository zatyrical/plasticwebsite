# Lymphedasia imaging and recovery navigation — 14 October 2026

Base main: dc41320c738316e28d8c0a0c1d96069b9abc0052. Isolated documentation branch: seo/ultrasound-navigation-20261014.
Prior issue7 and reports reconciled before work: ultrasound post4786 was already repaired and linked on6October; ICG page4703 navigation/block repair was published in PR192. Neither clinical batch was repeated.

## Discovery and implemented work

### Ultrasound mapping
URL: https://lymphedasia.com/ultrasound-mapping-lva-surgery-singapore/
WordPress post4786 (Gutenberg). Existing nine H2 sections had no heading anchors or contents navigation. The clinically reviewed article already answers the procedure/imaging questions; no new clinical section or image was needed.

Added an “On this page” group with six contents links and stable anchors:
- ultrasound-probe — What ultrasound does your surgeon use?
- icg-and-ultrasound — ICG lymphography and ultrasound show different things
- no-linear-icg-pattern — Can ultrasound help when ICG shows no linear pattern?
- questions-before-lva — Questions patients can ask before LVA
- related-reading — Related reading and next steps
- ultrasound-faq — Frequently asked questions

All seven match-once saves succeeded without block-validation warnings. Original body text, reviewer August2026, author5, featured image4660, title and URL retained.
Fresh raw content equals the exact planned result; 61 opening/61 closing block delimiters. Modified: 2026-10-14T04:07:34.
Live HTML: six unique IDs and six matching contents links; self-canonical and index/follow; image and review date retained.

### LVA recovery
URL: https://lymphedasia.com/lva-surgery-recovery-singapore/
WordPress page4705 (Gutenberg). Its shorter seven-section guide did not warrant another contents block. Closed that candidate without implementation.

Actual contextual gaps: compression and recurrent-cellulitis passages had no routes to the maintained specialist resources. Linked existing phrases only:
- “compression garments or bandaging” → /can-i-stop-compression-after-lva/
- “Recurrent cellulitis” → /lymphedema-and-cellulitis/
Both target pages returned200 before writing. Corrected “a assured” to “an assured”. No new medical advice, timing, outcomes, images or metadata.
Both match-once saves succeeded without warnings. Exact raw readback; author/title/image and FAQ schema unchanged. 28 opening/28 closing block delimiters. Modified: 2026-10-14T04:10:25.
Live HTML: one H1, self-canonical, each new link once; urgent advice retained.

## Safeguards and rollback

Authenticated fresh-content guards passed immediately before each site's save. Backups were committed before writes:
- reports/backups/20261014-lymphedasia-ultrasound-post4786.txt
- reports/backups/20261014-lymphedasia-recovery-page4705-before.json

reports/20261014-lymphedasia-imaging-recovery-patches.json records exact forward patches. Reverse new_content → old_content through supported content/edit only after reconciling current content. Reverse the contents insertion before heading anchors to avoid temporary dead links. Preserve later edits; repository reversion alone does not roll back WordPress. WordPress revisions also provide recovery.

No DrJeremySun production source changed in this batch. Documentation PR carries audit/rollback evidence; WordPress publication was independently verified live.

## Guidance and scope

ElectiveSEO playbook used patient-question discovery and existing-page improvements, not guaranteed ranking claims. Refreshed14October:
- https://developers.google.com/search/docs/appearance/ai-features — ordinary accessible SEO applies; no special AI schema or inclusion guarantee.
- https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html — preserve heading/list relationships programmatically.

No GBP publication or clinical advertising claim was added, so no new GBP-rule decision was made.

## Ranked next queue

|Priority|URL / item|Evidence / approved source|Action|State / blocker|Next eligible|
|---|---|---|---|---|---|
|1|Ultrasound mapping guide|Existing approved headings; observed absent navigation|Six useful jump links|COMPLETE, live verified|Only recheck on concrete fault|
|2|LVA recovery guide|Existing compression/cellulitis wording and maintained targets|Two contextual links and grammar correction|COMPLETE, live verified; extra TOC closed for limited value|Only recheck on concrete fault|
|3|https://lymphedasia.com/lva-surgery-singapore/|Core patient-selection guide; prior changes must be reconciled|Inspect the actual assessment/imaging-to-recovery decision route; change only an observed unhandled gap|READY discovery; not an asserted content gap|14October next independent session|
|4|Lipedema staging / legacy medical rewrites|Previously held clinician-sensitive answers|Retain until approved clinician explanation exists|WAITING clinical input|When new input available|
|5|GA4/GSC outcomes|GSCWizard entitlement expired, confirmed14October|Use authenticated authorized data path when restored; no stale-data uplift claim|WAITING access, do not retry hourly|16October outcome checkpoint; final17October|
|6|GBP propagation|Prior daily checkpoint recorded|Authenticated factual check only|WAITING cadence/access|15October09:08SGT or later|
|7|Eyebag guide / primary profile crawl|Prior72-hour cadence|Inspect only once eligible or concrete fault|WAITING|16October09:00SGT or later|

Implementation and structural checks are not proof of ranking, AI citation or qualified-enquiry improvement.
