# Sitewide clinic and entity consistency — 4 October 2026

## Observed gap

The published homepage and surgeon-profile page already showed the verified private-consultation pathway:

- Astrid Plastic Surgery, Paragon Medical
- 290 Orchard Road, #09-01/02, Singapore 238859
- +65 6530 3573

The homepage-specific `MedicalBusiness` graph also contained the telephone and address. However, the separate sitewide `MedicalBusiness` entity rendered on internal procedure pages contained the logo, specialist categories and profile links but omitted the clinic telephone/address/map. The visible sitewide footer contained only Dr Sun's name, practice description and professional-profile links.

Astrid Plastic Surgery's current first-party contact page independently corroborated the Paragon address and telephone on 4 October 2026: `https://www.astridplasticsurgery.com/contact-us/`.

## Implemented correction

- Added the verified Paragon telephone, postal address and existing Dr Jeremy Sun Maps URL to the sitewide `MedicalBusiness` entity.
- Added a compact visible footer consultation route containing Astrid Plastic Surgery at Paragon Medical, the same address, clickable telephone and internal enquiry link.
- Kept the existing practitioner/business naming and Google Maps target unchanged.
- Did not add `openingHoursSpecification`. Astrid's public page currently shows Saturday ending at 12pm, while the user-confirmed/GBP details recorded for the campaign end at 12:30pm. The visible site page retains the user-confirmed hours and asks visitors to confirm availability; this batch does not create a second machine-readable hours assertion while the sources differ.

## Expected mechanism and limits

The change makes the verified consultation route available to patients and crawlers on every procedure page, and removes an avoidable contact-field difference between homepage and internal-page entity markup. It does not guarantee a Maps, organic or AI-answer ranking change. No special AI schema, review markup, outcome claim, price, credential or new medical statement was added.

## Validation

- `git diff --check`: passed.
- Next.js 16.3.4 production build and TypeScript: passed; all 45 routes generated.
- Local production render of `/rib-rhinoplasty-singapore`: returned the visible footer location, telephone and enquiry route.
- The same rendered internal page returned the `MedicalBusiness` telephone, street address, postal code and Maps URL.
- React review: both edits remain static server-rendered data; no client component, hook, request waterfall, new dependency or JavaScript bundle work was introduced. The footer uses semantic `address`, telephone and descriptive destination links.
- Vercel preview/production and live-domain verification remain required before completion.

Rollback: revert the isolated merge commit for this batch.
