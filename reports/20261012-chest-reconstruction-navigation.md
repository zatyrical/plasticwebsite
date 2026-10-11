# Chest reconstruction route-navigation review — 12 October 2026

## Observed evidence

A fresh graph of the 39 indexable routes in the current 45-route production build found no orphan page. Two routes had only one non-self inbound source:

- `/st-lukes-eldercare-symposium-lymphoedema-wound-care-2026` was linked from `/media`. This is the correct topical parent for a dated professional-education note, so no extra link was added.
- `/gender-affirming-chest-reconstruction-singapore` was linked only from `/blog`, despite the distinct, more detailed `/ftm-top-surgery-singapore` service guide covering technique-specific planning.

Rendered-output inspection also found that both chest routes inherited the same unrelated fallback related-card set: lower-limb reconstruction, head-and-neck reconstruction, child facial lacerations and facial laceration repair. Neither route linked to the other.

## Implemented change

The shared related-page map now gives each chest route one deliberate reciprocal next step:

- the detailed FTM top-surgery guide links to the broader gender-affirming chest-reconstruction planning guide;
- the broader planning guide links to the detailed FTM top-surgery guide.

The unrelated four-card fallback is removed from these two pages. The visible modified dates were updated to 12 October 2026 because the rendered related-resource content changed.

## Expected mechanism and limits

This creates a useful general-planning ↔ technique-specific decision path and removes distracting cross-body recommendations. It improves patient navigation and internal discovery; it does not prove ranking, enquiry or AI-citation uplift. No new URL, clinical statement, metadata claim, form or schema type was added.

## Validation

- production build and TypeScript;
- rendered reciprocal-link presence exactly once on each page;
- absence of the four former fallback cards on both pages;
- self-canonical, single H1, enquiry route and sitemap coverage retained;
- sitewide route graph remains free of orphans.

## Rollback

Revert the two chest entries in `relatedByProcedure` and restore their previous `modifiedIso` values (`2026-10-03` and `2026-10-10`).
