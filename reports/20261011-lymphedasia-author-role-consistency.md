# Lymphedasia shared author-role consistency repair — 11 October 2026

## Observed gap

The shared Elementor single-post template (WordPress `elementor_library` post 3901) rendered this undated sentence in the author box on published articles:

> He heads the Plastic Surgery Division and leads the lymphedema service at Changi General Hospital.

That presentation was stale. The site's approved credential record dates the Head of Service role to 2025–2026, and the current CGH doctor listing uses Director titles instead. Because post 3901 is the shared single-post template, the stale wording appeared across otherwise unrelated educational articles.

The standard WordPress author description for user 5 contained the same stale sentence even though the current author archive did not visibly render it. It was corrected to prevent the stale role from resurfacing through a future dynamic template.

## Primary-source verification

Checked on 11 October 2026:

- Changi General Hospital lists Dr Jeremy Sun as Consultant, Department of Surgery; Director, Plastic, Reconstructive and Aesthetic Surgery Service; and Director, Lymphoedema Service: https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy
- The Academy of Medicine, Singapore lists Dr Jeremy Sun as Chairman of the Chapter of Plastic, Reconstructive and Aesthetic Surgeons for the 2025–2027 board term: https://www.ams.edu.sg/colleges/CSS/chapter-of-plastic-reconstructive-aesthetic-surgeons

The CGH page's narrative still says Chapter Vice-Chairman, while the Academy's current board table says Chairman. The Lymphedasia author box retains Chairman and the Academy is treated as the primary current source for its own board.

## Implemented change

Used WPVibe's Elementor documentation and its supported `content/search` → `content/edit` path for `_elementor_data`, so the builder's validation and caches were preserved.

Replaced the stale template sentence once with:

> He is a Consultant with the Department of Surgery at Changi General Hospital and concurrently Director of the Plastic, Reconstructive and Aesthetic Surgery Service and Director of the Lymphoedema Service.

Applied the same factual substitution to WordPress user 5's `description` metadata. No clinical, outcome, price, candidacy, contact, form, tracking, canonical, URL, publication-status or review-date claim changed.

## Verification

- Protected Elementor metadata search found exactly one current Director-title match after the edit.
- Ordinary public fetches of the shared-template outputs `/lymphatic-system-function-lymphedema/`, `/lymphedema-treatment/` and `/icg-lymphography-singapore/` returned HTTP 200.
- Each tested page rendered the new Director-title sentence, omitted the stale “heads the Plastic Surgery Division” wording, retained one self-canonical and did not render `noindex`.
- The first tested page returned 195,536 bytes, confirming a complete response rather than a partial edge fetch.

This is a factual consistency repair. It does not establish recrawling, ranking, traffic, enquiry or AI-citation uplift.

## Rollback

The exact pre-edit Elementor `_elementor_data` is stored at `reports/backups/20261011-lymphedasia-elementor-single-post-3901-before.json`.

For a narrow rollback, use the same supported Elementor `content/edit` path on post 3901 and reverse the sentence replacement. For user 5, restore the previous `description` value with WordPress user metadata update. Do not write `_elementor_data` through raw SQL.

## Queue and waiting gates

- READY: continue rotating to a fresh unaudited priority-page, factual-authority or patient-decision gap; do not revisit this author-role cohort without new evidence.
- WAITING: GBP no earlier than 12 October 2026 07:57 SGT; overseas-safety crawl no earlier than 12 October 2026 19:00 SGT; eyelid/profile crawl no earlier than 13 October 2026 09:00 SGT; outcome checkpoint 16 October; final assessment 17 October.
- BLOCKED: GSC/GA4 reporting remains unavailable because the GSC Wizard subscription/trial expired. Do not retry until entitlement changes.
