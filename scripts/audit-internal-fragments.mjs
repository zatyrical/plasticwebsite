import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const outputRoot = path.join(process.cwd(), '.next', 'server', 'app');

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listHtmlFiles(entryPath) : [entryPath];
  }));

  return files.flat().filter((file) => file.endsWith('.html'));
}

function routeFromFile(file) {
  const relative = path.relative(outputRoot, file).split(path.sep).join('/');
  const withoutExtension = relative.slice(0, -'.html'.length);
  const route = withoutExtension === 'index'
    ? '/'
    : `/${withoutExtension.replace(/\/index$/, '')}`;

  return route;
}

function decodeFragment(fragment, context) {
  try {
    return decodeURIComponent(fragment);
  } catch {
    throw new Error(`Invalid encoded fragment in ${context}: #${fragment}`);
  }
}

const htmlFiles = await listHtmlFiles(outputRoot);
const pages = new Map();

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  if (route.startsWith('/_')) continue;

  const html = await readFile(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  pages.set(route, { file, html, ids });
}

const failures = [];
let checkedLinks = 0;

for (const [sourceRoute, page] of pages) {
  for (const match of page.html.matchAll(/\shref="([^"]*#[^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) continue;

    const target = new URL(href, `https://drjeremysun.com${sourceRoute}`);
    const fragment = decodeFragment(target.hash.slice(1), `${sourceRoute} -> ${href}`);
    if (!fragment) continue;

    checkedLinks += 1;
    const targetRoute = target.pathname === '/' ? '/' : target.pathname.replace(/\/$/, '');
    const targetPage = pages.get(targetRoute);

    if (!targetPage) {
      failures.push(`${sourceRoute}: ${href} targets a route absent from the static build`);
      continue;
    }

    if (!targetPage.ids.has(fragment)) {
      failures.push(`${sourceRoute}: ${href} has no matching id="${fragment}" on ${targetRoute}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Internal fragment audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Internal fragment audit passed: ${checkedLinks} fragment links across ${pages.size} static pages.`);
