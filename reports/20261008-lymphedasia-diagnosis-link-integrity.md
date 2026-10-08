# LymphedAsia diagnosis and staging link integrity — 8 October 2026

## Scope

A bounded, anchor-only audit covered eight previously unaudited diagnosis/staging decision articles:

- `/primary-lymphedema-genetics-treatment-options/`
- `/understanding-the-4-stages-of-lymphedema/`
- `/lymphedema-in-the-face-and-neck/`
- `/understanding-secondary-lymphedema/`
- `/early-signs-of-lymphedema/`
- `/can-lymphedema-be-cured/`
- `/guide-to-diagnosing-lymphedema/`
- `/lymphedema-vs-lipedema-misdiagnosis/`

The audit parsed reader-facing `<a href>` links only and checked 21 unique internal destinations.

## Findings and implementation

All eight source articles returned HTTP 200 and remained indexable, self-canonical, and single-H1.

One genuine redirect hop was found in Gutenberg post 1599, `/guide-to-diagnosing-lymphedema/`:

- anchor: “lymphedema treatment”
- old destination: `/recent-advances-in-lymphedema-treatment/`
- old behaviour: redirected to `/lymphedema-treatment/`
- repair: linked directly to self-canonical `/lymphedema-treatment/`

The old href occurred exactly once. A WPVibe match-once post-content edit reported one replacement and preserved all visible copy, clinical statements, title, schema, images, forms, tracking and publication state. WordPress created the normal revision backup.

The other seven articles were left unchanged because their checked destinations and indexability/heading/canonical state were sound.

## Live verification

Fresh public HTML after the edit confirmed:

- `/guide-to-diagnosing-lymphedema/` returns 200;
- the source remains indexable and self-canonical with one H1;
- the direct `/lymphedema-treatment/` link is present once;
- the old href is absent;
- all 12 internal destinations currently linked from the repaired article return 200 without redirect hops.

## Rollback

Restore the relevant WordPress revision or replace the direct `https://lymphedasia.com/lymphedema-treatment/` href with `https://lymphedasia.com/recent-advances-in-lymphedema-treatment/` using a match-once content edit. Ordinary post writes invalidate the affected page cache.

## Limits and next checks

This is a reader-path and crawl-efficiency repair, not evidence of ranking or conversion improvement. Google Business Profile is next eligible on 9 October 2026 at or after 06:54 SGT; Search Console and GA4 are next eligible at or after 09:08 SGT; the eyebag/profile crawl check is next eligible on 10 October.
