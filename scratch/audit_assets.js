const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const previewDir = path.join(rootDir, 'preview');

function auditHtmlFile(filePath, baseDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Check image src
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) continue;
    const resolved = path.resolve(baseDir, src);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken image src: ${src} (resolved: ${resolved})`);
    }
  }

  // Check CSS links
  const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http://') || href.startsWith('https://')) continue;
    const resolved = path.resolve(baseDir, href);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken CSS href: ${href} (resolved: ${resolved})`);
    }
  }

  // Check JS scripts
  const scriptRegex = /<script[^>]+src=["']([^"']+)["']/g;
  while ((match = scriptRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://')) continue;
    const resolved = path.resolve(baseDir, src);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken script src: ${src} (resolved: ${resolved})`);
    }
  }

  return issues;
}

const previewFiles = fs.readdirSync(previewDir).filter(f => f.endsWith('.html'));
console.log('Auditing preview files:');
previewFiles.forEach(f => {
  const full = path.join(previewDir, f);
  const issues = auditHtmlFile(full, previewDir);
  if (issues.length > 0) {
    console.log(`[FAIL] ${f}:`, issues);
  } else {
    console.log(`[PASS] ${f}`);
  }
});

const rootFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
console.log('\nAuditing root files:');
rootFiles.forEach(f => {
  const full = path.join(rootDir, f);
  const issues = auditHtmlFile(full, rootDir);
  if (issues.length > 0) {
    console.log(`[FAIL] ${f}:`, issues);
  } else {
    console.log(`[PASS] ${f}`);
  }
});

