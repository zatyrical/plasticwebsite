# Lymphedasia shared-post heading structure —19October2026

Base main `29dd745e7e5e34a4c6431d949f312eda7d0f48d4`; branch `seo/lymphedasia-template-headings-20261019`; issue7 checkpoint6255666853. Fresh main, clean tree, latest issue6255135378 and18/19Oct reports reconciled; no overlapping PR. The18Oct3511/4167 reading paths and PR250 are complete, not repeated.

## Observed issue and scope

The current https://lymphedasia.com/lymphedema-therapy/ body is concise, with H2 sections, H3 FAQ questions and a native list. It has no article table. CLOSED the proposed table/overflow/header repair and extra contents/body rewrite.

The public page instead demonstrates a shared-template heading-order issue: its H1 is followed by an H4 Table of Contents, and its separate reviewer box uses H5. The same tags occur on the manual-drainage and physical-therapy articles. This matches the earlier9Oct template-level finding, not a fault in the newly added article links.

Actual published Elementor single-post template3901 contains TOC widget620c495 and author-box77b0e4c. Live schema identifies Elementor3.35.5; the TOC's `html_tag` defaults toH4 and supportsH2; the author's explicit `author_name_tag` isH5 and supportsH2.

Changed only:
-620c495 settings: added `html_tag: h2`.
-77b0e4c settings: `author_name_tag: h5 → h2`.

Both are structural headings under each article's H1. Existing titles, prose, biography, links, styling settings, dynamic fields, content widgets, IDs, template type and `include/singular/post` conditions are preserved. No new medical facts, review date, clinical protocol, claim, form, tracking, post-body edit, global theme setting or schema added. This is not a complete WCAG audit or ranking remedy.

## Supported builder save and rollback

Fully read Elementor envelope/save instructions and Free/Pro widget instructions; obtained actual targeted live controls rather than guessing settings. Verified administrator, WordPress6.9.10, WPVibe1.20.1/content_edit and Astra4.12.3. The existing template is classic containers/widgets; no atomic conversion, plugin update, rawSQL or cache-bypassing metadata write.

Full fresh template raw/metadata plus expected data, two-field delta and supported reverse-save body archived before mutation:
`reports/backups/20261019-single-post3901-before-and-plan.json`.
Initial archive d9e39eac; clarified checkpoint-date/actual guard timestamp c8d0f82a464d7be2f74d16e18426bdf58020bfef before any site write. Guard time18Oct22:00:14UTC =19Oct06:00:14SGT, not an invented future capture time. Immediate full read equals the original template object.

One supported POST `/wpvibe/v1/elementor/save-template` with id3901, original single-post type, original conditions and expected data. Returned original type/conditions, empty warnings. No uncertain or repeated write.

Fresh after data exactly matches the expected element tree. Removing the added TOC field and restoring the one author tag reproduces the original entire tree. All exposed template metadata keys except `_elementor_data` are unchanged; title/status/author/slug/link/featured_media/template are unchanged. After proof archived24a2bc35e3a19c26dcf527695d76f243d015092d:
`reports/backups/20261019-single-post3901-after.json`.

Rollback: reconcile fresh current3901 and reverse only those settings, retaining all later work; submit through the same supported save-template path with original current conditions, inspect warnings, readback and verify sample live articles. The archived original complete save body is available if no intervening changes exist. Normal template revisions also exist. Git revert alone does not undo the WordPress publication.

## Verification

Fresh ordinary GETs on:
- https://lymphedasia.com/lymphedema-therapy/
- https://lymphedasia.com/manual-lymphatic-drainage-therapy/
- https://lymphedasia.com/lymphedema-physical-therapy/

All return200, expected selfcanonical, oneH1, TOC H2 and reviewer H2, template3901 and unchanged August2026 review labels. A fresh authenticated3511 read is exactly equal to before (raw body, title, modified timestamp and permalink), preserving the18Oct links.

Actual public-browser verification: connected extension lacks originating context; Browser skill permits cloud public-UI verification. Fresh therapy page shows H1 then H2 contents, functioning generated section links, intact body and clinical review. Clicked Core parts of therapy; URL moves to `#elementor-toc__heading-anchor-0`. No form entry/submission or contact action. The reviewer H2 becomes an additional contents entry; this is disclosed, not claimed to leave the generated list byte-identical. TOC does not list its own title. Public current Elementor handler source also explicitly excludes its header-title selector. No claim of narrow-mobile, screen-reader-product or full visual/interactive conformance. Diagnostic browser loads can emit existing automatic page views; not patient demand or a new lead.

## Evidence and limits

Primary W3C heading guidance checked19Oct:
https://www.w3.org/WAI/tutorials/page-structure/headings/
Logical heading ranks aid structure/navigation and skipped ranks can confuse. Fixed-region exceptions exist; this is a bounded improvement to two identified shared fields, not a claim that every skipped level is automatically a failure.

Elective-seo-playbook directed observed reader structure, prior-work reconciliation and reversible publication. No ranking, qualified enquiry, AI mention/citation, clinical improvement or earned link inferred.

Repository batch contains this report and two JSON evidence files only. JSON/expected-tree/reverse/conditions/metadata/raw-body/allowlist/whitespace checks passed. No app source or dependencies changed and no unnecessary full-app rebuild for external WordPress template evidence. Exact-head preview status, fresh-main/mergeability/local-remote tree, expected-head merge and exact-main production checks recorded in issue7. WordPress live output independently proves publication. No protected Vercel preview/share-link access.

## Queue

- COMPLETE shared3901 heading repair; recheck only a concrete fault. Article table candidate CLOSED,3511 links retained.
- WAITING19Oct>=15:01SGT DrGSC;>=16:20GA4acquisition;>=17:30LymphGSC. Exact4052/4060/treatment-hub query/page evidence before overlap/consolidation decision.
- WAITING source/hostname/events>=20:30; actual hosting-request evidence for traffic origin. No bot/filter assertion.
- HELD PR248 survivorship draft, clinician voice/source review and30.1/30.9 source discrepancy; exact cosmetic operator/privacy processes and clinical source interpretations.
- READY distinct WordPress reader-path discovery only where current source demonstrates a gap; no repeat generic articles/links or re-audit of closed publications/chest/library/consultation candidates. Shared missing-main/colour-only links remain broader template/theme questions, not fixed or cleared by heading tags; require exact selector/region mapping and cross-template regression before any future shared change.
- Profile validation19Oct/no reclick; routine tummy21Oct>=15:01 andUTM>=17:30 absent fault; GBP19Oct>=22:05; no early analytics/GBP repetition. Native AI responses not obtained. Existing outreach boundaries unchanged.

This implemented batch ends the no-implementation sequence documented in6254461625/6255135378. No paid tool, quota reset, outbound message, real enquiry/email, synthetic event, new automation or disable.
