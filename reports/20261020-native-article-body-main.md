# Native article-body main landmark —20October2026

Base main `69b6ec6da0d4762da8ed1a563b8b1fe8d30cf728`; isolated branch `seo/lymphedasia-body-main-20261020`; issue7 checkpoint6278433173. Read issue7 through6277328429/current main/latest PR259 and17Oct resumed/final assessment before selection. PR252/257 remain separate drafts; no active editor. This work changes container05c30d6, not PR252's post-content widgetc6e5c72 link styling.

## Finding and bounded implementation

Shared Elementor post template3901 had no main landmark. Actual current tree has separate top-level title containercc59558 and body container05c30d6. The body holds featured image, TOC, post content, divider and reviewer. Conditions are exactly `include/singular/post`.

Added ONE native field: `05c30d6.settings.html_tag = "main"`. All other data, widths, margins, typography, content, dynamic tags, heading settings, TOC scope, reviewer, conditions and document settings are unchanged. No new wrapper, reparenting, CSS/class, theme/snippet/feature activation or clinical wording/review-date change.

This is deliberately an ARTICLE-BODY landmark, not a claim that the separate H1 now sits inside it. Official Elementor's single-page tutorial uses this separate-title/main-body pattern. An H1 outside main alone does not invalidate that supported design. Earlier exploration sought a whole-template setting; that is not necessary for this narrower improvement. The outer Elementor wrapper stays div. No second main or role=main is added.

## Primary and installed-control evidence

Inspected20October:
- https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html — primary-content landmark, avoid duplication.
- https://elementor.com/help/container-layout-tab-settings/ — native Layout/Additional Options HTML tag.
- https://elementor.com/help/creating-a-single-page-template-with-the-container/ — separate title container, then native main body.
- https://elementor.com/help/how-to-add-html-tags-to-my-templates/ — older whole-template controls; does not establish a current supported document-settings API or justify raw serialized-meta edits.

Actual installed3.35.5 container schema: free native html_tag select includes main. Actual save-template route schema exposes id/type/status/data/conditions, not document settings. Do not guess extra keys or mutate serialized _elementor_page_settings. Full builder envelope/save guidance read.

Fresh administrator authenticated read, WP6.9.10/WPVibe1.20.1/Astra4.12.3. Ordinary allowance59remaining before investigation, ample recovery reserve retained. List-sites stored verification is not new auth; site-info read verified current connection. No quota reset/subscription.

## Backup, save and validation

Fresh full selected envelope/complete raw _elementor_data archived BEFORE save:
reports/backups/20261020-body-main3901-before-and-plan.json
commit `7afad177de56795da809a3599359ed9b2097c8b2`.

Immediate fresh envelope byte/JSON guard matched BEFORE exactly. One supported save-template id3901/type single-post/original conditions returned warnings[]. No timeout, repeat or unknown write. Actual modified `2026-10-19T22:07:49Z` =20Oct06:07:49SGT, operational template save, not new clinical review.

AFTER:
reports/backups/20261020-body-main3901-after.json
commit `e9f3e86b8ebde3c8236378ba435df874b6ceec1d`.
Parsed tree exactly equals expected single-field change. Unique reverse deleting that field restores original complete tree. Selected metadata identical except intended data and modified timestamps; conditions/document settings unchanged. Original H2 TOC/reviewer fixes retained. No clinical article post was edited.

Ordinary before/after public HTML:

| URL | Before main/body tag | After main/body tag | Preserved |
|---|---|---|---|
| https://lymphedasia.com/lymphedema-therapy/ |0/div|1/main|200,oneH1,Augustreview,0tables/3images|
| https://lymphedasia.com/what-is-lymphedema/ |0/div|1/main|200,oneH1,Augustreview,6tables/6images|
| https://lymphedasia.com/lymphedema-quality-of-life/ |0/div|1/main|200,oneH1,Augustreview,1table/4images|
| https://lymphedasia.com/ |1/no3901body|1/no3901body|200,oneH1,8images,homepage control unchanged|

All three article main regions exclude site header/footer. All three retain separate H1 outside body, as designed. Homepage's pre-existing structure is not rewritten. This is structural HTML/readback verification, not rendered narrow-mobile, computed spacing, assistive-technology testing or full WCAG conformance.

Inline CSS and current1,648,931byte aggregate stylesheet ordinary200: a scoped selector-text scanner found no main type-selector rules. This supports avoiding unintended tag-specific author rules but is not a full CSS parser/cascade or browser-layout certificate. No DOM simulation. Existing widths/mobile overrides and all style settings retained; no visual improvement/complete mobile fix claimed.

## Repository release and recovery

Only three report/evidence files, no app/public/dependency/tracking change. Meaningful checks: JSON, exact expected/reverse tree, original-node/settings preservation, selected-envelope/conditions parity, path allowlist and whitespace. No unchanged local app build repeated; Git integration build and exact-head preview/production checks tracked in issue7. Vercel deploys the evidence archive, not WordPress; actual supported readback/public HTML proves WP publication. No protected preview/share-link bypass.

Rollback: fresh current envelope/data and later-edit reconciliation; if unique05c30d6 field still main, remove only that html_tag through supported save-template with current type/conditions. Read back and verify samples/control; preserve all later edits. Archived full original save is safe only if fresh whole-tree equality proves no intervening changes. Normal template revisions remain available; no revision IDs invented. Git revert alone does NOT undo WordPress.

## Queues and outcomes

COMPLETE: native article-body landmark. PR252 link-cue CSS/class remains DRAFT/unpublished and must freshly reconcile this newer3901 tree before any future save; do not replay old full-tree backup. A whole-template main/title enclosure has not been implemented or required. Main body is now live; stale "missing main" notes are superseded only for this shared body landmark.

WAITING: PR257 exact prose review;441 original video facts/supported owner write; PR252 supported link styling/rendering decision. READY access-dependent: matched direct GSC/GA4 on actual Browser restoration at/after20Oct08:00SGT, Wizard>=16:40. GBP>=20Oct22:06. Routine profile/eyebag/tummy>=21Oct15:01;UTM>=17:30. Do not prematurely re-probe or call transport failure signout.

This actual implementation ends the three-no-implementation streak diagnosed6277328429. It does not establish ranking, qualified enquiry, earned link or nativeAIcitation gains. No outreach, real enquiry/email, synthetic analytics, tracking, GBP or automation mutation. The elective playbook focused this work on a verified non-clinical structural issue rather than adding clinical content or decorative churn.
