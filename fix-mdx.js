const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/kesha/OneDrive/Desktop/juno website final draft/juno-website-/content/posts';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.mdx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/image: "\/golden-logo.png"/g, 'image: "/logo.png"');
    fs.writeFileSync(filePath, content);
  }
});
