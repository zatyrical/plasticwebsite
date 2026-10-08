# LymphedAsia consultation contrast and mobile audit — 8 October 2026

## Scope and baseline

Audited the live public page [Lymphedema Specialist Consultation Singapore](https://lymphedasia.com/private-lymphedema-consultation-singapore/) after reconciling campaign issue #7 and current main `4c5f654fadad58dd13c89aa0fe1b40be636fa62b`. The elective-SEO decision was to improve the existing assessment and contact path, not create another overlapping article.

A single mobile Lighthouse run through the connected WordPress site measured:

| Category | Result | Interpretation |
| --- | ---: | --- |
| Performance | 86/100 | Lab only; LCP 3.6s, FCP 2.3s, TBT 20ms, CLS 0, Speed Index 3.7s |
| Accessibility | 92/100 | Colour contrast and target size flagged |
| Best practices | 100/100 | No flagged issue in this run |
| Basic SEO | 100/100 | No flagged issue in this run |

There is no CrUX field data for this page. Lighthouse lab scores can vary 5–15 points, so these numbers are not treated as outcomes. Stable performance opportunities were unused CSS (estimated 268KiB) and unused JavaScript (74KiB).

## Observed issue

Astra stored `link-color: #6f98ff`. Read-only live style inspection measured:

- consultation phone/form/WhatsApp/email links: about 2.66:1 on `#f8fbfd`;
- ordinary internal and on-page links: about 2.76:1 on white;
- footer “Professional profiles:” label: about 1.81:1 on `#1b3942`;
- footer profile links: about 4.45:1 on `#1b3942`.

These are below the 4.5:1 threshold used for the 17px text in this page. The issue affected clinically relevant navigation and contact actions sitewide, rather than one decorative element.

## Implemented through supported Astra settings

| Setting | Before | After | Measured live result |
| --- | --- | --- | --- |
| `link-color` | `#6f98ff` | `#3157c8` | 6.07:1 on the pale consultation box; 6.31:1 on white |
| `link-h-color` | `var(--ast-global-color-1)` | `#b33f0f` | 5.56:1 on pale; 5.78:1 on white |
| `footer-widget-1-color` | empty responsive values | `#f7f7f7` desktop/tablet/mobile | 11.46:1 on the dark footer |
| `footer-widget-1-link-color` | empty responsive values | `#b8ccff` desktop/tablet/mobile | 7.67:1 on the dark footer |
| `footer-widget-1-link-h-color` | empty responsive values | `#ffffff` desktop/tablet/mobile | high-contrast hover/focus |

Astra/Elementor/Rank Math/object caches were cleared automatically during the supported option writes. No page-builder JSON, clinical statement, URL, metadata, tracking code or booking route changed.

## Live verification

Fresh public verification confirmed:

- self-canonical page, one H1 and existing title preserved;
- visible phone, Astrid appointment form, WhatsApp and email links preserved in both contact sections;
- phone/form/WhatsApp computed link colour `rgb(49,87,200)` at 6.07:1 on the live pale box;
- footer label `rgb(247,247,247)` at 11.46:1;
- footer profile links `rgb(184,204,255)` at 7.67:1;
- contact destinations remain `tel:+6565303573`, Astrid's appointment form, `https://wa.me/6587649219` and `mailto:contact@astridplasticsurgery.com`.

No enquiry was submitted.

## Rollback

Restore:

- `link-color` → `#6f98ff`
- `link-h-color` → `var(--ast-global-color-1)`
- `footer-widget-1-color`, `footer-widget-1-link-color`, `footer-widget-1-link-h-color` → `{"desktop":"","tablet":"","mobile":""}`

## Ranked queue

| Priority | URL/scope | Evidence | Action/status | Blocker/next eligible |
| --- | --- | --- | --- | --- |
| 1 | Sitewide LymphedAsia links and consultation footer | Measured contrast failures above | **IMPLEMENTED + VERIFIED** | Measure multi-week behaviour; no uplift claim |
| 2 | Consultation-page mobile touch targets | Lighthouse target-size flag; exact mobile nodes not returned | **READY INVESTIGATION**: identify flagged nodes before CSS changes | Do not widen every inline link speculatively |
| 3 | Gutenberg consultation and other non-Elementor pages | 268KiB unused CSS / 74KiB unused JS; page still loads Elementor Font Awesome shim and global scripts | **READY INVESTIGATION**: map template/plugin dependencies before any conditional dequeue | Plugin-wide changes require regression checks |
| 4 | Both analytics/GSC properties | Latest settled comparison completed | **WAITING** | 9 Oct >=09:08 SGT |
| 5 | Both GBP profiles | Latest factual/publication check completed | **WAITING** | 9 Oct >=06:54 SGT |
| 6 | Eyebag/profile crawl status | Recent check completed | **WAITING** | 10 Oct |
| 7 | Revision-rhinoplasty timing, tummy-tuck timing, pump selection | Requires original clinical explanation | **WAITING** | Clinician input |
| 8 | Fixed native AI prompts | Actual native platform responses unavailable | **WAITING** | Platform access |

This repair improves readability and contact-path accessibility. It does not prove improved rankings, AI citation, enquiry quality or conversion.
