import assert from 'node:assert/strict';
import fs from 'node:fs';

// Source guard for the shared enquiry fields, not a whole-site WCAG certificate.
const css = fs.readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
  selectors: m[1].trim().split(',').map((s) => s.trim()),
  properties: Object.fromEntries(m[2].split(';').filter((s) => s.includes(':')).map((s) => {
    const i = s.indexOf(':');
    return [s.slice(0, i).trim(), s.slice(i + 1).trim()];
  }))
}));
const last = (selector, property) => rules.filter((r) => r.selectors.includes(selector))
  .map((r) => r.properties[property]).filter(Boolean).at(-1);
assert.equal(last(':root', '--emerald'), '#0e3a33');
for (const field of ['input', 'select', 'textarea']) {
  assert.equal(last(`.contact-form ${field}:focus-visible`, 'outline'), '3px solid var(--emerald)');
  assert.equal(last(`.contact-form ${field}:focus-visible`, 'outline-offset'), '3px');
}
const luminance = (hex) => hex.match(/../g).map((s) => parseInt(s, 16) / 255)
  .map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
  .reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + .05)
  / (Math.min(luminance(a), luminance(b)) + .05);
// Actual white control / light enquiry-section backgrounds. Browser checks cover focus behaviour.
const ratios = ['ffffff', 'fbfaf7'].map((background) => ({ background, ratio: contrast('0e3a33', background) }));
for (const result of ratios) assert.ok(result.ratio >= 3);
console.log(JSON.stringify({ scope: 'shared enquiry field focus', controls: 3, ratios }));
