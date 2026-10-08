# LymphedAsia asset-handle map and conditional-unload candidate

**Checked:** 8 October 2026 (Singapore)  
**Scope:** live public pages on `https://lymphedasia.com/`; read-only inspection only.

## Outcome

The earlier Lighthouse finding of approximately 268 KiB unused CSS is traceable to a real enqueue problem rather than to the page's own Spectra blocks.

The cached aggregate stylesheet on the private consultation page is:

- 1,562,278 decoded bytes
- 264,844 transferred bytes in this check
- dominated by Elementor/Elementor Pro, ElementsKit and Jeg Elementor Kit rules

WordPress metadata shows **32 published pages**, of which **11 are built with Elementor** and **21 are not**. The non-Elementor pages still receive the same global Elementor-adjacent CSS and several scripts.

No live dequeue was made in this pass. The active parent-theme directory is not an appropriate durable place for custom performance logic, WPCode is not installed, and the available connector does not provide a supported reversible edit path to the existing custom plugin. Installing a new snippet plugin or replacing the parent theme solely to force this change would increase operational risk.

## Representative live checks

| Page | Editor evidence | Elementor elements | Elementor widgets | ElementsKit/Jeg elements | MetForm elements | WordPress blocks |
|---|---|---:|---:|---:|---:|---:|
| Private consultation (ID 4698) | no `_elementor_edit_mode=builder`; no `elementor-page-{id}` body class | 1 body marker only | 0 | 1 body marker only | 0 | 15 |
| Homepage (ID 4717) | no Elementor builder meta; no `elementor-page-{id}` body class | 1 body marker only | 0 | 1 body marker only | 0 | 7 |
| LVA surgery (ID 666) | no Elementor builder meta; no `elementor-page-{id}` body class | 1 body marker only | 0 | 1 body marker only | 0 | 17 |
| Legacy lymph-node-transfer page (ID 664) | `_elementor_edit_mode=builder`; `elementor-page-664` | 38 | 11 | 1 body marker | 0 | 7 |

The legacy page confirms that Elementor assets remain necessary on the 11 builder pages. This is therefore a **conditional unload** opportunity, not a global plugin disable recommendation.

## Exact handles exposed with Autoptimize bypassed

Potential CSS unloads on confirmed non-Elementor pages:

| Handle | Source | Standalone compressed transfer |
|---|---|---:|
| `font-awesome-5-all` | Elementor | 12,319 B |
| `font-awesome-4-shim` | Elementor | 3,941 B |
| `jkit-elements-main` | Jeg Elementor Kit | 23,064 B |
| `elementor-frontend` | Elementor | 6,538 B |
| `elementor-pro` | Elementor Pro | 36,815 B |
| `cute-alert` | MetForm | 1,062 B |
| `text-editor-style` | MetForm | 3,208 B |
| `ekit-widget-styles` | ElementsKit Lite | 47,307 B |
| `ekit-responsive` | ElementsKit Lite | 2,826 B |
| `jeg-dynamic-style` | Jeg Elementor Kit | 0 B in the direct response |

Potential script unloads on the same pages:

- `font-awesome-4-shim` — 4,008 B
- `ekit-widget-scripts` — 16,204 B
- `cute-alert` — 1,013 B

The standalone candidates total approximately **137 KB CSS + 21 KB JavaScript transferred**. That is a directional upper bound, not a promised production saving: Autoptimize recompression is non-additive and must be remeasured after deployment.

Keep loaded on these pages:

- Astra theme CSS/JS and Astra Addon CSS/JS
- WordPress block library
- the current page's Spectra asset and verified shared Spectra asset
- jQuery until downstream dependencies are separately proven absent
- analytics
- Link Whisper frontend tracking (small; separate product decision)

## Safe implementation specification

1. Add conditional dequeue logic in a child theme or the existing custom site plugin, not the Astra parent theme.
2. Gate on Elementor's own builder state for the queried post ID; do not use URL-string matching as the primary condition.
3. Exclude the contact/thank-you flow until its form dependencies are explicitly verified.
4. Keep all assets on the 11 pages whose published metadata has `_elementor_edit_mode=builder`.
5. Purge Autoptimize and page caches after deployment.
6. Verify the homepage, private consultation, LVA surgery, contact flow, and one legacy Elementor page at desktop and mobile widths.
7. Run one fresh Lighthouse check only after live verification; use the existing 86 performance score and 3.6 s lab LCP as the pre-change reference, allowing normal lab variance.

## Related maintenance observation

Elementor is active at 3.35.5 while Elementor Pro is 3.6.4. That large version skew should be handled in a separate backed-up compatibility/update window; it is not safe to combine with this asset-unload change.

## Disposition

- **READY once a supported PHP deployment path is available:** conditional removal on confirmed non-Elementor pages.
- **PROTECTED:** 11 legacy Elementor pages.
- **WAITING:** form-dependency verification for contact/thank-you pages.
- **NOT DONE:** no plugin deactivation, parent-theme edit, version update or speculative global dequeue.
