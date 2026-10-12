# Lymphedasia contact thank-you page 5120 — pre-edit backup

Captured: 12 October 2026, before the Rank Math robots change.

## WordPress record

- ID: `5120`
- Type: page
- Status: `publish`
- Slug: `contact-thank-you`
- URL: `https://lymphedasia.com/contact-thank-you/`
- Modified GMT before edit: `2026-10-08T07:14:24`
- Title (raw): `Thank you`
- Builder/content format: Gutenberg custom HTML block (`block_version: 1`)

## Exact raw post content

```html
<!-- wp:html -->
<div style="max-width:820px;margin:0 auto;padding:56px 22px;color:#2b2638">
  <h2 style="font-family:Georgia,'Times New Roman',serif;font-size:clamp(40px,5vw,60px);line-height:.96;font-weight:500;margin:0 0 18px">Thank you.</h2>
  <p style="font-size:18px;line-height:1.65;color:#615d66">Your enquiry has been received. Dr Jeremy Sun / Astrid Plastic Surgery's clinic team will respond through the contact details provided.</p>
  <p style="font-size:15px;line-height:1.6;color:#615d66">This form is for non-urgent enquiries only. If your concern is urgent, please seek appropriate urgent medical care.</p>
  <p><a style="display:inline-flex;background:#432e58;color:#fff;padding:13px 18px;border-radius:4px;text-decoration:none;font-weight:700" href="https://lymphedasia.com/">Return to LymphedAsia</a></p>
</div>
<!-- /wp:html -->
```

## Exact pre-edit post-meta inventory

The supported WP-CLI read returned only these two rows; no `rank_math_robots` override existed.

```json
[
  {
    "post_id": 5120,
    "meta_key": "rank_math_internal_links_processed",
    "meta_value": "1"
  },
  {
    "post_id": 5120,
    "meta_key": "wpil_sync_report3",
    "meta_value": "1"
  }
]
```

## Intended isolated change

Use Rank Math's supported `/rankmath/v1/updateMeta` route to set only:

```json
{
  "objectType": "post",
  "objectID": 5120,
  "meta": {
    "rank_math_robots": ["noindex"]
  }
}
```

With `nofollow` absent, Rank Math should render `noindex, follow`. The post title, slug, status, content, redirect destination, canonical and tracking are not to be changed.

## Rollback

Restore the exact pre-edit state by sending the same supported Rank Math request with `rank_math_robots` as an empty value, which deletes that per-page override. Then purge the page cache and verify the rendered robots directive and sitemap again.
