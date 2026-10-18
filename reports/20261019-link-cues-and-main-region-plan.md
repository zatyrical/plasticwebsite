# Article link cues and main-region mapping —19October2026

Status: **PREPARED, NOT PUBLISHED**. Base main `fdb7facd02c429e1a545a25180afad5905e05c24`; branch `seo/lymphedasia-content-link-cues-20261019`. Issue7 PR251 completion6255717963 and latest main/report read; no overlapping open PR. PR251 heading repair remains complete and is preserved in this plan.

## Actual independent evidence

Ordinary live HTML of therapy3511, manual-drainage4167 and physical-therapy3630 has no main element or role=main. The exact outer shared template wrapper is:
`div.elementor-3901.elementor-location-single[data-elementor-type="single-post"]`.
It contains two root containers: article-title root and content/TOC/reviewer root. The homepage already has `main#main.site-main`. Therefore do not add an unconditional site-wide main, change only the body-widget tag and omit the article title, or introduce guessed/nested wrappers.

Actual cloud public-browser therapy inspection at1363×936 finds no main landmark and no horizontal overflow. Five inline article links compute to:
- link rgb(49,87,200), text-decoration-line none, font-weight500;
- surrounding text rgb(71,95,102), same font-weight500.
Link-to-surrounding-text luminance contrast is1.07467186621914:1, not the text/background contrast. This verifies the non-colour-cue concern; it is not a complete contrast/WCAG or mobile audit. Prior H1/H2 repair is intact. No contact/form action or measurement report was performed. Diagnostic loads can emit ordinary pageviews, not new patient demand.

## Root cause and proposed native fix

Fresh actual Astra source `inc/class-astra-dynamic-css.php` lines931–958:
the enabled underline setting produces `.ast-single-post .entry-content a` rules, with established builder/button exclusions.
Read-only actual `option pluck astra-settings underline-content-links` returns1. DO NOT toggle the already-enabled setting or rewrite the entire options object.

The shared post-content widget is `c6e5c72`, widgetType `theme-post-content`; current wrapper lacks `entry-content`. Current live Elementor3.35.5 schema explicitly exposes native text control `_css_classes`. Proposed single-field change:
`c6e5c72.settings._css_classes: absent → "entry-content"`.

This would make the shared article wrapper eligible for Astra's existing content-link treatment, without new CSS/PHP, an HTML/script widget, plugin install, global typography/colour replacement or theme replacement. It is a supported proposal, NOT a demonstrated post-fix result. Because other Astra rules also use entry-content, validate margins, typography, widths, lists/tables, existing button exclusions and media on several articles before retaining it. Roll back if the class has unwanted broader effects. Do not claim the missing main landmark is fixed by a CSS class.

Full fresh template data/metadata and proposed/rollback save bodies:
`reports/backups/20261019-link-cues3901-before-and-plan.json`.
Remotely archivedcdb8f183d684a5b348dd10f0d5ef8c018412fa13. Original type single-post and conditions include/singular/post preserved; PR251 H2 settings retained. All article text, clinical review dates, biography, template IDs and other settings are unchanged in the plan.

## Why no live mutation

Latest ordinary WPVibe usage notice was95/100 at targeted schema read, followed by site-info and current-template reads. Call counting/aging is not assumed exact. There is not verified headroom for fresh guard + supported save + authenticated readback + possible rollback/recovery. Do not spend a reset, buy a plan, change accounts or attempt an uncertain write. No WP mutation has been attempted in this batch.

Next ordinary capacity check at/after19Oct08:00SGT, or known available capacity; not a promise of hourly quota reset. Before publication:
1. Reconcile issue7/main/open draft and fresh current3901 with this plan; preserve concurrent changes and rearchive fresh backup/unique reverse before mutation.
2. Verify sufficient ordinary capacity for guard/save/readback AND recovery. Do not consume it on repeated discovery.
3. Use supported Elementor save-template with original current type/conditions and only the native class addition. Inspect warnings; never retry a timed-out save before reconciling real state.
4. Fresh authenticated after must match expected tree; removing only the added field must reproduce before. Check all exposed metadata/conditions and sampled article raw/review unchanged.
5. Ordinary live checks on at least three shared posts and homepage control. Actual computed-link underline and contrasting paragraph/list/table/button/author/nav rendering; desktop dimensions plus any supported narrow viewport; preserve oneH1 and TOC navigation. If mobile unavailable, state that limit.
6. Archive AFTER, update this report from prepared to actual outcome, validate isolated-file allowlist, then publish/merge with existing guards. No full-app rebuild needed solely for external-WP evidence; actual WordPress output proves publication independently of Vercel report deployment.

Rollback after fresh reconciliation: remove only the added _css_classes field through supported save-template, preserving current heading fixes/conditions/later work, then readback/live verify. Archived original supported body is suitable only if no intervening changes exist. Normal template revisions available. Git revert alone does not restore WordPress.

## Main landmark remains separate

No supported outer-wrapper control has been established. Native post-content widget has no link-style controls; broad abilities discovery returns only two core read-only abilities and no Astra abilities. Astra4.12.3 admin settings expose no abilities switch; this is an older-version capability observation, NOT an owner read-only security toggle or permission to enable access. No switch, plugin, template condition or active theme file was changed.

Keep the missing main issue mapped to the outer single-post wrapper. Need a supported outer-wrapper setting or separately reviewed theme/hook solution with backup, appropriate preview/publication requirements and cross-template tests. Do not route around snippet activation or draft-theme approval gates. No PHP snippet, arbitrary live code, draft-theme publication or fake main fix.

## Guidance / queues

Primary W3C inspected19Oct:
- https://www.w3.org/WAI/WCAG22/Techniques/general/G183 (updated27July2026): link-versus-surrounding-text distinction, separate from text/background contrast.
- https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html : primary-content landmark; avoid duplicates and misplaced scope.

Elective-seo-playbook guided an observed non-clinical reader fault rather than keyword/metadata churn. Astra documentation led to diagnosing the enabled rule and avoiding an ineffective toggle; builder/live controls support the native-class candidate. Publication pauses for recovery capacity, not a claim that independent work or all website access is blocked.

READY: native class candidate above once capacity/fresh guard established; no need to repeat discovery.
WAITING: DrGSC19Oct>=15:01SGT; GA4acquisition>=16:20; LymphGSC>=17:30 (4052/4060/hub exact query/page overlap decision); source/hostname/events>=20:30. Profilevalidation19Oct/no repeatedValidateFix; routine tummy21Oct>=15:01/UTM>=17:30; GBP19Oct>=22:05.
HELD: missing-main wrapper solution, original survivorship draft clinician/source review, exact operator/clinical policies. Existing outreach boundaries unchanged; native AI responses unavailable.

No site/clinical/review-date/tracking/GBP/outbound mutation, paid tool/reset, real enquiry/email, synthetic event or automation change. No rank, qualified enquiry, AI citation or implementation gain claimed. This is preparation after publishedPR251, not a completed accessibility fix.
