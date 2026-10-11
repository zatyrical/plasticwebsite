import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'app', 'llms.txt', 'route.ts');
const source = fs.readFileSync(sourcePath, 'utf8');
const contentMatch = source.match(/const content = `([\s\S]*?)`;\n/);

if (!contentMatch) {
  throw new Error('Could not extract the llms.txt template from app/llms.txt/route.ts');
}

const baseUrl = 'https://www.drjeremysun.com';
const content = contentMatch[1].replaceAll('${baseUrl}', baseUrl);
const bulletLines = content
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.startsWith('- '));

const duplicateBullets = [...new Set(
  bulletLines.filter((line, index) => bulletLines.indexOf(line) !== index)
)];

const siteUrls = [...new Set(
  [...content.matchAll(/https:\/\/www\.drjeremysun\.com(?:\/[^\s]*)?/g)].map((match) => match[0])
)];

const missingRoutes = siteUrls.filter((url) => {
  const pathname = new URL(url).pathname.replace(/\/$/, '') || '/';
  const pagePath = pathname === '/'
    ? path.join(root, 'app', 'page.tsx')
    : path.join(root, 'app', pathname.slice(1), 'page.tsx');
  return !fs.existsSync(pagePath);
});

const result = {
  bullets: bulletLines.length,
  duplicateBullets,
  siteUrls: siteUrls.length,
  missingRoutes
};

console.log(JSON.stringify(result, null, 2));

if (duplicateBullets.length || missingRoutes.length) {
  process.exitCode = 1;
}
