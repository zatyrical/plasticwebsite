# Lymphedasia introductory-guide semantics and broken images — 22 October 2026

## Published result
https://lymphedasia.com/what-is-lymphedema/ (post4218).

Five single-cell layout tables containing ordinary callout text are now native wp:paragraph blocks. Exact cell HTML, bold labels, links and prose were retained. The actual ISL staging table remains a table, unchanged. The five labels are Considering specialist assessment?, Clinical context, Considering surgical assessment?, When to seek assessment., and Key takeaways.

Visual verification then exposed two broken article-image embeds (wp-image-4221 and4222). Both embedded1024x538 URLs returned404; both corresponding original-size filenames also returned404. An authenticated media query including4221/4222 returned an empty array. Removed only those two failed wp:image blocks. No attachment deletion, replacement graphic, fabricated provenance or new medical claim. Featured media remains unchanged. Their alt descriptions were generic topic descriptions; all adjacent clinical prose remains exact.

## Basis and boundaries
Fresh issue7 through6330949651, remote/fetched main62a377f323549f13d2e5c6de097a511dc3246654, PR281 report and held252/257 reconciled. In-progress6331683913, image scope update6331732920. Independent of shared Elementor holds.

Primary W3C guidance inspected22Oct: https://www.w3.org/WAI/tutorials/tables/ and https://www.w3.org/WAI/tutorials/tables/tips/ . Layout tables should not supply data relationships. Native paragraph conversion avoids unsupported role attributes in core/table saved markup. Chromium already heuristically exposed the old single-cell callouts as containers; no assertion that every prior browser announced them as tables, no screen-reader or WCAG-conformance certification.

WPVibe edit-content, Gutenberg and table schema documentation read. Authenticated administrator, content_edit and native post_content verified; Elementor data empty. Initial remaining allowance19 allowed scoped writes, readback and recovery reserve. No subscription, reset, raw SQL, theme/CSS or editor-entitlement workaround.

## Backups, guards and validation
All backups reside in reports/backups/:
- 20261022-callout-semantics-post4218-before.json — fresh full raw post and five exact reversible patches; archived commit9f0c5b4950b6f21943753776ef7989ca0059f7b0 BEFORE mutation and fetched byte-identically.
- 20261022-callout-semantics-post4218-after.json — exact intermediate paragraph readback and five successful match-once receipts.
- 20261022-broken-images-post4218-before.json and 20261022-broken-images-post4218-unique-patches.json — current raw state and image-removal evidence/guards archived BEFORE image writes.
- 20261022-callout-and-image-post4218-final.json — verified final raw, receipts, correction and FINAL whitespace-safe image reversal patches. This final manifest supersedes the earlier image patch endpoints for rollback.

Five paragraph edits and two image edits each returned edited/replaced1. The first image replacement ended in a space within its preserved context; the surgical endpoint trimmed that trailing space. Fresh readback caught the sole one-character mismatch (tissues,most). A separate unique guarded correction restored the exact original space. Final content equals the computed intended result; no mismatch remains. Future reversal guards now end on non-whitespace to avoid replaying that normalization defect.

Final full raw readback: modified_gmt2026-10-22T03:11:40, revision count24, predecessor5548. Slug/status/title/excerpt/meta/featured_media/template exactly unchanged. Reverse both final image patches and all five paragraph patches reconstructs the original pre-batch raw content exactly. August2026 clinical-review text unchanged.

Ordinary HTTP200 verified. Live cloud browser after final save: oneH1, one actual staging table with all four headers, all five paragraph labels, zero4221/4222 image references, restored original space, selfcanonical and August review. Screenshot inspected for readable paragraph flow; no claim of exhaustive mobile or assistive-technology testing. Initial shell regex double-escaped its word boundary and falsely counted zeroH1/tables; browser DOM query independently returned the correct1/1 counts. Parser error was not treated as a website defect.

No Next.js application change; repository contains evidence/backup JSON and this report only. Exact content/reversal/metadata/live checks are the appropriate validation; no redundant production build or real enquiry, email or synthetic analytics. No ranking, qualified-enquiry or native-AI citation gain inferred.

## Rollback
Freshly read4218 and reconcile later changes. For image restoration, use only final_image_patches in the FINAL manifest, uniquely reversing new_content to old_content; restore only if source assets are repaired or specifically required. Then uniquely reverse the five paragraph patches if desired. Do not overwrite the full post or replay historical full Elementor state. Git revert alone does not restore WordPress. Backup source has the original exact locations.

## Queues
Completed reader/technical batch resets no-implementation counter to0. Other clinical claims visible in this legacy guide were not validated or rewritten by this technical batch. Any source/clinical review is separate.
Matched Singapore GSC/GA4>=22Oct12:02SGT. DirectGSC auth>=17:11, Wizard>=17:55 or known restoration/export; GBPfacts/posts>=17:57; eyebag/profile routinecrawl>=24Oct15:05 absent fault. PR252 supported-editor hold and PR257 exact clinical prose review remain. Original male face/neck-lift beard/sideburn insight and other clinical/editorial holds remain WAITING. No duplicate review reply or outreach.
