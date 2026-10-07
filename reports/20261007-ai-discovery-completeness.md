# AI discovery completeness audit — 7 October 2026

## Scope

This checkpoint reviewed current public role wording and the technical paths that search and AI retrieval systems can use to reach priority patient education. It did not sample a native AI-platform answer and does not establish an AI mention or citation.

## Primary-source guardrails

- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) says that no special AI file or schema is required for AI Overviews or AI Mode. Ordinary eligibility, crawl access, snippets, internal links, visible text and accurate structured data remain the fundamentals.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes `OAI-SearchBot` for ChatGPT search discovery, `GPTBot` for model training and `ChatGPT-User` for user-initiated retrieval.
- [Anthropic crawler documentation](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) identifies `ClaudeBot`, `Claude-User` and `Claude-SearchBot` and states that its bots respect `robots.txt` directives.

The site's existing `llms.txt` is therefore treated as a supplemental, human-maintained index—not a Google requirement or ranking shortcut.

## Findings and dispositions

| Surface | Evidence | Disposition |
|---|---|---|
| Current role wording | Repository-wide scan found current public copy using “Head of Service, Plastic Surgery, Changi General Hospital, 2025–2026”. The remaining “Head of Plastic Surgery” phrase is alt text describing a dated event poster and is historically accurate. | Closed; no edit justified. |
| Production crawler access | `robots.txt` allows all crawlers and explicitly names OpenAI and Anthropic agents. The lower-blepharoplasty page returned HTTP 200 to `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot` and `Googlebot`. | Closed; no blocking fault observed. |
| Lower-blepharoplasty discovery entry | The dedicated page was live at HTTP 200, indexable and self-canonical, but absent from the existing `llms.txt` priority list. | Fixed by adding the exact page URL and a concise description drawn from its approved on-page content. |
| Sitemap freshness | `llms.txt` had no explicit `lastmod` despite the content update. | Fixed with `2026-10-07` as the index's own modification date. The clinical page date was not changed. |

## Validation

- `npm run lint`: passed.
- `npm run build`: passed; 44 static/generated routes completed.
- Local production response: `/llms.txt` returned HTTP 200 with `text/plain; charset=utf-8` and the new lower-blepharoplasty entry.
- Local production sitemap: `/llms.txt` has `lastmod` `2026-10-07`.
- `git diff --check`: passed.

## Measurement boundary

Crawler access and an accurate supplemental index improve eligibility and source discoverability, but they do not prove that a search engine indexed the update or that any AI platform mentioned or cited the site. Native AI-platform responses, citations and analytics referrals remain separate evidence types.

## Next eligible checkpoints

- GA4/GSC comparison: after 8 October 2026, 09:08 SGT, using settled, comparable periods.
- Google Business Profile moderation/public propagation: after 7 October 2026, 23:54 SGT, only if authenticated access is available.
- Independent ready queue: rotate to an unaudited body-contouring/tummy-tuck decision-navigation or factual-authority cohort; do not revisit this crawler batch without a new fault.
