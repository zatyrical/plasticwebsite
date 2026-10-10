import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server/app");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function decodeHtml(text) {
  return text
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&#x([0-9a-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function normalize(text) {
  return decodeHtml(text).replace(/\s+/g, " ").trim();
}

function graphNodes(value) {
  if (Array.isArray(value)) return value.flatMap(graphNodes);
  if (!value || typeof value !== "object") return [];
  return [value, ...graphNodes(value["@graph"] ?? [])];
}

const results = [];
for (const file of walk(root).filter((candidate) => candidate.endsWith(".html"))) {
  const html = fs.readFileSync(file, "utf8");
  const faqPages = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      try {
        return graphNodes(JSON.parse(decodeHtml(match[1])));
      } catch {
        return [];
      }
    })
    .filter((node) => node["@type"] === "FAQPage");

  if (!faqPages.length) continue;

  const visibleText = normalize(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<template\b[^>]*>[\s\S]*?<\/template>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );

  const questions = faqPages.flatMap((faq) => faq.mainEntity ?? []);
  const missing = questions.flatMap((question, index) => {
    const name = normalize(String(question.name ?? ""));
    const answer = normalize(String(question.acceptedAnswer?.text ?? ""));
    const absent = [];
    if (!name || !visibleText.includes(name)) absent.push("question");
    if (!answer || !visibleText.includes(answer)) absent.push("answer");
    return absent.length ? [{ index: index + 1, absent, name, answer }] : [];
  });

  results.push({
    route: `/${path.relative(root, file).replace(/(?:\/index)?\.html$/, "")}`,
    faqPages: faqPages.length,
    questions: questions.length,
    missing,
  });
}

console.log(JSON.stringify(results, null, 2));
if (results.some((result) => result.missing.length)) process.exitCode = 1;
