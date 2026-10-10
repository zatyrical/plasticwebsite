# Remaining FAQ visible/schema parity audit — 10 October 2026

## Scope and disposition

- Audited every production-built HTML route containing `FAQPage` JSON-LD on main commit `9efebc173d90689e3874b7cbd5fc0c6672b2cf35`.
- The audit removed every script, style and template block before comparing normalized rendered text, so React hydration data could not create a false visible-content pass.
- 30 routes emitted FAQ markup. Twenty-seven had exact visible question-and-answer parity. Three had six answer/question mismatches in total.
- Google removed its FAQ rich-result documentation in June 2026 because the feature is no longer shown in Google Search. Google also says structured data is not required for its generative-AI features and cautions against overfocusing on it. This repair therefore makes no ranking, rich-result, click, enquiry or AI-citation claim.

Primary guidance checked:

- Google Search documentation updates: https://developers.google.com/search/updates (15 June 2026 FAQ rich-result removal entry).
- Google Search generative-AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (last updated 10 July 2026).

## Observed mismatches

| Route | Pre-repair issue | Repair |
| --- | --- | --- |
| `/breast-reconstruction-singapore` | One schema answer omitted two visible sentences, while one useful visible FAQ was omitted from the duplicated schema list. | One existing six-item array now renders both visible Q&A and retained schema. |
| `/journey-to-lymphedema-surgery-japan` | Three schema items used questions/answers that did not exactly match the visible FAQ section. | The three existing visible patient Q&As now form one shared source for visible content and retained schema; the separate related-reading answer remains visible and link-rich without duplicated markup. |
| `/lymphedema-surgery-singapore` | Two schema answers were shorter than the visible answers, while three useful visible FAQs were omitted from the duplicated schema list. | One existing six-item array now renders both visible Q&A and retained schema. |

No new medical claim, outcome, price, credential, metadata, review date, tracking, URL or enquiry behaviour was introduced. The visible patient content was preserved.

## Reusable validation

Added `npm run audit:faq-parity`. It scans the production build and fails if any retained FAQ schema question or answer is absent from visible HTML. The check covers all FAQ-enabled routes, not only the three repaired pages.

## Validation plan

- `npm run lint`
- `npm run build`
- `npm run audit:faq-parity`
- Confirm one H1, self-canonical and no `noindex` on all three affected built pages.
- Confirm branch and production deployment heads before and after expected-head merge.

## Rollback

Revert the eventual squash-merge commit. The change is isolated to the three page components, the reusable audit script, `package.json` and this report.
