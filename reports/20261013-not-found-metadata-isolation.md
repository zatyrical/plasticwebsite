# 404 metadata isolation — 13 October 2026

## Observed fault

A generated-site metadata collision audit found that the unmatched-route page inherited homepage-only metadata from the root layout. The built `_not-found` output contained:

- Next.js's automatic `noindex` directive for the 404 response;
- a second, conflicting `index, follow` directive inherited from the root layout;
- a Googlebot `index, follow` directive;
- the homepage canonical URL and homepage `og:url`.

The production content pages had distinct titles, descriptions, canonicals and Open Graph URLs. The fault was isolated to homepage-specific metadata being defined globally.

## Implemented

- Moved the homepage canonical, explicit robots directives, Open Graph metadata and Twitter card metadata from `app/layout.tsx` to `app/page.tsx`.
- Retained truly global metadata in the root layout: metadata base, icon, default title/template, description and site keywords.
- Did not add a custom 404 or change normal page content, routing, structured data, enquiry paths or analytics.

Next.js documents that 404 responses receive an automatic `noindex` directive. This change lets that directive stand alone and prevents the error page from presenting the homepage as its canonical or social URL.

Source checked 13 October 2026:

- https://nextjs.org/docs/app/api-reference/file-conventions/not-found

## Validation plan

- Run lint and the complete production build.
- Confirm the homepage retains its canonical, `index, follow`, Googlebot preview directives, Open Graph URL/image and Twitter image.
- Confirm generated `_not-found` has exactly one robots directive, `noindex`, with no Googlebot index directive, canonical or `og:url`.
- Confirm every normal static content page retains one canonical and matching Open Graph URL.
- Run credential, source, internal-fragment, FAQ-parity and sitemap-date-parity audits.

## Expected mechanism and limits

This removes contradictory crawler instructions and a misleading homepage canonical from 404 output. It is a technical hygiene fix; it does not establish a ranking, indexing, enquiry or AI-citation change.

## Rollback

Revert this pull request to return the homepage-only metadata to the root layout.
