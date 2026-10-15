# Cosmetic figure integrity and responsive delivery — 16 October 2026

Base main `a613ca9a932b82161153dd9444d13427b86169de`; branch `seo/cosmetic-figure-delivery-20261016`; checkpoint6200135880. Current main/issue7 through6199070044/latest PR215 report reconciled; no open PR or overlapping edit. Staged WordPress3986 untouched before its ordinary allowance gate.

## Actual independent technical gap

The breast-implant-illness evidence page's existing1600×900 landscape infographic was inside `article-hero-image-card`, the cropped sidebar-image component. Source CSS imposes a portrait aspect ratio and cover fitting at desktop, a4:3 ratio/tablet cap and mobile height cap; tablet also constrains the figure to420px despite its position in full-width article content. The raw source image was visually inspected: explanatory text, limits, study panels and reference span its width. This is an inference of clipping from actual live markup and source CSS, not a captured browser screenshot or a clinical reassessment.

Ordinary public GET16October returned200 and confirmed this old figure class and size hint on the BII page. It also confirmed obsolete900px/330px sizing on rapid recovery and900px/520px on the compression/foam guide; Asian-eyelid source and generated HTML had the same330px issue. The first live image-name filter did not match the Asian-eyelid filename, so that empty filtered result was not treated as an absent image. The release check uses the figure wrapper, not guessed filenames.

The8October batch fixed the shared ProcedureArticle image hints. It did not update these three bespoke page components; that prior work is preserved rather than repeated. The9October hints batch added missing sizes elsewhere, not these existing incorrect hints.

## Implemented coherent batch

| Page | Observed mismatch | Correction |
| --- | --- | --- |
| /breast-implant-illness-singapore-evidence | Content infographic inherits sidebar cover crop and narrow figure rules | Reuse existing uncropped article-material-figure styling; preserve intrinsic1600×900 ratio; add explicit underlined full-size-image link |
| /24-hour-rapid-recovery-breast-augmentation-singapore | Old900px/330px hint versus current CSS | Match existing summary-slot geometry |
| /asian-eyelid-surgery-singapore | Same bespoke hint mismatch | Match existing summary-slot geometry |
| /compression-foam-lymphatic-massage-after-liposuction | Old900px/520px hint versus current CSS | Match existing summary-slot geometry |

Sidebar slot: <=600px viewport minus78px (44container padding +32card padding +2border); <=1180px420px maximum figure; desktop330px sidebar minus52padding/2border=276px. Content infographic slot: <=760px viewport minus46px (44container/2figure border); <=1180px714px; desktop774px. Hints describe existing layout rather than changing it. Source selection may decrease oversized candidates in some viewports and restore sufficient resolution at others; no universal bandwidth saving measured.

No new image, crop/edit of an image file, copied clinical claim, treatment-result photograph, thin URL, title/description/canonical/schema/robots change, new clinical-review date, tracking tag, form modification, test enquiry or outreach. Existing prose, FAQs, source citation, numerical figure content, image alt/dimensions, priority/lazy behaviour and all clinical/review/metadata dates preserved. Render-only delivery correction does not justify announcing a new clinical review or daily metadata churn.

## Guidance and scope

Elective SEO playbook: fix an observed reading/delivery problem, use purposeful existing educational imagery and preserve original approved content. Current primary documentation checked16October:
- https://nextjs.org/docs/app/api-reference/components/image — CSS governs rendered dimensions; sizes assists responsive source selection; cover fitting crops.
- https://developers.google.com/search/docs/appearance/google-images — understandable image context/alt and accessible standard image markup.

No Ubersuggest account/report or paid credit used; no estimated keyword/rank numbers. Its SEO-foundations skill was inspected for data/credit boundaries, not used as evidence about this practice's rankings.

## Validation and rollback

Exact expected-source comparison against the base proves the only four page edits are the declared sizes/class/full-size link changes. Image asset SHA256 unchanged: `6e8d33f680d7064c912c975dc6da66dda780cb9c56357abd1cf62b1b685d6958`. Global CSS unchanged. Dedicated script `node scripts/audit-cosmetic-figure-delivery.mjs` verifies these invariants, generated figure/anchor/intrinsic dimensions, singleH1/selfcanon and all three sidebar hints. Initial audit assumed grid-template-columns was the first declaration in a CSS block; corrected fixture allows the preceding display:grid declaration. This was a test assumption, not a site fault.

Full production build47routes including24mocked API/analytics/nav tests; TypeScript, credential/source/fragment/navigation checks; FAQ parity and sitemap-date parity pass. React review: four static server pages, no new hook/client boundary/listener/fetch/dependency, existing image loading policy preserved and semantic native anchor with visible underline. No physical browser binary available; computed geometry, mobile screenshot, screen-reader certification, field CWV, actual transferred-byte savings or rank gains are NOT claimed.

Release only after exact-head Vercel previewREADY/GitHubsuccess, unchanged-main/expected-head merge guards. Verify intended-project/team exact-main productionREADY and ordinary public four-page image attributes, uncropped class, full-size link and original image hash. Do not access protected preview via bypass. Release proof/status recorded in issue7.

Rollback: revert this isolated PR and rebuild/verify four original figure references/size hints. No WordPress or external state to reverse.

## Ranked next queue and waiting gates

| Priority | Target / observed evidence | Action and status | Next eligible |
| --- | --- | --- | --- |
|1| Four cosmetic pages above | Implemented technical batch; validate/release/live proof | This batch |
|2| Advocacy3986, six source-backed navigation edits | READY; WAITING ordinary WP allowance, fresh envelope guard required; PR215 backups |16Oct>=11:00SGT |
|3| Distinct priority question/authority gap | READY investigate actual source; do not repeat closed scar/lift-vs-implant/rib-donor broad questions | Next independent discovery |
|4| Family3502, checkups3618, olderadult4288, surgeon-specific protocols/privacy facts | HELD exact clinician/operator input; do not improvise | On input |
|5| Blog pagination/empty17, debulking857 parity | HELD supported reversible release/fixtures | On safe workflow |
|6| GSC/GA4 reporting | payment_required16Oct00:05; no fresh data or retry here |17Oct or known restoration/export |
|7| Eyebag/profile inspection | WAITING72-hour cadence, subject to authorised access |16Oct>=09:00SGT |
|8| GBP3334046696687541456 | WAITING ordinary moderation check; do not recreate |16Oct>=10:05SGT |
|9| Native AI prompts/final baseline | Actual responses unavailable; user-observed top suggestions apply ONLY lymphoedema, not cosmetic/reconstructive | Final17Oct / actual access |

This implementation follows two no-live-implementation investigations; independent technical discovery did not stall on the transient WP cap or reporting entitlement. No new Google ranking, native AI mention/citation, accepted enquiry, qualified lead or booked consultation established.

