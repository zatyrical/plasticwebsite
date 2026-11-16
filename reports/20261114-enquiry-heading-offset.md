# Liposuction recovery anchor stylesheet — prepared repair

14 November 2026. Same PR401, base main57c79c9f2c862b6270106e8f8845417d778f627c. Original reservation6871454749; refined scope reservation6872188454. Branch seo/enquiry-heading-offset-20261114. This is an observed navigation defect, not a clinical expansion or weekly article.

## Actual public defect and healthy controls

Direct ordinary browser entry to https://www.drjeremysun.com/compression-foam-lymphatic-massage-after-liposuction followed by the hero Non-urgent consultation enquiry link navigated to #enquire. After native smooth scrolling settled, read-only DOM measurement showed H2 top−0.171875px/bottom47.703125px under sticky nav top0/bottom75px, computed scroll-margin-top0px. Screenshot corroborated complete heading obstruction. No fields/submission/CAPTCHA interaction occurred; security verification completed automatically during viewing.

Independent ordinary browser controls on14November: body-contouring FAQ target top96.359375px and related-page target top96.203125px, both with computed96px and header bottom75px; FAQ screenshot showed full clearance. Rapid-recovery enquiry target top96.390625px, computed96px, same header bottom75px. These existing routes work; they are not fixed-version tests. No eyebag/profile crawl was made.

## Correct cause and final narrow repair

The global100px rule alone is not the entire article styling system. Existing app/procedureAnchors.css supplies96px for .article-page h2[id], h3[id] and section[id]. ProcedureQuickLinks imports it, covering shared procedure pages and the rapid-recovery page. The compression-recovery custom page lacks that component/import. This accounts for the rendered difference. Do not claim all shared enquiry headings are currently broken.

Final code change is ONE import in app/compression-foam-lymphatic-massage-after-liposuction/page.tsx, after its ContactForm import:

`import '../procedureAnchors.css';`

Reuse the existing stylesheet exactly. app/globals.css is byte-identical to main; earlier proposed global selector addition is removed from the final PR diff. No new stylesheet/rule/value, component, form, tracking, clinical copy or review/modification date change. Current Next.js CSS documentation https://nextjs.org/docs/app/getting-started/css confirms App Router stylesheet imports and production chunking; verify the production build, not only development output. Existing module behavior also matches the MDN scroll-margin-top reference read for this batch.

## Validation, backup and rollback

Normal build and exact tested tree/deployment results are recorded in issue7 and the PR. Original page and CSS recoverable at base57c79c9; exact import absent in main, inserted once. Removing that one import restores the original page bytes. Preserve all later content and unrelated397/381/FTM/phone work; do not replay a complete old file. Closing the unmerged PR is the current rollback; after an eventual guarded merge revert only its import against fresh source. Historical staged changes in the original checkout are untouched.

## Publication boundary

Draft401 remains UNMERGED until ordinary fixed-version desktop and narrow browser checks confirm the complete enquiry heading clears the header and existing section jumps/forms remain intact. Prior exact-head preview for the earlier proposal was READY, but one ordinary visit led to Vercel sign-in. That is NOT fixed-version proof for this refined head. Do not repeat an unchanged protected-auth probe or use bypass/share links, alternate protected routes, style injection, or network/security workarounds.

No real enquiry, provider email, analytics conversion, clinical approval, ranking/enquiry uplift or weekly-publication credit is claimed.
