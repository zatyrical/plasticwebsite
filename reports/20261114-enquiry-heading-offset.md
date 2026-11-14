# Enquiry heading offset — prepared repair

14 November 2026. Base main57c79c9f2c862b6270106e8f8845417d778f627c. Isolated branch seo/enquiry-heading-offset-20261114; issue7 reservation6871454749. This is an observed enquiry navigation defect, not a clinical expansion or a weekly article.

## Observed public defect

On the ordinary public https://www.drjeremysun.com/compression-foam-lymphatic-massage-after-liposuction page, the hero Non-urgent consultation enquiry link navigated to #enquire. After native smooth scrolling settled, a read-only DOM measurement showed the target H2 top -0.171875px / bottom47.703125px, while the sticky primary navigation occupied top0 / bottom75px. Computed scroll-margin-top was0px. A browser screenshot independently showed the heading hidden behind the header while the following explanation/form were visible. No form values or test enquiry were entered or submitted. Turnstile completed automatically during viewing; no challenge interaction was performed.

The existing100px offset rule covered .article-content section[id] and .article-enquiry[id], but not the H2#enquire markup used by the shared procedure renderer, surgeon profile, breast implant illness, rapid-recovery and liposuction-recovery pages. This source scope does not claim those other pages were each independently browser-tested.

## Narrow repair and source

Extend that same existing CSS selector group with .article-content h2#enquire. Keep the existing100px value, section rules, Asian-eyelid rule, native link targets, smooth/reduced-motion behavior and every page/form/clinical/tracking byte unchanged. Current documentation https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-margin-top describes the scroll margin property; use the existing site offset rather than inventing new navigation behavior. No clinical review or content modification date is changed for this operational stylesheet repair.

The original app/globals.css is recoverable from base57c79c9. Exact unique BEFORE:

`.article-content section[id],.article-enquiry[id]{scroll-margin-top:100px}`

Exact AFTER:

`.article-content section[id],.article-enquiry[id],.article-content h2#enquire{scroll-margin-top:100px}`

Forward/inverse byte equality checked. Revert only this selector addition against fresh current source, preserving later edits; do not replay the full old stylesheet. No WordPress mutation or database rollback is involved.

## Validation and publication boundary

Normal npm run build passed all69 isolated mocked tests, configured audits and47 static routes. npm run lint (TypeScript) and git diff --check passed. No new test that merely mirrors this selector was added. These checks do not prove fixed browser scroll position.

Publication remains WAITING until the changed version can be verified in an ordinary accessible preview/live browser: activate the existing enquiry link, allow native scrolling to settle, and confirm the complete H2 is below the sticky header on desktop and a narrow viewport, retaining form controls and ordinary section jumps. Protected preview bypass/share links and network/security workarounds are not permitted. Do not merge from build success alone. Deployment/exact-head status and any ordinary preview outcome are recorded in issue7/the draft PR, not inferred here.

Existing397 mobile-menu and381 font work are separate: their files are untouched. Historical staged changes in the original checkout are preserved. No new enquiry, analytics conversion, ranking improvement, qualified lead or weekly-publication credit is claimed.
