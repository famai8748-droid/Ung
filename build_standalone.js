/**
 * Build Single-File Standalone HTML for easy sharing with friends
 * Inlines CSS and JS into a single portable HTML file.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const styleCss = fs.readFileSync(path.join(ROOT, 'css', 'style.css'), 'utf8');
const dataJs = fs.readFileSync(path.join(ROOT, 'js', 'data.js'), 'utf8');
const quizJs = fs.readFileSync(path.join(ROOT, 'js', 'quiz.js'), 'utf8');
const appJs = fs.readFileSync(path.join(ROOT, 'js', 'app.js'), 'utf8');

// Replace CSS link with inline style
let bundle = indexHtml.replace(
  '<link rel="stylesheet" href="css/style.css" />',
  `<style>\n${styleCss}\n</style>`
);

// Replace JS scripts with inline scripts
const scriptsPlaceholder = `<script src="js/data.js"></script>
  <script src="js/quiz.js"></script>
  <script src="js/app.js"></script>`;

const inlinedScripts = `<script>
${dataJs}
</script>
<script>
${quizJs}
</script>
<script>
${appJs}
</script>`;

bundle = bundle.replace(scriptsPlaceholder, inlinedScripts);

// Write standalone file
const out1 = path.join(ROOT, 'IS_Study_Hub_เพื่อนเปิดได้ทันที.html');
const out2 = path.join(ROOT, 'IS_Study_Hub_Offline.html');

fs.writeFileSync(out1, bundle, 'utf8');
fs.writeFileSync(out2, bundle, 'utf8');

console.log('✅ สร้างไฟล์ Standalone สำเร็จเรียบร้อย:');
console.log('  1. IS_Study_Hub_เพื่อนเปิดได้ทันที.html');
console.log('  2. IS_Study_Hub_Offline.html');
console.log(`  ขนาดไฟล์: ${(fs.statSync(out1).size / 1024).toFixed(1)} KB`);
