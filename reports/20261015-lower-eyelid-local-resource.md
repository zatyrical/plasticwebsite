# Lower-eyelid local patient resource and prior-filler discovery — 15 October 2026

Base main: `81715ba8fb04e5a3a8aeecd199f36d58edcbce00`. Isolated branch: `seo/lower-eyelid-local-resource-20261015`.

Read campaign issue #7, current main, PR204's care-navigation report and the 13 October lower-eyelid audit before selecting work. No open PR or overlapping active checkpoint. In-progress checkpoint: issuecomment6184159011. Do not repeat the completed WordPress navigation batch or earlier eyelid anatomy/FAQ/visual work.

## Implemented

Existing URL: https://www.drjeremysun.com/eyebag-removal-lower-blepharoplasty-singapore

The existing further-reading paragraph linked to ASPS approaches and risks, but had no Singapore professional-society patient resource. Fresh primary-page inspection confirmed https://www.saps.org.sg/lower-eyelid-surgery is the Singapore Association of Plastic Surgeons' lower-eyelid patient information page.

Added one descriptive native anchor to that existing paragraph, retained both ASPS links, and qualified all as general resources that do not determine individual suitability. No implied affiliation, membership, endorsement or recommendation for an individual patient. No clinical language from the destination copied. This is a reader information path, not a ranking or authority-score claim.

Only this article's `modifiedIso` and matching sitemap last-modified changed to 15 October. The clinical review remains **4 October** and publication remains **3 October**; a navigation edit is not a new clinician review.

## Distinct question investigated, not published

Candidate: “I previously had under-eye filler; what should I discuss before lower-eyelid surgery?” This is a patient-question candidate, not verified keyword demand.

Actual competitor inspected: https://aquilamedicalcenter.com/eyebags-correction/ mentions previous filler and dry-eye concerns. Our existing guide already asks patients to discuss previous eye/facial procedures, medications and eye symptoms, and already covers dry-eye risks. Those general questions are **closed as answered**, not grounds for a duplicate FAQ or new article.

The current guide does not establish Dr Sun's specific management of residual filler or hyaluronidase. The publisher's abstract at https://journals.sagepub.com/doi/10.1177/0748806816687605 (Taban, 2017) describes a small retrospective series; it is not Dr Sun's policy or evidence for a universal dissolving/waiting protocol. Full text was not accessed through the paywall. No competitor instruction or new clinical recommendation was adopted.

**HELD for original clinician explanation:**

1. What previous filler details or records should a patient bring, if available?
2. How does Dr Sun assess persistent fullness when filler and eye bags may both be relevant?
3. When, if at all, is hyaluronidase considered, and what limitations should be explained?
4. How are further assessment, timing and treatment alternatives individualised?

Do not publish mandatory dissolving, imaging, fixed waiting intervals or outcome assurances without clinician input.

## Validation and rollback

- Production build: 20 mocked contact/API/navigation regression tests passed; credential terminology 67 files with no findings; all 45 routes generated.
- LLM source audit: 39 bullets, no duplicates/missing routes. Internal fragments: 767 across 39 static pages. Navigation markup: 40 HTML files, no failures.
- TypeScript lint, FAQ parity and sitemap/date parity passed. Seven lower-eyelid FAQ answers match visible/structured content.
- Source comparison against the base commit: the entire lower-eyelid article data is byte-identical after reversing only `modifiedIso`; all clinical text, FAQ content, images and reviewed date are preserved.
- Built HTML: new SAPS native href occurs once, one H1, qualifier present. `git diff --check` passed.
- Exact-head preview, guarded merge and fresh live publication checks are recorded in the completion comment on [issue #7](https://github.com/zatyrical/plasticwebsite/issues/7). No protected preview bypass, actual enquiry submission, email or analytics test event.

Rollback: base commit retains all three prior source files. Revert this isolated PR after reconciling current main, or reverse only the added anchor/qualifier and modification-date pair while preserving subsequent edits. No WordPress or GBP mutation in this batch.

## Guidance coverage and queue

ElectiveSEO playbook applied to actual-page question discovery and useful existing-page resource navigation, not keyword variants or borrowed medical protocols. Fresh Google primary guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable supports descriptive crawlable anchors; it does not promise ranking gains. SAPS was inspected as the actual local patient-resource destination, not evidence of clinician affiliation. No new GBP/AI-specific optimisation was warranted by this edit; prior moderation and measurement limits remain.

| Priority | URL / observed gap | Approved source / action | Status / next eligible |
| --- | --- | --- | --- |
| 1 | Lymphedasia `/pneumatic-compression-pump-therapy-for-lymphedema-relief/`: seven existing sections, no useful article contents/targets | Existing headings only; obtain fresh authenticated source, backup and safe supported edit | READY structure; WAITING sufficient ordinary capacity, check 15 Oct >=13:00 SGT; last 98/100 used, no assumed reset |
| 2 | Lower-eyelid prior filler question | Original clinician explanation via prompts above | HELD; no protocol invented |
| 3 | Further independent priority-page discovery | Inspect actual page and reconcile reports first | Rotate next concern; this is not global ready exhaustion |
| Waiting | Eyebag/profile crawl | Ordinary authorised check | 16 Oct >=09:00 SGT |
| Waiting | GBP rapid-recovery post `3334046696687541456` | Accepted PROCESSING, not verified live; do not recreate | 16 Oct >=10:05 SGT |
| Waiting | GSC/GA4 entitlement/export; final comparison | Access unavailable, no paid workaround; referrals are not AI citations or qualified enquiries | 16 Oct access checkpoint; 17 Oct final assessment |

No native AI-platform response sampled; web search is not a fixed-prompt platform answer. No new rank, enquiry or AI-mention improvement established by this publication.
