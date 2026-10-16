import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

const read = file => fs.readFileSync(file, 'utf8');
const focusRule = '.article-comparison-wrap:focus-visible{outline:3px solid var(--emerald);outline-offset:3px}\n';
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
const results = [];
for (const file of walk('.next/server/app').filter(file => file.endsWith('.html'))) {
  const html = read(file);
  const tables = [...html.matchAll(/<table\b[^>]*class="article-comparison-table"[^>]*>[\s\S]*?<\/table>/g)];
  const wrappers = [...html.matchAll(/<div\b([^>]*class="article-comparison-wrap"[^>]*)>\s*(<table\b[\s\S]*?<\/table>)\s*<\/div>/g)];
  assert.equal(wrappers.length, tables.length, `Every comparison table needs a scroll wrapper: ${file}`);
  for (const [, attrs, table] of wrappers) {
    assert.match(attrs, /\btabindex="0"/, `Keyboard focus: ${file}`);
    assert.match(attrs, /\brole="region"/, `Region role: ${file}`);
    assert.match(attrs, /\baria-label="[^"\s][^"]*"/, `Descriptive name: ${file}`);
    assert.match(table, /<caption>[^<]+<\/caption>/, `Visible table caption: ${file}`);
    assert.match(table, /<th scope="col"/, `Column headers: ${file}`);
    assert.match(table, /<th scope="row"/, `Row headers: ${file}`);
  }
  if (wrappers.length) results.push({ route: file.replace('.next/server/app', '').replace(/\.html$/, ''), tables: wrappers.length });
}
assert.ok(results.length >= 12, 'Expected all existing comparison-table routes');
assert.ok(read('app/globals.css').includes(focusRule), 'Scoped visible keyboard focus indicator');

// Release-only local scope check: not required in shallow production checkouts.
if (process.argv.includes('--scope')) {
  const base = 'bc42491de518abab64ebac2ba8e77353bdecdb69';
  const before = file => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' });
  const once = (text, from, to) => {
    assert.equal(text.split(from).length, 2, `Unique declared change: ${from}`);
    return text.replace(from, to);
  };
  const shared = 'app/ProcedureArticle.tsx';
  assert.equal(once(read(shared), ' tabIndex={0} role="region" aria-label={section.comparison.caption}', ''), before(shared));
  const rapid = 'app/24-hour-rapid-recovery-breast-augmentation-singapore/page.tsx';
  assert.equal(once(read(rapid), ' tabIndex={0} role="region" aria-label="Rapid recovery breast augmentation comparison"', ''), before(rapid));
  assert.equal(once(read('app/globals.css'), focusRule, ''), before('app/globals.css'));
  let pkg = once(read('package.json'), ' && node scripts/audit-comparison-accessibility.mjs', '');
  pkg = once(pkg, '    "audit:comparison-accessibility": "node scripts/audit-comparison-accessibility.mjs",\n', '');
  assert.equal(pkg, before('package.json'));
  for (const file of ['app/procedureArticles.ts', 'app/seoIdentity.ts', 'app/sitemap.ts', 'app/breast-reconstruction-singapore/page.tsx']) assert.equal(read(file), before(file));
}
console.log(JSON.stringify({ routes: results, totalTables: results.reduce((n, row) => n + row.tables, 0), failures: [], exactSourceGuard: process.argv.includes('--scope') }, null, 2));
