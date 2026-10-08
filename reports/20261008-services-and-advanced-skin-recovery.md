# Lymphedasia services and advanced-skin URL recovery — 8 October 2026

## Outcome

Two historical, relevant patient/resource paths now permanently redirect to maintained equivalents. No clinical copy, metadata or existing redirect was changed.

| Historical URL | Before | Destination | Live result |
|---|---:|---|---|
| `/services/` | 404, noindex | `/` | 301 → 200 |
| `/lymphedema-tree-bark-skin-on-legs/` | 404, noindex | `/understanding-the-4-stages-of-lymphedema/` | 301 → 200 |

## Evidence and rationale

- Google's indexed snapshot describes the retired `/services/` page as a broad education, resource and consultation gateway. The redesigned homepage now provides that gateway and links into assessment, treatment and key guides.
- The reviewed stage guide directly covers advanced-stage skin thickening, folds and papillomatosis, matching the old tree-bark URL's patient intent without creating a duplicate thin article.
- The alternative debulking-surgery page contains the phrase “tree-bark”, but it is narrower surgical intent and was not selected as the redirect destination.
- Both destinations returned HTTP 200, were indexable and self-canonical, with one H1 before the redirect write.

## Change

Created exact HTTP 301 rules through the supported Redirection REST API:

- Rule 43: `/services/` → `https://lymphedasia.com/`
- Rule 44: `/lymphedema-tree-bark-skin-on-legs/` → `https://lymphedasia.com/understanding-the-4-stages-of-lymphedema/`

Post-write inventory contains 44 rules. A field-by-field comparison of IDs 1–42 found no changed or missing prior rule.

## Validation

- Both sources return exactly HTTP 301 with the intended `Location`.
- Both chains terminate in HTTP 200.
- Homepage destination remains self-canonical, index/follow and one H1.
- Stage-guide destination remains self-canonical, index/follow and one H1.

Full evidence: `reports/20261008-services-and-advanced-skin-after.json`.

## Rollback

Disable only rule IDs 43 and 44:

`POST /redirection/v1/bulk/redirect/disable`

Body: `{"items":[43,44],"global":false}`

The full pre-write Redirection snapshot is in `reports/backups/20261008-services-and-advanced-skin-before.json`.
