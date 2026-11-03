# Shared procedure contents navigation — 4 November 2026

Base main `333c66b340ff6b2ce48d47c9bc0c61a790eba49a`; reservation6617838643; isolated branch `seo/procedure-contents-landmark-20261104`. Fresh issue7/latest6616440703/fetched and API main/latest369 report/requested17Oct records/open355257252 reconciled. Existing checkout changes and held drafts preserved.

## Observed gap and change

The shared `app/ProcedureArticle.tsx` renderer placed its actual “On this page” heading/list directly inside the summary aside, without a navigation landmark. Ordinary body-contouring guide GET returned200/exact URL/116653bytes/SHA25633953f70cfcb1c3f60faecd61e123a920b260cffe98bc4c94b7f482390b1f414 and corroborated the missing menu landmark. URL: https://www.drjeremysun.com/body-contouring-liposuction-singapore .

Wrap only the existing heading/list in a native nav labelled by the existing heading, now uniquely identified as `procedure-contents-heading`. The enclosing aside, image and its caption remain outside the new menu. All visible content, menu destinations, clinical claims, other links, CSS, metadata/schema, clinical review dates, sitemap dates, forms and tracking are preserved. Twenty procedure articles use this renderer. No new URL, clinical answer, image or metadata refresh.

This is distinct from the completed3Nov custom liposuction-recovery page change and13Oct sitewide skip/primary-navigation work. The existing sitewide navigation audit tests primary navigation/skip links/content targets; it does not establish this contents-menu landmark. No permanent test scaffolding is added for this narrow reversible change.

Current primary guidance actually read4Nov: https://www.w3.org/WAI/tutorials/page-structure/regions/ (displayed update24Mar2026). It illustrates a native nav labelled by an “On this page” H2. This supports exposing the existing menu to landmark navigation; it is not a declaration of full WCAG compliance, a mandatory violation or a ranking benefit.

## Validation

- TypeScript exits0 and git whitespace check passes.
- Actual React/ReactDOM static rendering before/after for all20 article objects: exactly one new named contents nav and heading ID each; all IDs unique; every contents fragment resolves. Removing just the new nav and heading ID reproduces each original render exactly, preserving every other rendered byte including links, images and JSON-LD.
- Scoped source inverse reproduces immutable base exactly. Only renderer and this report change.
- Temporary direct-Node harness initially could not import CSS modules; it was corrected to map unchanged CSS names consistently for both renders. This is not browser/layout verification and did not change application source. No effect or submission handler runs in the static render; no enquiry/email/analytics event sent.
- Existing local full-build Google-font resolution limitation is not retried or represented as passing. Exact final-head hosted build, fresh main/clean mergeability/expected-head guard and ordinary production verification are required and recorded in issue7.

## Recovery and boundaries

Immutable BEFORE renderer blob `628ec6a729ee639681de60bafd8cf7b9f01e5e2f` at base333c66b. After a fresh source/concurrent-change check, revert only this PR or remove this exact wrapper/ID while preserving later work; rebuild/deploy and verify ordinary live output. No WordPress state to restore.

No Lymphedasia blocked-origin retry, protected-preview bypass/share link, WP/GBP/outreach/analytics/authentication/subscription/automation change. Direct reporting and GBP next>=5Nov01:07SGT; calendar/SAME355 TWO release gates unchanged. This accessibility maintenance is not the weekly substantial article. No ranking, qualified-enquiry or native-AI gain inferred. Counter resets only upon actual successful publication proof.
