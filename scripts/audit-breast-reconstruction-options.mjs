import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const base = '25795e4775339fc79db6c2de7a29a24042b4fad9';
const route = 'breast-reconstruction-singapore';
const file = `app/${route}/page.tsx`;
const read = path => fs.readFileSync(path, 'utf8');
const before = path => execFileSync('git', ['show', `${base}:${path}`], { encoding: 'utf8' });
const ids = ['implant-reconstruction', 'diep-reconstruction', 'other-flap-options', 'oncoplastic-reconstruction'];
function once(text, from, to) {
  assert.equal(text.split(from).length, 2, `Expected unique match: ${from}`);
  return text.replace(from, to);
}

const source = read(file);
const blockPattern = /            <p id="options-summary-note">[\s\S]*?            <\/div>\n\n/;
const blocks = source.match(new RegExp(blockPattern.source, 'g')) || [];
assert.equal(blocks.length, 1, 'Exactly one declared comparison block');
const block = blocks[0];
assert.equal((block.match(/<th scope="row">/g) || []).length, 4);
assert.equal((block.match(/<th scope="col">/g) || []).length, 3);
assert.equal((block.match(/<td>/g) || []).length, 8);
assert.ok(block.includes('not a recommendation'));
assert.ok(block.includes('aria-describedby="options-summary-note" tabIndex={0}'));
let restored = source.replace(block, '');
for (const id of ids) {
  assert.equal(block.split(`href="#${id}"`).length, 2);
  restored = once(restored, `<h3 id="${id}">`, '<h3>');
}
restored = once(restored, "dateModified: '2026-10-16'", "dateModified: '2026-10-14'");
assert.equal(restored, before(file), 'All existing clinical prose, FAQs, metadata, sources and forms must remain unchanged');
assert.equal(once(read('app/procedureAnchors.css'), '.article-page h3[id],\n', ''), before('app/procedureAnchors.css'));
assert.equal(once(read('app/sitemap.ts'), `['/${route}', '2026-10-16']`, `['/${route}', '2026-10-14']`), before('app/sitemap.ts'));

const html = read(`.next/server/app/${route}.html`);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(html.includes(`rel="canonical" href="https://www.drjeremysun.com/${route}"`));
assert.equal(html.split('id="options-summary-note"').length, 2);
assert.ok(html.includes('aria-label="Breast reconstruction options comparison"'));
assert.match(html, /aria-describedby="options-summary-note" tabindex="0"/);
const table = html.match(/<table class="article-comparison-table">[\s\S]*?<\/table>/)?.[0];
assert.ok(table);
assert.equal((table.match(/<th scope="row">/g) || []).length, 4);
assert.equal((table.match(/<th scope="col">/g) || []).length, 3);
for (const id of ids) {
  assert.equal(html.split(`id="${id}"`).length, 2);
  assert.equal(table.split(`href="#${id}"`).length, 2);
}
const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const page = scripts.flatMap(s => s['@graph'] || [s]).find(s => s['@type'] === 'MedicalWebPage');
assert.equal(page.dateModified, '2026-10-16');
assert.equal(page.lastReviewed, '2026-09-06');
assert.equal(scripts.find(s => s['@type'] === 'FAQPage').mainEntity.length, 6);
for (const href of ['https://www.saps.org.sg/breast-reconstruction-options', 'https://www.saps.org.sg/breast-reconstruction-types', 'https://www.saps.org.sg/microsurgery', '/fat-grafting-singapore']) assert.ok(html.includes(`href="${href}"`));
console.log(JSON.stringify({ route, rows: 4, columns: 3, optionTargets: ids, unchangedOriginalSource: true, lastReviewed: page.lastReviewed, dateModified: page.dateModified }, null, 2));
