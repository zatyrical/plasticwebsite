# Body-contouring to fat-grafting decision path — 11 October 2026

## Scope and observed evidence

- Primary page: https://www.drjeremysun.com/body-contouring-liposuction-singapore
- Existing supporting guide: https://www.drjeremysun.com/fat-grafting-singapore
- The current body-contouring page already answers fat versus loose skin versus muscle separation, suitability, weight-loss limits, common areas, technique, quotation factors, recovery, compression, urgent warning signs, serious risks and liposuction-versus-abdominoplasty. The previously queued full page gap is therefore closed rather than padded with another general section.
- Current Singapore competitor pages inspected on 11 October 2026 surfaced two adjacent decisions: Allure explicitly mentioned reinjection of harvested fat, while WC Ong discussed combined body-contouring procedures. Colin Tham's page focused heavily on VASER technique claims. These are competitor observations, not copied clinical advice or proof of why any page ranks.
- Dr Sun's existing reviewed fat-grafting guide already explains donor and recipient assessment, recovery at both sites and limitations, but the liposuction page did not connect readers to it.

Competitor pages inspected:

- https://www.allureplasticsurgery.sg/which-is-better-tummy-tuck-or-liposuction-in-singapore/
- https://wcongplasticsurgery.com.sg/body-contouring-tummy-tuck-fat-removal-liposuction/
- https://www.colinthamplasticsurgery.sg/services/vaser-liposuction/

Primary patient-information comparison:

- https://www.plasticsurgery.org/cosmetic-procedures/liposuction

## Implemented change

- Added one contextual paragraph after the existing liposuction procedure explanation. It sends readers whose consultation includes fat transfer to the maintained fat-grafting guide and explicitly states that reading the guide does not mean fat transfer is suitable or planned.
- Added the fat-grafting guide to the body-contouring page's curated related-resource set, alongside tummy tuck, post-liposuction compression/massage and mommy-makeover planning.
- Updated only the body-contouring route's sitemap modification date.
- No title, description, clinical recommendation, recovery estimate, cost, tracking, enquiry behaviour or structured FAQ content changed.

## Validation and publication safeguards

- Run TypeScript/lint and the full production build.
- Confirm generated HTML contains the contextual `/fat-grafting-singapore` link and exactly one curated related card for that route.
- Require an exact-head preview deployment, current-main guard and expected-head merge before publication.
- Verify the exact production commit plus ordinary live HTML: HTTP 200, self-canonical, indexable, one H1, new paragraph and related card present.
- Record PR, commit, deployment and live proof in campaign issue #7.

## Rollback

Revert this batch's body-contouring paragraph, related-resource entry and sitemap date. The existing fat-grafting page and all shared template mechanics remain unchanged. This navigation improvement does not establish a ranking, enquiry or AI-citation change.

## Queue disposition

- CLOSED: a separate VASER section was not added. Current copy already explains that technique/device choice follows assessment; copying stronger competitor recovery or tissue-preservation claims would require evidence and clinician review.
- HELD: the chronic-pain biofeedback rewrite remains blocked pending exact clinician approval. Its safe link-only repair is already live; do not retry the rejected full-content write.
- WAITING: GBP after 11 October 07:06 SGT; settled GSC/GA4 after 09:08 SGT; overseas safety crawl after 12 October 19:00 SGT; lower-eyelid/profile crawl after 13 October 09:00 SGT.
