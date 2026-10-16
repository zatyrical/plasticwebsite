import assert from 'node:assert/strict';
import fs from 'node:fs';

// Deliberately scoped to three known light-surface labels, not a CSS engine or
// a whole-site accessibility certificate. Values come from the actual stylesheet.
const css = fs.readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((match) => ({
  selectors: match[1].trim().split(',').map((selector) => selector.trim()),
  declarations: match[2]
}));
const properties = (declarations) => Object.fromEntries(
  declarations.split(';').filter((entry) => entry.includes(':')).map((entry) => {
    const separator = entry.indexOf(':');
    return [entry.slice(0, separator).trim(), entry.slice(separator + 1).trim()];
  })
);
const tokens = properties(rules.find((rule) => rule.selectors.includes(':root')).declarations);
const declaration = (selector, property) => rules
  .filter((rule) => rule.selectors.includes(selector))
  .map((rule) => properties(rule.declarations)[property]).filter(Boolean).at(-1);
const resolve = (value) => value?.startsWith('var(')
  ? tokens[value.slice(4, -1)] : value;
const rgb = (hex) => {
  assert.match(hex, /^#[0-9a-f]{6}$/i);
  return hex.slice(1).match(/../g).map((channel) => parseInt(channel, 16));
};
const luminance = (hex) => rgb(hex).map((channel) => channel / 255)
  .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
  .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (foreground, background) => {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => a - b);
  return (values[1] + 0.05) / (values[0] + 0.05);
};
const composite = (foreground, background, alpha) => '#' + rgb(foreground)
  .map((channel, index) => Math.round(channel * alpha + rgb(background)[index] * (1 - alpha))
    .toString(16).padStart(2, '0')).join('');

// The hero's darkest linear-gradient endpoint plus maximum gold radial overlay
// is a conservative background case, not a measured screenshot pixel.
assert.ok(declaration('.article-hero', 'background').includes('#f1eee7'));
assert.equal(declaration('.related-card', 'background'), '#fff');
assert.equal(declaration('.card', 'background'), 'var(--card)');
assert.equal(tokens['--card'], '#ffffff');
const checks = [
  { selector: '.article-hero .eyebrow', fallback: '.eyebrow', background: '#fbfaf7' },
  { selector: '.article-hero .eyebrow', fallback: '.eyebrow', background: '#f1eee7' },
  { selector: '.article-hero .eyebrow', fallback: '.eyebrow', background: composite(tokens['--gold'], '#f1eee7', 0.16) },
  { selector: '.related-card small', background: '#ffffff' },
  { selector: '.treatment-pathway-section .card small', background: tokens['--card'] }
].map((check) => {
  const foreground = resolve(declaration(check.selector, 'color') || declaration(check.fallback, 'color'));
  return { selector: check.selector, foreground, background: check.background, ratio: contrast(foreground, check.background) };
});
console.log(JSON.stringify({ scope: 'three light-surface label families only', checks }, null, 2));
for (const check of checks) {
  assert.ok(check.ratio >= 4.5, `${check.selector}: ${check.ratio}:1 is below 4.5:1`);
}
assert.equal(tokens['--gold'], '#b89a5e', 'Decorative gold must remain unchanged');
assert.equal(declaration('.eyebrow', 'color'), 'var(--gold)', 'Do not globally darken labels on dark sections');
assert.ok(css.includes(':where(a,button):focus-visible{outline:3px solid var(--gold);'));
const textTokenRules = rules.filter((rule) => rule.declarations.includes('color:var(--gold-text)'));
assert.equal(textTokenRules.length, 1);
assert.deepEqual(textTokenRules[0].selectors, [
  '.article-hero .eyebrow', '.related-card small', '.treatment-pathway-section .card small'
]);
