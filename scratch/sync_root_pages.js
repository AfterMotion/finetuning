const fs = require('fs');
const path = require('path');

const previewDir = path.join(__dirname, '..', 'preview');
const rootDir = path.join(__dirname, '..');

const filesToSync = [
  { src: 'index.html', targets: ['index.html'] },
  { src: 'about.html', targets: ['about.html'] },
  { src: 'service.html', targets: ['service.html'] },
  { src: 'portfolio.html', targets: ['portfolio.html', 'portfolio-2.html'] },
  { src: 'contact.html', targets: ['contact.html'] },
  { src: 'blog.html', targets: ['blog.html', 'blog-grid.html'] },
  { src: 'career.html', targets: ['career.html'] },
  { src: 'team.html', targets: ['team.html', 'team-single.html'] },
  { src: 'portal.html', targets: ['portal.html', 'my-account.html'] },
  { src: 'faq.html', targets: ['faq.html'] },
  { src: 'privacy.html', targets: ['privacy.html'] },
  { src: 'terms.html', targets: ['terms.html'] },
  { src: '404.html', targets: ['404.html'] },
  { src: '500.html', targets: ['500.html'] },
  { src: '503.html', targets: ['503.html'] },
  { src: 'maintenance.html', targets: ['maintenance.html'] }
];

filesToSync.forEach(item => {
  const srcPath = path.join(previewDir, item.src);
  if (!fs.existsSync(srcPath)) {
    console.error('Source not found:', srcPath);
    return;
  }
  let content = fs.readFileSync(srcPath, 'utf8');

  // Adjust relative paths for root
  content = content.replace(/href="\.\/styles\.css"/g, 'href="./preview/styles.css"');
  content = content.replace(/src="\.\/app\.js"/g, 'src="./preview/app.js"');
  content = content.replace(/\.\.\/images\/webp\//g, 'images/webp/');
  content = content.replace(/\.\.\/assets\//g, 'assets/');

  item.targets.forEach(target => {
    const destPath = path.join(rootDir, target);
    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Synced ${item.src} -> ${target}`);
  });
});

console.log('Root synchronization complete.');

