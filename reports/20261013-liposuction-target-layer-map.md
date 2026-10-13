# Liposuction target-layer consultation map — 13 October 2026

## Observed gap

The existing `/body-contouring-liposuction-singapore` guide already has a strong decision table covering localised fat, loose skin or abdominal-wall separation, selected non-surgical options, and weight-related or deeper fullness. It also has current sections on suitability, skin recoil, procedure, recovery, risks, cost factors and contextual links. Another comparison table, VASER section or keyword variant would duplicate prior sprint work.

Current Singapore sources reviewed on 13 October consistently separate liposuction for selected localised fat from loose-skin, muscle-separation and weight-related concerns. They also foreground the role of examination and skin quality. This confirms a relevant patient decision need but does not prove why any competitor ranks.

The remaining comprehension gap was anatomical: the page explained the decision in text and a table, but did not visually show why fat, skin, muscle and deeper fullness are separate assessment questions. The existing tummy-tuck illustration is abdomen-specific and focuses on abdominoplasty assessment; reusing it on the broader body-contouring page would blur page intent.

## Implemented change

- Added one original, neutral 1400 × 900 SVG to the existing `How liposuction is performed` section.
- The cross-section identifies skin, selected superficial fat, muscle/wall and deeper tissues.
- A conceptual access path remains within the illustrated fat layer and is explicitly described as conceptual rather than a technique guide.
- Three adjacent cards reuse existing reviewed page statements:
  - localised fat with stable weight and adequate recoil may lead to a liposuction discussion;
  - liposuction does not reliably tighten loose skin and may make looseness more obvious;
  - liposuction does not repair muscle separation and is not weight-loss treatment.
- The SVG, page alt text, caption and footer all state that this is a simplified consultation schematic, not to scale and not a procedure recommendation.
- Advanced the page and sitemap modification dates together to 13 October.

No title, description, URL, canonical, FAQ, price, recovery interval, outcome claim, form or tracking behaviour changed. No competitor wording, imagery, branded-technique claim or prescriptive timeline was reused.

## Evidence reviewed

- Own page: https://www.drjeremysun.com/body-contouring-liposuction-singapore
- Singapore Association of Plastic Surgeons: https://www.saps.org.sg/liposuction
- WC Ong Plastic Reconstructive Surgery: https://wcongplasticsurgery.com.sg/body-contouring-tummy-tuck-fat-removal-liposuction/
- Colin Tham Plastic Surgery: https://www.colinthamplasticsurgery.sg/services/vaser-liposuction/
- Allure Plastic Surgery: https://www.allureplasticsurgery.sg/which-is-better-tummy-tuck-or-liposuction-in-singapore/

## Validation and rollback

- Render the SVG at its declared 1400 × 900 size and visually inspect all text, callouts and contrast.
- Run TypeScript, the full production build, credential terminology, `llms.txt`, internal-fragment, navigation-accessibility, FAQ-parity and sitemap/schema-date audits.
- Require an exact-head preview deployment, expected-head merge and exact production-deployment verification.
- Verify the public page, image alt/caption, live SVG and `dateModified`.
- Rollback: revert the isolated merge commit for this batch.

## Measurement boundary and next queue

This is a purposeful educational-media and comprehension improvement. It does not establish a ranking, enquiry, referral or AI-citation gain.

Next READY investigation: rotate away from body contouring and audit the main facelift/neck-lift page for a distinct scar-location or anatomy decision aid. Close the candidate if the current surgical-versus-non-surgical comparison and face/neck alternatives already answer the useful questions.
