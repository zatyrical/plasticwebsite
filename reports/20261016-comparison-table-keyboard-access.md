# Comparison-table keyboard access — 16 October 2026

Base main `bc42491de518abab64ebac2ba8e77353bdecdb69`; branch `seo/comparison-table-keyboard-access-20261016`; issue7 checkpoint6204798008. Current main/latestissue7 through6204059809/noopenPR reconciled; PR215/217/218 and13October navigation report read. No active overlapping edit. Pregnancy1243 remains HELD clinical review; no repeated edits or early connector checks.

## Observed independent gap

The current generated site has12 `.article-comparison-wrap` containers with680px minimum-width tables and horizontal overflow. Nine lack explicit keyboard focusability and a named region: eight shared-template tables plus the bespoke rapid-recovery table. Three newer bespoke tables (breast reconstruction, liposuction recovery and overseas safety) already have this treatment. The13October site focus rule covers links/buttons, not these div containers. Column and row header scope is already present and was not rewritten.

| Newly explicit focus/name | Existing treatment retained; receives scoped focus indicator |
| --- | --- |
| /24-hour-rapid-recovery-breast-augmentation-singapore | /breast-reconstruction-singapore |
| /asian-rhinoplasty-singapore | /compression-foam-lymphatic-massage-after-liposuction |
| /body-contouring-liposuction-singapore | /plastic-surgery-overseas-safety-singapore |
| /breast-aesthetic-surgery-singapore | |
| /breast-augmentation-singapore | |
| /eyebag-removal-lower-blepharoplasty-singapore | |
| /fat-grafting-singapore | |
| /lower-limb-reconstruction-singapore | |
| /tummy-tuck-singapore | |

Current primary technical guidance checked16October:
- MDN overflow accessibility: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow#accessibility — some browsers do not make scroll containers keyboard-focusable; recommends tabindex0, a suitable role and accessible name. Current page modified27August2026. Browser behavior varies; this is not a claim that every old table failed in all browsers.
- W3C Focus Visible: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html — keyboard interaction needs a perceivable focus indicator.

## Implemented

- Shared comparison wrapper now has native `tabIndex={0}`, region role and existing caption-derived accessible name.
- Rapid-recovery comparison wrapper has the same native focus/role treatment and descriptive name.
- One scoped `:focus-visible` rule gives comparison containers a3px emerald outline with3px offset, including the three already-focusable tables. No layout/overflow/dimensions/table data changed.
- New `audit-comparison-accessibility.mjs` checks every generated comparison wrapper, nonempty name/caption and existing row/column header semantics. It runs as part of `npm run build`, so future omissions fail the build. Default generated-output audit needs no Git history; optional local `--scope` reverses only declared attributes/CSS/package scripts against the fixed base, preserving all original content and dates.

No table text, clinical prose, FAQ, image, source link, title/description/URL/canonical/robots/schema, clinical review, page modification/sitemap date, form, enquiry response or analytics code changed. Native HTML/CSS only; no keyboard interception, new dependency, client boundary, hook, listener, fetch or API/data change. Content generation avoided because this is an observed delivery issue, not an unanswered medical question. The elective SEO playbook informed the scoped technical/readability investigation; no ranking-factor or AI-placement claim is made.

## Verification and limits

Full production build47routes and24isolated API/analytics/navigation regressions passed. Credential68files/no findings; llms39bullets/26URLs/no missing or duplicates;789fragments/41pages; navigation42HTML/no failures. Generated comparison audit:12tables/12routes, all focusable/named with caption and scoped headers. TypeScript lint, FAQ30routes, sitemap-date parity and exact-source scope/diff checks passed; final release proof in issue7.

Verification story: static server-rendered guide → existing horizontally overflowing table → native focus/scroll behavior; no API or external data boundary is involved. Local Playwright module is available but its browser executable is missing; no system Chromium/Chrome found. Browser launch stopped there, no download/alternate protected-browser access. Therefore actual375px Tab/ArrowRight/Tab-out behavior and computed focus rendering are NOT verified, nor are screen readers or full WCAG conformance claimed. This is a stated test limitation, not proof of a site failure. Build and ordinary public-output/CSS verification remain the release evidence.

Release: exact-head previewREADY/GitHub success; local/remote tree equality; fresh unchanged-main and expected-head guarded merge; exact-main productionREADY and ordinary publicGET checks of all12wrappers plus served focus CSS. No protectedpreview bypass, live enquiry POST, email, synthetic event or person-directed outreach. Rollback: revert this isolated PR/rebuild/recheck wrappers/focus rule; preserve prior clinical/navigation work.

## Next queue and gates

1. Pregnancy1243 priority clinical-safety wording/evidence review — HELD original clinician input; exact findings6204059809. Do not promote or silently rewrite.
2. Advocacy3986 six staged practical-resource edits PR215 — READY/WAITING ordinary WP allowance16Oct>=11:00SGT, fresh authenticated fullsourceguard/backup/supported save/readback/reversal/liveproof.
3. OT3099 off-target provider clause-only cleanup — conditionalREADY after3986/samecapacity/guards; wider claimsHELD.
4. Nutrition candidate `/essential-guide-to-nutrition-and-dietary-choices/` remains fresh discovery queue, first reconcile prior reports/current actual page. No inferred cannibalisation or automatic article.
5. Existing clinical/operator/privacy and safe pagination/debulking release holds retained. GSC/GA4payment_required16Oct00:05, next17Oct or known restoration/export. Crawl>=16Oct09:00 subject authorised access; GBP3334046696687541456moderation>=16Oct10:05/no recreate. Final baseline17Oct.

No new ranking, qualified enquiry or native AI citation result. User-observed top Gemini/ChatGPT applies ONLY lymphoedema; cosmetic/reconstructive visibility remains unestablished. Narrow waits do not exhaust independent ready work or warrant disabling the sprint.
