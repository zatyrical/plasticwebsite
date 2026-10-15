import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const base = 'a613ca9a932b82161153dd9444d13427b86169de';
const summarySizes = '(max-width: 600px) calc(100vw - 78px), (max-width: 1180px) 420px, 276px';
const contentSizes = '(max-width: 760px) calc(100vw - 46px), (max-width: 1180px) 714px, 774px';
const asset = '/images/aesthetic-breast/breast-implant-illness-2025-systematic-review-infographic.png';
const bii = 'breast-implant-illness-singapore-evidence';
const routes = [
  ['24-hour-rapid-recovery-breast-augmentation-singapore', '330px'],
  ['asian-eyelid-surgery-singapore', '330px'],
  ['compression-foam-lymphatic-massage-after-liposuction', '520px']
];

function once(text, oldValue, newValue) {
  assert.equal(text.split(oldValue).length, 2, `Expected one occurrence: ${oldValue}`);
  return text.replace(oldValue, newValue);
}

function assertOnlyExpectedEdits(route, changes) {
  const file = `app/${route}/page.tsx`;
  let expected = execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' });
  for (const [oldValue, newValue] of changes) expected = once(expected, oldValue, newValue);
  assert.equal(fs.readFileSync(file, 'utf8'), expected, `${route}: unexpected source/clinical edit`);
}

const results = [];
for (const [route, oldSlot] of routes) {
  assertOnlyExpectedEdits(route, [[`sizes="(max-width: 900px) 100vw, ${oldSlot}"`, `sizes="${summarySizes}"`]]);
  const html = fs.readFileSync(`.next/server/app/${route}.html`, 'utf8');
  const figure = html.match(/<figure class="article-hero-image-card">[\s\S]*?<\/figure>/)?.[0];
  assert.ok(figure, `${route}: summary figure missing`);
  assert.ok(figure.includes(`sizes="${summarySizes}"`));
  assert.equal((figure.match(/<img\b/g) || []).length, 1);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes(`href="https://www.drjeremysun.com/${route}"`));
  results.push({ route, summarySizes });
}

const oldCaption = 'doi:10.1007/s00266-025-05142-x.</figcaption>';
const newCaption = `doi:10.1007/s00266-025-05142-x. <a href="${asset}" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>View full-size infographic</a>.</figcaption>`;
assertOnlyExpectedEdits(bii, [
  ['<figure className="article-hero-image-card">', '<figure className="article-material-figure">'],
  ['sizes="(max-width: 900px) 100vw, 900px"', `sizes="${contentSizes}"`],
  [oldCaption, newCaption]
]);
const html = fs.readFileSync(`.next/server/app/${bii}.html`, 'utf8');
const figure = html.match(/<figure class="article-material-figure">[\s\S]*?<\/figure>/)?.[0];
assert.ok(figure && !figure.includes('article-hero-image-card'));
assert.ok(figure.includes(`sizes="${contentSizes}"`));
assert.ok(figure.includes('width="1600" height="900"'));
assert.ok(figure.includes(`<a href="${asset}" style="text-decoration:underline;text-underline-offset:4px">View full-size infographic</a>`));
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(html.includes(`href="https://www.drjeremysun.com/${bii}"`));

const css = fs.readFileSync('app/globals.css', 'utf8');
assert.ok(css.includes('.article-material-figure img{display:block;width:100%;height:auto}'));
assert.equal((css.match(/\.article-material-figure img\s*\{/g) || []).length, 1);
assert.match(css, /\.article-hero-grid\{[^}]*grid-template-columns:minmax\(0,1fr\) 330px;/);
assert.ok(css.includes('.article-hero-image-card{max-width:420px;'));
assert.ok(css.includes('.article-summary-card{padding:16px;'));
const hash = value => createHash('sha256').update(value).digest('hex');
const assetHash = hash(fs.readFileSync(`public${asset}`));
assert.equal(assetHash, hash(execFileSync('git', ['show', `${base}:public${asset}`])));
assert.equal(css, execFileSync('git', ['show', `${base}:app/globals.css`], { encoding: 'utf8' }));
results.push({ route: bii, fullNaturalAspectRatio: '1600:900', fullSizeLink: asset, contentSizes, assetHash });
console.log(JSON.stringify({ results, sourceScope: 'Exact allowed edits only; clinical text, FAQ, review dates and metadata preserved', limits: 'Source/rendered HTML assertions; not computed-browser geometry, field CWV or ranking evidence' }, null, 2));
