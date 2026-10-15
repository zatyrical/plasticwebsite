import assert from 'node:assert/strict';
import fs from 'node:fs';

const root = '.next/server/app';
const image = '/images/reconstructive-tiles/head-neck-planning-map.svg';
const svg = fs.readFileSync(`public${image}`, 'utf8');
assert.ok(svg.includes('width="640" height="1420" viewBox="0 0 640 1420"'));
assert.ok(svg.includes('aria-labelledby="title desc"'));
assert.ok(svg.includes('<title id="title">'));
assert.ok(svg.includes('<desc id="desc">'));
assert.ok(!/<script|<foreignObject|(?:href|src)=|on\w+=/i.test(svg), 'SVG must be self-contained and non-interactive');
for (const label of ['Defect and tissues', 'Function and appearance', 'Cancer treatment', 'Individual reconstructive plan', 'Recovery and rehabilitation', 'When relevant:', 'not a procedure-selection']) {
  assert.ok(svg.includes(label), `Missing map label: ${label}`);
}
const html = fs.readFileSync(`${root}/head-neck-reconstruction-singapore.html`, 'utf8');
const img = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((v) => v.includes(image));
assert.ok(img, 'Map must be an HTML image, not a CSS background');
assert.ok(img.includes('width="640"') && img.includes('height="1420"'));
assert.ok(img.includes('alt="Planning map: defect and tissues'));
assert.ok(html.includes('not a procedure-selection guide or a fixed treatment sequence'));
assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
assert.ok(html.includes('rel="canonical" href="https://www.drjeremysun.com/head-neck-reconstruction-singapore"'));
const nodes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((m) => JSON.parse(m[1])).flatMap((v) => v['@graph'] ?? [v]);
const page = nodes.find((v) => v['@type'] === 'MedicalWebPage');
assert.equal(page.dateModified, '2026-10-16');
assert.equal(page.lastReviewed, '2026-09-06');
assert.equal(nodes.find((v) => v['@type'] === 'FAQPage').mainEntity.length, 3);
for (const route of ['lower-limb-reconstruction-singapore', 'scar-reconstruction-singapore', 'breast-augmentation-singapore']) {
  assert.ok(!fs.readFileSync(`${root}/${route}.html`, 'utf8').includes(image), `Map leaked to ${route}`);
}
console.log('Head/neck map: safe standalone SVG, labels, HTML image/alt/dimensions/caption, route isolation, canonical, dates and three FAQs passed.');
