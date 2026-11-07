# Bundle the existing heading fonts for reliable builds

7 November 2026 Singapore. Base `2132627f42518d2a99d4be9dd343c1a39233df00`; issue #7 reservation 6702049447.

The first hosted builds of PR379 and PR380 failed in the unchanged Next Google font loader. Exact-head rebuilds and production succeeded. The public site was working. Replace that build-time fetch with the exact three existing production Space Grotesk WOFF2 files, retaining the family, normal style, 500/600/700 weights, Unicode ranges, swap behavior, and metric-adjusted Arial fallback. CSS selectors and type styles are unchanged. This is build reliability work, not a visual redesign or a ranking claim.

Ordinary live home GET returned 200. The production stylesheet references these existing asset basenames; the copied local bytes have these SHA256s:
- Latin, `36966cca54120369-s.p.woff2`: `a0d054c4af557de20afd6ca59f47ab353bcaec49c63ff04b6c9d39d0f8910557`
- Latin extended, `b7387a63dd068245-s.woff2`: `054c266fbb441ee059365dba0885d206f67ca05b375de869b88e02ebfccc9b9d`
- Vietnamese, `e1aab0933260df4d-s.woff2`: `d699664b145bfeeccc66a4cce7fa55e14eb63efd7ec6b0b2ec52e25dd98f3917`

The bundled [Space Grotesk license](https://github.com/google/fonts/blob/main/ofl/spacegrotesk/OFL.txt) retains its copyright notice and SIL OFL 1.1. The static preload uses the documented [Next.js resource-hint method](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#resource-hints) and includes only the existing Latin subset.

Normal local production build: 69 mocked tests, 47 generated entries, TypeScript and configured audits passed. Separate FAQ parity passed. Across 41 generated public HTML pages there is one anonymous same-origin Latin preload. All ten compiled font-face rules match ordinary production CSS with only font URLs replaced; all three files byte-match the ordinary production downloads. No Google font URLs remain in generated HTML. Local Chromium launch was blocked by the runtime's socket permission, so mobile/desktop rendering equivalence remains unverified. Exact-head hosted build and ordinary before/after release proof remain required. No protected preview bypass, GA event, form submit, external message or design change claimed.

Rollback after reconciliation: revert only this isolated PR, restoring the base layout and removing the added preload component, stylesheet and licensed assets. Do not overwrite later layout edits.
