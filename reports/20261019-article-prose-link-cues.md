# Article prose link cues — 19 October 2026

## Evidence and change

Base: `0bbe3c513b2fa0733f69d701bb908f0788f90cf4`. Independent of draft PR252, which stages WordPress investigation only. Issue7 checkpoint: 6260034772.

Public desktop Chrome (1363px viewport) showed ordinary paragraph links on the rapid-recovery and body-contouring guides with no underline. On the rapid-recovery guide, the implant-planning link and three PubMed references computed the same `rgb(49,65,61)` colour and `400` weight as their surrounding paragraph, with transparent background and `0px none` bottom border. The body-contouring guide's neck, fat-grafting and tummy-tuck links also lacked decoration. This is a reading/navigation defect, not evidence of a ranking loss.

Primary reference inspected 19 October: [W3C G183](https://www.w3.org/WAI/WCAG22/Techniques/general/G183), updated 27 July 2026. Persistent underlines give a non-colour cue. The technique is guidance, not a whole-site WCAG certification or a promise of improved ranking.

Added only `text-decoration-line:underline` and `text-underline-offset:3px` to links with `href` inside article paragraphs/list items. Both selectors exclude `.btn`, `[role="button"]` and links within `nav`. Nothing changes link destinations, colours, weight, typography, margins, clinical copy, dates, schema, forms, analytics or sitemap. Navigation, related-card and hero-summary anchors are outside the prose scope; existing reviewer/fallback link rules remain intact.

## Verification and release

- Exact CSS reverse guard: removing the one new block restores the base file byte-for-byte. Shared renderer, procedure data, identity, sitemap and dedicated rapid-recovery page also byte-identical to base.
- `npm run lint`: passed. All 46 existing automated tests passed.
- Initial Next build stopped with a local Turbopack persistence-database error. Existing `.next` was moved intact outside the repository to `../next-cache-before-article-links-20261019`; no source or dependency workaround was used. Clean-cache production build then passed, generating 47 pages.
- Existing credential, label contrast, enquiry focus, llms source, navigation, comparison tables, full-size diagrams, fragment and sitemap-date audits passed; fragment audit checked 789 links across 41 static pages. FAQ parity audit passed.
- New build-wired source audit checks the exact scoped selectors, exclusions and decoration-only declarations. It is not a browser cascade test. `--scope` additionally checks the exact CSS reversal and unchanged content/date files.
- Rapid-recovery before sample: first linked paragraph width776px, height119px, font17px, line-height29.75px, margin-bottom20.4px. Hero/header enquiry buttons and contents-summary links had decoration `none`.
- Remote/local source tree equality, CI status, fresh-main/mergeability, expected-head merge guard, intended-project deployment and ordinary live computed styles must be verified before calling this published. Publication IDs and actual after checks belong in issue7 after release. No protected-preview bypass/share URL is requested.

## Rollback

Revert only this isolated merged PR against fresh main, or remove the exact added CSS block with a unique guard and remove its build-audit hook/script together. Do not restore an entire old stylesheet over concurrent changes. Build and verify ordinary live prose links and controls after rollback. Historical content and clinical review dates must remain unchanged.

## READY / WAITING / closed candidates

| URL / item | Observed evidence and approved source | Action | Blocker / next eligible check |
| --- | --- | --- | --- |
| drjeremysun.com rapid-recovery and shared procedure articles | Actual public computed styles; existing clinical text; W3C G183 | READY: publish scoped prose-link cues after checks | Release/live verification in this batch |
| lymphedasia.com shared post template3901; therapy, MLD and physical-therapy articles | Existing PR252 records missing link cues and broader Astra `.entry-content` side effects; current Elementor native-CSS documentation | WAITING: verify actual entitlement/control and choose supported narrow fix, then fresh backup/guard/save/AFTER/live/rollback reserve | WPVibe last observed99/100 at12:03; next ordinary capacity probe >=19Oct14:00SGT. No WP request/write in this batch; do not blindly apply historical `entry-content` class |
| drjeremysun.com rapid-recovery article | Existing answer-first definitions, published origins, suitability, five-row comparison, activity limits and4FAQs | CLOSED: no duplicate timeline article, FAQ or decorative visual | Specific new exercise schedules require original clinician review, not competitor-copying |
| lymphedasia.com proposed survivorship education article | Existing original draft; source-number discrepancy already documented | WAITING: clinical/source/voice review before publication | Clinician approval; no invented percentages/outcomes |
| Dr GSC Singapore Web; GA4; Lymph GSC; source/landing/hostname events | Matched direct reports already obtained18Oct, not stale10Oct-only baseline | WAITING: next eligible matched comparisons |19Oct >=15:01,16:20,17:30,20:30SGT respectively; no early duplicate report |
| surgeon-profile `dateModified` warning | PR242 deployed valid timestamp; validation started18Oct | WAITING: observe validation, do not restart | Next ordinary daily status check when authenticated UI available; no fresh successful validation claimed |
| Both GBP profiles | Authenticated18Oct22:04 facts and5LIVE posts, not public-propagation proof | WAITING: ordinary authenticated status/facts check | >=19Oct22:05SGT |

The10/11/12SGT no-live-implementation diagnosis remains quota plus broader candidate side effects and content gaps already covered or requiring clinical input, not a repository permission blocker. This independent observed technical defect was selected instead. No new outcomes, qualified enquiries, ranks, native AI mentions or earned links are claimed.
