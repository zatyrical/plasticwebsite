# Light-surface label contrast — 16 October 2026

Base main `3fdac2c2d79de3f0419ec61ecd5dc37b3eb0b26f`; isolated branch `seo/light-label-contrast-20261016`; issue7 checkpoint6210897442. Current main/latest reports/issue7/no open PR reconciled before work. Scratch maintenance removed the earlier checkout; restored the published repository from GitHub, preserving durable backups and concurrent state. No AGENTS.md found in this checkout.

## Observed fault and implemented scope

Actual source and ordinary live Asian-rhinoplasty HTML/CSS confirmed the original accent gold #b89a5e on 11–12px light-surface labels. Original served CSS was /_next/static/immutable/chunks/1f779zr3eos7e.css,200; new token absent. This is separate from8Oct LymphedAsia footer contrast and prior keyboard/motion fixes.

Added --gold-text:#765522 and changed only:
- .article-hero .eyebrow (light article-hero backgrounds)
- .related-card small (white related cards)
- .treatment-pathway-section .card small (white pathway cards)

The generic .eyebrow and decorative --gold remain unchanged. Dark sections, photo overlays, logos, focus outlines, buttons, all body text, fonts, layout, links and images remain unchanged. In particular, the aesthetic hub has a dark treatment-list section: the rule targets article-hero rather than every article-page eyebrow, avoiding accidental dark-background application.

| Defined background / case | Original ratio | New ratio |
| --- | --- | --- |
| Paper #fbfaf7 | 2.572:1 | 6.505:1 |
| Hero linear endpoint #f1eee7 | 2.317:1 | 5.860:1 |
| Conservative max16% gold overlay over that endpoint, #e8e1d1 | 2.061:1 | 5.213:1 |
| White cards #ffffff | 2.685:1 | 6.790:1 |

Ratios calculated from underlying sRGB CSS values using the W3C relative-luminance formula, not screenshot pixels. The overlay is a conservative model, not an observed screen pixel. W3C SC1.4.3 requires4.5:1 for normal text; these small labels do not qualify as large text even when bold. Reviewed16Oct:
https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

## Regression and validation

New dependency-free scripts/audit-light-label-contrast.mjs reads actual stylesheet tokens/known selector declarations, checks five foreground/background cases against unrounded4.5 threshold, verifies light-card background assumptions, and guards decorative gold/global eyebrow/focus styling and exact three-selector token scope. Integrated into normal production build; optional npm run audit:light-label-contrast.

The audit failed against the original styling and passes after the change. Initial new-rule parsing included its preceding CSS comment in the first selector; corrected comment stripping, not a production CSS defect. It is a narrowly scoped static audit, not a general CSS cascade engine, browser/screen-reader test or whole-site WCAG certification.

Production build47routes and31 existing mocked contact/API/analytics/navigation/motion tests pass; credential68files,39LLMbullets/26URLs,789fragments41pages,42navigationHTML,12comparison tables pass. TypeScript lint/FAQ30routes/date parity/diff checks run before release. No clinical prose/review/modification/sitemap dates, metadata/schema or tracking changed. package-lock unchanged; npm ci used existing lock with scripts/audit/funding disabled, no dependency added.

Generated HTML/JSON-LD and actual served stylesheet verification, exact-head READY preview/fresh-main/mergeability/local-remote tree guards, expected-head merge and production proof are recorded in issue7. No protected preview bypass/share-link/forced fetch. Ordinary public GETs only; no enquiry POST/email/browser patient session or synthetic event. Rollback: revert only this four-file PR after checking subsequent changes.

## Independent patient-journey discovery: sports3016

Fresh direct page https://lymphedasia.com/lymphedema-and-sports-tips-for-athletes/ returned200/oneH1/selfcanonical/post3016; body text inspected directly rather than relying on a cached reader or assumed article wrapper. Current page already promotes tailored activity/therapist assessment, so no duplicate exercise article, checklist or graphic justified.

HELD for original clinician/evidence review, no medical edit:
- Universal workout/daily compression language needs to distinguish diagnosed lymphoedema, at-risk people and individually prescribed use.
- Broad significant swelling-reduction and post-exertion MLD recovery statements need evidence/qualification; blanket high-impact risk/avoidance language should not become a universal prohibition.
- Default arm-pump/support-tool recommendation needs individual selection, not a routine exercise-clearance instruction.
- Generic successful-athlete stories have no identified examples or source on this page; do not represent them as original patient cases or evidence.
- The current “lymphatic drainage” anchor leads to the vibration-plate article rather than the maintained therapy explanation. Conditional future href review only; do not use a link change to imply approval of surrounding broad clinical advice.
- No new postoperative clearance timeline, restriction, pump setting or acute-infection plan invented.

Primary NCI patient guidance checked16Oct, updated6Mar2024:
https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema
It supports individually discussed exercise and trained-therapist care, not the page's blanket sports-specific claims or recovery guarantees. No NCI laser/drug/regimen statements copied. These are review findings, not proof every existing lifestyle sentence is false.

## Queue and measurement

1 Pregnancy1243 safety/triage remains highest clinical hold; skin-sensitivity3686 findings6209974094 and now sports3016 added, not automatically rewritten.
2 Six remaining href-only repairs scar3093/abdomen3022/men3085 and OT3099 off-target provider clause remain READY/WAITING ordinary WP capacity16Oct>=17:00SGT; last15:00 allowance96/100used4remaining, NOT re-polled here. Fresh raw/meta/builder backup/guards/supported save/readback/reversal/liveproof required. Advocacy6/hand3 complete PR222.
3 Reporting payment_required next17Oct/knownrestoration/export; crawltimeeligible but same access blocked. GBP next>=17Oct10:07:20. Actual native AI responses unavailable; user-reported top recommendations ONLY lymphoedema, cosmetic/recon not established. Detailed actual-page LCP trace next17Oct/knownrestoration; no repeat lab request.
4 Existing protocol/privacy/pagination/debulking holds preserved. Final17Oct baseline assessment must separate average<=10/live rank, referrals/citations and clicks/qualified enquiries.

The elective SEO playbook guided observed usability repair, explicit evidence and avoiding decorative churn. This fixes a defined reading problem, not evidence of ranking, enquiry, AI-citation or whole-site accessibility gains. If no implementation had been possible, this would have been the third investigation after PR222: specific WP allowance/clinical-input/reporting/viewport/trace gates explain those limits, not a global exhaustion claim. This independent supported CSS batch advances without bypassing those gates.
