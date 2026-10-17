# Shared enquiry-field keyboard focus — 17 October 2026

## Observed gap and scope

Current main at start: `70c37403aaaad873a73574186ee1f25b4a8296c6`; no open concurrent PR. Inspected the actual public Asian-rhinoplasty page at `#enquire` in Chrome without entering patient data, submitting a form, sending an email or generating a synthetic lead.

The shared form has correctly associated Name, Email, Phone, Enquiry type and Message labels, 16px field text, required/optional markers and logical keyboard order. Name → Email and Phone → Enquiry type → Message → Submit enquiry worked; the hidden honeypot was skipped. Existing focus suppresses the outline and uses only a 42%-alpha green border and 8%-alpha shadow. Settled browser computed styles confirmed these values, rather than mistaking an in-progress transition for the final state.

Added a scoped `:focus-visible` rule for input, select, textarea, button and links: solid 3px emerald outline, 3px offset. Follow-on keyboard inspection found the fallback WhatsApp/contact links used the same text colour as their surrounding paragraph with no underline, and only the global gold focus outline. Underlined these two fallback links without changing destinations or wording; give all shared form controls the consistent emerald focus outline. The existing pointer-focus border/shadow, control geometry, visible labels, data flow, anti-spam behaviour, acceptance contract and analytics remain unchanged. No medical copy, credentials, structured data or review dates changed. This is a patient-route usability improvement, not a claimed ranking or enquiry increase.

## Evidence and validation

- [W3C Focus Visible guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), checked 17 October: keyboard users need a visible focus indicator. No whole-site WCAG certification is claimed.
- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), checked 17 October. The elective SEO playbook directed this investigation to an actual education-to-enquiry obstacle, rather than another keyword variant or unsupported clinical answer.
- `scripts/audit-enquiry-focus.mjs` checks all five control selectors, solid width/colour, offset, fallback-link underlining and contrast against actual white controls / `#fbfaf7` article background (12.56:1 / 12.04:1). Integrated into the normal build and a standalone npm command.
- Removed-selector, removed-enquiry-outline and changed-low-contrast-token mutations were each rejected. The first exploratory mutation altered an unrelated earlier outline and was corrected before claiming this evidence.
- Full production build passed: 46 mock-only tests; credential, light-label and SVG-label contrast guards; Next static generation; LLM source, fragment, navigation, comparison and diagram-fullsize audits. TypeScript lint, FAQ parity and sitemap-date parity also passed.
- Release procedure: exact-source GitHub PR, expected-head merge guard, intended Vercel team/project/commit checks; ordinary live keyboard and CSS verification after production is READY. Do not fetch protected previews or create bypass/share links. Publication and live proof are recorded in campaign issue #7.

## Rollback and remaining queue

Revert this PR's CSS rule and build guard via a separate reviewed revert PR; no database, enquiry or content migration is involved. Base source remains recoverable from the start commit above.

WPVibe capacity at 11:58 SGT remained 98/100 used, two calls left. This was slightly before the planned noon eligibility; no second noon retry or post read/write was made. Recovery reserve preserved. Next ordinary capacity check: 17 October >=14:00 SGT, or known restoration; no reset is assumed. Pending narrow provenance-removal candidates remain posts 4283, 4288, 4256, 4277 and 4233, with clinical claims held separately.

GSC/GA4 payment-required blocker remains; next ordinary check >=18 October 00:06 SGT or verified restoration/export. GBP already checked at 11:05 SGT, all five prepared posts LIVE, factual profile fields retained; next >=18 October 11:05 SGT. Authenticated values are not independent public-panel propagation or live-rank proof. Actual fixed-prompt native AI response evidence is still unavailable; referrals are not citations.

Fallback-link discovery was included in this same coherent batch after actual keyboard inspection. Next independent candidate: inspect navigation from one Lymphedasia non-treatment educational page to assessment, using public output while authenticated write capacity remains reserved. Final 17 October baseline assessment remains due by the sprint deadline; do not represent accepted events as qualified enquiries or infer first-page success without settled data.
