# Procedure shortcuts and overseas follow-up paths — 9 October 2026

Base: af34c5ee06c41439048e499273f80dd94ac7a853. Reconciled issue7/PR108 and the 4,6,7,8 October body-contouring reports before choosing work.

## Evidence and disposition

The body-contouring clinical-content/visual candidate is closed: current page already separates fat, loose skin, muscle laxity and weight concerns; contains an assessment comparison table; addresses candidacy, non-surgical options, cost components, recovery, risks and prompt medical advice; has relevant tummy-tuck, recovery and mommy-makeover links and a labelled consultation illustration. No new article, medical statement or decorative picture was warranted.

A distinct shared-navigation fault was confirmed from public HTML and browser state: Suitability pointed to #who-this-is-for on both body-contouring and face/neck pages even though each has a specific #suitability section. The selector preferred document order among exact IDs instead of the declared ID preference.

Three recovery sections had no contextual path to the newly approved overseas guide: body contouring, tummy tuck, face/neck lift. Existing rhinoplasty/rib/breast links remain appropriate and are retained.

## Implementation

- Respect declared exact-ID preference before partial-ID fallback. Suitability now reaches #suitability when it exists; guides without it retain their current fallback.
- Reuse the exact existing overseas-checklist paragraph in the three recovery sections. It covers preparing questions about anaesthesia, records and in-person care; no new clinical or legal claim introduced.
- No URL/title/metadata/review-date/schema/tracking/form/image changes.

## Validation

npm ci --ignore-scripts restored dependencies; npm run build passed (45 routes and TypeScript). git diff --check passed.
All 21 built shared-guide shortcut maps have existing fragment targets. Six affected public-before pages returned HTTP200. Only body-contouring and face/neck Suitability change target; four other sampled shortcut maps remain identical. Three new links render once each; previous three links remain once each. The six pages retain one H1. Evidence: 20261009-procedure-paths-validation.json and 20261009-procedure-built-shortcuts.json.

Exact-head Vercel preview, guarded merge, production/live proofs are recorded in campaign issue7 after publication. No protected deployment bypass.

## Source guidance checked 9 October

- Google contextual crawlable links: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google people-first content/page experience: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google AI features: https://developers.google.com/search/docs/appearance/ai-features (no special AI markup requirement)
- W3C link purpose: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html (principle used for predictable navigation, no full WCAG-conformance claim)

## Rollback and next queue

Revert this isolated PR's ProcedureArticle.tsx edits; preserve concurrent publications. Existing article content and links remain in git.

1. COMPLETED body-contouring content/visual investigation and shortcut/checklist batch; do not repeat.
2. READY independent investigation /breast-reconstruction-singapore: current patient journey/authority paths; first reconcile prior reports. Publish only supported changes or close an answered candidate.
3. HELD Lymphedasia single-post accessibility until exact Elementor scope and regression checks; quality-of-life/biofeedback clinical rewrites remain held.
4. WAITING GBP10Oct>=07:06SGT; GSC/GA410Oct>=09:08SGT; eyebag/profile crawl10Oct; overseas-guide crawl>=12Oct19:00SGT; outcome comparison16Oct/final17Oct.

This is implementation and usability evidence, not ranking, enquiry or AI-citation uplift.
