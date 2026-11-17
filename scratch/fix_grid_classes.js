const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, '..'),
  path.join(__dirname, '..', 'preview'),
  path.join(__dirname, '..', 'preview-static')
];

dirs.forEach(dir => {
  // Update about.html
  const aboutPath = path.join(dir, 'about.html');
  if (fs.existsSync(aboutPath)) {
    let content = fs.readFileSync(aboutPath, 'utf8');
    content = content.replace(
      'style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;"',
      'class="about-split-grid"'
    );
    fs.writeFileSync(aboutPath, content, 'utf8');
    console.log(`Updated about.html in ${dir}`);
  }

  // Update team files
  ['team.html', 'team-single.html'].forEach(tf => {
    const teamPath = path.join(dir, tf);
    if (fs.existsSync(teamPath)) {
      let content = fs.readFileSync(teamPath, 'utf8');
      content = content.replace(
        'style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;"',
        'class="summits-duo-grid"'
      );
      fs.writeFileSync(teamPath, content, 'utf8');
      console.log(`Updated ${tf} in ${dir}`);
    }
  });
});

