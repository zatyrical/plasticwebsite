# Keep the CPF MediSave reference reachable

8 November 2026 SGT. Issue #7 reservation 6721199943, base main 5bd61b0cbc7c82df42b81be455e59333fed35ff3.

The existing liposuction cost section's CPF Board link returned HTTP 403 on the ordinary visitor check. CPF's equivalent [AskGov answer](https://ask.gov.sg/cpf/questions/cm0f52l0401o3pz7ayxuxunis) returned 200 with the same qualified wording and directs readers to their attending doctor for individual applicability. The 403 does not establish a universal CPF outage. Replace only the destination of the existing descriptive link, consistent with [Google's contextual link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). The clinical text, anchor wording, cost and eligibility boundaries, review date, metadata, tracking and forms are unchanged.

Before: liposuction and tummy tuck guides returned 200, with HTML SHA-256 5aecae8e669ffb045e4065f9bee8a1b566ca5208117a3c7b0d601bacda4e8f6d and a7157e5c67450b0005ee516f4e8114750727bae3157425fd25efe3497e2eaee3. Original template blob 87ba5046aae938826908ca43fb2a5465cf9062ad. Rollback: fresh main guard, revert this isolated PR or restore the one prior href, rebuild and verify the affected public route. No outreach, synthetic events, test enquiries or weekly article credit.
