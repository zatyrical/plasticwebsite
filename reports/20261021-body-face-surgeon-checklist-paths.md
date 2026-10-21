# Body-contouring and face/neck surgeon-checklist paths — 21 October 2026

## Observed gap and scope

Base main: `5045826a2259336c638f19eeed095f96dcd9628e`. Issue #7 was reconciled through comment `6306246143`; checkpoint `6307050593` owns only this batch. Open drafts #252 and #257 are unrelated.

Fresh ordinary browser reads verified the current public pages and their existing `choosing-surgeon` sections:

- https://www.drjeremysun.com/body-contouring-liposuction-singapore#choosing-surgeon
- https://www.drjeremysun.com/face-neck-lift-singapore#choosing-surgeon

Both sections already give procedure-specific comparison points. The maintained plastic-surgeon guide separately contains practical credential-evaluation and consultation-question sections, but neither procedure decision point routed readers to them. The generic reviewer/profile link near the top of each page serves a broader biography task rather than the exact comparison task.

Maintained destinations:

- https://www.drjeremysun.com/plastic-surgeon-singapore#evaluate
- https://www.drjeremysun.com/plastic-surgeon-singapore#consultation

## Implemented change

After each existing `choosing-surgeon` section, added one concise sentence linking readers to the credential-evaluation checklist and consultation questions alongside that page's procedure-specific points.

No clinical claim, outcome, price, credential, title, description, keyword, canonical, review date, sitemap date, image, FAQ, form, tracking or unrelated page changed. No new page was created. The batch reuses maintained first-party patient guidance rather than duplicating it.

Google's current primary link guidance was checked on 21 October 2026: https://developers.google.com/search/docs/crawling-indexing/links-crawlable . It recommends crawlable `<a href>` links with concise, descriptive, contextual anchor text. This supports the patient-navigation and discovery mechanism; it does not establish a ranking gain.

## Validation and release gates

- Exact scope diff contains two three-line JSX conditionals plus this report; `git diff --check` passes.
- TypeScript passes.
- The production build passes with all 69 mocked form, security, analytics, navigation and motion tests.
- Credential terminology, label/diagram contrast, enquiry focus, article-link cues, LLMS, navigation, comparison-table, full-size diagram and sitemap/schema date audits pass.
- The internal-fragment audit passes 795 fragment links across 41 static pages.
- Built HTML contains exactly one visible `evaluate` link and one visible `consultation` link on each affected page; the destination HTML contains each target ID once.
- Before merge, fetch current main, confirm no overlapping changes and require the expected branch head. After merge, verify both ordinary production pages and both destinations without submitting an enquiry.

Rollback: revert the isolated merge commit after reconciling any later edits. No WordPress, analytics, GBP or external-message state is involved.

## Queue disposition

| State / URL | Observed evidence / approved action | Blocker / next eligible check |
|---|---|---|
| READY release / two procedure URLs above | Procedure-specific comparison sections plus maintained credential and consultation checklists; add contextual paths only | Fresh-main, mergeability, expected-head, deployment and ordinary-live gates |
| WAITING / exact facelift and body protocols | GLP-1, weight/nutrition thresholds, technique, scar and revision-timing questions remain clinical holds | Original clinician explanation/approval; no competitor-derived protocol |
| WAITING / GSC + GA4 both domains | No new matched outcome dataset in this publication batch | Direct UI 21 Oct at or after 12:02 SGT; Wizard at or after 17:11 SGT, no purchase |
| WAITING / eyebag, profile, tummy and UTM | Existing 72-hour cadence; no new observed fault | Page checks at or after 15:01 SGT; relevant UTM at or after 17:30 SGT |
| WAITING / PR #252 and PR #257 | Supported layout owner and clinician-review requirements remain unresolved | New qualifying evidence only; preserve held drafts |
| WAITING / both enquiry forms | Turnstile already deployed | Genuine user completion/error evidence; no synthetic production enquiry |

This implementation resets the no-implementation count. No ranking, qualified-enquiry or AI-citation improvement is claimed.
