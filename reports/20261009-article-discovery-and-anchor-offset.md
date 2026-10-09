# Article discovery and contents-anchor follow-up
Date: 9 October 2026. Base main: a6d17c81764dec9c3d7f18a3a555b6c88178a95c.

## Concrete investigation
The homepage's global Articles menu lands on a finite featured grid at /#articles. Current source contains no /blog link, so the full education library and newly published overseas guide are not directly offered from that main navigation journey.
Browser verification of the new article's #follow-up contents link showed the section heading at viewport y=0.14 while the sticky navigation covered its first lines. CSS has an82px offset for homepage segmented sections only, not article targets. This is an observed accessibility/navigation issue, not a ranking diagnosis.

## Implemented
- Added a descriptive full-library link before the homepage featured grid.
- Featured the approved overseas-clinic guide with a concise before-booking description; no new medical statement or keyword variant page.
- Added a100px scroll margin to article-content sections with IDs and article-enquiry targets, preserving smooth scrolling and existing contents links.
- Updated the homepage's true modification date and sitemap entry to9October2026.

## Verification
Production build/TypeScript and diff checks required. Verify generated homepage contains exactly one library link and one new guide card; anchor CSS scope must exclude general page sections. Exact preview READY before guarded merge; exact production/live homepage and anchor geometry afterward. No synthetic enquiries.

## Rollback
Revert this isolated follow-up PR. Reverse only added homepage link/card, scoped CSS rule and homepage modification date changes; do not undo PR105 or concurrent work.

## Ready/waiting
- Close this homepage discovery/anchor issue after live verification; no more link churn warranted by this observation.
- Next READY discovery: a distinct Lymphedasia patient-journey page or approved priority-page question, not the completed breastfeeding or overseas copy.
- Clinical/provenance items such as the Lymphedasia quality-of-life and biofeedback claims remain held; publication authority alone is not clinical evidence for new claims.
- WAITING checks10Oct: GBP>=07:06SGT; settled GSC/GA4>=09:08SGT; eyebag/profile crawl. New guide query/page assessment16Oct and final17Oct. No uplift claim.
