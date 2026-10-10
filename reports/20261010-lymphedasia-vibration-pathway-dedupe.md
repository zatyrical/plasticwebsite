# Lymphedasia vibration-plate guide: duplicate pathway cleanup

Date: 10 October 2026

## Observed gap

The high-traffic guide at `/vibration-plates-for-lymphedema-treatment/` already has strong evidence limitations, safety guidance and primary-source references. However, two adjacent treatment-pathway boxes repeat the same three destination links before the article begins. The duplication makes the opening less readable and overweights the same commercial navigation.

## Change scope

- Preserve the newer, styled “When to move from self-care tips to a lymphedema treatment plan” block.
- Remove only the older adjacent `hermes-commercial-pathway-20260911` block.
- Preserve all medical, safety and evidence content.

## Rollback

- Exact removed block: `reports/backups/20261010-lymphedasia-vibration-post1885-removed-duplicate.html`.
- WordPress revisions remain available after the supported match-once content edit.

## Validation plan

- Confirm one pathway block remains above the first H2.
- Confirm each of the three pathway destinations appears once in the retained block.
- Confirm the live URL remains indexable with a self-canonical and one H1.

## Published result

- WordPress post: `1885`, still published.
- Match-once edit replaced exactly one block; all clinical, safety and evidence content was preserved.
- Rollback revision: `5323`.
- Cache purge completed for Rank Math sitemap, Elementor CSS and object cache.
- Live rendered verification: one retained pathway block, zero older duplicate blocks, one H1, self-canonical and `index, follow`.
