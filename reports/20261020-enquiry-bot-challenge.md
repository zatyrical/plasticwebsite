# Enquiry bot challenge — 20 October 2026

## Status: prepared, not active

Dr Sun asked for anti-bot protection after the shared enquiry endpoint received repeated promotional submissions from the Lymphedasia form. PR265's URL filters and supplemental per-instance repeat counters remain live. They do not establish that a visitor completed a browser challenge. This batch prepares Cloudflare Turnstile for both sites and verifies its single-use token on the shared server before any email request.

Fresh base: main 8cf5db794953aba912f284ceed73715d29479c76 (PR266). Issue7 current comments and the PR265/266 reports were read. An isolated branch preserves concurrent work. Non-decrypted Vercel env key inventory contained only the existing email configuration: no Turnstile site key or secret. No keys were guessed, no test keys were installed in production, and no live form or environment was mutated.

## Implemented in this branch

- `CONTACT_BOT_CHECK=turnstile` enforces server verification for JSON, URL-encoded and multipart requests, including requests without Origin. Missing/oversized tokens are rejected before external calls. The successful verification must have boolean success, the exact action `clinic_enquiry`, and an exact approved site hostname. Supplied Origin must also match the verified hostname. Origin and pageUrl are not treated as bot authentication.
- Siteverify has an eight-second abort signal; failure, malformed JSON and outage stop before email, without retries, token/secret logging or accepted-lead acknowledgements. A configured but unrecognised activation value fails closed. Missing activation deliberately preserves the current baseline during staged rollout.
- A shared explicit-render widget script serves the React form and WordPress native HTML form. Capture-phase handling prevents premature submission, with accessible status/manual-contact guidance. Expiry/error states require another check. Each attempted API submission resets the single-use token while retaining patient fields after failure. React navigation removes the widget and listeners; duplicate load and strict-mode remount are covered.
- The React widget uses the build-time public variable `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. The secret is server-only `TURNSTILE_SECRET_KEY`. No new dependency, tracking tag, geo/language ban or subscription was added. Application verification sends only secret and token to Siteverify; Turnstile itself processes browser security signals under Cloudflare's terms.
- `reports/backups/20261020-contact5034-bot-challenge-prepared.json` archives the freshly read published raw/meta envelope (modified_gmt 2026-10-20T05:14:11, raw 9,211 characters) and exact unique patch snippets. It is explicitly **unapplied** and contains a public-key placeholder. The existing WordPress tracking script's reset addition is also prepared in its maintained source.

## Validation and limits

The production build passes: 69 mocked API/widget/form/analytics/navigation/motion tests, TypeScript, source checks and rendered route audits. Verification covers missing/oversized/forged/replayed/expired tokens, wrong action/hostname, both domains and forms, absent Origin, outages/deadlines, strict-mode and navigation lifecycle, script failures and token reset after failed submissions. Existing accepted-event semantics remain intact. No real enquiry/email, spam-link visit, native AI sampling or synthetic analytics was performed.

A separate Chromium fixture check could not launch because the local Playwright Chromium binary is absent. No download or protected preview bypass was attempted. The actual Cloudflare widget and ordinary live rendering on both websites still require validation with genuine configured keys. A mocked success is not proof of a real challenge solve or mail delivery. This branch is a draft until configuration and cross-site rollout can be verified. No new production anti-bot activation or enquiry/ranking gain is claimed.

## Activation order and rollback

1. In the user's Cloudflare account, create a Managed Turnstile widget restricted to drjeremysun.com and lymphedasia.com (confirm www variants allowed). Use the free offering; do not change DNS or purchase a plan. Use action `clinic_enquiry` in both widgets.
2. Store the secret securely in Vercel as `TURNSTILE_SECRET_KEY`; supply the corresponding public site key as `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Do not paste a secret into chat, Git, reports or WordPress. Configure only intended environments. The public variable is compiled at build time and requires a fresh deployment.
3. Fetch/reconcile main and this PR, run appropriate checks and merge with expected-head protection. Publish the React widget/shared JS with backend activation still absent. Verify ordinary public script delivery and visible challenge on the Dr Sun form, including keyboard/error/contact fallbacks. Do not bypass a protected preview.
4. Before WordPress publication, read supported Gutenberg/edit-content documentation, fresh-read page5034, reconcile exact guards with the prepared snippets, and archive the new raw/meta backup remotely before mutation. Replace only the public-key placeholder. Apply supported match-once content edits, including tracking reset and shared script. Re-read raw/meta and the ordinary public page, accounting for cached/deferred/base64 script transformations. Confirm the actual widget and current JS on Lymphedasia. Never blindly replay the captured full post body.
5. Only when both clients work, set `CONTACT_BOT_CHECK=turnstile` and deploy the matching secret/configuration. Verify backend rejects a safe empty/missing-token synthetic request without reaching email; use provider mocks for successful delivery tests, not a real test enquiry. Record deployment ID/commit, ordinary live proof and current WP backup in issue7. Check the real Cloudflare security verification independently without submitting an enquiry.
6. Rollback: remove backend activation and redeploy FIRST if visitors are blocked, retaining the prior URL/repeat filters. Then reverse only the uniquely matching WordPress insertions and script append after a fresh backup/guard; revert the isolated Git change using a normal PR. Never overwrite concurrent edits or remove baseline filters. Git revert does not restore WordPress. If a secret is compromised, rotate it through the provider rather than committing it.

## Queue

| Status | URL | Evidence / approved source | Action | Blocker / next eligible check |
| --- | --- | --- | --- | --- |
| WAITING | https://www.drjeremysun.com/api/contact | User spam screenshots and explicit anti-bot request; official Siteverify docs checked 20Oct | Activate verified challenge before email | Actual Cloudflare widget key/secure secret and both-client rollout; eligible immediately when supplied/configured |
| READY for configured rollout | https://www.drjeremysun.com/ | Current shared React form; branch tests/build pass | Publish prepared widget/shared JS with activation off first | Missing public site key; ordinary real-widget verification still needed |
| READY for guarded patch after script release | https://lymphedasia.com/contact/ | Fresh native page5034 raw/meta; exact prepared guards | Supported WP patch and live readback | Public key + public shared script; fresh archive/documentation required before write |
| WAITING | Existing SEO/measurement queues in issue7 | No new measurement sampled in this batch | Preserve dated measurement/clinical/editorial holds | This contact batch does not reopen held clinical prose, duplicate outreach, subscriptions or early analytics probes |

## Primary guidance

- Cloudflare server validation: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/ — checked 20Oct2026, displayed update16Sep2026; backend verification mandatory, tokens single-use with five-minute expiry.
- Cloudflare client lifecycle: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ — checked 20Oct2026; explicit rendering, automatic form field, reset/remove and accessible failure paths.
- Elective SEO playbook: prioritise observable enquiry-path failures, preserve rollback, and distinguish draft, implemented and measured results. This is an operational conversion-path change, not an SEO outcome claim.
