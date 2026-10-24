# Patient-guide index section heading — 24 October 2026

Ordinary live GET of https://www.drjeremysun.com/blog returned200. The30 article cards used H3 headings in a sibling content section with no H2 parent. The Topics H2 belongs to a separate sidebar, not this article collection. Current source and prior index work were reconciled before selecting the gap.

Added the visible H2 “All patient guides” immediately above the existing notice and collection. Associated the section with that unique heading using aria-labelledby. Card headings, styling, titles, descriptions, links and order remain exact. The collection's operational dateModified and matching sitemap date advance to24October; no clinical-review date changes.

Primary guidance read24October: https://www.w3.org/WAI/tutorials/page-structure/headings/ — heading ranks describe sections and subsections; fixed sidebar headings are treated separately. This is a navigation/accessibility improvement, not an asserted ranking factor or full accessibility certification.

Validation: full npm run build passed with repository tests and rendered-output audits. Parsed generatedHTML against the pre-change ordinary liveHTML:30cards unchanged, all hrefs identical and ordered, all previous visible text identical after excluding the new heading. One unique heading ID and matching section aria-labelledby; main sequence H1, sidebarH2, collectionH2, cardH3. No CSS changes or card retagging. No browser visual/mobile certification claimed. Publication proof and current queues are recorded in issue7.

Backup: base6a2eb02a772b6ca38b843c82c1a155c196ad9a54. Rollback by reverting this isolated PR, including the two matching operational dates, while preserving later work. No WordPress, form, tracking, outbound or clinical mutation.
