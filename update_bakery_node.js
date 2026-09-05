const fs = require('fs');

// Read bakery html from test_er_bakery.py
const pyContent = fs.readFileSync('test_er_bakery.py', 'utf8');
const startTag = "bakery_er_html = '''";
const startIdx = pyContent.indexOf(startTag) + startTag.length;
const endIdx = pyContent.lastIndexOf("'''\nprint");
const bakeryHtml = pyContent.slice(startIdx, endIdx).trim();

console.log('Bakery HTML extracted, length:', bakeryHtml.length);

// Read original data.js
let code = fs.readFileSync('js/data.js', 'utf8');

// Evaluate in mock window context
global.window = {};
eval(code);
const courseData = window.COURSE_DATA;

// Update Chapter 5 Section 7
const ch5 = courseData.chapters.find(c => c.id === 'ch5');
if (!ch5) {
  throw new Error('Chapter 5 not found!');
}

const sec = ch5.sections.find(s => s.id === 'ch5-er-diagrams-cardinality');
if (!sec) {
  throw new Error('Section ch5-er-diagrams-cardinality not found!');
}

sec.title = '7. เจาะลึก ER Diagram ระบบร้านเบเกอรี่ พร้อมเส้นโยงความสัมพันธ์ (1:1, 1:M, M:M & PK/FK)';
sec.content = bakeryHtml;

// Also update Chapter 5 exercise 2 to mention Bakery shop if appropriate
const ex2 = ch5.exercises.find(e => e.slideRef && e.slideRef.includes('15'));
if (ex2) {
  ex2.question = 'โจทย์: จงเพิ่มประเภทสินค้า/เมนูเบเกอรี่ ประกอบด้วย รหัสประเภท ชื่อประเภท คำอธิบาย รูป พร้อมกับเชื่อมความสัมพันธ์';
  ex2.sampleAnswer = 'แนวคำตอบ: "สร้างตารางใหม่ชื่อ Menu_Category (หรือ Category) ประกอบด้วยฟิลด์: Category_ID (PK), Category_Name (เช่น เค้ก, ขนมปัง, กาแฟ), Description, Image จากนั้นเชื่อมความสัมพันธ์แบบ One-to-Many (1:M) ไปยังตาราง Menu_Items โดยนำ Category_ID (PK) ของตารางประเภท ไปวางเป็น Foreign Key (FK) ในตาราง Menu_Items เพื่อระบุว่าเมนูขนมเบเกอรี่แต่ละชิ้นสังกัดประเภทใด"';
}

console.log('Updated Chapter 5 section and exercise successfully!');

// Now rebuild data.js cleanly
const finalJs = `/**
 * IS Study & Exam Hub - Course Data
 * Chapters: Ch 2, Ch 3, Ch 4, Ch 5
 * Ultra-expanded with deep slide-by-slide explanations, memory techniques, real-world examples,
 * comprehensive ER diagrams with connecting lines, frameworks, and 70 exam questions!
 */

const COURSE_DATA = ${JSON.stringify(courseData, null, 2)};

// Export to window for vanilla browser usage
window.COURSE_DATA = COURSE_DATA;
`;

fs.writeFileSync('js/data.js', finalJs, 'utf8');
console.log('Successfully written updated data.js! Total bytes:', Buffer.byteLength(finalJs, 'utf8'));
