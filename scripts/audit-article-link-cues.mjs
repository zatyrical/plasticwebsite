import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

// A source regression guard, not a browser cascade test or WCAG certification.
const css = fs.readFileSync('app/globals.css', 'utf8');
const selectors = [
  '.article-content p a[href]:not(.btn):not([role="button"]):not(nav a)',
  '.article-content li a[href]:not(.btn):not([role="button"]):not(nav a)'
];
const marker = '/* Make links recognisable within article prose without restyling navigation or buttons. */';
const addition = `\n${marker}\n${selectors.join(',\n')}{text-decoration-line:underline;text-underline-offset:3px}\n`;
assert.equal(css.split(marker).length, 2, 'Exactly one scoped prose-link rule');
assert.ok(css.includes(addition), 'Guard the two prose selectors and decoration-only declarations');
for (const selector of selectors) {
  assert.match(selector, /^\.article-content (p|li) a\[href\]/);
  for (const exclusion of ['.btn', '[role="button"]', 'nav a']) {
    assert.ok(selector.includes(`:not(${exclusion})`));
  }
}

// Local release guard: removing this one addition must restore the exact original CSS.
if (process.argv.includes('--scope')) {
  const base = '0bbe3c513b2fa0733f69d701bb908f0788f90cf4';
  const before = file => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' });
  assert.equal(css.replace(addition, ''), before('app/globals.css'));
  for (const file of ['app/ProcedureArticle.tsx', 'app/procedureArticles.ts', 'app/seoIdentity.ts', 'app/sitemap.ts', 'app/24-hour-rapid-recovery-breast-augmentation-singapore/page.tsx']) {
    assert.equal(fs.readFileSync(file, 'utf8'), before(file), `No content, metadata or date changes: ${file}`);
  }
}
console.log(JSON.stringify({ scope: 'article paragraph/list prose links', selectors, properties: ['text-decoration-line', 'text-underline-offset'], exactSourceGuard: process.argv.includes('--scope') }));
