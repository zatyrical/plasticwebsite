# ICG reader navigation and block repair — 14 October 2026

Target: https://lymphedasia.com/icg-lymphography-singapore/ (page4703).

Prior diagnosis/imaging and assessment-link reports were reconciled. Existing copy already connects ICG to ultrasound mapping, compression reassessment, LVA candidacy, procedure comparison, cellulitis, lipedema and consultation. More clinical text or duplicate link blocks were not justified. Exact preparation, injection discomfort and post-test instructions remain clinician-review candidates; no timing or technique claim was invented.

## Observed faults and planned supported repair

- Two existing related-guide paragraphs were enclosed in a heading block immediately before the FAQ heading. Move the heading opening delimiter to the FAQ heading itself.
- The contents list omitted the existing FAQs. Add a stable `#icg-faq` heading anchor and eighth contents entry; use documented list-item markup.
- A decision-pathway paragraph block held two separate HTML paragraphs. Separate them into two paragraph blocks.

All existing clinical text, links, title, author5, featured image4658, URL, metadata and forms are retained. Backup and exact forward/reverse patches are committed before the WordPress save. Use supported match-once `content/edit` calls and reconcile each result before another write.

## Backup and rollback

`reports/backups/20261014-icg-page4703-before.json` is the complete authenticated pre-edit snapshot. `reports/20261014-icg-page4703-patches.json` defines exact changes. Reverse each patch only after checking current content; restoring a GitHub commit alone does not reverse WordPress changes. WordPress revisions also preserve the pre-edit state.

## Verification

Compare fresh raw content with the expected four-patch result. Verify block boundaries, unchanged clinical text and existing destinations, all eight contents fragments, unique FAQ ID, one H1, self-canonical, indexability and live Paragon footer. Publication evidence belongs in campaign issue7. This repair improves editor reliability and reader navigation; it does not prove ranking or enquiry improvement.

## Completed WordPress verification

Published with three supported match-once patches and a complete-paragraph validation save. The initial unbalanced intermediate edit was rejected without mutation; the heading repair was combined into one balanced edit. A snippet-only validation warning was resolved by saving the complete two-paragraph block; the final save returned no errors. Exact raw readback matches the expected changes. All eight contents links resolve, the FAQ anchor occurs once, author5 and featured image4658 are unchanged. Modified timestamp: 2026-10-14T03:03:27. Public checks and final GitHub publication are recorded in issue7.
