# Lymphedasia services and advanced-skin URL recovery — 8 October 2026

## Scope

Recover two historical patient/resource paths that are currently returning 404, without changing clinical copy or touching existing redirect rules.

| Historical URL | Observed gap | Maintained destination | Rationale |
|---|---|---|---|
| `/services/` | 404, noindex | `/` | Google's indexed snapshot describes the retired page as a broad education, resource and consultation gateway. The redesigned homepage now provides that gateway and links into assessment, treatment and key guides. |
| `/lymphedema-tree-bark-skin-on-legs/` | 404, noindex | `/understanding-the-4-stages-of-lymphedema/` | The reviewed stage guide directly covers advanced-stage skin thickening, folds and papillomatosis without creating a duplicate thin article. |

## Pre-write checks

- Full Redirection snapshot: `reports/backups/20261008-services-and-advanced-skin-before.json`
- Existing rules: 42
- Both sources returned HTTP 404 with `noindex`.
- Both destinations returned HTTP 200, were indexable and self-canonical, with one H1.
- No conflicting rule existed for either source.
- No site content or clinical claim was changed.

## Planned change

Create two exact, case-sensitive, trailing-slash-tolerant HTTP 301 rules in the supported Redirection REST API.

Rollback: disable only the two newly created rule IDs recorded in the completed audit.
