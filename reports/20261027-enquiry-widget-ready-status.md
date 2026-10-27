# Enquiry widget instruction after rendering — 27 October 2026

Base main fd82685b224cb2035a5437a468495b2f5bc13a20; reservation6438923261. Fresh issue7/latest6437801454, latest321report, current main and open252/257 reconciled. Isolated branch/worktree; earlier worktrees preserved. Elective-seo-playbook and previously read Browser/deployment guidance applied.

## Observed defect and change
Actual desktop browser navigation from /breast-augmentation-singapore#rapid-recovery through the existing rapid-recovery link reached /24-hour-rapid-recovery-breast-augmentation-singapore. Its enquiry CTA reached #enquire. The settled screenshot shows one Cloudflare “Verify you are human” widget, yet the adjacent status remains “Loading security check…”. The fallback WhatsApp and Astrid form links remain available. This is a misleading loading instruction, not a failed widget or failed security validation.

Add ONE existing instruction string immediately before explicit render in public/enquiry-bot-check.js, after the official script has loaded and the current mount guard passes: “Please complete the security check before submitting.” It does not claim verification success. Keeping it before render means success/error callbacks can subsequently replace it without being overwritten by this instruction. Exceptions still take the existing error path.

All security behavior remains byte-identical after reversing this line: site key/action/hostname, server Siteverify/enforcement, capture preflight, success/expiry/error/reset/removal callbacks, submission/email/accepted-lead behavior, analytics, fields, fallback links and both-site integration. No WordPress content, configuration, secret, public key or CAPTCHA change. No clinical text, metadata or review dates changed.

Primary source read27Oct: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ (displayed17Jun2026) distinguishes widget creation/challenges from token generation and mandatory server validation; explicit rendering supports SPA lifecycle. This is an instruction fix, not security completion, a provider bypass or a ranking promise.

## Verification and limitations
Browser plugin bootstrap returned UnknownTool(browser.js); used documented cloud-browser fallback for this independently required public interaction. No CAPTCHA clicked/solved, form field filled, token value read/logged, submission, production rejection probe, email or analytics event sent.
Initial DOM iframe query returned0 while screenshot later visibly showed a provider widget: provider shadow content is not reliably counted by ordinary document iframe selectors. Do not report iframe0 as a loading failure. A #enquire a query returned0 because target is the heading; corrected to actual form/following paragraph, which exposes both fallback links. Instantaneous scroll screenshot was discarded; settled heading top96, nav bottom75 at1363x936.

Exact one-line reverse guard recovers base shared script byte-for-byte. Before scriptSHA2567913d003487a889c045dfe1a3d1f229582fe03ff58060efc57fae64053e1c8e7; after7e39006e7306c003d6575ee262df88fcf4e589d4b2d4517be4eb6a9c4528b258.
Full production build includes existing isolated mocked API/widget/analytics/navigation/motion tests and source/generated audits. No new mirror test or production enquiry required for this one-line instruction. Build/CI/expected-head merge and ordinary production/browser proof recorded in issue7; no protected-preview bypass/share link.

## Recovery and queue
Rollback: fresh current source, remove only this unique line or revert the isolated merge preserving later work; build/deploy and verify the instruction. Do not disable enforcement or remove widgets. Base source is the backup. Git publication changes this shared static file; no WordPress inverse is needed.
Close this exact status defect after ordinary live proof; repeat>=3Nov or observed fault. Actual successful token/server validation remains untested without an authorised genuine enquiry; do not invent it. No guarantee of qualified enquiries.
Daily GSC/GA4/GBP remains>=27Oct20:01SGT/restoration/export/fault; no early probe. Clinical/study/LANA,252/257,WP439main,sitemap/cache/debulking,secondary-prevention,editorial/nativeAI gates retained. No outbound message, purchase or automation change. No ranking/qualified-enquiry/earned-link/nativeAI gain established.
