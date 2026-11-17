const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'about.html'),
  path.join(__dirname, '..', 'preview', 'about.html'),
  path.join(__dirname, '..', 'preview-static', 'about.html')
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(
      '<div style="display: flex; gap: 20px;">',
      '<div class="stat-chips-row">'
    );
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated stat-chips-row in ${f}`);
  }
});

