import assert from 'node:assert/strict';
import fs from 'node:fs';

const root = '.next/server/app';
const html = fs.readFileSync(`${root}/lower-limb-reconstruction-singapore.html`, 'utf8');
const caption = 'Questions to prepare for a lower-limb reconstruction consultation';
const table = html.match(/<table[^>]*>[\s\S]*?<\/table>/)?.[0];
assert.ok(table?.includes(caption), 'Consultation table must be server-rendered');
assert.equal((table.match(/scope="col"/g) ?? []).length, 3);
assert.equal((table.match(/scope="row"/g) ?? []).length, 4);
for (const label of ['Wound and coverage', 'Blood supply and health', 'Function', 'Rehabilitation']) {
  assert.ok(table.includes(label), `Missing planning area: ${label}`);
}
assert.ok(html.includes('href="https://pubmed.ncbi.nlm.nih.gov/38645632/"'));
assert.ok(html.includes('href="https://www.saps.org.sg/limb-reconstruction"'));
assert.ok(html.includes('listed as Jeremy Mingfa Sun, is a coauthor'));
assert.ok(html.includes('does not predict an individual patient'));
assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
assert.ok(html.includes('rel="canonical" href="https://www.drjeremysun.com/lower-limb-reconstruction-singapore"'));
const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((m) => JSON.parse(m[1])).flatMap((v) => v['@graph'] ?? [v]);
const article = graphs.find((v) => v['@type'] === 'MedicalWebPage');
assert.equal(article.dateModified, '2026-10-15');
assert.equal(article.lastReviewed, '2026-09-06');
const faqs = graphs.find((v) => v['@type'] === 'FAQPage');
assert.equal(faqs.mainEntity.length, 3);
for (const route of ['head-neck-reconstruction-singapore', 'scar-reconstruction-singapore', 'breast-augmentation-singapore']) {
  const other = fs.readFileSync(`${root}/${route}.html`, 'utf8');
  assert.ok(!other.includes(caption), `Table leaked to ${route}`);
  assert.ok(!other.includes('href="https://pubmed.ncbi.nlm.nih.gov/38645632/"'), `Research box leaked to ${route}`);
}
console.log('Lower-limb planning: caption, scoped headers, four rows, evidence links, single H1, canonical, dates, three FAQs and route isolation passed.');
