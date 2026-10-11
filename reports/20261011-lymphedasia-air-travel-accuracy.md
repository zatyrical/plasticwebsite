# LymphedAsia air-travel accuracy repair — 11 October 2026

## Outcome

Published an evidence-aligned correction on:

- Live URL: https://lymphedasia.com/tips-for-traveling-with-lymphedema/
- WordPress post: 1758
- Source field: `post_content`
- Saved at: `2026-10-11T05:04:34` UTC / 13:04:34 SGT
- Pre-edit rollback: `reports/backups/20261011-lymphedasia-air-travel-post1758.json`

The article now distinguishes:

1. people who are only at risk after lymph-node treatment, for whom air travel has not been consistently shown to cause lymphoedema and prophylactic compression is not a universal recommendation; and
2. people with established lymphoedema, who should follow their prescribed compression and management plan.

It removes deterministic cabin-pressure/onset claims, universal compression instructions, routine medication suggestions and a medically unnecessary first-class recommendation. It retains practical movement, skin care, packing and symptom-monitoring advice with more accurate limits.

## Evidence reviewed

- Lymphoedema Network Northern Ireland, *Lymphoedema Guidelines* (2022), GQ18–19: no consistent evidence that air travel increases lymphoedema risk; long-haul high-risk travellers should seek individual advice; prophylactic compression is not recommended universally for at-risk patients; patients with established lymphoedema should use prescribed garments.
  - https://www.lnni.org/sites/default/files/documents/Lymphoedema%20Guidelines%20Interactive%20Pages.pdf
- National Cancer Centre Singapore patient guidance: consult a therapist before flights of four hours or more and use compression according to individual recommendations.
  - https://www.nccs.com.sg/your-care/patient-support/coping-with-cancer-and-treatments/lymphedema
- Current Singapore patient pages were used as comparison evidence only. Their stronger causal wording was not treated as proof.

The edit does not claim the evidence is high certainty; the guideline grades the relevant recommendations as expert-consensus/low-level evidence. Wording therefore uses “no consistent evidence” rather than claiming air travel can never affect symptoms.

## Supported save path

The site-wide single-post template is Elementor, but a WPVibe `content/search` check found the article text in post 1758 `post_content` and found no matching text in `_elementor_data`. The article itself is Gutenberg block content rendered through Elementor's post-content widget.

The update therefore used the supported `/wpvibe/v1/content/edit` match-once route against `post_content`. Each replacement reported `replaced: 1`. No Elementor layout/meta or raw SQL was written.

## Published corrections

- Replaced the cabin-pressure mechanism and “trigger onset” statement with the guideline-supported uncertainty.
- Removed the claim that prolonged sitting causes lymphoedema after lymph-node removal.
- Split compression advice by established disease versus at-risk status.
- Reframed movement and hydration as general comfort/circulation measures, not proven prevention.
- Removed routine anti-inflammatory medication from the packing list.
- Limited standby antibiotics to a clinician-prescribed cellulitis plan.
- Replaced the first-class recommendation with an optional aisle/legroom comfort suggestion.
- Removed blanket avoidance of lifting and deterministic self-treatment for new swelling.
- Added contextual links to the maintained consultation and cellulitis guides.
- Preserved the title, slug, August 2026 review date, metadata, author, featured image and enquiry/tracking behaviour.

## Validation

- Fresh authenticated source: published; modified `2026-10-11T05:04:34`; 17,237 bytes.
- Gutenberg integrity: 90 opening block markers and 90 closing block markers.
- Targeted old phrases absent:
  - cabin pressure “disrupts lymph fluid flow”;
  - prolonged sitting “increases the risk of developing lymphedema”;
  - universal “wear your compression garment throughout the flight”;
  - first-class travel as medically ideal;
  - routine anti-inflammatory medication.
- Fresh public Elementor post-content widget shows the new evidence wording, at-risk distinction and both internal links, and does not show the removed cabin-pressure claim.
- Public document remains self-canonical and indexable.
- No form or test enquiry was submitted.

## Rollback

Prefer the immediately preceding WordPress revision. If a full restore is required, first reconcile post 1758 for intervening edits, then restore the exact `content.raw` value from the backup through the supported WordPress post update path. Reverting this report-only Git commit does not roll back WordPress.

## Measurement and next gates

This is an accuracy, safety and readability repair, not evidence of ranking, referral, enquiry or AI-citation change. Search Console and GA4 measurement remain blocked by the documented GSC Wizard entitlement error. Do not retry hourly.

- Overseas-care crawl: 12 October 2026 at or after 19:00 SGT.
- Lower-eyelid guide and primary surgeon-profile crawl: 13 October 2026 at or after 09:00 SGT.
