import fs from 'node:fs';
import path from 'node:path';

const appOutput = path.join(process.cwd(), '.next', 'server', 'app');

if (!fs.existsSync(appOutput)) {
  throw new Error('Build output is missing. Run npm run build before this audit.');
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

const htmlFiles = walk(appOutput).filter(
  (file) => file.endsWith('.html') && !file.endsWith('_global-error.html')
);
const failures = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const count = (pattern) => (html.match(pattern) || []).length;
  const result = {
    file: path.relative(appOutput, file),
    primaryNavigation: count(/<nav class="nav">/g),
    skipLinks: count(/class="skip-link"/g),
    contentTargets: count(/id="main-content"/g)
  };
  const navigationIndex = html.indexOf('<nav class="nav">');
  const mainIndex = html.indexOf('<main');

  if (
    result.primaryNavigation !== 1 ||
    result.skipLinks !== 1 ||
    result.contentTargets !== 1 ||
    !html.includes('href="#main-content">Skip to main content</a>') ||
    (mainIndex >= 0 && navigationIndex > mainIndex)
  ) {
    failures.push(result);
  }
}

console.log(JSON.stringify({ htmlFiles: htmlFiles.length, failures }, null, 2));

if (failures.length) {
  process.exit(1);
}
