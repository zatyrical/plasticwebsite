# Correct the Paragon clinic telephone

11 November 2026, Singapore. User explicitly confirmed replacing the disputed Paragon number with +65 6970 0730. Reservation: issue7 comment6784276979. Base main c8e71531d91ef19eec4e2a79502e2ee330da112c.

Update the Paragon telephone display and tel links in the shared footer, homepage contact card/call button and surgeon profile, plus the two matching MedicalBusiness telephone values in layout/homepage structured data. All six source lines refer to Paragon. The [official Astrid contact page](https://www.astridplasticsurgery.com/contact-us/) lists this Paragon number separately from Mount Elizabeth. Do not change other-location facts from this patch.

Ordinary BEFORE GETs returned200 for homepage, surgeon profile and face/neck guide. HTML SHA256s respectively f706fe80693339e3c0a215976da1c885f45ec808876eeef37b2ebd6ffe0d9c81, 8cfd4847e782b51d6b67485901d9af76ff653495755a5589236b6b107b5b8fb9, 26506b180aa08a736487f0b573d0d54fa6419c1a27f2d0d6dd2646617c530cd5. Exact counts per source file guarded; replacing the new phone strings with the old restores each entire file byte-for-byte. TypeScript and diff whitespace checks passed. Full build, hosted final-head status, fresh-main/expected-head release and ordinary visitor AFTER proof are recorded in issue7; a failed build must not be called passing.

No clinical review date, address, hours, WhatsApp number, enquiry form/API, analytics, canonical, style, dependency, other held PR, WordPress or GBP change in this Git batch. No telephone call, test enquiry/email or synthetic analytics.

Rollback: after fresh-main reconciliation, revert this isolated squash or restore only the four guarded files’ phone values, preserving intervening edits. Repeat appropriate build and ordinary public readback. Original blobs remain in the base commit. A Git revert does not change WordPress or GBP.
