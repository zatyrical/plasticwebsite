# Breast implant consultation map — 13 October 2026

Base main: `d947a9d34d4a5a29cccdcbfa859a061dd659a1f5`. Branch: `seo/breast-implant-consultation-map-20261013`.

## Observed gap

The current main breast-augmentation guide is already comprehensive. It separates volume loss, low nipple position/loose skin, asymmetry and implant-free refinement; explains measurement-based planning, implant dimensions and plane choices; links the fat-grafting alternative; and covers screening, breastfeeding, recovery, risks, long-term follow-up, quotation factors and consultation.

The live hero photograph is useful first-party material showing implant samples, but it cannot explain two separate decisions described later in the guide:

1. base width versus projection/profile; and
2. the implant pocket's relationship to breast tissue, fascia and chest muscle.

Current Singapore breast-augmentation pages from Dr Terence Goh and Covette also foreground implant-placement questions, confirming this is a real patient-decision theme. Their wording, images, timelines and product claims were not reused.

## Implemented

Added one original 1600×1000 SVG to the existing `Implant pocket, placement and incision planning` section. It uses only distinctions already stated in Dr Sun's clinician-reviewed page:

- a front-view implant footprint with a base-width arrow;
- a side-view profile with a projection arrow;
- simplified pocket relationships for subglandular, subfascial, dual-plane and submuscular placement; and
- the existing planning factors: tissue coverage, chest wall shape, existing volume, activity, desired shape and revision considerations.

The visual explicitly says there is no preferred or “best” plane, is simplified and not to scale. Its caption states that it is educational and does not recommend a particular plane. Descriptive alt text names both the measurement and pocket-planning content.

No new clinical selection rule, outcome claim, brand endorsement, price, recovery interval, route, FAQ, form or tracking event was introduced. The existing implant-sample photograph remains because it serves a different first-party consultation purpose.

The page and sitemap modification date are aligned to 13 October 2026.

## Validation and rollback

Required before publication:

- render and visually inspect the SVG at its native 1600×1000 size;
- TypeScript and 45-route production build;
- credential terminology, `llms.txt`, internal-fragment and navigation-accessibility audits;
- FAQ parity and sitemap/schema modification-date parity;
- exact-head Vercel deployment and fresh live image/caption/schema/sitemap verification.

Rollback is to revert the isolated merge commit, which removes the SVG, section image reference and 13 October modification-date update.

## Queue

- **COMPLETE in this batch:** main breast-augmentation implant-dimensions/pocket visual.
- **READY next:** rotate to the body-contouring/liposuction guide and inspect whether its fat-versus-skin decision support has a distinct visual gap after the tummy-tuck layer map; avoid reusing the tummy-tuck illustration if it would blur intent.
- **WAITING:** GBP moderation/public propagation after 14 October 08:11 SGT; crawl/index sampling after 16 October 09:00 SGT; GSC/GA4 connector entitlement remains unavailable and should not be retried hourly.

This is a patient-comprehension and accessibility improvement. Publication alone is not evidence of ranking, enquiry, referral or AI-citation uplift.
