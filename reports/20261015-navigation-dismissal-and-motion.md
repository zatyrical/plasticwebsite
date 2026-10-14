# Navigation dismissal and motion preference — 15 October 2026

Base main `77edaaa03ab4d5d1dcc14278aa38cfe29eed0654`; isolated branch `seo/navigation-dismissal-motion-20261015`. Campaign checkpoint through6177147666 and latest reports reconciled; no open or overlapping PR. WordPress capacity is deliberately not polled before07:00SGT.

## Observed scope

The shared navigation already had a native disclosure button, expanded state, controlled mobile-link container and link-selection closure. The13October landmark, skip-link and focus-outline batch is complete and retained. This new interaction screen found no Escape handler: keyboard users in the expanded navigation could not dismiss it with Escape and return to the toggle.

The CSS also set `html{scroll-behavior:smooth}` unconditionally. Existing reduced-motion rules suppressed various card animations but did not override native contents/enquiry anchor scrolling.

## Implemented

- Handle Escape only while the navigation is expanded and keyboard focus is within the navigation; close it and focus the existing toggle through its element ref.
- Leave Tab, Enter, arrow keys, closed-menu Escape, native links, link destinations, mouse/touch toggle and link-selection behaviour unchanged. No focus trap, global keyboard listener or ARIA menu role added.
- Add a narrowly scoped reduced-motion media rule setting root scroll behaviour to `auto`; normal-preference smooth scrolling remains.
- Add five regression tests, running in the production build alongside the eight existing enquiry tests. No dependency or lockfile change.

ElectiveSEO's patient-navigation principle guided this technical batch. W3C primary sources inspected15October:

- https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/ — Escape closure/focus return; native disclosure navigation is not an ARIA menubar.
- https://www.w3.org/WAI/WCAG22/Techniques/css/C39 — honouring reduced-motion preferences for interaction-triggered animation.

These are implementation guides, not a claim of full WCAG compliance or a ranking factor. This click-triggered disclosure is not asserted to violate the hover/focus content criterion cited in the W3C example.

## Verification

Before the fix, four of the five new tests failed: missing keyboard handler and missing reduced-motion override. Existing link-selection closure passed. After the fix, all five pass. The actual TSX component is transpiled and exercised using isolated state/ref/element mocks; Escape updates expanded state/label/container class and invokes toggle focus once. Closed Escape and unrelated keys do not intercept or move focus; link selection still closes without forced focus. The fifth test guards the CSS override and cascade order; it is not a computed-style browser test.

TypeScript,45-route production build,13 tests,credential terminology67files/zero findings,LLM39bullets/zero duplicates or missing routes,767fragments across39staticpages,navigation40HTMLfiles/zero failures,FAQ parity,sitemap/date parity and diff checks pass.

Local production server initially hit an environment network-interface enumeration error; explicit127.0.0.1 binding started successfully. The attempted local browser check then could not launch because the installed Playwright package has no executable browser binary. No browser was downloaded and the temporary server was stopped. No real browser interaction, computed-style, screen-reader, viewport/LCP or full accessibility pass is claimed from these isolated tests. Exact preview/production states, public output and any later browser proof are recorded in issue7 before completion.

No clinical text,FAQ,review date,sitemap date,metadata,credentials,images,URLs,contact fields/API,analytics or GBP change. No test enquiry/email/event. Shared navigation and stylesheet delivery only. No protected-preview bypass or CI/protection setting change.

## Rollback and queue

Revert this batch's merge after reconciling later changes. This restores prior Escape/scroll behaviour but does not undo13October landmark/skip-link work. No WordPress rollback.

READY conditional WP queue: VLNT664 assessment/comparison links;bandaging maintenance-garment link;pump contents;4157 Singapore peer-support resource. Fresh source/backup/guard/supported save/readback require adequate ordinary capacity;nextcheck>=15Oct07:00SGT. Clinical donor-assessment/recovery/staging answers remain HELD for exact clinician input. Reporting entitlement/export16Oct/final17Oct;authenticated GBP>=15Oct09:08SGT;eyebag/profile indexing>=16Oct09:00SGT;fixed native-AI responses unavailable. No new ranking,qualified-enquiry or AI-citation result inferred.
