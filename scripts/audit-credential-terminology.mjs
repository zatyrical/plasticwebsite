import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const checkedRoots = ['app', path.join('content', 'drafts')];
const allowedExtensions = new Set(['.md', '.mdx', '.ts', '.tsx']);
const retiredPatterns = [
  { label: 'MOH-accredited', pattern: /\bMOH[\s-]+accredited\b/gi },
  { label: 'MOH specialist', pattern: /\bMOH\s+specialist\b/gi },
  {
    label: 'Ministry of Health-accredited plastic surgeon',
    pattern: /\b(?:Singapore\s+)?Ministry\s+of\s+Health[\s-]+accredited\s+plastic\s+surgeon\b/gi
  }
];

function collectFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(entryPath);
    return allowedExtensions.has(path.extname(entry.name)) ? [entryPath] : [];
  });
}

const files = checkedRoots.flatMap((relativeRoot) => collectFiles(path.join(root, relativeRoot)));
const findings = [];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const lines = source.split('\n');

  for (const { label, pattern } of retiredPatterns) {
    pattern.lastIndex = 0;
    for (let index = 0; index < lines.length; index += 1) {
      pattern.lastIndex = 0;
      if (pattern.test(lines[index])) {
        findings.push({
          file: path.relative(root, file),
          line: index + 1,
          retiredTerm: label
        });
      }
    }
  }
}

console.log(JSON.stringify({ checkedFiles: files.length, findings }, null, 2));

if (findings.length) {
  process.exitCode = 1;
}
