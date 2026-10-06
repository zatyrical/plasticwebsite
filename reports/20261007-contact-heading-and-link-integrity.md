# Contact heading and rendered-link integrity — 7 October 2026

## Scope

- Repository base: `15221def3128ec925bd10920504f730fcf03f0f9`.
- Applied the ElectiveSEO playbook's repair-first rule: inspect discovery and enquiry paths before adding content.
- No analytics comparison was run before its eligible checkpoint of 7 October 09:08 SGT.
- No form submission, synthetic lead, metadata rewrite or new clinical statement was made.

## DrJeremySun.com rendered discovery audit

A clean Next.js 16.3.4 production build generated all 45 routes. The rendered HTML audit then checked:

- 41 HTML documents;
- 1,716 internal anchor-link instances;
- 699 internal section-fragment links;
- all 39 public HTML routes against their canonical URLs and sitemap membership.

Result: zero missing internal page targets, zero missing fragment IDs, exactly one self-referencing `https://www.drjeremysun.com` canonical on every public HTML page, and every public HTML page present in the sitemap. The sitemap's additional URL is the valid dynamic `/llms.txt` route. No code, redirect, canonical or sitemap change was justified.

## Lymphedasia patient-journey crawl

The live crawl covered:

- `https://lymphedasia.com/contact/`
- `https://lymphedasia.com/private-lymphedema-consultation-singapore/`
- `https://lymphedasia.com/am-i-candidate-for-lva-surgery/`
- `https://lymphedasia.com/lva-surgery-singapore/`
- `https://lymphedasia.com/lva-surgery-recovery-singapore/`

All five returned HTTP 200, were indexable, used self-referencing canonicals, had no missing image alt text and exposed structured data without reported schema issues. Four had one H1. The contact page had two identical H1s: Astra's page title and a second heading inside its Gutenberg custom-HTML block.

## Published WordPress repair

Page 5034 was confirmed to be Gutenberg/custom HTML, not Elementor data. Two supported match-once edits were made to `post_content`:

1. removed the duplicate inner `<h1>Contact LymphedAsia</h1>`;
2. removed the now-unused `.la-contact h1{...}` local CSS rule.

The first save returned an upstream 504 after waiting. In accordance with the write-recovery rule, the target was read back before any further action; the CSS removal had committed, so it was not retried. The second edit reported one replacement and completed normally.

Live verification found exactly one H1. The existing form ID and action, Paragon address, `+65 6530 3573`, visible hours, WhatsApp/external contact paths and success-only `generate_lead` call remain in the stored post content. No enquiry was submitted.

WordPress revisions created by the two saves are 5183 and 5184. Revision 5169 is the last full pre-change state. Narrow rollback is to restore the removed H1 line and its exact local CSS rule; full rollback is to restore revision 5169 only if no later page changes need preservation.

## Next decision

After 7 October 09:08 SGT, use settled query-by-page and landing-page evidence to evaluate the queued older/newer Lymphedasia oedema URLs. Do not consolidate pages from title similarity alone.
