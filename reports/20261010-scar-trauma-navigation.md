# Scar revision and trauma follow-up navigation — 10 October 2026

## Observed gap

The existing scar-revision guide explains that scars may follow trauma and covers raised, widened, tight, painful and poorly aligned scars. The existing trauma/laceration guide explains acute repair, scar maturation and when later scar revision may be considered.

Despite that patient journey, the generated related cards on `/scar-reconstruction-singapore` were inherited from the broad reconstructive ordering and omitted `/trauma-lacerations-singapore`. The trauma guide also had no contextual route from its scar-care section to the focused scar-assessment section.

This was a navigation gap, not a reason for another article or new medical claim.

## Implemented

- Prioritised four relevant existing guides in the scar-revision related block: trauma/laceration repair, facial laceration repair, head-and-neck reconstruction and lower-limb reconstruction.
- Added one contextual link from the trauma guide's existing scar-care section to `/scar-reconstruction-singapore#assessment`.
- Preserved the existing scar treatment, recovery, risk, FAQ, external-source and consultation content.
- Made no change to metadata, schema, images, tracking, forms or medical outcomes. The scar sitemap date was already 10 October 2026 from the preceding scar-path batch and did not need another update.

## Validation and safeguards

- `npm run build` passed, including TypeScript and 45 generated routes.
- Generated `/scar-reconstruction-singapore` retains one H1 and a self-canonical; the intended four related routes each occur once in its related block and the trauma card is present.
- Generated `/trauma-lacerations-singapore` retains one H1 and a self-canonical; the new scar-assessment target occurs once.
- The destination ID `assessment` is an existing unique section ID on the scar guide.
- Publish only from a branch based on current main, require exact-head preview READY, merge with an expected-head guard, then verify the exact production commit and ordinary live HTML.

## Rollback

Remove the `scar-reconstruction-singapore` preference entry and the trauma `scar-care` contextual paragraph from `app/ProcedureArticle.tsx`. No data or URL migration is involved.

## Queue

- **READY after publication:** rotate to a distinct, unrepeated priority-page or Lymphedasia patient-journey investigation.
- **WAITING:** GBP 10 October at or after 07:06 SGT; settled GSC/GA4 at or after 09:08 SGT; eyebag/profile crawl on 10 October; overseas-guide crawl no earlier than 12 October 19:00 SGT; outcomes 16 October and final 17 October.
- **HELD:** material clinical rewrites and upper-eyelid reversibility/age/pain answers pending original clinician evidence.

This change improves the internal decision path. It does not prove a ranking, enquiry or AI-citation improvement.
