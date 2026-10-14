# Operation-choice comparison and specialist evidence paths — 14 October 2026

Base main: 9e6b73990a9910ad9c233ca39932ce4b33e8f465. Branch: seo/lva-comparison-readability-20261014.
Reconciled issue7 through PR195 completion6162185862 and the latest LVA-quality report. No open PR/active overlapping checkpoint found. Prior4October author corrections and8October specialist featured-image work retained.

## Implemented: operation-choice guide
https://lymphedasia.com/lva-vs-vlnt-vs-liposuction-lymphedema-surgery/
WordPress page5073; classic HTML plus existing Gutenberg image; no Elementor metadata.

Observed: the existing quick comparison contains three dense entries, so readers must mentally align each operation's mechanism and recovery/limits. Converted those exact entries into a supported Gutenberg table with3columns (Option, Mechanism, Recovery and limitations) and3rows. Each row's two body cells concatenate to its original list text verbatim. All existing qualifiers remain, including “in many cases”, “when suitable lymphatics are present”, “selected”, “possible” and ongoing-compression limits. No new clinical content or interval was written.

Added two contextual links using existing phrases:
- “high-frequency ultrasound” in the imaging paragraph → maintained ultrasound-mapping guide;
- “postoperative therapy and compression planning” in the LVA section → maintained LVA-recovery guide.
Both targets200 before writing. Existing related guides retained.

Three supported match-once saves, no validation warning. Exact authenticated readback; all24 paragraph texts and exact conference-image block unchanged; title, author5, featured_media0 and September2026 review date retained. Modified: 2026-10-14T06:59:14.
Public200: oneH1,self-canonical,index/follow,one table with4rows including header and3cells per row;3TH header cells; intended links; original conference image. JS-rendered DOM confirms the same valid table/cell text.
No full mobile/screen-reader or field-performance measurement claimed.

## Implemented: specialist-selection guide
https://lymphedasia.com/which-specialist-lymphedema-surgery-singapore/
WordPress post4913, classic HTML; Elementor metadata absent.

Existing clinician-selection/clinical answers adequate; no new content or headings needed. Observed authority/navigation gap: public page had no training-evidence or ultrasound-mapping link despite naming both.

Resolved exact target from published WordPress post4891, rather than guessing URL:
https://lymphedasia.com/dedicated-lymphedema-surgery-training-hmdp/ (200).
Added anchors only around:
- existing “MOH HMDP fellowship training in Tokyo” → original clinician training Q&A;
- existing “ultrasound mapping” → dedicated ultrasound guide.

Two supported complete-paragraph match-once saves, no warnings. Exact raw readback and entire text unchanged; title, author5, featured image4664 and August2026 review date retained. Modified: 2026-10-14T07:03:10.
Live200: oneH1,self-canonical,index/follow; each new destination once.

## Safeguards and rollback
Fresh unchanged-source guards passed before each page save. Authenticated backups committed BEFORE live writes:
- reports/backups/20261014-lymphedasia-comparison-page5073-before.json
- reports/backups/20261014-lymphedasia-specialist-post4913-before.json

Exact forward/reverse patches:
- reports/20261014-comparison-page5073-patches.json
- reports/20261014-specialist-post4913-patches.json

Reverse in reverse order through supported content/edit after fresh source reconciliation; preserve later changes. WordPress revision/backup can recover original state. GitHub revert alone does not reverse WordPress.

No new medical statement, outcome, timeline, price, credential, claim of accreditation, schema, FAQ answer, URL, metadata, form/tracking tag, enquiry submission or outbound message. No new image or duplicate article. No DrJeremySun source change; documentation PR records independently verified WordPress publication.

## Guidance / boundary
ElectiveSEO playbook shaped the side-by-side decision support and factual evidence paths. Existing clinician wording was the content source, not competitor medical advice.
WPVibe Gutenberg/table schema read; consistent columns and proper THEAD/TH retained.
Primary guidance refreshed14October:
- https://www.w3.org/WAI/tutorials/tables/one-header/ — semantic header/data relationships for a small simple table; no blanket WCAG certification.
- https://developers.google.com/search/docs/appearance/ai-features — accessible ordinary SEO fundamentals; no special AI markup/inclusion guarantee.
GBP medical advertising rules not invoked because no GBP/advertising/testimonial change made.

## Ranked queue
|Priority|URL/item|Observed gap/source|Action/status|Blocker/next eligible|
|---|---|---|---|---|
|1|Operation-choice guide|Dense existing comparison; contextual imaging/recovery phrases unlinked|PUBLISHED table plus2links; exact wording preserved|Concrete new fault only|
|2|Specialist-selection guide|Training/ultrasound mentions lacked direct paths|PUBLISHED2existing-phrase links|Concrete new fault only|
|3|https://lymphedasia.com/lva-surgery-vein-disease-compression/|Distinct vein-disease/surgical-care journey; prior work must be reconciled|READY evidence/navigation investigation, not an asserted medical gap|Next independent session14October|
|4|Tummy-tuck work/driving/child-lifting criteria; lipedema staging; held legacy rewrites|Previously recorded missing exact clinician-specific answers|WAITING approved wording; no imported timelines|When supplied|
|5|GA4/GSC|GSCWizard entitlement expired confirmed14October|WAITING authorized access/export; no hourly retries/subscription|Outcome16October/final17October|
|6|GBP|Daily authenticated cadence|WAITING; no repeat read today|15October09:08SGT or later|
|7|Eyebag/profile crawl|72-hour cadence|WAITING|16October09:00SGT or later|

Five supported saves on two distinct existing pages. No ranking, qualified-enquiry or native AI-citation uplift inferred. No new automation; sprint not fully blocked.
