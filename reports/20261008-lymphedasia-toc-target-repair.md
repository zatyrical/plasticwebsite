# LymphedAsia table-of-contents target repair — 8 October 2026

## Scope and observed fault

The earlier mobile Lighthouse audit identified a target-size issue but did not name a safe CSS change. A fresh live DOM measurement on `/private-lymphedema-consultation-singapore/` isolated the problem to the four `.la-toc` jump links:

- anchors rendered `display:inline`;
- each anchor box was 23px high;
- consecutive target top positions were about 27.2px apart;
- the links therefore provided substantially less than a 48px touch target.

The issue was not treated as a generic instruction to enlarge every inline link. A WordPress content inventory found the same maintained `.la-toc` component on 11 published high-value pages: treatment, LVA, debulking, private assessment, lipedema comparison, ICG, cancer-related swelling and related clinician/service guides.

## Change

WordPress `custom_css` post 32 (Astra Additional CSS) was empty before the write. The following scoped rule was saved through the supported post update path:

```css
.la-toc .wp-block-list a {
  display: flex;
  align-items: center;
  min-height: 48px;
  padding-block: 10px;
  box-sizing: border-box;
}
```

No page content, link destination, clinical statement, title, metadata, template, general inline link, form or tracking logic changed. Rank Math sitemap, Elementor CSS and object caches were purged after the save.

## Live verification

On the private-assessment page after cache purge:

- all four `.la-toc` anchors render `display:flex`;
- all four measure exactly 48px high at the verification viewport;
- the page remains one-H1, index/follow and self-canonical;
- all four original fragment destinations remain unchanged.

On `/lva-surgery-singapore/`, an independent reuse sample found eight `.la-toc` links, all 48px high, with their existing descriptive text and fragment destinations intact. That page also remains one-H1, index/follow and self-canonical.

This verifies the shared rule on both the audited consultation page and another priority template instance. It does not claim a Lighthouse score change, ranking gain or conversion improvement.

Repository validation also passed `git diff --check`, TypeScript/lint and the Next.js 16.3.4 production build; all 44 application routes generated. The repository change is audit and rollback documentation only.

## Rollback

Restore `custom_css` post 32 `post_content` to its exact pre-change empty value, then purge caches. The pre-change snapshot is in `reports/backups/20261008-lymphedasia-toc-css-before.txt`.

## Next independent investigation

The remaining performance findings were unused CSS (268 KiB) and unused JavaScript (74 KiB) from a single mobile lab run. Before any conditional dequeue, map the exact handles and their ownership/template dependencies; do not remove shared theme/plugin assets based on byte estimates alone.
