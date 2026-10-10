# Lymphedasia stages guide: patient-journey navigation

Date: 10 October 2026

## Observed gap

`/understanding-the-4-stages-of-lymphedema/` is a high-traffic organic landing page. Its concise staging explanation and clinical review are useful, but the page jumps from staging to consultation or LVA without a clear assessment-to-treatment pathway. It also lacks a direct primary-source reference for the staging framework.

## Change scope

- Preserve the reviewed stage descriptions and existing early-assessment/LVA links.
- Add a compact next-steps section linking to existing specialist-reviewed resources for diagnosis interpretation, ICG assessment and conservative care.
- Add the International Society of Lymphology 2023 consensus document as the primary staging reference.
- Do not add new treatment promises, outcomes or eligibility claims.

## Rollback

- Exact pre-edit WordPress content: `reports/backups/20261010-lymphedasia-stages-post1582.html`.
- WordPress post revisions remain available after the supported `post update` operation.

## Validation plan

- Verify the live URL remains indexable with a self-canonical and one H1.
- Confirm each new internal link resolves and appears once.
- Confirm the external consensus reference resolves.

## Published result

- WordPress post: `1582`, still `publish`.
- Published modification time: `2026-10-10T02:00:50` UTC.
- Rollback revision: `5322` (previous live content also preserved in the repository backup).
- Cache purge completed for Rank Math sitemap, Elementor CSS and object cache.
- REST verification confirms the new section and all four links are present in rendered post content.
- The three destination articles and the International Society of Lymphology consensus PDF resolved before publication.
