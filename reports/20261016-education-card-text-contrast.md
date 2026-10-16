# Education and authority-card text contrast — 16 October 2026

Base main `7e9a265856a6533cefaa282dc55a5a87ff1664cf`; isolated branch `seo/education-card-text-contrast-20261016`; issue7 checkpoint6213107290. Reconciled issue7 completion6212212349/clarification6212221506 and PR224, latest reports and current main; no open PR or overlapping edit. PR224 WordPress work is complete, not requeued.

## Observed fault and implementation

Fresh ordinary public HTML of homepage, blog, media and training/fellowship pages returned200/oneH1. Actual served CSS `/_next/static/immutable/chunks/3j5iio1c6n6f8.css` returned200 and parsed declarations confirmed palegold `var(--gold)` for blog categories, mentor-area labels, media sources and linked-card action spans. These active selectors were outside PR223's three-family scope.

Category/source text is11–12px; linked-card actions13px; mentor-area small text is also normal-size text. Original accent#b89a5e gives2.6847558501:1 on white, below4.5:1 for normal text under W3C SC1.4.3. These are reading/navigation labels, not exempt decorative marks.

Extended the existing scoped text rule to seven additional selectors, using the existing `--gold-text:#765522`:

```
.blog-card small
.mentor-content small
.media-card small
.media-feature-card small
.blog-card.linked-card > span
.media-card.linked-card > span
.media-feature-card.linked-card > span
```

The direct-child action selectors target current card actions without recolouring arbitrary image overlays or nested elements. Current source and generated HTML place these cards on light surfaces; mentor cards have a white background. Media cards use88% white, and labels/actions are outside the image containers.

New text contrast is6.7899443555:1 on white. An88% white media card composited over black gives conservative#e0e0e0 background; new ratio5.1435717361:1 versus original2.0337772427:1. Black is a lower background bound, not the actual current parent or a screenshot pixel. Contrast is calculated from actual stylesheet values, not a physical-browser or full-WCAG certification.

Seven added text selectors are the ONLY production-style change. Removing only those additions recovers base CSS byte-for-byte. Original decorativegold, generic eyebrow, dark-section text, photos, captions, mentor-note badges, hover/focus, fonts, sizes, layout, motion, link destinations, all clinical copy, review/modification/sitemap dates, metadata/schema, forms and tracking remain unchanged. No dependency or page/component changes.

## Actual generated coverage and tests

Script tags were removed before counting class attributes, avoiding doubled counts from React serialization. Existing card instances:

| Route | Education cards | Media cards | Mentor cards |
| --- | ---: | ---: | ---: |
| / |13|3|0|
| /blog |30|0|0|
| /media |0|13|0|
| /training-and-fellowships |0|0|6|

65 card instances across four URLs; repeated homepage/blog entries are not represented as65 distinct articles. Existing small labels and action spans retained. No new clinical coverage inferred from a style change.

Expanded existing `audit-light-label-contrast.mjs`: seven new cases plus prior five; actual token/selector/background checks, unrounded4.5 threshold, conservative media composite and exact allowed scope. The new cases failed BEFORE the CSS edit at2.6847558501:1 and pass AFTER. Previous scope still passes. This is a narrow declaration parser, not a general browser cascade engine. Globalgold/focus/genericeyebrow preservation guards remain.

Validation: production build47routes;31existing mocked contact/analytics/navigation/motion tests; credential terminology68files;12contrast cases; LLM39bullets26URLs;789fragments41pages;42navigationHTML;12comparison tables; TypeScript lint; FAQ30routes; sitemap/date parity; diff check PASS. No live enquiry POST/email/event, browser-patient journey or protected-preview bypass.

## Independent question and technical discovery

Inspected actual SW1 abdominoplasty page16Oct, including mini/full/extended comparison, navel considerations and recovery, against current DrSun source and14Oct authority report. Existing DrSun guide already covers the main decision questions, comparison, scar/navel discussion, assessment-layer visual, recovery, risks and11FAQs. CLOSED duplicate mini/full answer, article or image; competitor durations, facilities and technique claims were not imported.

Competitor source: https://www.sw1plasticsurgery.com/services/abdominoplasty/ . This is competitor-page evidence, not proof of search demand, rank or clinical approval. Revision after earlier tummy tuck is a candidate requiring original clinician scope and explanation; current general previous-surgery/assessment text does not establish a dedicated revision service. HELD, no new availability or protocol claim and no thin revision page.

Investigated prior suggested procedure-map/cluster label families: their class names occur in current CSS but have no current app component usage, and no occurrences in the four inspected generated pages. CLOSED as an unused-style candidate; no unnecessary CSS edit or claim that live patients saw those controls. Homepagehero/photo/dark-surface labels remain outside this batch pending actual specific evidence; no globalcolour replacement.

W3C primary guidance checked16Oct2026: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html . Normal-text4.5 minimum, unrounded ratios, underlying style colours and decorative exclusions applied. Elective SEO playbook guided concrete reading fault, current-source inspection, existing-content reuse and reversible evidence; no ranking effect claimed.

## Publication and rollback

Publish only after exact-head previewREADY/GitHubsuccess, fresh unchanged-main/mergeability/local-remote tree guard and expected-head merge. Verify exact-main productionREADY, fresh ordinary public HTML200/oneH1/selfcanon/JSON-LD parity on four routes, actual served CSS refs and the seven new declarations. Record immutable release identities in issue7. No access-protected preview workaround.

Rollback: revert only this three-file PR after checking subsequent edits, rebuild and verify removal of seven added selectors while retaining PR223. This does not alter or revert PR224's WordPress content.

## Ranked next decisions

1 Pregnancy1243 original clinical safety/triage remains highest held input; men3085 risk-source evidence and prior skin/sports/nutrition/workplace/family/checkups/olderadult holds remain. No new clinical statement approved by this readability patch.
2 Next distinct cosmetic/reconstructive discovery: actual revision-question context only if not already covered, or another concrete authority/enquiry fault; avoid repeated mini/full/figure/comparison edits. Material technique/service/protocol additions need original clinician input.
3 WordPress next ordinary capacity>=16Oct19:00SGT, not a promised reset. Six legacy href candidates plus OT clause and follow-up context repairs COMPLETEPR224. Do not repeat them.
4 GSC/GA4 payment_required16Oct00:05; next17Oct or known restoration/authorised export. Eyebag/profile inspection timeeligible but same access blocker. GBP next>=17Oct10:07:20; rapidrecoverypost alreadyLIVE, not recreated. Detailed LCP attribution next17Oct/known usable trace, not aggregate mobilelab repeated hourly.
5 Native fixed-prompt AI responses unavailable. User-observed recommendations ONLYlymphoedema, not cosmetic/reconstructive. Final17Oct assess baseline honestly: GSCaverage<=10 is not verified live rank; referrals are not citations; clicks/events are not qualified enquiries. No outcome uplift established by this batch.
