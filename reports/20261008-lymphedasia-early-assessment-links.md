# LymphedAsia early-signs-to-assessment reader paths — 8 October 2026

## Observed gap

Two high-intent educational articles already explain why early specialist assessment matters, but neither offered a contextual link from the relevant sentence to the site's existing assessment page:

| Source | Existing decision language | Previous path |
|---|---|---|
| `/early-signs-of-lymphedema/` (post 4256) | “still warrants specialist assessment” in the Stage 0 discussion | No contextual assessment link |
| `/understanding-the-4-stages-of-lymphedema/` (post 1582) | “early assessment” in the Stage 1 discussion | No contextual assessment link |

The assessment destination already existed at `/private-lymphedema-consultation-singapore/`, returned HTTP 200 directly, and was the appropriate patient-journey continuation.

## Implementation

Both sources are Gutenberg posts. WPVibe match-once content edits wrapped only the existing phrases with a descriptive internal link to:

`https://lymphedasia.com/private-lymphedema-consultation-singapore/`

Each source had zero previous references to this destination. Each target phrase occurred once and each edit reported exactly one replacement. No new clinical wording, CTA claim, title, metadata, schema, image, form, tracking or publication state was introduced. WordPress created the normal revision backups.

## Verification

Fresh public HTML after publication confirmed:

- both source URLs return HTTP 200;
- each remains indexable, self-canonical and single-H1;
- “specialist assessment” and “early assessment” each render as a descriptive link to the direct assessment URL;
- the destination returns HTTP 200 without a redirect.

This strengthens the reader journey from symptom recognition and staging to the existing assessment pathway. It does not establish a ranking or conversion gain.

## Rollback

Restore the relevant WordPress revision, or remove the two anchor wrappers while preserving the original visible phrases:

- `<a href="https://lymphedasia.com/private-lymphedema-consultation-singapore/">specialist assessment</a>` → `specialist assessment`
- `<a href="https://lymphedasia.com/private-lymphedema-consultation-singapore/">early assessment</a>` → `early assessment`

Ordinary post writes invalidate the affected page cache.

## Next eligible checks

- Google Business Profile: 9 October 2026 at or after 06:54 SGT
- Search Console and GA4: 9 October 2026 at or after 09:08 SGT
- Eyebag/profile crawl: 10 October 2026
