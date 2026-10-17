import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// Scoped to the seven existing educational SVGs, not a general accessibility audit.
const expected = new Set([
  '/images/body-contouring/liposuction-target-layer-map.svg',
  '/images/body-contouring/tummy-tuck-assessment-layers.svg',
  '/images/aesthetic-breast/breast-implant-dimensions-pocket-map.svg',
  '/images/rhinoplasty/asian-rhinoplasty-assessment-map.svg',
  '/images/face-neck-lift-assessment-map.svg',
  '/images/face-neck-lift-scar-planning-zones.svg',
  '/images/reconstructive-tiles/head-neck-planning-map.svg'
]);
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const seen = new Set();
let rasterFigures = 0;
for (const file of walk('.next/server/app').filter(file => file.endsWith('.html'))) {
  const figures = fs.readFileSync(file, 'utf8').matchAll(/<figure class="article-material-figure">([\s\S]*?)<\/figure>/g);
  for (const [, figure] of figures) {
    const image = figure.match(/<img\b[^>]*>/)?.[0];
    assert.ok(image, `Figure image missing: ${file}`);
    const src = attr(image, 'src').split('?')[0];
    const links = [...figure.matchAll(/<a\b[^>]*class="article-diagram-fullsize"[^>]*>[\s\S]*?<\/a>/g)];
    if (!expected.has(src)) {
      assert.equal(links.length, 0, `Do not add diagram actions to other figures: ${file}`);
      rasterFigures++;
      continue;
    }
    assert.equal(links.length, 1, `One full-size action per educational SVG: ${file}`);
    const link = links[0][0];
    assert.equal(attr(link, 'href'), src, `Same existing image, not a new destination: ${file}`);
    assert.equal(attr(link, 'target'), '_blank');
    assert.match(attr(link, 'aria-label'), /^Open full-size educational diagram: .+ \(new tab\)$/);
    assert.ok(attr(link, 'rel').split(/\s+/).includes('noreferrer'));
    assert.match(link, />Open full-size educational diagram \(new tab\)<\/a>$/);
    assert.match(figure, /<figcaption>[\s\S]*<a\b/, 'Preserve the caption and group its action');
    assert.ok(fs.existsSync('public' + src), `Local asset exists: ${src}`);
    seen.add(src);
  }
}
assert.deepEqual([...seen].sort(), [...expected].sort(), 'All seven diagram sources covered');
const css = fs.readFileSync('app/globals.css', 'utf8');
assert.match(css, /\.article-diagram-fullsize\{[^}]*min-height:44px/);
assert.match(css, /\.article-diagram-fullsize:focus-visible\{[^}]*outline:3px solid/);
console.log(JSON.stringify({ educationalSources: [...seen], rasterFiguresWithoutDiagramAction: rasterFigures, failures: [] }, null, 2));
