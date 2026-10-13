# Global navigation and keyboard accessibility — 13 October 2026

## Outcome

Improved the sitewide navigation structure without changing medical content, URLs, metadata, forms or analytics:

- moved the shared primary navigation from inside each page's `<main>` landmark to the root layout;
- added one keyboard-visible `Skip to main content` link before the repeated navigation;
- added one focusable `#main-content` destination around every rendered page, including the not-found output;
- added a clear gold outline for keyboard-focused links and buttons; and
- added a generated-output regression audit that checks every built HTML page for one primary navigation, one skip link, one content target and the correct navigation-before-main order.

The body-contouring/liposuction priority page was reviewed first. Its decision coverage and contextual recovery/fat-grafting/tummy-tuck paths were already completed in the 11–12 October batches, so no repetitive procedure copy was added. The separate sitewide navigation fault was directly observable in source and generated HTML.

## Why this was changed

Before this batch, nineteen custom pages and the shared procedure template each rendered the same primary navigation inside their `<main>` element. Keyboard users also had no direct way to bypass the repeated menu, and most links had no site-defined `:focus-visible` treatment.

The W3C WCAG 2.2 Understanding guidance for [SC 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) recommends a mechanism that lets users skip repeated content and explicitly lists a link at the top of the page that goes to the main content. The W3C guidance for [SC 2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) explains that keyboard-operable controls need a visible focus indicator.

This is an accessibility and delivery improvement. It is not presented as a ranking factor or a guarantee of improved search performance.

## Validation

- credential terminology audit: PASS across 66 checked files;
- TypeScript: PASS;
- production build: PASS, 45 routes;
- `llms.txt` source audit: PASS;
- internal fragment audit: PASS, 757 fragment links across 39 static pages;
- navigation accessibility audit: PASS, 40 generated HTML documents and zero failures;
- FAQ parity: PASS for all 30 procedure pages;
- sitemap and `dateModified` parity: PASS;
- `git diff --check`: PASS.

The generated-output audit excludes Next.js's internal `_global-error.html` shell, which is not rendered through the application's root layout. The public `_not-found` output is included and passes.

## Change boundaries

- No title, description, canonical, robots directive, structured data, review date or sitemap date changed.
- No clinical statement, credential, location detail, enquiry path or tracking event changed.
- No form submission or test email was sent.
- No new procedure URL or thin article was created.

## Rollback

Revert the pull request for this batch. That restores per-page navigation rendering and removes the skip-link/focus styling and regression audit.
