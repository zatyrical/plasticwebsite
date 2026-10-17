import assert from 'node:assert/strict';
import fs from 'node:fs';

// Scoped source-colour checks, not an SVG renderer or whole-site WCAG audit.
// These labelled badges remain small when the full figures are scaled to fit.
const fixtures = [
  ['images/rhinoplasty/asian-rhinoplasty-assessment-map.svg', 6],
  ['images/face-neck-lift-assessment-map.svg', 4],
  ['images/body-contouring/tummy-tuck-assessment-layers.svg', 4],
  ['images/face-neck-lift-scar-planning-zones.svg', 5]
];
const hex = (value) => {
  assert.match(value, /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i);
  return value.length === 4 ? '#' + [...value.slice(1)].map((v) => v + v).join('') : value;
};
const luminance = (value) => hex(value).slice(1).match(/../g)
  .map((channel) => parseInt(channel, 16) / 255)
  .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => {
  const values = [luminance(a), luminance(b)].sort((x, y) => x - y);
  return (values[1] + 0.05) / (values[0] + 0.05);
};
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1];
const checks = [];
for (const [path, count] of fixtures) {
  const source = fs.readFileSync(new URL('../public/' + path, import.meta.url), 'utf8');
  const badges = [...source.matchAll(/(<circle\b[^>]*\/>)\s*(<text\b[^>]*>)(\d+)<\/text>/g)];
  assert.equal(badges.length, count, `${path}: review badge fixtures if the figure structure changes`);
  for (const [, circle, text, label] of badges) {
    assert.equal(attribute(circle, 'cx'), attribute(text, 'x'), 'Badge label must remain centred');
    assert.equal(attribute(text, 'text-anchor'), 'middle');
    assert.equal(attribute(circle, 'fill-opacity'), undefined, 'Transparent badges need a different background model');
    assert.equal(attribute(text, 'fill-opacity'), undefined);
    const foreground = attribute(text, 'fill');
    const background = attribute(circle, 'fill');
    checks.push({ path, label, foreground, background, ratio: contrast(foreground, background) });
  }
  const kicker = path.includes('scar-planning') ? 'SCAR-PLANNING GUIDE'
    : path === 'images/face-neck-lift-assessment-map.svg' ? 'CONSULTATION MAP' : null;
  if (kicker) {
    const tag = source.match(new RegExp(`(<text\\b[^>]*>)${kicker}<\\/text>`))?.[1];
    assert.ok(tag, `${path}: kicker missing`);
    const gradientId = path.includes('scar-planning') ? 'bg' : 'background';
    const gradient = source.match(new RegExp(`<linearGradient id="${gradientId}"[^>]*>([\\s\\S]*?)<\\/linearGradient>`))?.[1];
    assert.ok(gradient, `${path}: background gradient missing`);
    const backgrounds = [...gradient.matchAll(/stop-color="(#[0-9a-f]+)"/gi)].map((m) => m[1]);
    assert.equal(backgrounds.length, 2);
    assert.ok(source.includes(`fill="url(#${gradientId})"`));
    for (const background of backgrounds) {
      const foreground = attribute(tag, 'fill');
      checks.push({ path, label: kicker, foreground, background, ratio: contrast(foreground, background) });
    }
  }
}
console.log(JSON.stringify({ scope: '19 numbered badges and two kickers on known backgrounds only', checks }, null, 2));
const failures = checks.filter((check) => check.ratio < 4.5);
assert.equal(failures.length, 0, JSON.stringify(failures));
