import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server/app");
const sitemapPath = path.join(root, "sitemap.xml.body");

if (!fs.existsSync(sitemapPath)) {
  throw new Error("Build output is missing. Run npm run build before this audit.");
}

function decodeHtml(text) {
  return text
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&#x([0-9a-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16)))
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function graphNodes(value) {
  if (Array.isArray(value)) return value.flatMap(graphNodes);
  if (!value || typeof value !== "object") return [];
  return [value, ...graphNodes(value["@graph"] ?? [])];
}

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapRows = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)]
  .map((match) => ({
    url: match[1],
    lastModified: match[2].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? null,
  }))
  .filter((row) => row.lastModified);

const results = [];
const profileDateIssues = [];
let profilePagesChecked = 0;
const zonedDateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
for (const row of sitemapRows) {
  const url = new URL(row.url);
  const route = url.pathname.replace(/^\//, "").replace(/\/$/, "");
  const htmlPath = path.join(root, route ? `${route}.html` : "index.html");
  if (!fs.existsSync(htmlPath)) continue;

  const html = fs.readFileSync(htmlPath, "utf8");
  const nodes = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      try {
        return graphNodes(JSON.parse(decodeHtml(match[1])));
      } catch {
        return [];
      }
    });

  for (const node of nodes) {
    const types = [].concat(node['@type'] ?? []);
    if (!types.includes('ProfilePage')) continue;
    profilePagesChecked += 1;
    for (const field of ['dateCreated', 'dateModified']) {
      if (!(field in node)) continue;
      const value = node[field];
      if (typeof value !== 'string' || !zonedDateTime.test(value) || !Number.isFinite(Date.parse(value))) {
        profileDateIssues.push({ route: url.pathname, field, value });
      }
    }
  }

  const pageDates = [...new Set(
    nodes
      .filter((node) => node.url === row.url || node["@id"] === `${row.url}#webpage`)
      .map((node) => node.dateModified)
      .filter((date) => typeof date === "string"),
  )];

  if (!pageDates.length) continue;
  results.push({
    route: url.pathname || "/",
    lastModified: row.lastModified,
    dateModified: pageDates,
    matches: pageDates.includes(row.lastModified),
  });
}

console.log(JSON.stringify(results, null, 2));
console.log(JSON.stringify({ profilePagesChecked, profileDateIssues }, null, 2));
if (results.some((result) => !result.matches) || profileDateIssues.length) process.exitCode = 1;
