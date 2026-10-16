# Homepage motion reliability — 16 October 2026

Base main: `6b67eb7849a4ddba39c844dd5e9bd0d13d719a88`. Isolated branch: `seo/motion-fail-open-20261016`. [Issue #7 checkpoint](https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6206308744).

## Observed gap and scope

Reconciled current main, campaign log through6205741050, no open PR, latest PR219 and the existing enquiry/scar-navigation reports before choosing this independent task. Contact live-region and scar-treatment navigation candidates were already implemented, so no repeat edits.

The actual `MotionObserver` effect enabled `motion-js` and card classes before constructing its two unguarded IntersectionObservers. The associated CSS gives unrevealed cards opacity .04, blur14px and a strong rotation. A missing/throwing observer or registration failure could therefore leave those cards masked, without a registered cleanup. This is a source-demonstrated failure path reproduced in isolated tests, not evidence of an actual patient incident. MDN describes IntersectionObserver as widely available; no universal browser failure is claimed.

Only the homepage currently contains `.segmented-section` markup: seven sections in generated output. The observer is globally mounted but does not need to create observers on the procedure pages that have no targets. This is homepage navigation/readability work, not a rewrite of cosmetic or reconstructive procedure content.

## Implemented

- Check required animation APIs and the existing reduced-motion preference before enhancement; return without motion mutations when unsupported or when no sections exist.
- Construct/register observers and prepare classes before enabling the body-level motion styles. On setup failure, disconnect anything created and restore original classes and custom delay values/priorities.
- Mirror setup during normal cleanup. Ignore late observer callbacks and queued frame callbacks after cleanup.
- Apply the existing fully revealed CSS state to `:focus-within` cards on desktop and mobile, so keyboard focus does not depend on a delayed observer reveal. The existing animation durations, thresholds, root margins, staggering and normal reveal design remain unchanged.
- Add a build-integrated test suite and `test:motion` alias. No new dependency, network request, tracking event, form handler or clinical statement.

## Verification

- Initial six new test groups failed against the prior implementation (including an explicit activation-order invariant in the test doubles). After implementation, seven groups pass: missing APIs/reduced motion/no targets; either constructor failure; partial registration failure; normal section toggles and one-shot cards; late callbacks/frames; setup-cleanup-setup; desktop/mobile focus-state CSS.
- Tests transpile the real component and run its effect with isolated hook, DOM, observer and animation-frame doubles. They do not emulate browser layout, rendering or assistive technology.
- Full production build passes:47 routes,68 credential-audit files/no findings,39 LLM bullets/26 URLs/no missing or duplicate routes,789 fragment links across41 pages,42 navigation HTML files/no failures,12 accessible comparison tables/no failures.
- All31 contact/API/analytics/navigation/motion regression tests pass after the final test addition. TypeScript lint,30-route FAQ parity, sitemap/date parity and diff whitespace checks pass. The two output-dependent audits were initially invoked before build output existed; they were rerun after the completed build.
- Generated homepage retains one H1 and seven segmented sections, with no server-rendered motion-masking classes. Clinical content, all URLs/links, images, metadata/schema, review/modification/sitemap dates, forms and analytics source are untouched.
- Local interactive browser testing is unavailable because no browser executable is installed (established in PR219). No computed-style, physical-device, real keyboard/scroll interaction or full accessibility-conformance claim. No browser download, protected-preview bypass, live enquiry POST, email or analytics test event.

Exact-head preview readiness, expected-head merge, exact-production identity and ordinary public HTML/CSS/JS release checks are recorded in campaign issue #7 after publication. Those checks verify delivery, not real-browser execution or ranking/conversion uplift.

## Source coverage

The elective SEO playbook guided observed delivery and enquiry-path reliability, preserving existing clinical work instead of creating thin pages or decorative imagery. No additional ElectiveSEO video inspection or search-demand claim.

Primary technical references inspected16October:

- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API — asynchronous visibility callbacks and API behaviour; broad browser availability.
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection — check features before enhancing a baseline.
- https://react.dev/reference/react/useEffect — setup/cleanup symmetry and development setup-cleanup-setup cycle. Documentation version need not equal the installed project version; no upgrade made.
- https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html — motion preference context. Existing reduced-motion behaviour retained; no new conformance claim.

## Rollback and next queue

Revert only this PR and rebuild after checking concurrent work; preserves PR219 table accessibility and previous navigation/clinical fixes. No data or URL migration.

| Priority | Observed gap / URL | Status and next action |
| --- | --- | --- |
| 1 | Lymphedasia pregnancy1243 | HELD original clinical wording/evidence/local urgent-triage decisions; exact findings6204059809. No cosmetic promotion of unresolved claims. |
| 2 | Advocacy3986 practical resources | READY content, WAITING ordinary WP capacity16Oct>=11:00SGT; PR215 backup is not a current guard. Fresh fullraw/builder/meta backup, supported match-once save and readback/liveproof. |
| 3 | Hand/scar/abdomen/men-vs-women href repairs | One404 and eight references through existing redirects, queued6205741050. Same capacity/backup guards; no global redirect of unanswered alcohol question. |
| 4 | OT3099 off-target Phelps Health clause | Conditional READY same capacity/guards; broader medical claims HELD. |
| 5 | Cosmetic/reconstructive original protocol questions | Specific donor-site, technique and counselling explanations need clinician input; current broad answers already covered. Do not fill from competitor claims or memory. |
| 6 | Distinct next discovery | Inspect actual mommy-makeover consultation-planning questions against existing page and prior reports before proposing anything; no new page or clinical answer assumed. |

Waiting: reporting entitlement blocked16Oct00:05, next17Oct or known restoration/export; time-eligible eyebag/profile crawl remains subject to authorised access. Existing GBP post3334046696687541456 moderation>=16Oct10:05, no recreation. Native AI fixed-prompt responses unavailable; user observations remain lymphoedema-only, cosmetic/reconstructive mentions unverified. Final baseline assessment17October. No new rank/enquiry/citation outcome claimed and no additional automation.
