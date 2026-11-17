const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'preview');
const destDir = path.join(__dirname, '..', 'preview-static');

// Map of source files to target filenames in preview-static
const pageMappings = [
  { src: 'index.html', targets: ['index.html'] },
  { src: 'about.html', targets: ['about.html'] },
  { src: 'service.html', targets: ['service.html'] },
  { src: 'portfolio.html', targets: ['portfolio-2.html', 'portfolio.html'] },
  { src: 'contact.html', targets: ['contact.html'] },
  { src: 'blog.html', targets: ['blog-grid.html', 'blog.html'] },
  { src: 'career.html', targets: ['career.html'] },
  { src: 'team.html', targets: ['team-single.html', 'team.html'] },
  { src: 'portal.html', targets: ['my-account.html', 'portal.html'] },
  { src: 'faq.html', targets: ['faq.html'] },
  { src: 'privacy.html', targets: ['privacy.html'] },
  { src: 'terms.html', targets: ['terms.html'] },
  { src: '404.html', targets: ['404.html'] },
  { src: '500.html', targets: ['500.html'] },
  { src: '503.html', targets: ['503.html'] },
  { src: 'maintenance.html', targets: ['maintenance.html'] }
];

pageMappings.forEach(mapping => {
  const srcFile = path.join(srcDir, mapping.src);
  if (!fs.existsSync(srcFile)) {
    console.error(`Source file not found: ${srcFile}`);
    return;
  }

  let html = fs.readFileSync(srcFile, 'utf8');

  // 1. Replace CSS links with 3-layer cascade: tokens.css, theme.css, site.css
  html = html.replace(
    /<link rel="stylesheet" href="\.\/styles\.css">/g,
    '<link rel="stylesheet" href="./css/tokens.css">\n  <link rel="stylesheet" href="./css/theme.css">\n  <link rel="stylesheet" href="./css/site.css">'
  );

  // 2. Replace JS controller link
  html = html.replace(/src="\.\/app\.js"/g, 'src="./js/main.js"');

  // 3. Replace image paths: ../images/webp/ -> ./assets/images/
  html = html.replace(/\.\.\/images\/webp\//g, './assets/images/');

  // 4. Replace brand icon path: ../assets/brand/ -> ./assets/brand/
  html = html.replace(/\.\.\/assets\/brand\//g, './assets/brand/');

  // 5. Update internal links to match tagged files while keeping aliases working:
  // portfolio.html -> portfolio-2.html
  // blog.html -> blog-grid.html
  // team.html -> team-single.html
  // portal.html -> my-account.html
  html = html.replace(/href="\.\/portfolio\.html"/g, 'href="./portfolio-2.html"');
  html = html.replace(/href="\.\/blog\.html"/g, 'href="./blog-grid.html"');
  html = html.replace(/href="\.\/team\.html"/g, 'href="./team-single.html"');
  html = html.replace(/href="\.\/portal\.html"/g, 'href="./my-account.html"');

  // Write to each target file
  mapping.targets.forEach(target => {
    const destFile = path.join(destDir, target);
    fs.writeFileSync(destFile, html, 'utf8');
    console.log(`Generated preview-static/${target}`);
  });
});

console.log('All static pages generated successfully in preview-static/.');

