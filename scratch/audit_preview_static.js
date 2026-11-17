const fs = require('fs');
const path = require('path');

const previewStaticDir = path.join(__dirname, '..', 'preview-static');
const files = fs.readdirSync(previewStaticDir).filter(f => f.endsWith('.html'));

let totalIssues = 0;

console.log(`Auditing ${files.length} HTML files in preview-static/:\n`);

files.forEach(file => {
  const filePath = path.join(previewStaticDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // 1. Check Images
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) continue;
    const resolved = path.resolve(previewStaticDir, src);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken image: ${src} -> ${resolved}`);
    }
  }

  // 2. Check CSS Links
  const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g;
  while ((match = cssRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http://') || href.startsWith('https://')) continue;
    const resolved = path.resolve(previewStaticDir, href);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken CSS link: ${href} -> ${resolved}`);
    }
  }

  // 3. Check Script Tags
  const jsRegex = /<script[^>]+src=["']([^"']+)["']/g;
  while ((match = jsRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://')) continue;
    const resolved = path.resolve(previewStaticDir, src);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken Script link: ${src} -> ${resolved}`);
    }
  }

  // 4. Check Internal Links
  const aRegex = /<a[^>]+href=["'](\.\/[^"']+\.html)["']/g;
  while ((match = aRegex.exec(content)) !== null) {
    const href = match[1];
    const resolved = path.resolve(previewStaticDir, href);
    if (!fs.existsSync(resolved)) {
      issues.push(`Broken internal link: ${href} -> ${resolved}`);
    }
  }

  // 5. Invariant 6: Single-screen constraint for system pages
  if (['404.html', '500.html', '503.html', 'maintenance.html'].includes(file)) {
    if (!content.includes('height: 100vh') || !content.includes('overflow: hidden')) {
      issues.push(`Invariant 6 failure: System page must enforce height: 100vh; overflow: hidden;`);
    }
  }

  if (issues.length > 0) {
    console.log(`[FAIL] ${file}:`);
    issues.forEach(i => console.log(`   - ${i}`));
    totalIssues += issues.length;
  } else {
    console.log(`[PASS] ${file}`);
  }
});

console.log(`\nAudit complete: ${totalIssues} total issues found.`);

