import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const base = '24a61a520cb5cb08edd732a528f8e47de2f4214b';
const before = file => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' });
const read = file => fs.readFileSync(file, 'utf8');
const lipoParagraph = '                    <p>Singapore patient information: <a href="https://www.saps.org.sg/liposuction">Singapore Association of Plastic Surgeons: liposuction</a>.</p>\n';
const faceParagraph = '                    <p>Singapore patient information: <a href="https://www.saps.org.sg/face-lift">Singapore Association of Plastic Surgeons: face lift</a> and <a href="https://www.saps.org.sg/neck-lift">Singapore Association of Plastic Surgeons: neck lift</a>.</p>\n';

function once(text, a, b) {
  assert.equal(text.split(a).length, 2, `Expected a unique source match: ${a}`);
  return text.replace(a, b);
}

let restored = read('app/ProcedureArticle.tsx');
restored = once(restored, lipoParagraph, '');
restored = once(restored, faceParagraph, '');
const faceBlock = /(?<=\{article\.slug === 'face-neck-lift-singapore' && section\.id === 'risks' \? \(\n)                  <>\n(                    <p>Further patient information:[^\n]+\n)                  <\/>(?=\n                \) : null\})/;
assert.match(restored, faceBlock);
restored = restored.replace(faceBlock, (_, p) => p.replace(/^  /, '').trimEnd());
assert.equal(restored, before('app/ProcedureArticle.tsx'), 'Only declared resource paragraphs/wrapper may change');

const routes = [
  ['body-contouring-liposuction-singapore', '2026-10-14', ['liposuction']],
  ['face-neck-lift-singapore', '2026-10-13', ['face-lift', 'neck-lift']]
];
let articles = read('app/procedureArticles.ts');
let sitemap = read('app/sitemap.ts');
const results = [];
for (const [slug, oldDate, resources] of routes) {
  articles = once(articles, `slug: '${slug}',\n    modifiedIso: '2026-10-16'`, `slug: '${slug}',\n    modifiedIso: '${oldDate}'`);
  sitemap = once(sitemap, `['/${slug}', '2026-10-16']`, `['/${slug}', '${oldDate}']`);
  const html = read(`.next/server/app/${slug}.html`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes(`href="https://www.drjeremysun.com/${slug}"`));
  for (const resource of resources) {
    assert.equal(html.split(`href="https://www.saps.org.sg/${resource}"`).length, 2);
  }
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const page = scripts.flatMap(s => s['@graph'] || [s]).find(s => s['@type'] === 'MedicalWebPage');
  assert.equal(page.dateModified, '2026-10-16');
  assert.equal(page.lastReviewed, '2026-09-06');
  results.push({ slug, resources, modified: page.dateModified, clinicalReview: page.lastReviewed });
}
assert.equal(articles, before('app/procedureArticles.ts'), 'Clinical articles/FAQs unchanged apart from declared modification dates');
assert.equal(sitemap, before('app/sitemap.ts'), 'Only two sitemap dates may change');
console.log(JSON.stringify({ results, clinicalSourceUnchanged: true, scope: 'Two local-resource paragraphs and matching modification dates only' }, null, 2));
