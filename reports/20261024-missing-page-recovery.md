# Missing-page recovery — 24 October 2026

Ordinary GET of controlled nonexistent /patient-guide-unavailable returned HTTP404 with the framework default error and no recovery links within main-content. This is not evidence of patient visits or an indexed broken URL. The 13Oct metadata repair explicitly left this UI unchanged.

Added app/not-found.tsx with one main/H1 and four underlined recovery links: homepage, aesthetic procedures, educational guides and homepage contact. Uses established layout/styles; no clinical text, metadata, redirects, analytics or form changes.

Sources checked24Oct: https://nextjs.org/docs/app/api-reference/file-conventions/not-found and https://developers.google.com/crawling/docs/troubleshooting/http-status-codes . Root not-found handles unmatched routes; preserve404 and automaticnoindex rather than redirect every missing URL home.

Validation: full npm run build passed on final source, including repository test/audit chain. Generated404 has one main, one noindex robots directive, no canonical and four underlined recovery anchors. Local production HTTP checks: unknown path and invalid enquiry-response status404; homepage/aesthetic-surgery/blog200. Default local server bind hit sandbox network-interface enumeration error; explicit127.0.0.1 binding succeeded. No form or browser analytics events sent. Deployment/live verification belongs in issue7.

Rollback: delete app/not-found.tsx by reverting this isolated PR; framework default UI returns. Base01f3d12dcf5a54848156e5a709d9bcc188ffcebf preserves original. No outcome uplift claimed.
