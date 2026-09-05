/**
 * IS Study & Exam Hub - Local & Public Web Server
 * Runs a high-performance HTTP server with auto IP discovery and public tunneling support.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
};

// Get local network IPv4 addresses
function getNetworkIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push({ name, address: iface.address });
      }
    }
  }
  return ips;
}

const server = http.createServer((req, res) => {
  // Normalize URL
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security: Prevent directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA
      const fallbackPath = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(fallbackPath, (fbErr, content) => {
        if (fbErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(content);
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ ข้อผิดพลาด: พอร์ต ${PORT} กำลังถูกใช้งานอยู่!`);
    console.error('กรุณาปิดหน้าต่าง Command Prompt หรือโปรแกรมอื่นที่เปิดพอร์ต 3000 ก่อน แล้วลองใหม่อีกครั้ง');
    console.error('หรือหากต้องการใช้พอร์ตอื่น ให้ตั้งค่า PORT=3001 node server.js\n');
  } else {
    console.error('\n❌ เกิดข้อผิดพลาดของเซิร์ฟเวอร์:', err.message);
  }
});

const { exec, spawn } = require('child_process');

// Auto generate share files and standalone HTML bundle
function writeShareFiles(publicUrl = null) {
  const ips = getNetworkIPs();
  const wifiIp = ips.length > 0 ? ips[0].address : '127.0.0.1';
  
  const content = `========================================================================
📚 IS Study & Exam Hub — ข้อมูลและลิงก์สำหรับแชร์ให้เพื่อน
========================================================================

⭐ วิธีที่ 1: ส่งไฟล์แบบออฟไลน์ให้เพื่อน (ง่ายที่สุด ไม่ต้องเปิดเน็ต/เซิร์ฟเวอร์!)
------------------------------------------------------------------------
👉 ส่งไฟล์นี้ให้เพื่อนทาง LINE / Messenger / Discord / AirDrop:
   📁 [ IS_Study_Hub_เพื่อนเปิดได้ทันที.html ]
   (เพื่อนดับเบิลคลิกไฟล์นี้บนคอม หรือแตะเปิดบนมือถือ/iPad ได้ทันที ครบทุกฟังก์ชัน!)


⭐ วิธีที่ 2: แชร์ผ่านเครือข่าย Wi-Fi เดียวกัน (ในบ้านหรือห้องเรียน)
------------------------------------------------------------------------
ให้เพื่อนเชื่อมต่อ Wi-Fi เดียวกัน แล้วเปิดเบราว์เซอร์พิมพ์:
👉 http://${wifiIp}:${PORT}


⭐ วิธีที่ 3: ลิงก์สาธารณะผ่านอินเทอร์เน็ต (เปิดจากที่ไหนก็ได้ในโลก)
------------------------------------------------------------------------
${publicUrl ? `👉 ${publicUrl}\n(ตราบใดที่เครื่องนี้ยังเปิดเซิร์ฟเวอร์อยู่ เพื่อนสามารถเข้าลิงก์นี้ได้ตลอด 24 ชม.)` : `กำลังสร้างลิงก์สาธารณะ... (หากยังไม่ขึ้น สามารถรันคำสั่ง: npx localtunnel --port ` + PORT + `)`}

========================================================================
อัปเดตเมื่อ: ${new Date().toLocaleString('th-TH')}
========================================================================
`;

  try {
    fs.writeFileSync(path.join(PUBLIC_DIR, 'ลิงก์สำหรับแชร์ให้เพื่อน.txt'), content, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_DIR, 'SHARE_LINKS.txt'), content, 'utf8');
    
    // Windows URL Shortcut
    const urlContent = `[InternetShortcut]\nURL=http://localhost:${PORT}\n`;
    fs.writeFileSync(path.join(PUBLIC_DIR, 'เปิดเว็บ_IS_Study_Hub.url'), urlContent, 'utf8');
  } catch (e) {
    // Ignore write errors
  }
}

// Bundle standalone single-file HTML
function bundleStandalone() {
  try {
    const indexHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8');
    const styleCss = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'style.css'), 'utf8');
    const dataJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'data.js'), 'utf8');
    const quizJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'quiz.js'), 'utf8');
    const appJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf8');

    let bundle = indexHtml.replace(
      '<link rel="stylesheet" href="css/style.css" />',
      `<style>\n${styleCss}\n</style>`
    );

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
    fs.writeFileSync(path.join(PUBLIC_DIR, 'IS_Study_Hub_เพื่อนเปิดได้ทันที.html'), bundle, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_DIR, 'IS_Study_Hub_Offline.html'), bundle, 'utf8');
  } catch (e) {
    // Ignore bundle error
  }
}

server.listen(PORT, () => {
  const ips = getNetworkIPs();
  
  // Create share files immediately on startup
  bundleStandalone();
  writeShareFiles();

  console.clear();
  console.log('========================================================================');
  console.log('🚀  IS Study & Exam Hub — Web Server กำลังทำงานอยู่!');
  console.log('========================================================================');
  console.log('');
  console.log('📁 สร้างไฟล์สำหรับแชร์ให้เพื่อนเรียบร้อยแล้ว:');
  console.log('  👉 [ IS_Study_Hub_เพื่อนเปิดได้ทันที.html ] (ส่งไฟล์นี้ให้เพื่อนเปิดได้ทันที)');
  console.log('  👉 [ ลิงก์สำหรับแชร์ให้เพื่อน.txt ] (ไฟล์ข้อความสรุปลิงก์ทั้งหมด)');
  console.log('  👉 [ เปิดเว็บ_IS_Study_Hub.url ] (ชอร์ตคัตคลิกเปิดเว็บทันที)');
  console.log('');
  console.log('📌 ช่องทางการเข้าใช้งานผ่านเบราว์เซอร์:');
  console.log('');
  console.log('  1. 💻 ใช้งานบนคอมพิวเตอร์เครื่องนี้ (Localhost):');
  console.log(`     👉 http://localhost:${PORT}  (เปิดเบราว์เซอร์ให้อัตโนมัติแล้ว)`);
  console.log('');
  if (ips.length > 0) {
    console.log('  2. 📱 ใช้งานจากมือถือ / ไอแพด / แท็บเล็ต (ที่ต่อ Wi-Fi เดียวกัน):');
    ips.forEach(ip => {
      console.log(`     👉 http://${ip.address}:${PORT}  (${ip.name})`);
    });
    console.log('');
  }
  
  // Automatically open browser on local machine
  try {
    exec(`start http://localhost:${PORT}`);
  } catch (e) {
    // Ignore browser open error
  }

  // Automatically start Cloudflare Tunnel (ยืมเซิร์ฟเวอร์ฟรี Cloudflare ระดับโลก)
  const cloudflaredPath = path.join(PUBLIC_DIR, 'cloudflared.exe');
  if (fs.existsSync(cloudflaredPath)) {
    console.log('  3. 🌐 กำลังเชื่อมต่อ Cloudflare Tunnel ยืมเซิร์ฟเวอร์ฟรีระดับโลก (รอสักครู่ 3-5 วินาที)...');
    try {
      const tunnel = spawn(cloudflaredPath, ['tunnel', '--url', `http://localhost:${PORT}`]);
      let urlFound = false;
      
      tunnel.stderr.on('data', (data) => {
        const text = data.toString();
        const match = text.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/i);
        if (match && !urlFound) {
          urlFound = true;
          const publicUrl = match[0];
          console.log('');
          console.log('  ========================================================================');
          console.log('  🎉 ลิงก์สาธารณะ Cloudflare พร้อมใช้งานแล้ว! (คนนอกเครือข่าย/เน็ต 4G-5G เข้าได้ 100%)');
          console.log('  ========================================================================');
          console.log(`  👉 ลิงก์สำหรับส่งให้เพื่อน: ${publicUrl}`);
          console.log('  ========================================================================');
          console.log('  ✅ บันทึกลิงก์นี้ลงใน [ ลิงก์สำหรับแชร์ให้เพื่อน.txt ] เรียบร้อยแล้ว!');
          console.log('');
          writeShareFiles(publicUrl);
        }
      });

      tunnel.on('error', (e) => {
        console.log('Cloudflare Tunnel Error:', e.message);
      });
    } catch (e) {
      console.log('Cloudflare Tunnel failed to start:', e.message);
    }
  } else {
    // Fallback if cloudflared binary is not found
    try {
      const tunnel = spawn('npx.cmd', ['-y', 'localtunnel', '--port', String(PORT)], { shell: true });
      tunnel.stdout.on('data', (data) => {
        const text = data.toString().trim();
        const match = text.match(/https?:\/\/[^\s]+/);
        if (match) {
          writeShareFiles(match[0]);
          console.log(`     👉 ลิงก์สาธารณะ: ${match[0]}`);
          console.log('        ✅ อัปเดตลิงก์ลงใน [ ลิงก์สำหรับแชร์ให้เพื่อน.txt ] แล้ว!');
        }
      });
    } catch (e) {}
  }

  console.log('');
  console.log('------------------------------------------------------------------------');
  console.log('💡 หมายเหตุ: ตราบใดที่หน้าต่างนี้ยังเปิดอยู่ เซิร์ฟเวอร์และลิงก์จะใช้งานได้ตลอด');
  console.log('   หากต้องการปิดเซิร์ฟเวอร์ ให้กด Ctrl + C หรือปิดหน้าต่างนี้');
  console.log('========================================================================');
});
