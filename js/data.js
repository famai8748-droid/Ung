/**
 * IS Study & Exam Hub - Course Data
 * Chapters: Ch 2, Ch 3, Ch 4, Ch 5
 * Ultra-expanded with deep slide-by-slide explanations, memory techniques, real-world examples,
 * comprehensive ER diagrams with connecting lines, frameworks, and 70 exam questions!
 */

const COURSE_DATA = {
  "chapters": [
    {
      "id": "ch2",
      "number": "Chapter 2",
      "title": "Information Systems in Organizations",
      "thTitle": "ระบบสารสนเทศในองค์กร",
      "icon": "🏢",
      "description": "เจาะลึกโครงสร้างองค์กร 4 รูปแบบ, วัฒนธรรมองค์กร, Lewin's Change Model, BPR vs Kaizen, Performance & Risks, Value Chain vs Supply Chain, CRM, E-Commerce Models และ 11 สายอาชีพไอทีอย่างละเอียดครบถ้วนทุกสไลด์",
      "sections": [
        {
          "id": "ch2-org-concept",
          "title": "1. นิยามองค์กรและระบบ (Organization & Systems Concept)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🏢 องค์กร (Organization) คืออะไร?</h4>\n              <p><strong>นิยามตามสไลด์ (Slide 3):</strong> การจัดตั้งบุคคลอย่างเป็นทางการ (Formal collection of people) และการรวบรวมทรัพยากรต่าง ๆ เพื่อบรรลุเป้าหมายที่ตั้งไว้ร่วมกันอย่างเป็นระบบ (Accomplish a set of goals)</p>\n              <p class=\"mt-2\"><strong>องค์กรในฐานะ 'ระบบ' (A System):</strong> ระบบที่มีชีวิต มีการนำเข้า แปรรูป และส่งมอบผลลัพธ์ โดยหมุนเวียนใช้ <strong>ทรัพยากรสำคัญ 7 ด้านอย่างต่อเนื่อง</strong> ได้แก่:</p>\n              <div class=\"grid-4 mt-2\">\n                <div class=\"badge badge-primary p-2 text-center\">1. เงิน (Money)</div>\n                <div class=\"badge badge-primary p-2 text-center\">2. คน (People)</div>\n                <div class=\"badge badge-primary p-2 text-center\">3. วัตถุดิบ (Materials)</div>\n                <div class=\"badge badge-primary p-2 text-center\">4. เครื่องจักร/อุปกรณ์ (Machines & Equipment)</div>\n                <div class=\"badge badge-accent p-2 text-center\">5. ข้อมูล (Data)</div>\n                <div class=\"badge badge-accent p-2 text-center\">6. สารสนเทศ (Information)</div>\n                <div class=\"badge badge-success p-2 text-center\" style=\"grid-column: span 2;\">7. การตัดสินใจ (Decisions)</div>\n              </div>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <h5>💡 อุปมาอุปไมยให้เห็นภาพชัดเจน (Analogy):</h5>\n              <p>หากเปรียบองค์กรธุรกิจเป็น <strong>\"ร่างกายมนุษย์\"</strong>:</p>\n              <ul>\n                <li><strong>กล้ามเนื้อและอวัยวะ</strong> คือ ฝ่ายผลิตและฝ่ายปฏิบัติการที่ลงมือทำงาน</li>\n                <li><strong>กระแสเลือดและอาหาร</strong> คือ เงินทุนและวัตถุดิบที่หล่อเลี้ยงระบบ</li>\n                <li><strong>ระบบประสาทและสมอง</strong> คือ <strong>ระบบสารสนเทศ (Information Systems: IS)</strong> ที่คอยตรวจจับสัญญาณจากภายนอก ส่งต่อข้อมูลไปยังสมอง (ผู้บริหาร) เพื่อตัดสินใจสั่งการให้อวัยวะต่าง ๆ เคลื่อนไหวได้อย่างถูกต้องและทันท่วงที</li>\n              </ul>\n              <p class=\"mt-2\" style=\"font-size:0.88rem; color:var(--text-muted);\">\n                ⚡ <em>วงจรสารสนเทศ:</em> <code>Input (ข้อมูลดิบ) ➔ Processing (ประมวลผล) ➔ Output (สารสนเทศ/รายงาน) ➔ Feedback (ข้อมูลย้อนกลับเพื่อปรับปรุง)</code>\n              </p>\n            </div>\n            "
        },
        {
          "id": "ch2-structures-deepdive",
          "title": "2. โครงสร้างองค์กร 4 รูปแบบ (Categories of Organizational Structure)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🏛️ โครงสร้างองค์กร (Organizational Structure) คืออะไร?</h4>\n              <p><strong>นิยาม (Slide 4):</strong> หน่วยงานย่อยขององค์กร (Organizational subunits) และรูปแบบความสัมพันธ์ระหว่างหน่วยงานย่อยเหล่านั้นที่เชื่อมโยงเข้ากับองค์กรโดยรวม เพื่อกำหนดสายการบังคับบัญชา หน้าที่ความรับผิดชอบ และการไหลเวียนของข้อมูล</p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <!-- 1. Traditional Structure -->\n              <div class=\"card-outline border-amber\">\n                <div class=\"badge badge-warning mb-2\">รูปแบบที่ 1: แบบดั้งเดิม (Traditional Structure)</div>\n                <h5 style=\"color:var(--accent-amber);\">🏛️ โครงสร้างตามลำดับชั้น (Hierarchical Structure)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  มีลักษณะเป็น <strong>'พีระมิด'</strong> ชัดเจน แบ่งแยกตามสายงานเฉพาะด้าน (Functional Areas) เช่น แผนกบัญชี แผนกการตลาด แผนกการผลิต โดยหัวหน้าแต่ละแผนกรายงานตรงต่อผู้บริหารระดับสูง (Slide 5)\n                </p>\n                <div class=\"note-card mt-2\" style=\"background:rgba(245, 158, 11, 0.08); border-left-color:var(--accent-amber);\">\n                  <strong>ระดับการบริหารในโครงสร้างแบบดั้งเดิม (จากล่างขึ้นบน):</strong>\n                  <ol style=\"padding-left:18px; font-size:0.84rem; margin-top:4px;\">\n                    <li><strong>Nonmanagement Employees:</strong> พนักงานระดับปฏิบัติการ ปฏิบัติงานประจำตามคำสั่ง</li>\n                    <li><strong>Operational Management:</strong> หัวหน้างานระดับต้น ควบคุมการปฏิบัติงานรายวัน/รายสัปดาห์</li>\n                    <li><strong>Tactical Management:</strong> ผู้จัดการระดับกลาง (เช่น ผู้จัดการฝ่าย) วางแผนระยะสั้นและจัดสรรงบประมาณ</li>\n                    <li><strong>Strategic Management:</strong> ผู้บริหารระดับสูง (CEO, กรรมการผู้จัดการ) กำหนดยุทธศาสตร์ ทิศทาง และนโยบายระยะยาว</li>\n                  </ol>\n                </div>\n                <div class=\"mt-2\" style=\"font-size:0.85rem;\">\n                  <strong>มิติการตัดสินใจ (Decision Dimensions):</strong>\n                  <ul style=\"padding-left:18px; color:var(--text-muted); margin-top:4px;\">\n                    <li><strong>ระดับสูง (Strategic):</strong> อำนาจตัดสินใจสูงสุด (High Authority), ปัญหามีความเฉพาะตัวสูงไม่ซ้ำซาก (High Uniqueness), ส่งผลกระทบต่อความอยู่รอดขององค์กร (High Impact)</li>\n                    <li><strong>ระดับล่าง (Operational):</strong> อำนาจจำกัด งานเป็นแบบแผนตายตัวซ้ำ ๆ (Routine) ทำตามขั้นตอนที่กำหนด</li>\n                  </ul>\n                </div>\n                <p style=\"font-size:0.84rem; color:var(--accent-rose); margin-top:8px;\">\n                  ⚠️ <strong>ข้อจำกัดสำคัญ:</strong> เกิดปัญหาไซโล (Silo Effect) ต่างคนต่างอยู่ สื่อสารข้ามแผนกล่าช้า และปรับตัวต่อการเปลี่ยนแปลงของตลาดได้ช้า\n                </p>\n              </div>\n\n              <!-- 2. Project Structure -->\n              <div class=\"card-outline border-green\">\n                <div class=\"badge badge-success mb-2\">รูปแบบที่ 2: แบบโครงการ (Project Structure)</div>\n                <h5 style=\"color:var(--accent-emerald);\">🚀 โครงสร้างที่เน้นผลิตภัณฑ์หรือบริการหลัก (Product/Service Centered)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  จัดตั้งขึ้นโดยยึด <strong>โครงการ ผลิตภัณฑ์ หรือบริการหลักเป็นศูนย์กลาง</strong> เช่น โครงการพัฒนาแอปพลิเคชันใหม่, โครงการอาหารเด็ก (Baby Food Project), โครงการผ้าอ้อม (Diaper Project) (Slide 6-8)\n                </p>\n                <div class=\"note-card mt-2\" style=\"background:rgba(16, 185, 129, 0.08); border-left-color:var(--accent-emerald);\">\n                  <strong>โครงสร้างสายการบังคับบัญชา (Slide 8):</strong>\n                  <ul style=\"padding-left:18px; font-size:0.84rem; margin-top:4px;\">\n                    <li>ประธานบริษัท (President) กำกับดูแลภาพรวมหลายโครงการ</li>\n                    <li>แต่ละโครงการมี <strong>Senior Vice President / Project Manager</strong> รับผิดชอบโดยตรง</li>\n                    <li>ภายในโครงการจะดึงบุคลากรจาก <strong>ทุกสายงานที่เกี่ยวข้อง</strong> มาร่วมนั่งทำงานด้วยกัน:\n                      <ul>\n                        <li>การเงิน (Finance)</li>\n                        <li>การตลาด (Marketing)</li>\n                        <li>การผลิต (Production)</li>\n                        <li>การขาย (Sales)</li>\n                      </ul>\n                    </li>\n                  </ul>\n                </div>\n                <p style=\"font-size:0.85rem; color:var(--accent-emerald); margin-top:8px;\">\n                  ✅ <strong>ข้อดีเด่นชัด:</strong> การตัดสินใจและประสานงานทำได้รวดเร็วมาก เพราะทีมงานทุกฟังก์ชันนั่งคุยกันในห้องเดียวกัน ตอบสนองลูกค้าได้ฉับไว\n                </p>\n                <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                  ⏱️ <em>ระยะเวลา:</em> ทีมโครงการส่วนใหญ่เป็น <strong>ทีมชั่วคราว (Temporary)</strong> เมื่องานเสร็จสิ้นก็ยุบทีมและแยกย้ายไปโครงการใหม่ แต่บางโครงการอาจเป็นทีมถาวรได้\n                </p>\n              </div>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <!-- 3. Team Structure -->\n              <div class=\"card-outline border-cyan\">\n                <div class=\"badge badge-info mb-2\">รูปแบบที่ 3: แบบทีม (Team Structure)</div>\n                <h5 style=\"color:var(--accent-cyan);\">👥 เน้นที่กลุ่มงาน (Centered on Work Teams or Groups)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  กระจายอำนาจให้ทีมงานมีอิสระในการบริหารจัดการตนเอง (Self-managed Teams) สมาชิกในทีมมีทักษะหลากหลาย (Cross-functional) สามารถเป็นได้ทั้ง <strong>ชั่วคราว (Temporary)</strong> หรือ <strong>ถาวร (Permanent)</strong> ขึ้นอยู่กับลักษณะงาน (Slide 6)\n                </p>\n                <p style=\"font-size:0.84rem; color:var(--text-main); margin-top:6px;\">\n                  <em>ตัวอย่าง:</em> ทีมดูแลลูกค้ารายใหญ่ (Key Account Team), ทีมเฉพาะกิจแก้ไขปัญหาวิกฤตความปลอดภัยไซเบอร์ (Incident Response Team)\n                </p>\n              </div>\n\n              <!-- 4. Multidimensional / Matrix Structure -->\n              <div class=\"card-outline border-purple\">\n                <div class=\"badge badge-purple mb-2\">รูปแบบที่ 4: แบบหลายมิติ / เมทริกซ์ (Multidimensional Structure)</div>\n                <h5 style=\"color:var(--accent-indigo);\">🌐 โครงสร้างแบบตารางข้ามสายงาน (Matrix)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  เป็นการผสมผสานระหว่างโครงสร้างตามสายงาน (Functional) และโครงสร้างตามโครงการ (Project) พนักงาน 1 คนจะมี <strong>ผู้บังคับบัญชา 2 คนพร้อมกัน (Dual Reporting)</strong> คือ หัวหน้าสายงานหลัก (เช่น ผู้อำนวยการฝ่ายวิศวกรรม) และผู้จัดการโครงการ (Project Manager)\n                </p>\n                <p style=\"font-size:0.84rem; color:var(--accent-rose); margin-top:6px;\">\n                  ⚠️ <em>ข้อควรระวัง:</em> อาจเกิดความขัดแย้งด้านคำสั่งหรือการจัดสรรเวลา (Role Conflict) หากทั้งสองฝ่ายมีเป้าหมายไม่ตรงกัน\n                </p>\n              </div>\n            </div>\n\n            <!-- Comparison Table -->\n            <div class=\"table-wrap mt-3\">\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>โครงสร้างองค์กร</th>\n                    <th>จุดเน้นหลัก (Core Focus)</th>\n                    <th>ความเร็วในการตัดสินใจ</th>\n                    <th>ความยืดหยุ่น</th>\n                    <th>ลักษณะทีม</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Traditional (ดั้งเดิม)</strong></td>\n                    <td>แบ่งตามสายงานเฉพาะด้าน (บัญชี, ผลิต, ขาย)</td>\n                    <td>ช้า (ต้องส่งเรื่องผ่านระดับชั้น)</td>\n                    <td>ต่ำ (ปรับตัวตามตลาดยาก)</td>\n                    <td>ถาวรตามแผนก</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Project (โครงการ)</strong></td>\n                    <td>เน้นที่ผลิตภัณฑ์/บริการหลัก (Product Centered)</td>\n                    <td>เร็วมาก (มี PM และทีมครบวงจร)</td>\n                    <td>สูงมาก</td>\n                    <td>ส่วนใหญ่เป็นชั่วคราว (Temporary)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Team (ทีมงาน)</strong></td>\n                    <td>เน้นกลุ่มงานที่บริหารตนเอง (Self-directed)</td>\n                    <td>เร็ว</td>\n                    <td>สูง</td>\n                    <td>ชั่วคราวหรือถาวรตามงาน</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Multidimensional (เมทริกซ์)</strong></td>\n                    <td>ผสานทั้งสายงานและโครงการ (Dual Boss)</td>\n                    <td>ปานกลาง (ต้องประสาน 2 ฝ่าย)</td>\n                    <td>สูงมากในการจัดสรรทรัพยากร</td>\n                    <td>ยืดหยุ่นสลับตามโครงการ</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch2-change-lewin-bpr",
          "title": "3. วัฒนธรรมองค์กร, Lewin's Change Model และ Reengineering",
          "content": "\n            <div class=\"note-card\">\n              <h4>🌊 วัฒนธรรมองค์กร (Organizational Culture)</h4>\n              <p><strong>นิยาม (Slide 9):</strong> ชุดของค่านิยม (Values), ความเชื่อ (Beliefs), บรรทัดฐาน (Norms) และพฤติกรรมที่สมาชิกในองค์กรยึดถือและปฏิบัติร่วมกัน ซึ่งส่งผลโดยตรงต่อวิถีการทำงานและปฏิสัมพันธ์ภายในองค์กร</p>\n              <p class=\"mt-2\" style=\"color:var(--accent-amber);\">\n                🚨 <strong>อิทธิพลต่อระบบสารสนเทศ (Influences IS):</strong> วัฒนธรรมองค์กรคือปัจจัยชี้ขาดความสำเร็จหรือล้มเหลวของโครงการไอที หากวัฒนธรรมองค์กรต่อต้านการเปลี่ยนแปลง หรือกลัวการใช้เทคโนโลยี แม้จะซื้อระบบซอฟต์แวร์ราคาแพงที่สุดมาติดตั้ง ก็จะไม่สามารถใช้งานให้เกิดประโยชน์ได้จริง\n              </p>\n            </div>\n\n            <!-- Lewin's 3-Stage Change Model -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🧊 แบบจำลองการเปลี่ยนแปลง 3 ขั้นตอนของ Kurt Lewin (Change Model - Slide 10)</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted); margin-bottom:12px;\">\n                แบบจำลองคลาสสิกที่เปรียบการเปลี่ยนแปลงพฤติกรรมของมนุษย์เหมือน <em>\"การนำก้อนน้ำแข็งเดิมมาละลายเป็นน้ำ เทลงแม่พิมพ์ใหม่ แล้วแช่แข็งให้คงรูป\"</em>:\n              </p>\n\n              <div class=\"steps-flow\">\n                <div class=\"step-box\">\n                  <div class=\"step-num\">1</div>\n                  <h6 style=\"color:var(--text-main);\">Unfreezing</h6>\n                  <span class=\"badge badge-warning mb-1\">การละลายพฤติกรรม</span>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Ceasing old habits:</strong> ละทิ้งนิสัยและวิธีการเดิม ๆ ปลุกจิตสำนึกให้เห็นว่าระบบเดิมมีข้อบกพร่องอย่างไร ชี้แจงถึงความจำเป็นที่ต้องเปลี่ยน และสร้างบรรยากาศที่เปิดใจยอมรับการเปลี่ยนแปลง\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box active\">\n                  <div class=\"step-num\">2</div>\n                  <h6 style=\"color:var(--text-main);\">Moving (Changing)</h6>\n                  <span class=\"badge badge-primary mb-1\">การปรับเปลี่ยน / เรียนรู้</span>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Learning new methods:</strong> ถ่ายทอดและฝึกอบรมวิธีการทำงานใหม่ พฤติกรรมใหม่ และฝึกใช้งานระบบสารสนเทศใหม่ ให้พนักงานทดลองทำจริงจนเกิดความคุ้นเคย\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\">\n                  <div class=\"step-num\">3</div>\n                  <h6 style=\"color:var(--text-main);\">Refreezing</h6>\n                  <span class=\"badge badge-success mb-1\">การแช่แข็งเป็นมาตรฐานใหม่</span>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Reinforcing as second nature:</strong> เสริมแรงและกำหนดให้กระบวนการใหม่กลายเป็นมาตรฐานงานประจำวันปกติ (Routine) เพื่อไม่ให้พนักงานแอบย้อนกลับไปใช้วิธีการทำงานแบบเดิม\n                  </p>\n                </div>\n              </div>\n\n              <div class=\"card-feature mt-3\" style=\"background:rgba(59, 130, 246, 0.05);\">\n                <h6>📌 ตัวอย่างจริงในโลกธุรกิจ:</h6>\n                <p style=\"font-size:0.85rem; color:var(--text-muted); margin-top:4px;\">\n                  บริษัทเปลี่ยนจากระบบเอกสารกระดาษเป็นระบบ Cloud ERP:<br>\n                  • <strong>Unfreezing:</strong> จัดสัมมนาชี้แจงว่าระบบกระดาษทำให้เอกสารสูญหายและปิดยอดบัญชีช้าไป 2 สัปดาห์<br>\n                  • <strong>Moving:</strong> เปิดห้องคอมพิวเตอร์อบรมพนักงานทุกคนให้คีย์ข้อมูลผ่านแท็บเล็ตและโปรแกรม ERP ตัวใหม่<br>\n                  • <strong>Refreezing:</strong> ยกเลิกแบบฟอร์มกระดาษทั้งหมด กำหนด KPI การส่งข้อมูลผ่านระบบ และมอบรางวัลแผนกที่บันทึกข้อมูลถูกต้อง 100%\n                </p>\n              </div>\n            </div>\n\n            <!-- BPR vs Continuous Improvement -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--accent-indigo);\">⚡ การปรับรื้อระบบ (Reengineering / BPR) vs การปรับปรุงอย่างต่อเนื่อง (Continuous Improvement / Kaizen) (Slide 11-13)</h5>\n              <div class=\"table-wrap mt-2\">\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>มิติเปรียบเทียบ</th>\n                      <th>Business Process Reengineering (BPR)</th>\n                      <th>Continuous Improvement (Kaizen)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>นิยามตามสไลด์</strong></td>\n                      <td>การคิดใหม่และรื้อปรับโครงสร้างกระบวนการทางธุรกิจแบบถอนรากถอนโคน (Radical redesign of business processes, org structures, IS, and values) (Slide 12)</td>\n                      <td>การปรับปรุงกระบวนการทำงานทีละเล็กทีละน้อยอย่างสม่ำเสมอและต่อเนื่อง (Incremental improvement) เพื่อกำจัดความสูญเปล่า (Slide 11, 13)</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ระดับการเปลี่ยนแปลง</strong></td>\n                      <td>ก้าวกระโดด ฉับพลัน เปลี่ยนแปลงครั้งใหญ่ทั้งระบบ (Breakthrough)</td>\n                      <td>ค่อยเป็นค่อยไป ค่อย ๆ ปรับ สะสมความสำเร็จทีละก้าว</td>\n                    </tr>\n                    <tr>\n                      <td><strong>บทบาทของไอที</strong></td>\n                      <td>ไอทีเป็นตัวขับเคลื่อนหลัก (Enabler) เพื่อสร้างกระบวนการทำงานแบบใหม่ที่ไม่เคยมีมาก่อน</td>\n                      <td>ไอทีใช้สนับสนุนและเสริมประสิทธิภาพของกระบวนการเดิมที่มีอยู่แล้ว</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ความเสี่ยงและผลตอบแทน</strong></td>\n                      <td>ความเสี่ยงสูงมาก (High Risk) หากล้มเหลวอาจกระทบทั้งองค์กร แต่หากสำเร็จจะได้ผลตอบแทนมหาศาล</td>\n                      <td>ความเสี่ยงต่ำมาก (Low Risk) ไม่หยุดชะงักธุรกิจ พนักงานยอมรับง่าย</td>\n                    </tr>\n                    <tr>\n                      <td><strong>อุปมาอุปไมย</strong></td>\n                      <td>เหมือน <strong>\"การทุบบ้านหลังเก่าทิ้งแล้วสร้างตึกใหม่\"</strong></td>\n                      <td>เหมือน <strong>\"การซ่อมแซม ทาสี และจัดห้องใหม่ให้น่าอยู่ขึ้น\"</strong></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch2-performance-risks",
          "title": "4. ระบบสารสนเทศมุ่งเน้นผลการปฏิบัติงานและความเสี่ยง (Performance & Risks)",
          "content": "\n            <div class=\"grid-2\">\n              <!-- Performance-Based IS -->\n              <div class=\"card-outline border-green\">\n                <div class=\"badge badge-success mb-2\">Performance-Based IS (Slide 14)</div>\n                <h5>📈 ระบบสารสนเทศที่มุ่งเน้นผลการปฏิบัติงาน</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  องค์กรยุคใหม่ไม่ได้ลงทุนในไอทีเพียงเพราะ \"ตามกระแส\" แต่ต้องคำนึงถึง <strong>ผลตอบแทนที่วัดผลได้จริง (Measurable Performance)</strong>:\n                </p>\n                <ul style=\"padding-left:18px; font-size:0.84rem; color:var(--text-muted); margin-top:6px;\">\n                  <li><strong>ผลตอบแทนจากการลงทุน (ROI: Return on Investment):</strong> รายได้ที่เพิ่มขึ้นหรือต้นทุนที่ประหยัดได้เทียบกับเงินที่จ่ายไป</li>\n                  <li><strong>การเพิ่มผลผลิต (Productivity):</strong> พนักงานทำงานได้เสร็จเร็วขึ้น ใช้ทรัพยากรลดลง</li>\n                  <li><strong>ความพึงพอใจของลูกค้า (Customer Satisfaction):</strong> ลดเวลารอคอย ลดข้อผิดพลาดในการสั่งซื้อ</li>\n                  <li><strong>ความได้เปรียบทางการแข่งขัน (Competitive Advantage):</strong> มีนวัตกรรมบริการที่คู่แข่งเลียนแบบได้ยาก</li>\n                </ul>\n              </div>\n\n              <!-- Risks of IS -->\n              <div class=\"card-outline border-rose\">\n                <div class=\"badge badge-danger mb-2\">Risks of Information Systems (Slide 15)</div>\n                <h5>⚠️ ความเสี่ยงในการนำระบบสารสนเทศมาใช้</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  โครงการไอทีสามารถกลายเป็น <strong>ความล้มเหลวที่มีต้นทุนมหาศาล (Costly Failures)</strong> หากขาดการวางแผนที่ดี:\n                </p>\n                <ul style=\"padding-left:18px; font-size:0.84rem; color:var(--text-muted); margin-top:6px;\">\n                  <li><strong>1. ต้นทุนบานปลายและโครงการล่าช้า (Budget Overrun & Delay):</strong> พบบ่อยมากในโครงการระบบ ERP ขนาดใหญ่</li>\n                  <li><strong>2. การต่อต้านจากผู้ใช้งาน (User Resistance):</strong> พนักงานคุ้นชินกับระบบเก่าและปฏิเสธการป้อนข้อมูลลงระบบใหม่</li>\n                  <li><strong>3. ความปลอดภัยข้อมูลและการหยุดชะงัก (Security & Downtime):</strong> ระบบล่มหรือถูกโจมตีด้วย Ransomware ทำให้ธุรกิจหยุดชะงัก</li>\n                  <li><strong>4. ความไม่สอดคล้องกับกลยุทธ์ธุรกิจ (Misalignment):</strong> เลือกระบบที่ไม่ตรงกับความต้องการจริงของกระบวนการทำงาน</li>\n                </ul>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch2-value-chain",
          "title": "5. ห่วงโซ่คุณค่า (Value Chain) vs ห่วงโซ่อุปทาน (Supply Chain)",
          "content": "\n            <div class=\"note-card\">\n              <h4>⛓️ ห่วงโซ่คุณค่า (Value Chain) คืออะไร? (Slide 16-17)</h4>\n              <p><strong>นิยามตามสไลด์:</strong> ภาพรวมของกระบวนการในองค์กร (Series of activities) ที่เริ่มตั้งแต่การจัดหาวัตถุดิบ (Inbound logistics), การจัดเก็บในคลังสินค้า (Warehouse and storage), การแปรรูป ไปจนถึงขั้นตอนสุดท้ายที่ส่งมอบสินค้าให้แก่ลูกค้า โดยที่ <strong>แต่ละขั้นตอนสามารถสร้างคุณค่า (Value) เพิ่มเติมให้กับสินค้าและองค์กร</strong></p>\n            </div>\n\n            <!-- Value Chain vs Supply Chain Differences -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">⚖️ ความแตกต่างระหว่าง Supply Chain และ Value Chain (Slide 18)</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <div>\n                    <span class=\"badge badge-accent mb-1\">Value Chain (ห่วงโซ่คุณค่า)</span>\n                    <p style=\"font-size:0.88rem; margin-top:4px;\">\n                      <strong>มุ่งเน้น:</strong> <u>การสร้างคุณค่า (Value Creation)</u> ให้กับลูกค้าตลอดกระบวนการทั้งหมด ตั้งแต่ต้นน้ำจนถึงปลายน้ำ เพื่อให้ลูกค้ายินดีจ่ายเงินในราคาที่สูงกว่าต้นทุน เกิดเป็นกำไร (Margin) แก่องค์กร\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"card-feature\">\n                  <div>\n                    <span class=\"badge badge-primary mb-1\">Supply Chain (ห่วงโซ่อุปทาน)</span>\n                    <p style=\"font-size:0.88rem; margin-top:4px;\">\n                      <strong>มุ่งเน้น:</strong> <u>การจัดการการไหลเวียน (Physical & Information Flow)</u> ของวัตถุดิบ สินค้า และข้อมูล จากผู้จัดจำหน่าย (Suppliers) ผ่านกระบวนการผลิต ไปยังผู้บริโภคปลายทางอย่างมีประสิทธิภาพและต้นทุนต่ำสุด\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Slide 19 Real-World Examples -->\n            <div class=\"card-outline mt-3\">\n              <h5>🍎 ตัวอย่างจริงในสไลด์ (Slide 19): Value Chain ในมุมมองธุรกิจ</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\" style=\"background:rgba(16, 185, 129, 0.04);\">\n                  <h6>📱 กรณีศึกษาบริษัท Apple:</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    Apple ไม่ได้มีแค่การผลิต iPhone เท่านั้น แต่ยังมี Mac, iPad, Apple Watch และหัวใจของ Value Chain ที่สร้างมูลค่ามหาศาลคือ <strong>การออกแบบผลิตภัณฑ์ที่สวยงาม, การสร้างแบรนด์ที่ทรงพลัง, การตลาดระดับพรีเมียม, ระบบปฏิบัติการ iOS ที่ไร้รอยต่อ และบริการหลังการขาย AppleCare</strong> ทั้งหมดนี้ผสานกันเป็นห่วงโซ่คุณค่าที่ทำให้ลูกค้าภักดีและยอมจ่ายราคาสูง\n                  </p>\n                </div>\n\n                <div class=\"card-feature\" style=\"background:rgba(245, 158, 11, 0.04);\">\n                  <h6>🍽️ กรณีศึกษาธุรกิจร้านอาหาร:</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    ร้านอาหารไม่ได้มีแค่ขั้นตอน \"การทำอาหารในครัว\" เท่านั้น แต่ห่วงโซ่คุณค่าเริ่มตั้งแต่การคัดเลือกวัตถุดิบสดใหม่, การจัดซื้อ, การต้อนรับและบริการลูกค้าอย่างอบอุ่น, การตกแต่งสร้างบรรยากาศร้าน, และการตลาดผ่านโซเชียลมีเดีย ซึ่งทุกขั้นตอนสร้างความพึงพอใจและคุณค่าให้กับลูกค้า\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch2-crm",
          "title": "6. การจัดการลูกค้าสัมพันธ์ (Customer Relationship Management: CRM)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🤝 CRM คืออะไรและมีเป้าหมายอะไร? (Slide 20)</h4>\n              <p><strong>นิยาม:</strong> โปรแกรมและกระบวนการทางธุรกิจสำหรับการบริหารจัดการความสัมพันธ์กับลูกค้า</p>\n              <p class=\"mt-2\" style=\"color:var(--accent-emerald);\">\n                🎯 <strong>เป้าหมายสูงสุด:</strong> ทำให้ลูกค้ามีความพึงพอใจสูงสุด (Maximum Satisfaction) จากการใช้สินค้าหรือบริการ และเกิดความผูกพันภักดีต่อแบรนด์ในระยะยาว (Customer Loyalty & Retention)\n              </p>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🌟 CRM ช่วยองค์กรอย่างไร (4 ด้านสำคัญ - Slide 21):</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <div>\n                    <h6>1. การจัดการข้อมูลลูกค้า (Customer Data Management)</h6>\n                    <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                      จัดเก็บประวัติข้อมูลลูกค้าอย่างละเอียด เป็นศูนย์กลางและเป็นระบบ เช่น ข้อมูลการติดต่อ, ประวัติการซื้อสินค้าทุกครั้ง, พฤติกรรมการเข้าชมเว็บไซต์, ความชอบและความสนใจเฉพาะตัว\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"card-feature\">\n                  <div>\n                    <h6>2. การวิเคราะห์ข้อมูล (Customer Analytics)</h6>\n                    <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                      นำข้อมูลมาวิเคราะห์พฤติกรรมและความต้องการ เพื่อทำนายว่าลูกค้ามีแนวโน้มจะซื้ออะไรต่อ หรือเสี่ยงที่จะย้ายค่าย (Churn Prediction) ช่วยให้ทำการตลาดได้ตรงใจ\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"card-feature\">\n                  <div>\n                    <h6>3. การเพิ่มยอดขาย (Sales Enhancement)</h6>\n                    <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                      ติดตามโอกาสทางการขาย (Sales Pipeline), นำเสนอขายสินค้าที่เกี่ยวข้อง (Cross-selling) หรือสินค้ารุ่นสูงกว่า (Up-selling), และช่วยพนักงานปิดการขายได้อย่างมีประสิทธิภาพ\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"card-feature\">\n                  <div>\n                    <h6>4. การบริการลูกค้า (Customer Service & Support)</h6>\n                    <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                      จัดการข้อร้องเรียน (Ticket Management), ตอบคำถามลูกค้าได้อย่างรวดเร็วผ่านแชตบอตหรือศูนย์บริการ Call Center สร้างความประทับใจเมื่อลูกค้าต้องการความช่วยเหลือ\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Slide 22 Examples -->\n            <div class=\"card-outline mt-3\">\n              <h5>🏢 ตัวอย่างการใช้งาน CRM ในธุรกิจจริง (Slide 22):</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature border-amber\">\n                  <h6>📦 Amazon (อีคอมเมิร์ซระดับโลก):</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    ใช้ระบบ CRM อัจฉริยะวิเคราะห์ประวัติการค้นหาและประวัติการซื้อในอดีต เพื่อแสดงผลหน้าแรกแบบเฉพาะบุคคล (Personalized Homepage) และแนะนำสินค้า <em>\"ลูกค้าที่ซื้อสินค้านี้ยังซื้อสิ่งนี้ด้วย\"</em> ซึ่งสร้างยอดขายเพิ่มเติมได้มหาศาล\n                  </p>\n                </div>\n\n                <div class=\"card-feature border-green\">\n                  <h6>📱 AIS (โทรคมนาคมชั้นนำ):</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    ใช้ระบบ CRM รวบรวมข้อมูลการใช้งานของลูกค้า ให้บริการผ่านแอปพลิเคชัน <strong>myAIS</strong> และนำเสนอแพ็กเกจอินเทอร์เน็ต สิทธิพิเศษ Serenade รวมถึงโปรโมชั่นที่ตรงกับไลฟ์สไตล์ของลูกค้ารายนั้น ๆ โดยเฉพาะ\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch2-ecommerce",
          "title": "7. รูปแบบธุรกิจพาณิชย์อิเล็กทรอนิกส์ (E-Commerce Models)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🛒 รูปแบบการทำธุรกรรมพาณิชย์อิเล็กทรอนิกส์ (E-Commerce Business Models)</h4>\n              <p>จำแนกตามคู่สัญญาที่ทำธุรกรรมร่วมกันระหว่าง <strong>Business (ธุรกิจ), Consumer (ผู้บริโภค), และ Government (ภาครัฐ)</strong>:</p>\n            </div>\n\n            <div class=\"table-wrap mt-3\">\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>โมเดล</th>\n                    <th>ความหมาย</th>\n                    <th>ลักษณะสำคัญ</th>\n                    <th>ตัวอย่างจริง</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><span class=\"badge badge-primary\">B2C</span><br>Business-to-Consumer</td>\n                    <td>ธุรกิจขายสินค้าหรือบริการให้ผู้บริโภครายบุคคลโดยตรง</td>\n                    <td>มูลค่าต่อคำสั่งซื้อน้อย แต่มีจำนวนธุรกรรมสูงมาก เน้นการตลาดและแบรนด์</td>\n                    <td>Shopee, Lazada, Amazon, ซื้อกาแฟผ่านแอป Starbucks</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-accent\">B2B</span><br>Business-to-Business</td>\n                    <td>การซื้อขายระหว่างภาคธุรกิจด้วยกัน</td>\n                    <td>ปริมาณการซื้อขายครั้งละมาก ๆ (Bulk), มีรอบการชำระเงินตามเครดิตเทอม</td>\n                    <td>Alibaba.com, โรงงานผลิตชิ้นส่วนขายส่งให้โตโยต้า, Makro ขายส่งให้ร้านอาหาร</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-success\">C2C</span><br>Consumer-to-Consumer</td>\n                    <td>ผู้บริโภคซื้อขายแลกเปลี่ยนสินค้ากันเอง</td>\n                    <td>ส่วนใหญ่เป็นสินค้ามือสอง แพลตฟอร์มทำหน้าที่เป็นตลาดกลางและระบบชำระเงิน</td>\n                    <td>Kaidee (ขายดี), Facebook Marketplace, eBay, กลุ่มส่งต่อเสื้อผ้า</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-warning\">B2G</span><br>Business-to-Government</td>\n                    <td>ภาคธุรกิจเอกชนขายสินค้าหรือให้บริการแก่หน่วยงานภาครัฐ</td>\n                    <td>ต้องผ่านกระบวนการประมูลตามกฎระเบียบของรัฐ (Procurement)</td>\n                    <td>ระบบจัดซื้อจัดจ้างภาครัฐ (e-GP), บริษัทรับเหมาก่อสร้างสร้างสะพานให้กรมทางหลวง</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-info\">C2G</span><br>Consumer-to-Government</td>\n                    <td>ประชาชนทั่วไปติดต่อ ชำระค่าบริการ หรือจ่ายภาษีให้หน่วยงานรัฐ</td>\n                    <td>อำนวยความสะดวกให้ประชาชนเข้าถึงบริการภาครัฐได้ 24 ชั่วโมง</td>\n                    <td>การยื่นชำระภาษีออนไลน์ผ่าน E-filing กรมสรรพากร, ต่อภาษีรถยนต์ DLT</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-purple\">G2C</span><br>Government-to-Consumer</td>\n                    <td>ภาครัฐให้บริการ ข้อมูล หรือสวัสดิการแก่ประชาชน</td>\n                    <td>เน้นการบริการสาธารณะ ไม่มุ่งหวังกำไร</td>\n                    <td>แอปพลิเคชัน 'ทางรัฐ', หมอพร้อม, บัตรทอง 30 บาท</td>\n                  </tr>\n                  <tr>\n                    <td><span class=\"badge badge-danger\">G2G</span><br>Government-to-Government</td>\n                    <td>การแลกเปลี่ยนข้อมูลและบริการระหว่างหน่วยงานภาครัฐด้วยกัน</td>\n                    <td>เชื่อมโยงฐานข้อมูลเพื่อลดความซ้ำซ้อนของเอกสาร</td>\n                    <td>สำนักงานตำรวจแห่งชาติเชื่อมโยงข้อมูลกับกรมการขนส่งทางบก</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch2-careers",
          "title": "8. เจาะลึก 11 สายอาชีพด้านสารสนเทศ (IS Careers Guide - Slide 24)",
          "content": "\n            <div class=\"note-card\">\n              <h4>💼 เจาะลึก 11 สายอาชีพไอทีและสารสนเทศในองค์กร (ตามสไลด์หน้า 24)</h4>\n              <p>สรุปบทบาท หน้าที่ ทักษะความรู้ที่จำเป็น และประสบการณ์สำหรับเตรียมสอบและวางแผนอาชีพ:</p>\n            </div>\n\n            <div class=\"table-wrap mt-3\">\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>ตำแหน่ง</th>\n                    <th>คำอธิบาย & หน้าที่หลัก</th>\n                    <th>ทักษะและความรู้ที่ต้องมี</th>\n                    <th>ระดับประสบการณ์</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>1. นักวิเคราะห์ข้อมูล<br>(Data Analyst)</strong></td>\n                    <td>รวบรวม ทำความสะอาด และวิเคราะห์ข้อมูลธุรกิจเพื่อหาแนวโน้ม สร้าง Dashboard รายงานประกอบการตัดสินใจ</td>\n                    <td>SQL, Excel ขั้นสูง, Power BI / Tableau, สถิติพื้นฐาน, Python/R</td>\n                    <td>0 - 2 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>2. นักวิเคราะห์ธุรกิจ<br>(Business Analyst, BA)</strong></td>\n                    <td>เป็นสะพานเชื่อมระหว่างฝ่ายธุรกิจกับฝ่ายไอที ถอดความต้องการของผู้ใช้ (User Requirements) แปลงเป็นข้อกำหนดระบบ</td>\n                    <td>Business Process Modeling, BPMN, การสื่อสาร, การเจรจาต่อรอง, Agile/Scrum</td>\n                    <td>2 - 4 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>3. นักเขียนโปรแกรมเว็บ<br>(Web Programmer)</strong></td>\n                    <td>พัฒนาและดูแลเว็บไซต์ เว็บแอปพลิเคชัน ทั้งส่วนหน้าบ้าน (Frontend) และหลังบ้าน (Backend)</td>\n                    <td>HTML, CSS, JavaScript, Framework (React, Vue, Node.js), Web Security</td>\n                    <td>0 - 3 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>4. นักพัฒนาซอฟต์แวร์<br>(Software Developer)</strong></td>\n                    <td>ออกแบบ เขียนโค้ด ทดสอบ (Unit Test) และดูแลโปรแกรมแอปพลิเคชันให้ทำงานได้ถูกต้องตามสเปก</td>\n                    <td>ภาษาโปรแกรมมิ่ง (Java, C#, Python, Golang), OOP, Data Structures, Git</td>\n                    <td>1 - 4 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>5. นักวิเคราะห์ระบบ<br>(System Analyst, SA)</strong></td>\n                    <td>วิเคราะห์ระบบเดิมและออกแบบสถาปัตยกรรมระบบไอทีใหม่ (System Design, DB Schema, API Specs, Data Flow)</td>\n                    <td>UML Diagrams, Database Design, System Architecture, SDLC</td>\n                    <td>3 - 5 ปีขึ้นไป (มักโตมาจากโปรแกรมเมอร์)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>6. ผู้ดูแลระบบ<br>(System Administrator)</strong></td>\n                    <td>ติดตั้ง กำหนดค่า และบำรุงรักษาเซิร์ฟเวอร์ ระบบปฏิบัติการ ระบบเครือข่าย และสำรองข้อมูลป้องกันระบบล่ม</td>\n                    <td>Windows Server, Linux/Unix OS, Active Directory, Network, Backup & Recovery</td>\n                    <td>2 - 4 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>7. UX/UI Designer</strong></td>\n                    <td>ออกแบบประสบการณ์การใช้งาน (UX) ที่สะดวก ลื่นไหล และออกแบบส่วนต่อประสานหน้าจอ (UI) ที่สวยงามดึงดูดใจ</td>\n                    <td>Figma, Adobe XD, Design Thinking, Wireframing, Prototyping, User Research</td>\n                    <td>1 - 3 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>8. ผู้บริหารฐานข้อมูล<br>(Database Administrator: DBA)</strong></td>\n                    <td>ออกแบบ จัดการ ดูแลความปลอดภัย ประสิทธิภาพ และสำรองกู้คืนฐานข้อมูลขององค์กร กำหนดสิทธิ์ผู้ใช้</td>\n                    <td>Oracle, SQL Server, MySQL, PostgreSQL, Query Optimization, Concurrency Control</td>\n                    <td>3 - 5 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>9. ผู้เชี่ยวชาญด้านคลาวด์<br>(Cloud Specialist)</strong></td>\n                    <td>ออกแบบ ติดตั้ง และดูแลโครงสร้างพื้นฐานบนคลาวด์ บริหารต้นทุนและประสิทธิภาพการประมวลผล</td>\n                    <td>AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, Terraform</td>\n                    <td>3 - 5 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>10. ผู้จัดการโครงการ<br>(Project Manager: PM)</strong></td>\n                    <td>วางแผน ควบคุมงบประมาณ จัดสรรกำลังคน และบริหารเวลาเพื่อให้โครงการส่งมอบสำเร็จตามเป้าหมาย</td>\n                    <td>Project Management, PMP/Agile, Risk Management, Leadership, Teamwork</td>\n                    <td>5 ปีขึ้นไป</td>\n                  </tr>\n                  <tr>\n                    <td><strong>11. ผู้เชี่ยวชาญความปลอดภัย<br>(Security Specialist)</strong></td>\n                    <td>ตรวจจับ ป้องกัน และรับมือกับการโจมตีทางไซเบอร์ กำหนดนโยบายความมั่นคงปลอดภัยตามมาตรฐาน ISO 27001</td>\n                    <td>Cybersecurity, Penetration Testing, Firewall, SOC, Encryption, Incident Response</td>\n                    <td>3 - 5 ปีขึ้นไป</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch2-exercises",
          "title": "9. เฉลยแบบฝึกหัดท้ายบทที่ 2 (Slide Exercises 23-24)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📝 เฉลยและแนวทางตอบแบบฝึกหัดท้ายบทที่ 2 (สไลด์หน้า 23-24)</h4>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-primary mb-2\">ข้อที่ 1 (สไลด์หน้า 23): การใช้ระบบสารสนเทศเพื่อทำอะไร (ตอบ 1 ข้อ ไม่ซ้ำกับตัวอย่าง)</span>\n              <p><strong>แนวคำตอบที่ได้คะแนนเต็ม:</strong></p>\n              <div class=\"card-feature mt-2\">\n                <p style=\"font-size:0.88rem;\">\n                  <strong>การใช้ระบบสารสนเทศเพื่อ:</strong> <em>\"การจัดการคลังสินค้าอัจฉริยะและการทำนายสินค้าคงคลังแบบเรียลไทม์ (Smart Inventory & Demand Forecasting)\"</em><br>\n                  <strong>คำอธิบาย:</strong> ใช้ระบบเซ็นเซอร์ RFID ร่วมกับซอฟต์แวร์สารสนเทศตรวจนับสต็อกสินค้าในคลังแบบอัตโนมัติ เมื่อสินค้าลดลงถึงจุดสั่งซื้อขั้นต่ำ (Reorder Point) ระบบจะออกใบสั่งซื้อไปยังผู้ผลิตโดยอัตโนมัติ ช่วยลดปัญหาของขาดสต็อก (Stockout) และลดต้นทุนการเก็บของค้างสต็อก\n                </p>\n              </div>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-danger mb-2\">ข้อที่ 2 (สไลด์หน้า 23): ความเสี่ยง (Risk) ของการเริ่มนำระบบสารสนเทศมาใช้ (ตอบ 1 ข้อ ไม่ซ้ำ)</span>\n              <p><strong>แนวคำตอบที่ได้คะแนนเต็ม:</strong></p>\n              <div class=\"card-feature mt-2\">\n                <p style=\"font-size:0.88rem;\">\n                  <strong>ความเสี่ยง:</strong> <em>\"การเกิดภาวะหยุดชะงักทางธุรกิจจากการถ่ายโอนข้อมูลผิดพลาด (Business Disruption from Data Migration Failure)\"</em><br>\n                  <strong>คำอธิบาย:</strong> ในขั้นตอนการย้ายข้อมูลเก่า (Legacy Data) จากฐานข้อมูลเดิมเข้ามายังระบบใหม่ ข้อมูลอาจสูญหาย โครงสร้างไม่เข้ากัน หรือยอดตัวเลขบัญชีไม่ตรงกัน ทำให้พนักงานไม่สามารถออกใบแจ้งหนี้หรือจัดส่งสินค้าได้ในวันเริ่มใช้งานระบบ ส่งผลให้เกิดความเสียหายทางการเงินทันที\n                </p>\n              </div>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-accent mb-2\">ข้อที่ 3 (สไลด์หน้า 24): เลือก 3 อาชีพ อธิบาย 1) คืออะไร 2) หน้าที่ 3) ความรู้ 4) ประสบการณ์</span>\n              <p><strong>ตัวอย่างการตอบ 3 อาชีพยอดนิยม:</strong></p>\n              \n              <div class=\"card-feature mt-2\">\n                <h6>1) นักวิเคราะห์ระบบ (System Analyst: SA)</h6>\n                <ul style=\"font-size:0.84rem; padding-left:18px;\">\n                  <li><strong>คืออะไร:</strong> ผู้เชี่ยวชาญที่ทำหน้าที่เป็นตัวกลางในการแปลงความต้องการทางธุรกิจให้เป็นข้อกำหนดทางเทคนิคเพื่อสร้างระบบสารสนเทศ</li>\n                  <li><strong>หน้าที่:</strong> สัมภาษณ์ผู้ใช้งาน วิเคราะห์ระบบเดิม ออกแบบ Data Flow Diagram, ER Diagram, Wireframe และเขียนเอกสาร Software Specification ให้โปรแกรมเมอร์</li>\n                  <li><strong>ความรู้:</strong> SDLC, UML, Database Design, SQL, Business Process Modeling และทักษะการสื่อสาร</li>\n                  <li><strong>ประสบการณ์:</strong> 3 - 5 ปี (ส่วนใหญ่เติบโตมาจาก Developer หรือ Programmer)</li>\n                </ul>\n              </div>\n\n              <div class=\"card-feature mt-2\">\n                <h6>2) ผู้จัดการฐานข้อมูล (Database Administrator: DBA)</h6>\n                <ul style=\"font-size:0.84rem; padding-left:18px;\">\n                  <li><strong>คืออะไร:</strong> ผู้รับผิดชอบความสมบูรณ์ ประสิทธิภาพ และความมั่นคงปลอดภัยของฐานข้อมูลขององค์กร</li>\n                  <li><strong>หน้าที่:</strong> ติดตั้งและกำหนดค่า RDBMS, ปรับแต่งความเร็วคิวรี (Performance Tuning), สำรองและกู้คืนข้อมูล (Backup & Disaster Recovery), ควบคุมสิทธิ์การเข้าถึงข้อมูล</li>\n                  <li><strong>ความรู้:</strong> Relational Database, SQL ขั้นสูง, การปรับแต่ง Index, ACID Properties, Concurrency Control</li>\n                  <li><strong>ประสบการณ์:</strong> 3 - 5 ปีในงานบริหารฐานข้อมูลหรือดูแลระบบ</li>\n                </ul>\n              </div>\n\n              <div class=\"card-feature mt-2\">\n                <h6>3) ผู้เชี่ยวชาญด้านความปลอดภัยข้อมูล (Information Security Specialist)</h6>\n                <ul style=\"font-size:0.84rem; padding-left:18px;\">\n                  <li><strong>คืออะไร:</strong> ผู้พิทักษ์ระบบสารสนเทศขององค์กรจากการโจมตีทางไซเบอร์ การละเมิดข้อมูล และมัลแวร์</li>\n                  <li><strong>หน้าที่:</strong> ตรวจสอบช่องโหว่ (Vulnerability Assessment), เฝ้าระวังภัยคุกคามในระบบเครือข่าย, กำหนดนโยบายความปลอดภัย และตอบสนองต่อเหตุการณ์ฉุกเฉิน (Incident Response)</li>\n                  <li><strong>ความรู้:</strong> Network Protocols, Cryptography, Firewall, Penetration Testing, มาตรฐาน ISO 27001, กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA/GDPR)</li>\n                  <li><strong>ประสบการณ์:</strong> 3 - 5 ปีในสายงาน Network หรือ Security</li>\n                </ul>\n              </div>\n            </div>\n            "
        }
      ],
      "exercises": [
        {
          "slideRef": "สไลด์หน้า 23 ข้อ 1",
          "question": "การใช้ระบบสารสนเทศเพื่อทำอะไร (ตอบ 1 ข้อ ไม่ซ้ำกับตัวอย่างที่ให้)",
          "sampleAnswer": "แนวคำตอบ: 'การใช้ระบบสารสนเทศเพื่อการจัดการคลังสินค้าอัจฉริยะและการพยากรณ์ความต้องการสินค้า (Smart Inventory and Demand Forecasting) โดยใช้เซ็นเซอร์ RFID ร่วมกับระบบสารสนเทศตรวจนับสต็อกแบบเรียลไทม์ และส่งคำสั่งซื้อไปยังซัพพลายเออร์อัตโนมัติเมื่อถึงจุดสั่งซื้อขั้นต่ำ ช่วยลดสินค้าขาดสต็อกและลดต้นทุนจม'"
        },
        {
          "slideRef": "สไลด์หน้า 23 ข้อ 2",
          "question": "ความเสี่ยง (Risk) ของการเริ่มนำระบบสารสนเทศมาใช้ (ตอบ 1 ข้อ ไม่ซ้ำกับตัวอย่างที่ให้)",
          "sampleAnswer": "แนวคำตอบ: 'การหยุดชะงักของกระบวนการดำเนินงานทางธุรกิจจากการถ่ายโอนข้อมูลล้มเหลว (Business Disruption from Data Migration Failure) ในช่วงการย้ายข้อมูลเก่าจากระบบ Legacy สู่ระบบใหม่ อาจเกิดข้อผิดพลาดทำให้ข้อมูลสูญหายหรือไม่ตรงกัน ส่งผลให้ออกใบเสร็จหรือจัดส่งสินค้าให้ลูกค้าไม่ได้ในวันแรกที่เปิดใช้งานระบบ'"
        },
        {
          "slideRef": "สไลด์หน้า 24 ข้อ 3",
          "question": "เลือก 3 อาชีพ อธิบาย 1) คืออะไร 2) หน้าที่ 3) ความรู้ 4) ประสบการณ์ (เช่น SA, DBA, Security Specialist)",
          "sampleAnswer": "แนวคำตอบ:<br>1) <strong>System Analyst (SA):</strong> นักวิเคราะห์ระบบ เป็นตัวกลางแปลงโจทย์ธุรกิจสู่ข้อกำหนดทางเทคนิค ออกแบบสถาปัตยกรรมระบบ DB และ Flowchart ต้องการความรู้ SDLC, UML, DB Design ประสบการณ์ 3-5 ปี<br>2) <strong>Database Administrator (DBA):</strong> ผู้บริหารฐานข้อมูล ดูแลความสมบูรณ์ ความเร็ว และความปลอดภัยของฐานข้อมูล ต้องการความรู้ SQL ขั้นสูง, Performance Tuning, Backup and Disaster Recovery ประสบการณ์ 3-5 ปี<br>3) <strong>Information Security Specialist:</strong> ผู้เชี่ยวชาญความปลอดภัยไซเบอร์ ป้องกันและรับมือการโจมตีระบบสารสนเทศ ต้องการความรู้ Network, Firewall, Penetration Testing, มาตรฐาน ISO 27001 ประสบการณ์ 3-5 ปี"
        }
      ]
    },
    {
      "id": "ch3",
      "number": "Chapter 3",
      "title": "Software: Systems and Application Software",
      "thTitle": "ซอฟต์แวร์ระบบและซอฟต์แวร์ประยุกต์",
      "icon": "💻",
      "description": "เจาะลึกความหมายของซอฟต์แวร์, ระบบปฏิบัติการ (OS) และบทบาทของ Kernel, 8 กิจกรรมหลักของ OS, Utility Programs, Middleware & SOA, ERP, ลิขสิทธิ์ซอฟต์แวร์, Open-Source vs Freeware vs Shareware ครบทุกสไลด์",
      "sections": [
        {
          "id": "ch3-overview",
          "title": "1. ภาพรวมและการจำแนกประเภทซอฟต์แวร์ (Software Overview)",
          "content": "\n            <div class=\"note-card\">\n              <h4>💻 ซอฟต์แวร์ (Software) คืออะไร?</h4>\n              <p><strong>นิยามตามสไลด์ (Slide 2):</strong> ชุดคำสั่งหรือโปรแกรมคอมพิวเตอร์ที่ควบคุมการทำงานของฮาร์ดแวร์คอมพิวเตอร์และอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ เพื่อให้ทำงานตามที่มนุษย์ต้องการ</p>\n              <p class=\"mt-2\"><strong>แบ่งออกเป็น 2 ประเภทหลัก (Slide 2-4):</strong></p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <!-- Systems Software -->\n              <div class=\"card-outline border-cyan\">\n                <div class=\"badge badge-info mb-2\">ประเภทที่ 1: ซอฟต์แวร์ระบบ (Systems Software)</div>\n                <h5>⚙️ Systems Software</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  ชุดของโปรแกรมที่ประสานงานให้ <strong>ฮาร์ดแวร์และโปรแกรมประยุกต์ทำงานร่วมกันได้</strong> ทำหน้าที่ควบคุมการทำงานพื้นฐานของคอมพิวเตอร์และจัดการทรัพยากรของระบบ (Slide 3)\n                </p>\n                <div class=\"note-card mt-2\" style=\"background:rgba(6, 182, 212, 0.08); border-left-color:var(--accent-cyan);\">\n                  <strong>แบ่งออกเป็น 3 หมวดสำคัญ (Slide 4):</strong>\n                  <ol style=\"padding-left:18px; font-size:0.84rem; margin-top:4px;\">\n                    <li><strong>Operating Systems (OS):</strong> ระบบปฏิบัติการควบคุมเครื่อง เช่น Windows, macOS, Linux, Android</li>\n                    <li><strong>Utility Programs:</strong> โปรแกรมอรรถประโยชน์ช่วยดูแลรักษาเครื่อง</li>\n                    <li><strong>Middleware:</strong> ซอฟต์แวร์กาวเชื่อมโยงระบบต่างชนิดกัน</li>\n                  </ol>\n                </div>\n              </div>\n\n              <!-- Application Software -->\n              <div class=\"card-outline border-green\">\n                <div class=\"badge badge-success mb-2\">ประเภทที่ 2: ซอฟต์แวร์ประยุกต์ (Application Software)</div>\n                <h5>📱 Application Software</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  โปรแกรมที่สร้างขึ้นเพื่อให้ <strong>คอมพิวเตอร์ทำงานเฉพาะด้านตามที่ผู้ใช้งานต้องการ</strong> ช่วยอำนวยความสะดวกในชีวิตประจำวันและการทำงานของมนุษย์ (Slide 3, 20)\n                </p>\n                <div class=\"note-card mt-2\" style=\"background:rgba(16, 185, 129, 0.08); border-left-color:var(--accent-emerald);\">\n                  <strong>ตัวอย่าง 8 หมวดตามสไลด์ (Slide 3):</strong>\n                  <ul style=\"padding-left:18px; font-size:0.84rem; margin-top:4px;\">\n                    <li>1. โปรแกรมประมวลผลคำ (Word Processing เช่น Microsoft Word)</li>\n                    <li>2. โปรแกรมตารางคำนวณ (Spreadsheet เช่น Microsoft Excel)</li>\n                    <li>3. โปรแกรมนำเสนอ (Presentation เช่น PowerPoint)</li>\n                    <li>4. โปรแกรมจัดการฐานข้อมูล (Database เช่น Access)</li>\n                    <li>5. โปรแกรม Antivirus</li>\n                    <li>6. ซอฟต์แวร์จัดการภาพกราฟิก (Photoshop, Illustrator)</li>\n                    <li>7. ซอฟต์แวร์สร้างเว็บไซต์</li>\n                    <li>8. ซอฟต์แวร์ตัดต่อเสียงและวิดีโอ (Premiere Pro)</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <!-- Layer Diagram -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">층 สถาปัตยกรรมระดับชั้นการทำงาน (Software Hierarchy Layer):</h5>\n              <div class=\"steps-flow\">\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-warning mb-1\">ชั้นที่ 1</span>\n                  <h6>👤 ผู้ใช้งาน (User)</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">สั่งงานผ่านหน้าจอ</p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-success mb-1\">ชั้นที่ 2</span>\n                  <h6>📱 Application SW</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">Word, Excel, Browser</p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box active\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-primary mb-1\">ชั้นที่ 3</span>\n                  <h6>⚙️ Operating System</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">Windows, macOS, Linux</p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-accent mb-1\">ชั้นที่ 4</span>\n                  <h6>🔌 ฮาร์ดแวร์ (Hardware)</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">CPU, RAM, Disks</p>\n                </div>\n              </div>\n              <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:8px; text-align:center;\">\n                💡 <em>หัวใจสำคัญ:</em> แอปพลิเคชันไม่ได้คุยกับฮาร์ดแวร์ตรง ๆ แต่ต้องคุยผ่าน <strong>ระบบปฏิบัติการ (OS)</strong> เสมอ!\n              </p>\n            </div>\n            "
        },
        {
          "id": "ch3-os-kernel",
          "title": "2. ระบบปฏิบัติการ (Operating Systems) และเคอร์เนล (Kernel)",
          "content": "\n            <div class=\"note-card\">\n              <h4>⚙️ ระบบปฏิบัติการ (Operating System: OS) คืออะไร?</h4>\n              <p><strong>นิยามตามสไลด์ (Slide 5):</strong> ชุดโปรแกรมที่ทำหน้าที่ <strong>ควบคุมฮาร์ดแวร์คอมพิวเตอร์ และทำหน้าที่เป็นส่วนติดต่อประสาน (Interface) กับโปรแกรมแอปพลิเคชัน</strong> (Set of programs that controls computer hardware and acts as an interface with application programs)</p>\n            </div>\n\n            <!-- Kernel deep-dive -->\n            <div class=\"card-outline mt-3 border-cyan\">\n              <div class=\"badge badge-info mb-2\">หัวใจสำคัญที่สุดของ OS (Slide 5)</div>\n              <h5 style=\"color:var(--accent-cyan);\">🧠 เคอร์เนล (Kernel) คืออะไร?</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                <strong>นิยามตามสไลด์:</strong> <em>\"Ties all components of the OS together and regulates other programs\"</em><br>\n                เคอร์เนล คือ <strong>แก่นกลางหรือหัวใจหลักของระบบปฏิบัติการ</strong> ทำหน้าที่ผูกโยงส่วนประกอบทั้งหมดของ OS เข้าด้วยกัน และคอยกำกับดูแลควบคุมการทำงานของโปรแกรมอื่น ๆ ทั้งหมด\n              </p>\n              <div class=\"note-card mt-2\" style=\"background:rgba(6, 182, 212, 0.08); border-left-color:var(--accent-cyan);\">\n                <strong>คุณลักษณะสำคัญของ Kernel ที่ออกสอบบ่อย:</strong>\n                <ul style=\"padding-left:18px; font-size:0.84rem; margin-top:4px;\">\n                  <li>เป็นโปรแกรมแรกที่ถูกโหลดเข้าสู่หน่วยความจำหลัก (RAM) เมื่อเปิดเครื่อง (Booting)</li>\n                  <li>ฝังตัวและทำงานอยู่ใน RAM ตลอดเวลาจนกว่าจะปิดเครื่อง</li>\n                  <li>จัดการคำสั่งสลับการทำงานของ CPU (Context Switching), จัดสรรเวลาของชิปประมวลผล และบริหารสิทธิ์ความปลอดภัยในระดับลึกที่สุด (Kernel Mode vs User Mode)</li>\n                </ul>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch3-os-activities",
          "title": "3. เจาะลึก 8 ภารกิจหลักของระบบปฏิบัติการ (8 OS Activities)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📋 8 กิจกรรมหลักที่ระบบปฏิบัติการต้องปฏิบัติ (ตามสไลด์หน้า 6, 8-14)</h4>\n              <p>ข้อสอบมักจะถามหน้าที่หรือยกสถานการณ์มาถามว่าตรงกับกิจกรรมข้อใดของ OS:</p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <!-- 1. Common Hardware Functions -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-primary mb-1\">1. Common Hardware Functions (Slide 8)</span>\n                <h6>ควบคุมฟังก์ชันฮาร์ดแวร์ทั่วไป</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  • รับข้อมูลเข้า (Input) จากแป้นพิมพ์ เมาส์ หรืออุปกรณ์รับเข้าอื่น ๆ<br>\n                  • ดึงข้อมูลจากดิสก์ (Retrieve data from disks)<br>\n                  • บันทึกและจัดเก็บข้อมูลลงดิสก์ (Store data on disks)<br>\n                  • แสดงผลสารสนเทศออกทางหน้าจอภาพหรือเครื่องพิมพ์\n                </p>\n              </div>\n\n              <!-- 2. User Interface -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-accent mb-1\">2. User Interface & I/O Management (Slide 9-10)</span>\n                <h6>ส่วนต่อประสานกับผู้ใช้และการจัดการ I/O</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  เปิดช่องทางให้มนุษย์เข้าถึงและออกคำสั่งกับระบบ แบ่งเป็น 2 แบบ:<br>\n                  • <strong>Command-based UI (CLI):</strong> ต้องพิมพ์คำสั่งข้อความด้วยตนเอง เช่น หน้าจอดำ MS-DOS หรือ Linux Terminal<br>\n                  • <strong>Graphical User Interface (GUI):</strong> ใช้ภาพ ไอคอน หน้าต่าง และเมนูคลิกเลือกได้สะดวก\n                </p>\n              </div>\n\n              <!-- 3. Hardware Independence -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-success mb-1\">3. Hardware Independence & API (Slide 11)</span>\n                <h6>ความเป็นอิสระจากฮาร์ดแวร์</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  มี <strong>Application Program Interface (API)</strong> เป็นตัวกลาง ทำให้โปรแกรมเมอร์เขียนแอปพลิเคชันเพียงครั้งเดียว ก็สามารถรันบนคอมพิวเตอร์ที่ใช้การ์ดจอ เมนบอร์ด หรือฮาร์ดดิสก์คนละยี่ห้อกันได้ โดย OS จะเป็นผู้แปลงคำสั่งให้เอง\n                </p>\n              </div>\n\n              <!-- 4. Memory Management -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-warning mb-1\">4. Memory Management (Slide 11)</span>\n                <h6>การจัดการหน่วยความจำของระบบ</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  จัดสรรพื้นที่ใน RAM ให้แต่ละโปรแกรมทำงานได้อย่างมีประสิทธิภาพและประมวลผลได้รวดเร็ว รวมถึงจัดทำ <strong>Virtual Memory (หน่วยความจำเสมือน)</strong> โดยจำลองพื้นที่ว่างในฮาร์ดดิสก์มาใช้เสริมเมื่อ RAM เต็ม เพื่อไม่ให้เครื่องค้าง\n                </p>\n              </div>\n\n              <!-- 5. Processing Tasks -->\n              <div class=\"card-outline border-cyan\">\n                <span class=\"badge badge-info mb-1\">5. Manage Processing Tasks (Slide 13)</span>\n                <h6 style=\"color:var(--accent-cyan);\">การจัดการงานด้านการประมวลผล (ออกสอบบ่อยมาก!)</h6>\n                <ul style=\"padding-left:16px; font-size:0.84rem; color:var(--text-muted);\">\n                  <li><strong>Multitasking:</strong> ความสามารถในการรันโปรแกรม <u>มากกว่าหนึ่งโปรแกรมพร้อมกัน</u> ในเวลาเดียวกัน (เช่น เปิดฟังเพลงบน YouTube ไปพร้อมกับพิมพ์งาน Word)</li>\n                  <li><strong>Time-sharing:</strong> การอนุญาตให้ <u>ผู้ใช้งานมากกว่าหนึ่งคน</u> เข้าใช้งานระบบคอมพิวเตอร์เดียวกันในเวลาเดียวกัน</li>\n                  <li><strong>Scalability:</strong> ความสามารถของคอมพิวเตอร์ในการขยายตัวเพื่อ <u>รองรับจำนวนผู้ใช้งานพร้อมกัน (Concurrent Users)</u> ที่เพิ่มสูงขึ้นได้อย่างราบรื่นโดยระบบไม่ล่ม</li>\n                </ul>\n              </div>\n\n              <!-- 6. Networking Capability -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-purple mb-1\">6. Networking Capability (Slide 14)</span>\n                <h6>ความสามารถด้านระบบเครือข่าย</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  อนุญาตให้คอมพิวเตอร์ที่เชื่อมต่ออยู่ในเครือข่ายสามารถรับส่งข้อมูล แลกเปลี่ยนไฟล์ และแบ่งปันทรัพยากรการคำนวณร่วมกันได้ (เช่น แชร์เครื่องพิมพ์ แชร์โฟลเดอร์เซิร์ฟเวอร์)\n                </p>\n              </div>\n\n              <!-- 7. Security & Access Control -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-danger mb-1\">7. Control Access to Resources (Slide 14)</span>\n                <h6>การควบคุมการเข้าถึงและความปลอดภัย</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ป้องกันการเข้าถึงจากบุคคลที่ไม่ได้รับอนุญาต (Protection against unauthorized access) ด้วยระบบชื่อผู้ใช้ (Logins) รหัสผ่าน (Passwords) และการกำหนดสิทธิ์ (Permissions)\n                </p>\n              </div>\n\n              <!-- 8. File Management -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-accent mb-1\">8. File Management (Slide 14)</span>\n                <h6>การจัดการไฟล์ข้อมูล</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ตรวจสอบให้แน่ใจว่าไฟล์ที่จัดเก็บอยู่ในหน่วยความจำสำรอง (Secondary Storage) สามารถค้นหาและดึงมาใช้งานได้ทันทีเมื่อต้องการ พร้อมทั้งปกป้องไฟล์ไม่ให้ถูกแก้ไขหรือทำลายโดยมิชอบ\n                </p>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch3-current-os-utilities",
          "title": "4. ระบบปฏิบัติการในปัจจุบันและโปรแกรมอรรถประโยชน์ (Current OS & Utilities)",
          "content": "\n            <div class=\"grid-2\">\n              <!-- Current Operating Systems -->\n              <div class=\"card-outline\">\n                <h5>🖥️ ระบบปฏิบัติการในปัจจุบัน (Current OS - Slide 15-16)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">แบ่งตามสภาพแวดล้อมการใช้งาน:</p>\n                \n                <h6 class=\"mt-2\" style=\"color:var(--primary);\">1. เครื่องคอมพิวเตอร์ส่วนบุคคล (PC Operating Systems):</h6>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>Microsoft Windows:</strong> ครองส่วนแบ่งตลาดอันดับหนึ่ง รองรับโปรแกรมหลากหลาย</li>\n                  <li><strong>Apple macOS:</strong> สำหรับเครื่อง Mac มีความเสถียรและความปลอดภัยสูง เหมาะกับงานดีไซน์</li>\n                  <li><strong>Linux:</strong> ระบบปฏิบัติการแบบ Open-source ยอดนิยม มีความยืดหยุ่นสูง (เช่น Ubuntu)</li>\n                </ul>\n\n                <h6 class=\"mt-2\" style=\"color:var(--accent-indigo);\">2. กลุ่มงานและเซิร์ฟเวอร์ (Workgroup / Server OS - Slide 16):</h6>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>Windows Server:</strong> สำหรับจัดการเครือข่ายองค์กรและ Active Directory</li>\n                  <li><strong>UNIX:</strong> ระบบเซิร์ฟเวอร์ประสิทธิภาพสูง นิยมใช้ในองค์กรใหญ่และสถาบันการเงิน</li>\n                  <li><strong>Mac OS X Server / Red Hat Enterprise Linux:</strong> สำหรับเครื่องแม่ข่ายบริการเว็บและดาต้าเซ็นเตอร์</li>\n                </ul>\n              </div>\n\n              <!-- Utility Programs -->\n              <div class=\"card-outline\">\n                <h5>🛠️ โปรแกรมอรรถประโยชน์ (Utility Programs - Slide 17-18)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">ซอฟต์แวร์เสริมที่ช่วยดูแลรักษา บำรุง และเพิ่มประสิทธิภาพของคอมพิวเตอร์:</p>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px; line-height:1.7;\">\n                  <li><strong>Hardware Utilities:</strong> ตรวจเช็กสถานะการทำงานของฮาร์ดไดรฟ์ การ์ดจอ และปรับแต่งอุปกรณ์</li>\n                  <li><strong>Security Utilities:</strong> ป้องกันไวรัส มัลแวร์ แฮกเกอร์ และไฟร์วอลล์</li>\n                  <li><strong>File-compression Utilities:</strong> บีบอัดขนาดไฟล์ให้เล็กลงเพื่อประหยัดพื้นที่และส่งต่อง่าย (เช่น WinRAR, 7-Zip)</li>\n                  <li><strong>Spam and Pop-up Blocker:</strong> บล็อกสแปมอีเมลและหน้าต่างโฆษณากวนใจ</li>\n                  <li><strong>Network and Internet Utilities:</strong> วิเคราะห์และทดสอบเครือข่าย (Ping, Speedtest)</li>\n                  <li><strong>Server and Mainframe Utilities:</strong> ตรวจสอบปริมาณโหลดของเซิร์ฟเวอร์</li>\n                  <li><strong>Other Utilities:</strong> จัดการเอกสารองค์กร, โปรแกรมอ่านหน้าจอสำหรับผู้บกพร่องทางสายตา (Screen Readers), เฝ้าติดตามพนักงาน, เครื่องมือค้นหาไฟล์</li>\n                </ul>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch3-middleware-soa",
          "title": "5. มิดเดิลแวร์ (Middleware) และ Service-Oriented Architecture (SOA)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🔄 มิดเดิลแวร์ (Middleware) คืออะไร? (Slide 19)</h4>\n              <p><strong>นิยามตามสไลด์:</strong> ซอฟต์แวร์ที่ทำหน้าที่ <strong>อนุญาตให้ระบบคอมพิวเตอร์และโปรแกรมที่แตกต่างกันสามารถสื่อสารและแลกเปลี่ยนข้อมูลกันได้ (Allows different systems to communicate and exchange data)</strong></p>\n              <p class=\"mt-2\">\n                🌉 <strong>บทบาทสำคัญ:</strong> เปรียบเสมือน <strong>\"กาวเชื่อมโยงซอฟต์แวร์ (Software Glue)\"</strong> หรือล่ามแปลภาษา โดยเฉพาะการทำหน้าที่เป็นตัวกลางเชื่อมระหว่าง <strong>ระบบอินเทอร์เน็ตยุคใหม่ เข้ากับระบบคอมพิวเตอร์รุ่นเก่า (Legacy Systems)</strong> ขององค์กร เช่น เชื่อมต่อแอปพลิเคชัน Mobile Banking บนสมาร์ตโฟน เข้ากับระบบบัญชีเมนเฟรมโบราณของธนาคารที่มีอายุกว่า 30 ปี\n              </p>\n            </div>\n\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--accent-indigo);\">🧩 สถาปัตยกรรมแบบเน้นบริการ (Service-Oriented Architecture: SOA - Slide 19)</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                <strong>นิยาม:</strong> สถาปัตยกรรมซอฟต์แวร์ที่แบ่งฟังก์ชันการทำงานของระบบออกเป็น <strong>ส่วนย่อย ๆ เรียกว่า 'โมดูลบริการ (Modular Application Services)'</strong> ซึ่งแต่ละโมดูลสามารถสื่อสารและโต้ตอบซึ่งกันและกันได้อย่างอิสระผ่านเครือข่าย\n              </p>\n              <div class=\"card-feature mt-2\">\n                <strong>💡 ข้อดีเด่นชัดของ SOA:</strong>\n                <ul style=\"font-size:0.84rem; padding-left:18px; margin-top:4px;\">\n                  <li><strong>Reusability (นำกลับมาใช้ใหม่ได้):</strong> เช่น บริการระบบตัดเงินบัตรเครดิต (Payment Service) เมื่อสร้างไว้ครั้งเดียว ก็สามารถนำไปต่อเข้ากับเว็บขายของ, แอปมือถือ, หรือระบบหน้าร้าน POS ได้ทันทีโดยไม่ต้องเขียนโค้ดใหม่</li>\n                  <li><strong>Flexibility (ยืดหยุ่นสูง):</strong> เมื่อต้องการแก้ไขระบบตัดเงิน ก็แก้เฉพาะส่วนบริการนั้น โดยไม่กระทบต่อระบบอื่นในองค์กร</li>\n                </ul>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch3-application-types",
          "title": "6. ซอฟต์แวร์ประยุกต์ 3 ระดับ (Personal, Workgroup, Enterprise)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📱 ซอฟต์แวร์ประยุกต์ (Application Software - Slide 20-23)</h4>\n              <p>ทำงานร่วมกับซอฟต์แวร์ระบบเพื่อช่วยผู้ใช้งานสร้างเอกสาร, คำนวณตัวเลข, และจัดการข้อมูล แบ่งตามขนาดและขอบเขตของผู้ใช้งานออกเป็น 3 ระดับ:</p>\n            </div>\n\n            <div class=\"grid-3 mt-3\">\n              <!-- Personal -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-primary mb-2\">1. ส่วนบุคคล (Personal SW - Slide 21)</span>\n                <h6>Personal Application</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ออกแบบมาเพื่อเสริมประสิทธิภาพการทำงานของบุคคลคนเดียว เช่น:<br>\n                  • Word Processing (พิมพ์งาน)<br>\n                  • Spreadsheet (ตารางคำนวณ)<br>\n                  • Database Applications (ฐานข้อมูลย่อย)<br>\n                  • Graphics Program (แต่งรูปภาพ)<br>\n                  • Personal Information Managers (ปฏิทินนัดหมาย สมุดโทรศัพท์)<br>\n                  • Software Suites (ชุดโปรแกรมรวม เช่น Microsoft 365, Google Workspace)\n                </p>\n              </div>\n\n              <!-- Workgroup -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-accent mb-2\">2. กลุ่มงาน (Workgroup SW - Slide 22)</span>\n                <h6>Workgroup / Groupware</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>Groupware:</strong> ซอฟต์แวร์ที่ช่วยให้กลุ่มคนหรือทีมงานสามารถ <strong>ทำงานร่วมกันได้อย่างมีประสิทธิภาพและประสิทธิผลสูงขึ้น</strong> แม้จะนั่งอยู่ในห้องเดียวกันหรืออยู่คนละซีกโลก เช่น:<br>\n                  • เครื่องมือประชุมออนไลน์ (Zoom, Teams)<br>\n                  • สื่อสารและประสานงานทีม (Slack)<br>\n                  • ทำงานเอกสารพร้อมกันแบบ Real-time (Google Docs)\n                </p>\n              </div>\n\n              <!-- Enterprise -->\n              <div class=\"card-outline\">\n                <span class=\"badge badge-success mb-2\">3. ระดับองค์กร (Enterprise SW - Slide 23)</span>\n                <h6>Enterprise Resource Planning (ERP)</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ซอฟต์แวร์ที่สร้างประโยชน์และบูรณาการครอบคลุม <strong>ทั่วทั้งองค์กร (Entire Organization)</strong>:<br>\n                  • <strong>ERP Software:</strong> ชุดโปรแกรมบูรณาการที่เชื่อมโยงและบริหารจัดการกิจกรรมทางธุรกิจที่สำคัญทั้งหมดของบริษัทข้ามสาขาทั่วโลก เช่น ฝ่ายจัดซื้อ ฝ่ายผลิต ฝ่ายคลังสินค้า ฝ่ายบัญชีการเงิน และฝ่ายทรัพยากรมนุษย์ (เช่น SAP, Oracle ERP)\n                </p>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch3-licenses-opensource-upgrades",
          "title": "7. ลิขสิทธิ์ สัญญาอนุญาต และประเภทซอฟต์แวร์ (Licenses, OSS, Upgrades)",
          "content": "\n            <div class=\"grid-2\">\n              <!-- Copyrights & Licenses -->\n              <div class=\"card-outline border-amber\">\n                <h5>📜 ลิขสิทธิ์และสัญญาอนุญาต (Copyrights & Licenses - Slide 24)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  ซอฟต์แวร์ส่วนใหญ่ได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์ การซื้อซอฟต์แวร์ไม่ใช่การซื้อขาดความเป็นเจ้าของ แต่เป็นการซื้อ <strong>สิทธิ์ในการใช้งาน (License)</strong> ภายใต้เงื่อนไข:\n                </p>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>Single-user / Unlimited on 1-2 PCs:</strong> อนุญาตให้ติดตั้งบนเครื่องส่วนตัวได้ 1-2 เครื่อง</li>\n                  <li><strong>Pay-per-use / Subscription:</strong> จ่ายเงินตามปริมาณการใช้งานหรือจ่ายเป็นรายเดือน/รายปี</li>\n                  <li><strong>Software Registration / Activation:</strong> บังคับให้ลงทะเบียนหรือเปิดใช้งานผ่านอินเทอร์เน็ตก่อน จึงจะสามารถใช้งานได้สมบูรณ์ เพื่อป้องกันการละเมิดลิขสิทธิ์ (Anti-piracy)</li>\n                </ul>\n              </div>\n\n              <!-- Open-Source Software -->\n              <div class=\"card-outline border-green\">\n                <h5>🔓 ซอฟต์แวร์โอเพนซอร์ส (Open-Source Software: OSS - Slide 25)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  <strong>นิยามตามสไลด์:</strong> ซอฟต์แวร์ที่มี <strong>ซอร์สโค้ด (Source Code) เปิดเผยให้ทุกคนสามารถเข้าไปตรวจสอบ แก้ไข ดัดแปลง และปรับปรุงได้อย่างเสรี</strong>\n                </p>\n                <div class=\"note-card mt-2\" style=\"background:rgba(16, 185, 129, 0.08); border-left-color:var(--accent-emerald);\">\n                  <ul style=\"font-size:0.84rem; padding-left:18px;\">\n                    <li>✅ <strong>ข้อดี:</strong> มักมีความน่าเชื่อถือ เสถียร และปลอดภัยกว่าซอฟต์แวร์เชิงพาณิชย์ เพราะมีนักพัฒนาทั่วโลกช่วยกันตรวจสอบข้อผิดพลาด</li>\n                    <li>⚠️ <strong>ข้อควรระวัง (Exam Trap!):</strong> อาจมี <strong>ต้นทุนแอบแฝง (Hidden Costs)</strong> สูง โดยเฉพาะค่าใช้จ่ายในการจ้างผู้เชี่ยวชาญมาคอยซัพพอร์ตผู้ใช้งาน และค่าแก้ไขปัญหาของโปรแกรมที่ไม่มีบริษัทรับประกัน</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n\n            <!-- Freeware vs Shareware -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">⚖️ ความแตกต่างระหว่าง Freeware กับ Shareware (Slide 26)</h5>\n              <div class=\"table-wrap mt-2\">\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>มิติเปรียบเทียบ</th>\n                      <th>ฟรีแวร์ (Freeware)</th>\n                      <th>แชร์แวร์ (Shareware)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>ค่าใช้จ่าย</strong></td>\n                      <td>ใช้งานได้ฟรี 100% ไม่มีค่าใช้จ่าย</td>\n                      <td>ให้ทดลองใช้ฟรีเฉพาะช่วงเวลาจำกัด (เช่น 30 วัน)</td>\n                    </tr>\n                    <tr>\n                      <td><strong>การจำกัดฟังก์ชัน</strong></td>\n                      <td>ไม่มีการจำกัดฟังก์ชันหรือเวลา</td>\n                      <td>อาจจำกัดฟังก์ชันบางอย่างไว้ จนกว่าจะจ่ายเงินซื้อตัวเต็ม</td>\n                    </tr>\n                    <tr>\n                      <td><strong>สิทธิ์ในซอร์สโค้ด</strong></td>\n                      <td><span class=\"badge badge-danger\">ไม่สามารถแก้ไขซอร์สโค้ดได้</span> (เป็นลิขสิทธิ์ของเจ้าของ)</td>\n                      <td><span class=\"badge badge-danger\">ไม่สามารถแก้ไขซอร์สโค้ดได้</span></td>\n                    </tr>\n                    <tr>\n                      <td><strong>ตัวอย่าง</strong></td>\n                      <td>Adobe Acrobat Reader, Line PC, VLC Media Player</td>\n                      <td>WinRAR (ขึ้นเตือนซื้อหลังจาก 40 วัน), โปรแกรมตัดต่อรุ่นทดลอง</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n\n            <!-- Software Upgrades -->\n            <div class=\"card-outline mt-3\">\n              <h5>🔄 ทำไมต้องอัปเกรดซอฟต์แวร์? (Software Upgrades - Slide 27)</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                บริษัทซอฟต์แวร์จะออกเวอร์ชันใหม่เป็นระยะ ๆ (Periodically) เพื่อปรับปรุงโปรแกรม:\n              </p>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <strong>เหตุผลและข้อดี:</strong>\n                  <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                    <li>อุดช่องโหว่ความปลอดภัย แก้ไขบัก (Bugs/Errors) ที่พบในเวอร์ชันเดิม</li>\n                    <li>เพิ่มความสามารถใหม่ ๆ ให้ทันต่อฮาร์ดแวร์ยุคใหม่</li>\n                    <li>ค่าใช้จ่ายในการอัปเกรด (Upgrade Price) มักจะถูกกว่าการซื้อโปรแกรมใหม่ตั้งแต่ต้น</li>\n                  </ul>\n                </div>\n\n                <div class=\"card-feature\">\n                  <strong>ข้อพึงระวังตามสไลด์:</strong>\n                  <ul style=\"font-size:0.84rem; color:var(--accent-rose); padding-left:18px;\">\n                    <li>ซอฟต์แวร์เวอร์ชันปรับปรุงใหม่อาจจะ <em>ไม่ได้เพิ่มความสามารถหลัก ๆ อะไรมากนัก</em> แต่อาจเปลี่ยนแค่หน้าตา</li>\n                    <li>ในบางครั้ง ซอฟต์แวร์เวอร์ชันใหม่อาจมี <strong>บักหรือข้อผิดพลาดใหม่ (New Bugs)</strong> แอบแฝงมาด้วย ทำให้ต้องรอการอัปเดตแก้ไขอีกรอบ</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            "
        }
      ],
      "exercises": []
    },
    {
      "id": "ch4",
      "number": "Chapter 4",
      "title": "Decision Support Systems (DSS)",
      "thTitle": "ระบบสนับสนุนการตัดสินใจและธุรกิจอัจฉริยะ",
      "icon": "📊",
      "description": "เจาะลึกสภาพแวดล้อมทางธุรกิจและแรงกดดัน 4 ด้าน, การตอบสนองเชิงรุก, กระบวนการตัดสินใจ 4 ขั้นของ Simon, ปัญหา Structured vs Unstructured, สถาปัตยกรรม DSS 5 ส่วน, Sensitivity Analysis และวิวัฒนาการสู่ BI ครบทั้ง 32 สไลด์",
      "sections": [
        {
          "id": "ch4-pressures-responses",
          "title": "1. สภาพแวดล้อมทางธุรกิจ แรงกดดัน 4 ด้าน และการตอบสนองเชิงรุก (Business Pressures & Responses)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🌪️ แรงกดดันทางธุรกิจ (Business Pressures) คืออะไร? (Slide 3-4)</h4>\n              <p>ในยุคปัจจุบัน การแข่งขันทางธุรกิจทวีความรุนแรงขึ้นอย่างมหาศาล บริษัทต่าง ๆ จึงต้องเร่งผลักดันการดำเนินงานของคอมพิวเตอร์ให้กลายเป็น <strong>ระบบสนับสนุนการตัดสินใจแบบอัตโนมัติ (Automated Decision Support System)</strong> อย่างจริงจัง เพื่อตอบสนองต่อแรงกดดันทางธุรกิจอย่างทันท่วงที โดยมีโมเดลสนับสนุน (Support Model) ช่วยให้กระบวนการตัดสินใจง่ายขึ้น</p>\n            </div>\n\n            <!-- 4 Dimensions of Business Environment Factors -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🎯 4 ปัจจัยของสภาพแวดล้อมทางธุรกิจ (Business Environment Factors - Slide 6-7)</h5>\n              <div class=\"grid-2 mt-2\">\n                <!-- Markets -->\n                <div class=\"card-feature border-amber\">\n                  <div>\n                    <span class=\"badge badge-warning mb-1\">1. ปัจจัยด้านตลาด (Markets)</span>\n                    <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px; margin-top:4px;\">\n                      <li><strong>การแข่งขันที่เข้มข้น:</strong> มีคู่แข่งหน้าใหม่และสินค้าทดแทนเกิดขึ้นตลอดเวลา</li>\n                      <li><strong>การขยายตัวของตลาดโลก (Globalization):</strong> ต้องแข่งขันกับผู้ผลิตข้ามชาติ</li>\n                      <li><strong>ตลาดอิเล็กทรอนิกส์และอินเทอร์เน็ตเพิ่มขึ้น:</strong> ค้าขายออนไลน์ได้ตลอด 24 ชั่วโมง</li>\n                      <li><strong>โอกาสการจ้างเอาท์ซอร์ส (IT Outsourcing):</strong> จ้างผู้เชี่ยวชาญภายนอกมาสนับสนุนด้านไอที</li>\n                      <li><strong>ความต้องการตอบสนองแบบทันทีทันใด:</strong> ลูกค้าไม่รอคอย ต้องการคำตอบในไม่กี่วินาที</li>\n                    </ul>\n                  </div>\n                </div>\n\n                <!-- Consumer Demand -->\n                <div class=\"card-feature border-green\">\n                  <div>\n                    <span class=\"badge badge-success mb-1\">2. ความต้องการของผู้บริโภค (Consumer Demand)</span>\n                    <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px; margin-top:4px;\">\n                      <li><strong>การปรับแต่งตามความต้องการ (Customization):</strong> ลูกค้าต้องการสินค้าเฉพาะบุคคล ไม่ชอบสินค้าแบบแมสทั่วไป</li>\n                      <li><strong>ต้องการคุณภาพและความหลากหลาย:</strong> คาดหวังมาตรฐานสูง และต้องการความเร็วในการจัดส่งสูงสุด (Same-day delivery)</li>\n                      <li><strong>อำนาจต่อรองสูงขึ้น แต่ภักดีลดลง:</strong> ผู้บริโภคค้นหาข้อมูลเปรียบเทียบราคาได้ทันที หากบริการไม่ประทับใจจะเปลี่ยนแบรนด์ทันที</li>\n                    </ul>\n                  </div>\n                </div>\n\n                <!-- Technology -->\n                <div class=\"card-feature border-cyan\">\n                  <div>\n                    <span class=\"badge badge-info mb-1\">3. ปัจจัยด้านเทคโนโลยี (Technology)</span>\n                    <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px; margin-top:4px;\">\n                      <li><strong>นวัตกรรมเกิดใหม่อย่างรวดเร็ว:</strong> วงจรชีวิตของผลิตภัณฑ์สั้นลง สินค้ารุ่นใหม่ตกรุ่นเร็วมาก</li>\n                      <li><strong>การเพิ่มขึ้นของข้อมูลมหาศาล (Data Explosion):</strong> ข้อมูล Big Data จากเซ็นเซอร์และเว็บไซต์เพิ่มขึ้นจนมนุษย์ประมวลผลไม่ทัน</li>\n                      <li><strong>เครือข่ายทางสังคม (Social Networks):</strong> โซเชียลมีเดียมีพลังชี้นำความคิดเห็นและชื่อเสียงของแบรนด์ได้อย่างรวดเร็ว</li>\n                    </ul>\n                  </div>\n                </div>\n\n                <!-- Societal -->\n                <div class=\"card-feature border-purple\">\n                  <div>\n                    <span class=\"badge badge-purple mb-1\">4. ปัจจัยด้านสังคมและกฎหมาย (Societal)</span>\n                    <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px; margin-top:4px;\">\n                      <li><strong>การเปลี่ยนแปลงกฎหมายของรัฐ:</strong> กฎหมายภาษี กฎหมายคุ้มครองข้อมูล (PDPA/GDPR)</li>\n                      <li><strong>แรงงานมีความหลากหลาย (Workforce Diversity):</strong> สัดส่วนผู้หญิงและแรงงานข้ามชาติเพิ่มขึ้น</li>\n                      <li><strong>ความมั่นคงและความปลอดภัย:</strong> ข้อกังวลการโจมตีทางไซเบอร์และการก่อการร้าย</li>\n                      <li><strong>ความรับผิดชอบต่อสังคม (CSR) & ความยั่งยืน (Sustainability):</strong> ผู้บริโภคเลือกซื้อสินค้าจากบริษัทที่เป็นมิตรต่อสิ่งแวดล้อม</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Organizational Responses Comparison Table -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--accent-indigo);\">⚡ การตอบสนองขององค์กร: แบบดั้งเดิม vs กลยุทธ์เชิงรุก (Slide 8-9)</h5>\n              <div class=\"table-wrap mt-2\">\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>มิติการดำเนินธุรกิจ</th>\n                      <th>การดำเนินธุรกิจแบบดั้งเดิม (Traditional)</th>\n                      <th>การดำเนินธุรกิจแบบกลยุทธ์เชิงรุก (Proactive Strategy)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>การเข้าถึงลูกค้า</strong></td>\n                      <td>มีหน้าร้านตั้งรับ ให้ลูกค้าที่สนใจเดินเข้ามาหาเอง</td>\n                      <td>โทรศัพท์หา/ส่งข้อความติดต่อลูกค้าโดยตรงเชิงรุก (Direct Outreach)</td>\n                    </tr>\n                    <tr>\n                      <td><strong>การส่งเสริมการขาย</strong></td>\n                      <td>จัดโปรโมชั่นแบบเดียวกันให้กับลูกค้าทุกคนเหมือนกันหมด</td>\n                      <td>จัดโปรโมชั่นเฉพาะบุคคล (Personalized Promotion) ที่แตกต่างกันตามพฤติกรรม</td>\n                    </tr>\n                    <tr>\n                      <td><strong>แนวคิดการผลิต</strong></td>\n                      <td>ผลิตสินค้าตามความถนัดของโรงงาน (Product-oriented)</td>\n                      <td>ผลิตสินค้าที่เน้นลูกค้าเป็นสำคัญ (Customer-centric / Made-to-order)</td>\n                    </tr>\n                    <tr>\n                      <td><strong>การนำเทคโนโลยีมาใช้</strong></td>\n                      <td>ใช้กระดาษและการบันทึกแบบแมนนวล ทำงานซ้ำซ้อน</td>\n                      <td>นำเทคโนโลยีสารสนเทศมาใช้ในธุรกิจให้เป็น <strong>ระบบอัตโนมัติ (Automated)</strong></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <div class=\"card-feature mt-3\" style=\"background:rgba(59, 130, 246, 0.05);\">\n                <h6>📌 แนวทางกลยุทธ์เชิงรุกของผู้บริหาร (Slide 9):</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                  วางแผนเชิงกลยุทธ์ • นำโมเดลธุรกิจใหม่และนวัตกรรมมาใช้ • ปรับโครงสร้างกระบวนการธุรกิจ (BPR) • ย้ายสู่พาณิชย์อิเล็กทรอนิกส์ • ผลิตสินค้าตามสั่ง (On-demand) • ใช้ไอทีเพื่อตอบสนองการกระทำของคู่แข่งอย่างรวดเร็ว • ตัดสินใจแบบทันทีทันใด (Real-time response)\n                </p>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch4-managerial-decision",
          "title": "2. การบริหาร กระบวนการตัดสินใจ และทำไมต้องใช้คอมพิวเตอร์ช่วย",
          "content": "\n            <div class=\"grid-2\">\n              <!-- Definition -->\n              <div class=\"card-outline border-amber\">\n                <h5>🎯 การบริหารและการตัดสินใจ (Slide 11)</h5>\n                <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                  <strong>การบริหาร (Management):</strong> กระบวนการที่จะทำให้องค์กรบรรลุเป้าหมายที่ตั้งไว้ โดยใช้ทรัพยากรต่าง ๆ ที่มีอยู่อย่างมีประสิทธิภาพ<br><br>\n                  <strong>การตัดสินใจ (Decision Making):</strong> กระบวนการเลือกทางเลือกที่ดีที่สุดจากสองทางเลือกขึ้นไป เพื่อใช้ในการแก้ปัญหาหรือคว้าโอกาสทางธุรกิจ\n                </p>\n              </div>\n\n              <!-- Why Difficult -->\n              <div class=\"card-outline border-rose\">\n                <h5>⚠️ ทำไมการตัดสินใจในปัจจุบันจึงยากขึ้น? (Slide 14)</h5>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>เทคโนโลยีและระบบสารสนเทศเปลี่ยนแปลงรวดเร็ว:</strong> กฎเกณฑ์เดิมใช้ไม่ได้ผล</li>\n                  <li><strong>ทางเลือกมีมากขึ้นมหาศาล:</strong> มีข้อมูลล้นเกิน (Information Overload) ทำให้เลือกยาก</li>\n                  <li><strong>ต้นทุนและความเสียหายจากความผิดพลาดสูงมาก:</strong> การตัดสินใจผิดครั้งเดียวอาจทำให้บริษัทล้มละลาย</li>\n                  <li><strong>ความผันผวนของตลาดโลก:</strong> เศรษฐกิจและสงครามการค้าส่งผลกระทบต่อเนื่องเป็นลูกโซ่</li>\n                </ul>\n              </div>\n            </div>\n\n            <!-- Why Computerized Support -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--accent-emerald);\">💻 ทำไมต้องใช้คอมพิวเตอร์สนับสนุนการตัดสินใจ? (Slide 16)</h5>\n              <div class=\"grid-4 mt-2\">\n                <div class=\"card-feature\">\n                  <h6>1. คำนวณรวดเร็ว (Speed)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ประมวลผลสูตรสถิติและคณิตศาสตร์ที่ซับซ้อนนับล้านสมการได้ในเสี้ยววินาที</p>\n                </div>\n                <div class=\"card-feature\">\n                  <h6>2. เอาชนะขีดจำกัดมนุษย์</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\"><strong>Cognitive Limits:</strong> มนุษย์จดจำและวิเคราะห์ตัวแปรพร้อมกันในสมองได้ไม่เกิน 7±2 ข้อมูล แต่คอมพิวเตอร์วิเคราะห์ได้ไม่จำกัด</p>\n                </div>\n                <div class=\"card-feature\">\n                  <h6>3. สนับสนุนการทำงานร่วมกัน</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ช่วยให้ทีมผู้บริหารที่อยู่คนละประเทศสามารถแชร์ข้อมูลและประชุมตัดสินใจร่วมกันได้แบบ Real-time</p>\n                </div>\n                <div class=\"card-feature\">\n                  <h6>4. เข้าถึงได้ 24/7 ทุกที่</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ผู้บริหารสามารถดึง Dashboard รายงานผ่านระบบ Web และ Cloud ได้ตลอดเวลา</p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch4-simon-model",
          "title": "3. กระบวนการตัดสินใจ 4 ขั้นตอนของ Herbert Simon (Simon's 4-Phase Model)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🔄 กระบวนการตัดสินใจของ Herbert Simon (1977 - Slide 12-13)</h4>\n              <p>แบบจำลองระดับโลกที่แบ่งกระบวนการตัดสินใจและการแก้ปัญหาของผู้บริหารออกเป็น 4 ขั้นตอนที่เชื่อมโยงกัน:</p>\n            </div>\n\n            <div class=\"grid-4 mt-3\">\n              <div class=\"card-process\">\n                <div class=\"process-icon\">🔍</div>\n                <h6>1. Intelligence (การสืบค้นข้อมูล)</h6>\n                <p>ตรวจสแกนสภาพแวดล้อม (Environment scanning) ตรวจสอบรายงานและข้อซักถาม ค้นหาและระบุว่า <strong>\"ปัญหาหรือโอกาสคืออะไร\"</strong> พร้อมรวบรวมข้อมูลที่เกี่ยวข้อง</p>\n              </div>\n              <div class=\"card-process\">\n                <div class=\"process-icon\">💡</div>\n                <h6>2. Design (การออกแบบทางเลือก)</h6>\n                <p>คิดค้น พัฒนา และสร้างแบบจำลอง (Model) ของทางเลือกที่เป็นไปได้ทั้งหมด พร้อมทั้งทดสอบและวิเคราะห์ผลลัพธ์ของแต่ละทางเลือก</p>\n              </div>\n              <div class=\"card-process\">\n                <div class=\"process-icon\">✅</div>\n                <h6>3. Choice (การเลือกทางออกที่ดีที่สุด)</h6>\n                <p>ประเมินเปรียบเทียบผลลัพธ์ของแต่ละทางเลือกตามเกณฑ์ที่กำหนด แล้วตัดสินใจเลือก <strong>\"ทางออกที่ดีที่สุด (Best Solution)\"</strong></p>\n              </div>\n              <div class=\"card-process\">\n                <div class=\"process-icon\">🚀</div>\n                <h6>4. Implementation (การนำไปปฏิบัติ)</h6>\n                <p>นำแนวทางที่เลือกไปลงมือปฏิบัติจริง พร้อมทำการ <strong>ติดตามและประเมินผล (Monitoring)</strong> อย่างต่อเนื่อง</p>\n              </div>\n            </div>\n\n            <!-- Exam Trap: Decision Making vs Problem Solving -->\n            <div class=\"diagram-canvas mt-3\">\n              <div class=\"diagram-title-badge\">🚨 ข้อแตกต่างสำคัญที่ออกสอบบ่อยที่สุด (Exam Trap!)</div>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature border-green\">\n                  <h6 style=\"color:var(--accent-emerald);\">🎯 การตัดสินใจ (Decision Making):</h6>\n                  <p style=\"font-size:0.86rem; color:var(--text-muted); margin-top:4px;\">\n                    กินขอบเขตเฉพาะ <strong>3 ขั้นตอนแรก</strong> เท่านั้น:<br>\n                    <code>Intelligence ➔ Design ➔ Choice</code><br>\n                    (สิ้นสุดลงทันทีเมื่อเลือกทางเลือกเสร็จสิ้น)\n                  </p>\n                </div>\n\n                <div class=\"card-feature border-amber\">\n                  <h6 style=\"color:var(--accent-amber);\">🔄 การแก้ปัญหา (Problem Solving):</h6>\n                  <p style=\"font-size:0.86rem; color:var(--text-muted); margin-top:4px;\">\n                    กินขอบเขตครอบคลุม <strong>ทั้งวงจรครบทุกขั้นตอน</strong>:<br>\n                    <code>Decision Making + Implementation + Monitoring</code><br>\n                    (หากติดตามผลแล้วพบว่าปัญหายังไม่คลี่คลาย จะมีวงรอบป้อนกลับ Feedback วนกลับไปเริ่มค้นหาปัญหาใหม่ในขั้นที่ 1 ทันที!)\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch4-gorry-scott-morton",
          "title": "4. กรอบแนวคิดโครงสร้างการตัดสินใจของ Gorry & Scott-Morton",
          "content": "\n            <div class=\"note-card\">\n              <h4>📐 กรอบแนวคิดการสนับสนุนการตัดสินใจ (Gorry and Scott-Morton Framework, 1971 - Slide 18-21)</h4>\n              <p>จำแนกการตัดสินใจโดยผสาน <strong>ระดับโครงสร้างปัญหาของ Simon</strong> เข้ากับ <strong>ระดับการบริหารของ Robert Anthony</strong>:</p>\n            </div>\n\n            <!-- 3 Degrees of Structuredness -->\n            <div class=\"grid-3 mt-3\">\n              <!-- Structured -->\n              <div class=\"card-outline border-green\">\n                <div class=\"badge badge-success mb-2\">1. ปัญหาแบบโครงสร้าง (Structured - Slide 19)</div>\n                <h6 style=\"color:var(--accent-emerald);\">ปัญหาที่มีขั้นตอนแน่นอน</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>ลักษณะ:</strong> เป็นปัญหาที่เกิดขึ้นเป็นประจำซ้ำ ๆ (Routine) มีขั้นตอนและสูตรสำเร็จในการแก้ปัญหาชัดเจนตายตัว<br><br>\n                  <strong>วิธีแก้:</strong> สามารถใช้ <strong>คอมพิวเตอร์ตัดสินใจแทนอัตโนมัติ (Automated Decision Making)</strong> ได้ 100% โดยไม่ต้องพึ่งคน<br><br>\n                  <em>ตัวอย่าง:</em> การคำนวณภาษีหัก ณ ที่จ่าย, การสั่งซื้อสินค้าเติมสต็อกตามจุด Reorder point, การอนุมัติการเบิกจ่ายตามงบ\n                </p>\n              </div>\n\n              <!-- Semi-structured -->\n              <div class=\"card-outline border-amber\">\n                <div class=\"badge badge-warning mb-2\">2. ปัญหาแบบกึ่งโครงสร้าง (Semi-structured - Slide 21)</div>\n                <h6 style=\"color:var(--accent-amber);\">ปัญหาแบบผสมผสาน</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>ลักษณะ:</strong> มีทั้งส่วนที่คำนวณด้วยสูตรมาตรฐานได้ และส่วนที่ยังมีความไม่แน่นอน ขั้นตอนการแก้ปัญหาไม่ชัดเจนทั้งหมด<br><br>\n                  <strong>วิธีแก้:</strong> <strong>ใช้ระบบ DSS ร่วมกับวิจารณญาณของมนุษย์</strong> คอมพิวเตอร์ช่วยคำนวณทางเลือกและแบบจำลอง แล้วให้ผู้บริหารเป็นผู้ตัดสินใจขั้นสุดท้าย<br><br>\n                  <em>ตัวอย่าง:</em> การจัดสรรงบประมาณการตลาด, การจัดตารางการผลิตในโรงงานเมื่อมีออเดอร์ด่วนแทรก, การตั้งราคาสินค้าใหม่\n                </p>\n              </div>\n\n              <!-- Unstructured -->\n              <div class=\"card-outline border-rose\">\n                <div class=\"badge badge-danger mb-2\">3. ปัญหาแบบไม่มีโครงสร้าง (Unstructured - Slide 20)</div>\n                <h6 style=\"color:var(--accent-rose);\">ปัญหาที่ซับซ้อน ไร้สูตรสำเร็จ</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>ลักษณะ:</strong> ปัญหามีความซับซ้อนสูงมาก ไม่เคยเกิดขึ้นมาก่อน ไม่มีรูปแบบหรือแนวทางแก้ปัญหาที่ระบุไว้ชัดเจน<br><br>\n                  <strong>วิธีแก้:</strong> <strong>พึ่งพาสัญชาตญาณ ประสบการณ์ และวิจารณญาณของผู้บริหารระดับสูงเป็นหลัก</strong> คอมพิวเตอร์ช่วยได้เพียงดึงข้อมูลอ้างอิง<br><br>\n                  <em>ตัวอย่าง:</em> การตัดสินใจควบรวมกิจการ (M&A), การเลือกทิศทางโครงงานวิจัยพัฒนา (R&D) สำหรับ 5 ปีข้างหน้า, การสรรหาว่าจ้าง CEO คนใหม่\n                </p>\n              </div>\n            </div>\n\n            <!-- Matrix with Anthony's 3 levels -->\n            <div class=\"table-wrap mt-3\">\n              <h6 style=\"color:var(--primary); margin-bottom:8px;\">📊 เมทริกซ์การตัดสินใจของ Gorry & Scott-Morton:</h6>\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>ระดับโครงสร้างปัญหา</th>\n                    <th>ระดับปฏิบัติการ (Operational Control)</th>\n                    <th>ระดับบริหารจัดการ (Management Control)</th>\n                    <th>ระดับกลยุทธ์ (Strategic Planning)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Structured (มีโครงสร้าง)</strong></td>\n                    <td>การบันทึกบัญชี, จัดตารางงานประจำวัน</td>\n                    <td>การวิเคราะห์ต้นทุนการผลิต, บริหารงบประจำ</td>\n                    <td>การเลือกตำแหน่งตั้งโกดังสินค้าใหม่</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Semi-structured (กึ่งโครงสร้าง)</strong></td>\n                    <td>การจัดเส้นทางเดินรถขนส่ง</td>\n                    <td><strong>การวิเคราะห์งบประมาณ, วางแผนโปรโมชั่น (เป้าหมายหลักของ DSS!)</strong></td>\n                    <td>การวางแผนเข้าซื้อบริษัทคู่แข่งขนาดย่อม</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Unstructured (ไม่มีโครงสร้าง)</strong></td>\n                    <td>การรับมือกับเครื่องจักรโรงงานระเบิดกะทันหัน</td>\n                    <td>การเจรจาต่อรองข้อพิพาทแรงงาน</td>\n                    <td>การกำหนดวิสัยทัศน์องค์กร 10 ปี, นโยบาย R&D</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch4-automated-framework-architecture",
          "title": "5. สถาปัตยกรรม DSS 5 องค์ประกอบ และกรอบการตัดสินใจอัตโนมัติ",
          "content": "\n            <!-- Automated Decision Support Framework -->\n            <div class=\"diagram-canvas\">\n              <div class=\"diagram-title-badge\">⚙️ แผนผัง Automated Decision Support Framework (Slide 22)</div>\n              <div class=\"steps-flow\">\n                <div class=\"step-box\">\n                  <span class=\"badge badge-primary mb-1\">INPUT (ปัจจัยนำเข้า)</span>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted); text-align:left;\">\n                    • Technology (เทคโนโลยีคอมพิวเตอร์และฐานข้อมูล)<br>\n                    • DSS Theories (ทฤษฎีและโมเดลการตัดสินใจ)<br>\n                    • Artificial Intelligence (ปัญญาประดิษฐ์)<br>\n                    • Business Processes (กระบวนการทางธุรกิจ)\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box active\">\n                  <span class=\"badge badge-accent mb-1\">PROCESS (กระบวนการประมวลผล)</span>\n                  <h6 style=\"margin-bottom:4px;\">Business Decision Rules</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">\n                    💻 ระบบสนับสนุนการตัดสินใจอัตโนมัติ (Automated Decision-Making System) ประมวลผลตามเงื่อนไขและกฎเกณฑ์\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\">\n                  <span class=\"badge badge-success mb-1\">OUTPUT (ผลลัพธ์)</span>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted); text-align:left;\">\n                    • Customized Decisions (ผลลัพธ์การตัดสินใจเฉพาะบุคคล)<br>\n                    • Standard Decisions (ผลลัพธ์มาตรฐานของระบบ)\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <!-- DSS Concept & Architecture -->\n            <div class=\"note-card mt-3\">\n              <h4>🏛️ นิยามและสถาปัตยกรรม 5 องค์ประกอบของ DSS (Slide 24-25)</h4>\n              <p><strong>Concept of DSS (Slide 24):</strong> ระบบสารสนเทศที่ใช้คอมพิวเตอร์ช่วยให้ผู้มีอำนาจตัดสินใจ นำข้อมูล (Data) และแบบจำลอง (Models) มาใช้ในการแก้ปัญหา</p>\n            </div>\n\n            <div class=\"diagram-canvas mt-3\">\n              <div class=\"diagram-title-badge\">สถาปัตยกรรม DSS 5 องค์ประกอบ (Slide 25)</div>\n              <div class=\"grid-3\" style=\"text-align:center;\">\n                <div class=\"card-outline\">\n                  <div class=\"process-icon\">💾</div>\n                  <h6>1. ข้อมูล (Data)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ฐานข้อมูลภายในองค์กร (ยอดขาย บัญชี สต็อก) และข้อมูลภายนอก (ตลาด คู่แข่ง อัตราดอกเบี้ย)</p>\n                </div>\n                <div class=\"card-outline\">\n                  <div class=\"process-icon\">📐</div>\n                  <h6>2. โมเดล (Models)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">แบบจำลองทางคณิตศาสตร์ สถิติ การพยากรณ์ และแบบจำลองเชิงปริมาณ (เช่น Linear Programming, Regression)</p>\n                </div>\n                <div class=\"card-outline\">\n                  <div class=\"process-icon\">🧠</div>\n                  <h6>3. ความรู้ (Knowledge)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ฐานความรู้ กฎเกณฑ์ทางธุรกิจ ประสบการณ์ของผู้เชี่ยวชาญ และระบบปัญญาประดิษฐ์</p>\n                </div>\n              </div>\n\n              <div style=\"text-align:center; font-size:1.8rem; margin:12px 0; color:var(--primary);\">↕️ เชื่อมต่อผ่าน</div>\n\n              <div class=\"grid-2\" style=\"max-width:700px; margin:0 auto; text-align:center;\">\n                <div class=\"card-outline\" style=\"border-color:var(--primary);\">\n                  <div class=\"process-icon\">🖥️</div>\n                  <h6 style=\"color:var(--primary);\">4. ส่วนติดต่อกับผู้ใช้ (User Interface)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">หน้าจอแสดงผล Dashboard กราฟิกภาพที่ใช้งานง่าย และรองรับการโต้ตอบแบบทันที (Interactive)</p>\n                </div>\n                <div class=\"card-outline\" style=\"border-color:var(--accent-emerald);\">\n                  <div class=\"process-icon\">👤</div>\n                  <h6 style=\"color:var(--accent-emerald);\">5. ผู้ใช้ (Users)</h6>\n                  <p style=\"font-size:0.82rem; color:var(--text-muted);\">ผู้บริหารหรือผู้ตัดสินใจที่นำข้อมูลและผลวิเคราะห์ไปประยุกต์ร่วมกับวิจารณญาณและประสบการณ์</p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch4-characteristics-sensitivity",
          "title": "6. 6 คุณลักษณะเด่นของระบบ DSS และการวิเคราะห์ Sensitivity Analysis",
          "content": "\n            <div class=\"note-card\">\n              <h4>⭐ 6 คุณลักษณะเด่นของระบบ DSS (Characteristics of DSS - Slide 26-27)</h4>\n              <p>สรุปประเด็นคุณลักษณะเด่นตามที่ระบุไว้ในสไลด์เรียน:</p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <div class=\"card-feature\">\n                <h6>1. สนับสนุนผู้ตัดสินใจทั้งบุคคลและกลุ่ม</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ออกแบบมาเพื่อช่วยเหลือผู้บริหารทั้งที่เป็นรายบุคคลหรือเป็นคณะกรรมการ ในสถานการณ์ที่มีลักษณะ <strong>ไม่มีโครงสร้างหรือกึ่งโครงสร้าง (Unstructured / Semi-structured situations)</strong> โดยนำวิจารณญาณของมนุษย์มาผสานกับพลังการคำนวณของคอมพิวเตอร์\n                </p>\n              </div>\n\n              <div class=\"card-feature border-green\">\n                <h6 style=\"color:var(--accent-emerald);\">2. รองรับเหตุการณ์ไม่คาดฝันด้วย Sensitivity Analysis</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ช่วยตอบสนองความต้องการที่ไม่ได้คาดการณ์มาก่อน โดยผู้ใช้สามารถปรับเปลี่ยนข้อมูลเงื่อนไขใน DSS ได้ตลอดเวลา เพื่อจัดการกับความไม่แน่นอน โดยใช้เทคนิค <strong>Sensitivity Analysis (การวิเคราะห์ความไว หรือ What-If Analysis)</strong>\n                </p>\n              </div>\n\n              <div class=\"card-feature border-cyan\">\n                <h6 style=\"color:var(--accent-cyan);\">3. โต้ตอบได้ทันทีและรวดเร็วสูง (Interactive & Speed)</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ช่วยในการตัดสินใจที่ต้องการความรวดเร็วสูง เพื่อใช้ประกอบในการกำหนดยุทธศาสตร์การแข่งขันในตลาด จึงถูกออกแบบให้มีลักษณะการทำงานแบบโต้ตอบได้ทันที (Interactive Interface)\n                </p>\n              </div>\n\n              <div class=\"card-feature\">\n                <h6>4. เสนอทางเลือกวิเคราะห์ในสถานการณ์ซับซ้อน</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  สร้างแบบจำลองเปรียบเทียบผลลัพธ์ของแต่ละทางเลือก ช่วยให้มองเห็นผลกระทบก่อนตัดสินใจจริง\n                </p>\n              </div>\n\n              <div class=\"card-feature\">\n                <h6>5. รวบรวมข้อมูลจากหลากหลายแหล่ง</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  บูรณาการข้อมูลได้ทั้งจากแหล่งภายในหน่วยงาน (ยอดขาย สต็อก บัญชี) และแหล่งภายนอก (ข้อมูลคู่แข่ง ตลาดหุ้น อัตราแลกเปลี่ยน)\n                </p>\n              </div>\n\n              <div class=\"card-feature\">\n                <h6>6. นำเสนอผลลัพธ์ได้ทั้งข้อความและกราฟิก</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  แสดงรายงานในรูปแบบตารางตัวเลข รายงานข้อความสรุป รวมถึงแผนภูมิภาพ กราฟแท่ง และแดชบอร์ดที่เข้าใจง่าย\n                </p>\n              </div>\n            </div>\n\n            <!-- Deep-dive Sensitivity Analysis -->\n            <div class=\"card-outline mt-3 border-green\">\n              <h5 style=\"color:var(--accent-emerald);\">💡 เจาะลึก: Sensitivity Analysis (What-If Analysis) คืออะไร?</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                คือการศึกษาว่า <strong>\"เมื่อค่าของตัวแปรนำเข้า (Input Variable) เปลี่ยนแปลงไป จะส่งผลกระทบต่อผลลัพธ์สุดท้าย (Output) มากน้อยเพียงใด\"</strong><br>\n                <em>ตัวอย่าง:</em> ผู้บริหารตั้งคำถามกับ DSS ว่า <em>\"ถ้าราคาน้ำมันดิบเพิ่มขึ้น 15% และยอดขายลดลง 5% กำไรสุทธิสิ้นปีของบริษัทจะยังเป็นบวกอยู่หรือไม่?\"</em> ระบบ DSS จะคำนวณผลลัพธ์จำลองให้เห็นทันที ช่วยให้วางแผนตั้งรับความเสี่ยงล่วงหน้าได้\n              </p>\n            </div>\n            "
        },
        {
          "id": "ch4-bi-evolution",
          "title": "7. วิวัฒนาการจาก DSS สู่ Business Intelligence (BI Timeline & Trends)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📈 วิวัฒนาการของระบบ DSS สู่ธุรกิจอัจฉริยะ (Evolution into BI - Slide 28-31)</h4>\n              <p>การใช้งานระบบตัดสินใจได้ขยายขอบเขตจาก <strong>ผู้เชี่ยวชาญเฉพาะทาง (Specialists)</strong> ➔ สู่ <strong>ผู้จัดการ (Managers)</strong> ➔ และในปัจจุบันได้เปิดให้ <strong>ทุกคนใช้งานได้ทุกที่ทุกเวลา (Whomever, Whenever, Wherever)</strong> ผ่านเทคโนโลยีเว็บและคลาวด์</p>\n            </div>\n\n            <!-- Timeline Table -->\n            <div class=\"table-wrap mt-3\">\n              <h5 style=\"color:var(--primary); margin-bottom:8px;\">⏳ ประวัติศาสตร์และเส้นทางของ Business Intelligence (Slide 29):</h5>\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>ยุคสมัย</th>\n                    <th>เทคโนโลยีเด่น</th>\n                    <th>ลักษณะการทำงาน</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>1970s</strong></td>\n                    <td><strong>MIS Reporting</strong></td>\n                    <td>ระบบรายงานสรุปผลตามรอบเวลา (Periodic Reports) เป็นรายงานกระดาษตายตัว ไม่สามารถโต้ตอบหรือปรับเปลี่ยนตัวแปรได้</td>\n                  </tr>\n                  <tr>\n                    <td><strong>1980s</strong></td>\n                    <td><strong>EIS (Executive Information Systems)</strong></td>\n                    <td>ระบบสารสนเทศสำหรับผู้บริหารระดับสูง เริ่มมีหน้าจอสรุปภาพรวมและตัวชี้วัดสำคัญ (KPI Dashboard)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>1990s</strong></td>\n                    <td><strong>OLAP & การกำเนิดคำว่า \"BI\"</strong></td>\n                    <td>Online Analytical Processing วิเคราะห์ข้อมูลหลายมิติแบบไดนามิก สามารถหมุนดูมุมมองต่าง ๆ (Slice & Dice, Drill-down) และเป็นยุคที่เริ่มบัญญัติคำว่า \"Business Intelligence\"</td>\n                  </tr>\n                  <tr>\n                    <td><strong>2005+</strong></td>\n                    <td><strong>AI & Data/Text Mining</strong></td>\n                    <td>เริ่มนำ AI และอัลกอริทึมการขุดค้นข้อมูล (Data Mining, Text Mining) มาค้นหา Insight อัตโนมัติ แสดงผลผ่าน Web-based Portals</td>\n                  </tr>\n                  <tr>\n                    <td><strong>ปัจจุบันและอนาคต</strong></td>\n                    <td><strong>Cloud BI & Augmented Analytics</strong></td>\n                    <td>ใช้ Machine Learning ร่วมกับ Natural Language Processing ให้ผู้บริหารพิมพ์ถามคำถามด้วยภาษาพูด และระบบวิเคราะห์ผลลัพธ์ให้อัตโนมัติบนมือถือ</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch4-exercises",
          "title": "8. เฉลยแบบฝึกหัดท้ายบทที่ 4 (Slide 32 Exercises)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📝 เฉลยแบบฝึกหัดท้ายบทที่ 4 ในสไลด์หน้า 32 (ครบทั้ง 3 ข้อใหญ่)</h4>\n            </div>\n\n            <!-- Question 1 -->\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-primary mb-2\">ข้อที่ 1 (สไลด์หน้า 32): อธิบายความสำคัญของระบบ DSS</span>\n              <p><strong>แนวคำตอบฉบับสมบูรณ์:</strong></p>\n              <div class=\"card-feature mt-2\">\n                <p style=\"font-size:0.88rem; line-height:1.7;\">\n                  <strong>ความสำคัญของระบบ DSS คือ:</strong><br>\n                  1. <strong>ช่วยเพิ่มคุณภาพและประสิทธิภาพในการตัดสินใจ:</strong> โดยผสานพลังการคำนวณและแบบจำลองทางคณิตศาสตร์ของคอมพิวเตอร์เข้ากับวิจารณญาณของมนุษย์ ทำให้ลดข้อผิดพลาดจากการตัดสินใจด้วยความรู้สึกส่วนตัว<br>\n                  2. <strong>ช่วยแก้ปัญหาที่มีความกึ่งโครงสร้างและซับซ้อน:</strong> ซึ่งเป็นปัญหาที่เกิดขึ้นบ่อยในระดับการบริหารจัดการและกลยุทธ์<br>\n                  3. <strong>ช่วยเอาชนะขีดจำกัดทางปัญญาของมนุษย์ (Cognitive Limits):</strong> มนุษย์ไม่สามารถจดจำหรือประมวลผลตัวแปรนับหมื่นรายการพร้อมกันได้ แต่ DSS ทำได้ในเสี้ยววินาที<br>\n                  4. <strong>ช่วยทดสอบสถานการณ์จำลองล่วงหน้า:</strong> ผ่านการวิเคราะห์ความไว (What-If / Sensitivity Analysis) ทำให้องค์กรสามารถตั้งรับความเสี่ยงและปรับตัวต่อการแข่งขันในตลาดโลกได้อย่างรวดเร็ว\n                </p>\n              </div>\n            </div>\n\n            <!-- Question 2 -->\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-accent mb-2\">ข้อที่ 2 (สไลด์หน้า 32): ปัจจัยด้านสภาพแวดล้อมทางธุรกิจมีอะไรบ้างที่ทำให้เกิดระบบ DSS</span>\n              <p><strong>แนวคำตอบฉบับสมบูรณ์:</strong></p>\n              <div class=\"card-feature mt-2\">\n                <p style=\"font-size:0.88rem; line-height:1.7;\">\n                  <strong>มี 4 ปัจจัยหลักตามสภาพแวดล้อมทางธุรกิจ ได้แก่:</strong><br>\n                  1. <strong>ปัจจัยด้านตลาด (Markets):</strong> การแข่งขันรุนแรงขึ้น การขยายตัวของตลาดระดับโลก (Globalization) ธุรกิจอีคอมเมิร์ซเติบโตสูง ทำให้ต้องตัดสินใจตอบสนองลูกค้าแบบทันทีทันใด (Real-time response)<br>\n                  2. <strong>ปัจจัยด้านความต้องการของผู้บริโภค (Consumer Demand):</strong> ลูกค้าต้องการสินค้าเฉพาะตัว (Customization) ต้องการความรวดเร็วและคุณภาพสูง ลูกค้ามีอำนาจต่อรองสูงแต่มีความภักดีลดลง จึงต้องใช้ระบบ DSS ช่วยวิเคราะห์พฤติกรรมลูกค้า<br>\n                  3. <strong>ปัจจัยด้านเทคโนโลยี (Technology):</strong> นวัตกรรมใหม่เกิดเร็ว วงจรชีวิตสินค้าสั้นลง และมีข้อมูลล้นทะลัก (Data Explosion) จนมนุษย์ไม่สามารถประมวลผลได้ด้วยสมอง ต้องพึ่งพาคอมพิวเตอร์<br>\n                  4. <strong>ปัจจัยด้านสังคมและกฎหมาย (Societal):</strong> การเปลี่ยนแปลงของกฎหมายรัฐ ข้อกำหนดด้านความปลอดภัย และการให้ความสำคัญกับความยั่งยืน (Sustainability) ทำให้การตัดสินใจมีความซับซ้อนขึ้น\n                </p>\n              </div>\n            </div>\n\n            <!-- Question 3 -->\n            <div class=\"card-outline mt-3\">\n              <span class=\"badge badge-success mb-2\">ข้อที่ 3 (สไลด์หน้า 32): จงอธิบายสถาปัตยกรรมของ DSS (Architecture of DSS)</span>\n              <p><strong>แนวคำตอบฉบับสมบูรณ์:</strong></p>\n              <div class=\"card-feature mt-2\">\n                <p style=\"font-size:0.88rem; line-height:1.7;\">\n                  <strong>สถาปัตยกรรมของ DSS ประกอบด้วย 5 องค์ประกอบสำคัญ ได้แก่:</strong><br>\n                  1. <strong>ข้อมูล (Data):</strong> แหล่งข้อมูลทั้งภายในองค์กร (ฐานข้อมูลยอดขาย สินค้าคงคลัง บัญชี) และภายนอกองค์กร (ข้อมูลคู่แข่ง เศรษฐกิจ ตลาดหุ้น)<br>\n                  2. <strong>โมเดล (Models):</strong> แบบจำลองทางคณิตศาสตร์ สถิติ การจำลองสถานการณ์ และสูตรพยากรณ์ เพื่อใช้ในการคำนวณหาทางเลือก<br>\n                  3. <strong>ความรู้ (Knowledge):</strong> ฐานกฎเกณฑ์ทางธุรกิจ (Business Rules) ประสบการณ์ของผู้เชี่ยวชาญ และระบบสารสนเทศอัจฉริยะ<br>\n                  4. <strong>ส่วนติดต่อกับผู้ใช้ (User Interface):</strong> หน้าจอโต้ตอบ กราฟิก แดชบอร์ดที่ใช้งานง่าย ช่วยให้ผู้ใช้ส่งคำสั่ง ซักถาม (Query) และดูรายงานได้อย่างสะดวก<br>\n                  5. <strong>ผู้ใช้ (Users / Decision Makers):</strong> ผู้บริหารหรือนักวิเคราะห์ที่เป็นผู้นำผลลัพธ์จากระบบไปประกอบกับวิจารณญาณเพื่อตัดสินใจในขั้นตอนสุดท้าย\n                </p>\n              </div>\n            </div>\n            "
        }
      ],
      "exercises": [
        {
          "slideRef": "สไลด์หน้า 32 ข้อ 1",
          "question": "อธิบายความสำคัญของระบบ DSS",
          "sampleAnswer": "แนวคำตอบ: 'DSS มีความสำคัญอย่างยิ่งต่อองค์กรยุคใหม่ เพราะช่วยเพิ่มคุณภาพและประสิทธิผลในการตัดสินใจของผู้บริหาร โดยนำพลังการคำนวณและแบบจำลองคณิตศาสตร์มาช่วยวิเคราะห์ปัญหาที่ซับซ้อนและกึ่งโครงสร้าง ช่วยเอาชนะข้อจำกัดทางปัญญาของมนุษย์ (Cognitive Limits) และรองรับการทำ Sensitivity Analysis (What-If) เพื่อคาดการณ์ผลลัพธ์ล่วงหน้าได้อย่างแม่นยำ'"
        },
        {
          "slideRef": "สไลด์หน้า 32 ข้อ 2",
          "question": "ปัจจัยด้านสภาพแวดล้อมทางธุรกิจมีอะไรบ้างที่ทำให้เกิดระบบ DSS",
          "sampleAnswer": "แนวคำตอบ: 'มี 4 ปัจจัยหลัก: 1) ปัจจัยตลาด (Markets) - แข่งขันรุนแรง ตลาดโลกขยายตัว อีคอมเมิร์ซเติบโต 2) ปัจจัยผู้บริโภค (Consumer Demand) - ต้องการสินค้าเฉพาะตัว ส่งเร็ว อำนาจต่อรองสูงแต่ภักดีลดลง 3) ปัจจัยเทคโนโลยี (Technology) - นวัตกรรมเกิดเร็ว ข้อมูลมหาศาล Data Explosion 4) ปัจจัยสังคม (Societal) - กฎหมายเปลี่ยน ความหลากหลาย และความยั่งยืน'"
        },
        {
          "slideRef": "สไลด์หน้า 32 ข้อ 3",
          "question": "จงอธิบายสถาปัตยกรรมของ DSS (Architecture of DSS)",
          "sampleAnswer": "แนวคำตอบ: 'ประกอบด้วย 5 องค์ประกอบสำคัญ ได้แก่: 1. ข้อมูล (Data) ทั้งภายในและภายนอกองค์กร 2. แบบจำลอง (Models) สูตรคำนวณ สถิติ พยากรณ์ 3. ฐานความรู้ (Knowledge) กฎเกณฑ์ธุรกิจและระบบผู้เชี่ยวชาญ 4. ส่วนติดต่อกับผู้ใช้ (User Interface) หน้าจอแดชบอร์ดที่โต้ตอบได้สะดวก และ 5. ผู้ใช้ (Users / Decision Makers) นำผลวิเคราะห์ไปประยุกต์ร่วมกับวิจารณญาณ'"
        }
      ]
    },
    {
      "id": "ch5",
      "number": "Chapter 5",
      "title": "Database Systems",
      "thTitle": "ระบบฐานข้อมูลและคลังข้อมูล",
      "icon": "🗄️",
      "description": "เจาะลึกนิยามฐานข้อมูล, ลำดับชั้นข้อมูล Hierarchy of Data, เฉลยโจทย์หน้า 2, Entity/Attribute/Domain, แนวทางฐานข้อมูล vs แบบดั้งเดิม, 4 ปฏิบัติการเชิงสัมพันธ์, การเชื่อมโยง 3 ตาราง, ER Diagram & Cardinality (1:1, 1:M, M:M, PK/FK), เฉลยโจทย์ Category หน้า 15, DDL vs DML, Concurrency Control, Data Warehouse และ Data Mining ครบ 29 สไลด์",
      "sections": [
        {
          "id": "ch5-intro",
          "title": "1. ความรู้เบื้องต้นและการจัดการข้อมูล (Database, DBMS, DBA)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🗄️ ทำไมต้องเรียนรู้ระบบฐานข้อมูลและธุรกิจอัจฉริยะ? (Slide 3-4)</h4>\n              <p><strong>การจัดการข้อมูล (Data Management - Slide 4):</strong> หากองค์กรไม่มีข้อมูลและความสามารถในการประมวลผลข้อมูล จะไม่สามารถดำเนินกิจกรรมทางธุรกิจให้สำเร็จได้เลย ข้อมูลขององค์กรประกอบด้วย <strong>ข้อมูลดิบ (Raw facts)</strong> ซึ่งต้องถูกนำมา <strong>จัดระเบียบอย่างมีความหมาย (Organized in a meaningful way)</strong> จึงจะเปลี่ยนเป็น <strong>สารสนเทศที่มีประโยชน์ (Useful information)</strong> ในการบริหารงาน</p>\n            </div>\n\n            <!-- 3 Key Terms -->\n            <div class=\"card-outline mt-3 border-cyan\">\n              <h5 style=\"color:var(--accent-cyan);\">🔑 3 นิยามศัพท์สำคัญที่ออกสอบบ่อยที่สุด (Slide 3):</h5>\n              <div class=\"grid-3 mt-2\">\n                <div class=\"card-feature\">\n                  <h6>1. Database (ฐานข้อมูล)</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                    <strong>นิยาม:</strong> ที่เก็บรวบรวมข้อมูลที่มีการจัดระเบียบและจัดการแล้วอย่างเป็นระบบ (Organized collection of logically related data) เพื่อให้สามารถสืบค้นและนำกลับมาใช้ใหม่ได้อย่างมีประสิทธิภาพ\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <h6>2. DBMS (ระบบจัดการฐานข้อมูล)</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                    <strong>นิยาม:</strong> กลุ่มโปรแกรมหรือซอฟต์แวร์ที่ใช้จัดการฐานข้อมูล (Programs that manipulate the database) ทำหน้าที่เป็น <strong>ตัวกลาง (Interface)</strong> เชื่อมระหว่างผู้ใช้งาน/โปรแกรมประยุกต์ กับไฟล์ฐานข้อมูลจริง\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <h6>3. DBA (ผู้บริหารฐานข้อมูล)</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                    <strong>นิยาม:</strong> ผู้เชี่ยวชาญด้านสารสนเทศที่มีทักษะสูง (Skilled IS professional) เป็นผู้กำกับดูแลและดำเนินกิจกรรมทั้งหมดที่เกี่ยวข้องกับฐานข้อมูลขององค์กร ทั้งด้านความปลอดภัยและประสิทธิภาพ\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch5-hierarchy",
          "title": "2. ลำดับชั้นของข้อมูล (The Hierarchy of Data) & เฉลยสไลด์หน้า 2",
          "content": "\n            <div class=\"note-card\">\n              <h4>🪜 ลำดับชั้นของข้อมูล 6 ระดับ (The Hierarchy of Data - Slide 5-7)</h4>\n              <p>เรียงลำดับจากหน่วยย่อยที่สุดไปยังหน่วยที่ใหญ่และสมบูรณ์ที่สุด:</p>\n            </div>\n\n            <div class=\"steps-flow mt-3\">\n              <div class=\"step-box\">\n                <div class=\"step-num\">1</div>\n                <h6>Bit (บิต)</h6>\n                <p>0 หรือ 1 (เลขฐานสองหน่วยเล็กสุด)</p>\n              </div>\n              <div class=\"step-arrow\">➔</div>\n              <div class=\"step-box\">\n                <div class=\"step-num\">2</div>\n                <h6>Byte / Char</h6>\n                <p>รวมกัน 8 บิต = 1 ตัวอักษร เช่น 'ก' หรือ 'A'</p>\n              </div>\n              <div class=\"step-arrow\">➔</div>\n              <div class=\"step-box\">\n                <div class=\"step-num\">3</div>\n                <h6>Field (เขตข้อมูล)</h6>\n                <p>กลุ่มไบต์ที่แทนคุณลักษณะ เช่น ชื่อ (Name)</p>\n              </div>\n              <div class=\"step-arrow\">➔</div>\n              <div class=\"step-box\">\n                <div class=\"step-num\">4</div>\n                <h6>Record (ระเบียน)</h6>\n                <p>กลุ่มฟิลด์ 1 แถวของข้อมูล 1 เอนทิตี</p>\n              </div>\n              <div class=\"step-arrow\">➔</div>\n              <div class=\"step-box\">\n                <div class=\"step-num\">5</div>\n                <h6>File / Table</h6>\n                <p>กลุ่มเรคอร์ดรวมกัน เช่น แฟ้มนักเรียน 500 คน</p>\n              </div>\n              <div class=\"step-arrow\">➔</div>\n              <div class=\"step-box active\">\n                <div class=\"step-num\">6</div>\n                <h6>Database</h6>\n                <p>กลุ่มแฟ้มข้อมูลทั้งหมดที่เชื่อมโยงกันในระบบ</p>\n              </div>\n            </div>\n\n            <!-- Slide 2 Identification Solution -->\n            <div class=\"card-outline mt-3 border-amber\">\n              <div class=\"badge badge-warning mb-2\">📌 เฉลยคำถามหน้า 2 ในสไลด์: หมายเลข 1 ถึง 5 เรียกว่าอะไร?</div>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">จากรูปตาราง Student Table ในสไลด์หน้า 2 แต่ละองค์ประกอบคือ:</p>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <ul style=\"font-size:0.84rem; padding-left:18px; line-height:1.8;\">\n                    <li><strong>หมายเลข 1: Field Names (ชื่อเขตข้อมูล/หัวคอลัมน์)</strong> ➔ เช่น Student ID, Forename, Surname, Date of Birth</li>\n                    <li><strong>หมายเลข 2: Primary Key (คีย์หลัก)</strong> ➔ ฟิลด์ที่ใช้ระบุแต่ละเรคอร์ดอย่างไม่ซ้ำกัน คือ <code>Student ID</code></li>\n                    <li><strong>หมายเลข 3: Fields / Columns (คอลัมน์แนวตั้ง)</strong> ➔ แต่ละสดมภ์ที่เก็บคุณลักษณะเฉพาะ</li>\n                  </ul>\n                </div>\n                <div class=\"card-feature\">\n                  <ul style=\"font-size:0.84rem; padding-left:18px; line-height:1.8;\">\n                    <li><strong>หมายเลข 4: Record / Rows (ระเบียน/แถวแนวนอน)</strong> ➔ ข้อมูล 1 แถวที่รวบรวมทุกฟิลด์ของนักศึกษา 1 คน</li>\n                    <li><strong>หมายเลข 5: Data Items / Cells (ค่าข้อมูล)</strong> ➔ ข้อมูลที่อยู่ในช่องแต่ละช่อง เช่น คำว่า <em>Philip, Barker, 12/03/1999</em></li>\n                    <li><strong>Table (ตารางข้อมูลทั้งหมด):</strong> ตารางสองมิติที่รวบรวมเรคอร์ดและฟิลด์ทั้งหมดไว้ด้วยกัน</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch5-entities-keys",
          "title": "3. เอนทิตี แอตทริบิวต์ โดเมน และคีย์ (Entity, Attribute, Domain, PK, FK)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🔑 ศัพท์พื้นฐานของฐานข้อมูลเชิงสัมพันธ์ (Slide 8, 16)</h4>\n              <p>หัวใจสำคัญในการทำความเข้าใจโครงสร้างตารางข้อมูล:</p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <div class=\"card-outline\">\n                <span class=\"badge badge-primary mb-2\">1. Entity (เอนทิตี)</span>\n                <h6>สิ่งของ บุคคล หรือสถานที่ที่ต้องการจัดเก็บ</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>นิยามตามสไลด์:</strong> <em>\"Generalized class of people, places, or things for which data is collected, stored, and maintained\"</em><br>\n                  คน สถานที่ หรือสิ่งของ ที่เราสนใจและต้องการรวบรวมจัดเก็บข้อมูลไว้ในฐานข้อมูล เช่น นักศึกษา (STUDENT), สินค้า (PRODUCT), คำสั่งซื้อ (ORDERS)\n                </p>\n              </div>\n\n              <div class=\"card-outline\">\n                <span class=\"badge badge-accent mb-2\">2. Attribute (แอตทริบิวต์)</span>\n                <h6>คุณลักษณะเฉพาะของเอนทิตี</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>นิยามตามสไลด์:</strong> <em>\"Characteristic of an entity\"</em><br>\n                  คุณสมบัติที่บอกรายละเอียดของเอนทิตีนั้น ๆ ซึ่งก็คือ <strong>คอลัมน์ (Columns)</strong> ในตาราง เช่น รหัสนักศึกษา, ชื่อ, ที่อยู่, เกรดเฉลี่ย\n                </p>\n              </div>\n\n              <div class=\"card-outline\">\n                <span class=\"badge badge-info mb-2\">3. Domain (โดเมน)</span>\n                <h6>ขอบเขตของค่าที่ยอมรับได้ (Allowable Values)</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>นิยามตามสไลด์ (Slide 16):</strong> ขอบเขตหรือเซตของค่าที่ถูกต้องสำหรับแต่ละแอตทริบิวต์ เช่น โดเมนของ 'เกรด' ต้องเป็นตัวอักษร A, B, C, D, F เท่านั้น หรือโดเมนของ 'อายุ' ต้องเป็นตัวเลขจำนวนเต็มบวก 0 - 120\n                </p>\n              </div>\n\n              <div class=\"card-outline border-green\">\n                <span class=\"badge badge-success mb-2\">4. Primary Key (PK) & Foreign Key (FK)</span>\n                <h6>คีย์หลักและคีย์นอก</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  • <strong>Primary Key (PK):</strong> ฟิลด์ที่ค่าห้ามซ้ำและห้ามว่าง (Unique & Not Null) ใช้ระบุแต่ละแถวได้อย่างไม่สับสน<br>\n                  • <strong>Foreign Key (FK):</strong> คีย์นอกที่นำ Primary Key ของอีกตารางหนึ่งมาวางไว้ เพื่อเชื่อมโยงความสัมพันธ์ระหว่างตาราง\n                </p>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch5-database-approach",
          "title": "4. แนวทางการจัดการข้อมูล: แบบดั้งเดิม vs แนวทางฐานข้อมูล",
          "content": "\n            <div class=\"note-card\">\n              <h4>🏢 แนวทางการจัดการข้อมูล (The Database Approach - Slide 9-10)</h4>\n              <p>เปรียบเทียบระหว่างวิธีการดั้งเดิม (Traditional Flat-File Approach) กับแนวทางฐานข้อมูลสมัยใหม่ (Database Approach):</p>\n            </div>\n\n            <div class=\"table-wrap mt-3\">\n              <table class=\"data-table\">\n                <thead>\n                  <tr>\n                    <th>มิติเปรียบเทียบ</th>\n                    <th>วิธีการดั้งเดิม (Traditional Approach)</th>\n                    <th>แนวทางฐานข้อมูล (Database Approach)</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>การจัดเก็บไฟล์ (Storage)</strong></td>\n                    <td>แยกไฟล์ข้อมูลของแต่ละโปรแกรมแอปพลิเคชันออกจากกันโดยเด็ดขาด (Separate data files)</td>\n                    <td>รวมข้อมูลทั้งหมดไว้ในคลังกลางเดียวกัน (Pool of related data)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>การเข้าถึงข้อมูล (Access)</strong></td>\n                    <td>แต่ละโปรแกรมเขียนโค้ดเข้าถึงไฟล์ของตนเองโดยตรง</td>\n                    <td>ทุกโปรแกรมเข้าถึงข้อมูลผ่าน <strong>DBMS (Interface)</strong> ร่วมกัน</td>\n                  </tr>\n                  <tr>\n                    <td><strong>ความซ้ำซ้อนของข้อมูล (Data Redundancy)</strong></td>\n                    <td><span class=\"badge badge-danger\">สูงมาก</span> (เช่น แผนกบุคคลและแผนกการเงินเก็บชื่อและที่อยู่พนักงานซ้ำกัน)</td>\n                    <td><span class=\"badge badge-success\">ต่ำที่สุด</span> (เก็บข้อมูลไว้จุดเดียว ไม่เก็บซ้ำซ้อน)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>ความสอดคล้องของข้อมูล (Data Consistency)</strong></td>\n                    <td><span class=\"badge badge-danger\">ข้อมูลขัดแย้งกันง่าย</span> (เมื่อพนักงานย้ายบ้าน แผนกหนึ่งอัปเดตแต่อีกแผนกไม่อัปเดต)</td>\n                    <td><span class=\"badge badge-success\">ข้อมูลถูกต้องตรงกันเสมอ (Integrity)</span> เพราะอัปเดตที่เดียว มีผลทั่วทั้งองค์กร</td>\n                  </tr>\n                  <tr>\n                    <td><strong>การแบ่งปันข้อมูล (Data Sharing)</strong></td>\n                    <td>ทำได้ยากมาก ต้องแปลงไฟล์ส่งข้ามแผนก</td>\n                    <td>ทำได้ทันทีแบบเรียลไทม์ตามสิทธิ์ที่กำหนด</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            "
        },
        {
          "id": "ch5-data-modeling-design",
          "title": "5. การสร้างแบบจำลองข้อมูลและการออกแบบ (Data Modeling & Design)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🎯 4 ปัจจัยสำคัญที่องค์กรต้องพิจารณาเมื่อสร้างฐานข้อมูล (Slide 11)</h4>\n              <p>ก่อนลงมือสร้างฐานข้อมูล ต้องตอบคำถามทั้ง 4 ด้านต่อไปนี้ให้ชัดเจน:</p>\n            </div>\n\n            <div class=\"grid-2 mt-3\">\n              <div class=\"card-outline\">\n                <span class=\"badge badge-primary mb-1\">1. Content (เนื้อหาข้อมูล)</span>\n                <h6>ข้อมูลใดที่ควรรวบรวม และมีค่าใช้จ่ายเท่าไร?</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <em>\"What data should be collected and at what cost?\"</em><br>\n                  ประเมินว่าข้อมูลใดจำเป็นต่อธุรกิจจริง ๆ ข้อมูลที่ไม่จำเป็นไม่ต้องเก็บ เพราะการจัดเก็บและดูแลข้อมูลทุกฟิลด์มีต้นทุนด้านพื้นที่และความปลอดภัย\n                </p>\n              </div>\n\n              <div class=\"card-outline\">\n                <span class=\"badge badge-accent mb-1\">2. Access (การเข้าถึงข้อมูล)</span>\n                <h6>ข้อมูลใดควรให้ใครเข้าถึง และให้เมื่อใด?</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <em>\"What data should be provided to which users and when?\"</em><br>\n                  กำหนดนโยบายความปลอดภัยและระดับสิทธิ์ (Roles & Permissions) เช่น พนักงานทั่วไปดูได้เฉพาะข้อมูลตนเอง ผู้จัดการดูข้อมูลทั้งแผนกได้\n                </p>\n              </div>\n\n              <div class=\"card-outline\">\n                <span class=\"badge badge-success mb-1\">3. Logical Structure (โครงสร้างเชิงตรรกะ)</span>\n                <h6>ควรจัดเรียงข้อมูลอย่างไรให้สมเหตุสมผลต่อผู้ใช้?</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <em>\"How should data be arranged so that it makes sense to a given user?\"</em><br>\n                  ออกแบบตารางและความสัมพันธ์ให้อิงตามกระบวนการทำงานจริง เช่น ใบสั่งซื้อต้องเชื่อมโยงกับลูกค้าและสินค้า\n                </p>\n              </div>\n\n              <div class=\"card-outline\">\n                <span class=\"badge badge-warning mb-1\">4. Physical Organization (การจัดระเบียบเชิงกายภาพ)</span>\n                <h6>ข้อมูลจริงควรจัดเก็บไว้ที่ใด?</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <em>\"Where should data be physically located?\"</em><br>\n                  วางแผนตำแหน่งจัดเก็บไฟล์ในดิสก์ SSD, เซิร์ฟเวอร์ในสำนักงาน หรือบนคลาวด์ เพื่อให้ดึงข้อมูลได้รวดเร็วและมีระบบสำรองไฟสำรองข้อมูล\n                </p>\n              </div>\n            </div>\n\n            <!-- Logical Design vs Physical Design -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--accent-indigo);\">📐 การออกแบบฐานข้อมูล 2 รูปแบบ (Building a Database - Slide 12-13):</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature border-green\">\n                  <h6>1. Logical Design (การออกแบบเชิงตรรกะ)</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>นิยามตามสไลด์:</strong> <em>\"Abstract model of how data should be structured and arranged to meet an organization’s information needs\"</em><br>\n                    แบบจำลองเชิงนามธรรมที่ตอบโจทย์ความต้องการสารสนเทศของธุรกิจ ไม่ยึดติดกับฮาร์ดแวร์หรือยี่ห้อซอฟต์แวร์ เช่น การวาด <strong>Entity-Relationship (ER) Diagram</strong>\n                  </p>\n                </div>\n\n                <div class=\"card-feature border-amber\">\n                  <h6>2. Physical Design (การออกแบบเชิงกายภาพ)</h6>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>นิยามตามสไลด์:</strong> การนำ Logical Design มาปรับแต่งและลงมือติดตั้งจริงในอุปกรณ์จัดเก็บข้อมูล โดยคำนึงถึง <strong>ประสิทธิภาพ (Performance), ความเร็ว (Speed), ต้นทุน (Cost) และความปลอดภัย (Security)</strong>\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch5-relational-operations",
          "title": "6. แบบจำลองเชิงสัมพันธ์และ 4 ปฏิบัติการจัดการข้อมูล (Manipulating Data)",
          "content": "\n            <div class=\"note-card\">\n              <h4>📊 แบบจำลองเชิงสัมพันธ์ (The Relational Database Model - Slide 16-18)</h4>\n              <p><strong>นิยาม:</strong> อธิบายข้อมูลในรูปแบบตาราง 2 มิติมาตรฐาน (Standard tabular format) ประกอบด้วยแถวและคอลัมน์ โดยแต่ละแถวแทนเอนทิตี และแต่ละคอลัมน์แทนแอตทริบิวต์</p>\n            </div>\n\n            <!-- 4 Operations -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🔄 4 ปฏิบัติการจัดการข้อมูลเชิงสัมพันธ์ (Manipulating Data - Slide 18):</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-primary mb-1\">1. Selecting (การเลือกแถว)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Eliminates rows according to certain criteria:</strong> การคัดเลือกเฉพาะ <strong>แถว (Rows)</strong> ที่ตรงตามเงื่อนไขที่กำหนด และตัดแถวอื่นออก เช่น <code>SELECT * FROM Students WHERE GPA >= 3.5;</code>\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-accent mb-1\">2. Projecting (การฉายคอลัมน์)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Eliminates columns in a table:</strong> การเลือกแสดงเฉพาะ <strong>คอลัมน์ (Columns)</strong> ที่ต้องการ และกำจัดคอลัมน์อื่นที่ไม่ต้องการออกไป เช่น <code>SELECT Name, Phone FROM Customers;</code>\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-success mb-1\">3. Joining (การเชื่อมรวมตาราง)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Combines two or more tables:</strong> การรวมตารางสองตารางขึ้นไปเข้าด้วยกันเป็นตารางผลลัพธ์เดียว โดยอิงจากคีย์ที่มีค่าตรงกัน\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-warning mb-1\">4. Linking (การผูกโยงตาราง)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>Manipulating tables that share at least one common data attribute:</strong> การผูกโยงตารางตั้งแต่สองตารางขึ้นไปที่แชร์แอตทริบิวต์ร่วมกันอย่างน้อยหนึ่งรายการ\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <!-- Slide 17 3-Table Linking Walkthrough -->\n            <div class=\"diagram-canvas mt-3\">\n              <div class=\"diagram-title-badge\">📑 ตัวอย่างการ Linking 3 ตารางในสไลด์หน้า 17</div>\n              <p style=\"font-size:0.88rem; color:var(--text-muted); margin-bottom:12px;\">\n                การผูกโยงระหว่าง Project Table ➔ Department Table ➔ Manager Table:\n              </p>\n              <div class=\"steps-flow\">\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-primary mb-1\">Table 1: Project</span>\n                  <p style=\"font-size:0.8rem; margin-top:4px;\">\n                    Project ID (155, 498, 226)<br>\n                    Description<br>\n                    <strong style=\"color:var(--accent-rose);\">Dept. number [FK] ➔</strong>\n                  </p>\n                </div>\n                <div class=\"step-arrow\">โยงไป</div>\n                <div class=\"step-box active\" style=\"flex:1;\">\n                  <span class=\"badge badge-accent mb-1\">Table 2: Department</span>\n                  <p style=\"font-size:0.8rem; margin-top:4px;\">\n                    <strong style=\"color:var(--accent-rose);\">➔ Dept. [PK]</strong><br>\n                    Dept. name<br>\n                    <strong style=\"color:var(--accent-cyan);\">Manager SSN [FK] ➔</strong>\n                  </p>\n                </div>\n                <div class=\"step-arrow\">โยงไป</div>\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-success mb-1\">Table 3: Manager</span>\n                  <p style=\"font-size:0.8rem; margin-top:4px;\">\n                    <strong style=\"color:var(--accent-cyan);\">➔ SSN [PK]</strong><br>\n                    Last name, First name<br>\n                    Hire date\n                  </p>\n                </div>\n              </div>\n              <p style=\"font-size:0.85rem; color:var(--text-muted); margin-top:10px;\">\n                💡 <em>ผลลัพธ์:</em> เมื่อต้องการรู้ว่า <em>\"โครงการหมายเลข 155 ใครเป็นผู้จัดการ?\"</em> ระบบจะดูฟิลด์ <code>Dept. number</code> ใน Project Table เพื่อไปเปิดดู <code>Department Table</code> แล้วเอา <code>Manager SSN</code> ไปเปิดดูชื่อผู้จัดการใน <code>Manager Table</code> ทันที!\n              </p>\n            </div>\n            "
        },
        {
          "id": "ch5-er-diagrams-cardinality",
          "title": "7. เจาะลึก ER Diagram ระบบร้านเบเกอรี่ พร้อมเส้นโยงความสัมพันธ์ (1:1, 1:M, M:M & PK/FK)",
          "content": "<div class=\"note-card\">\n              <h4>🥖 ตัวอย่างระบบร้านเบเกอรี่ (Bakery Shop Database System)</h4>\n              <p>ระบบฐานข้อมูลสำหรับร้านเบเกอรี่และคาเฟ่ ประกอบด้วย <strong>ข้อมูลลูกค้า, ออเดอร์คำสั่งซื้อ, ข้อมูลพนักงานและตำแหน่งงาน, ประเภทเมนูเบเกอรี่, รายการเมนู และรายละเอียดการสั่งซื้อ</strong></p>\n            </div>\n\n            <!-- Theory: Cardinality & Rules -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">📐 กฎเหล็กการโยงเส้นความสัมพันธ์ (Cardinality Rules)</h5>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature border-green\">\n                  <div>\n                    <span class=\"badge badge-success mb-1\">ความสัมพันธ์แบบ 1:M (One-to-Many)</span>\n                    <p style=\"font-size:0.86rem; margin-top:4px;\">\n                      <strong>กฎเหล็ก PK/FK:</strong> <u>ต้องนำ Primary Key (PK) ของฝั่ง 1 ไปวางเป็น Foreign Key (FK) ในฝั่ง Many (M) เสมอ!</u><br>\n                      <em>ในร้านเบเกอรี่:</em><br>\n                      • ลูกค้า 1 คน (1) สั่งได้หลายออเดอร์ (M) ➔ <code>Customer_ID (PK)</code> ไปเป็น <code>FK</code> ใน Orders<br>\n                      • พนักงาน 1 คน (1) รับได้หลายออเดอร์ (M) ➔ <code>Employee_ID (PK)</code> ไปเป็น <code>FK</code> ใน Orders<br>\n                      • ประเภทเมนู 1 ประเภท (1) มีเมนูได้หลายรายการ (M) ➔ <code>Category_ID (PK)</code> ไปเป็น <code>FK</code> ใน Menu_Items\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"card-feature border-amber\">\n                  <div>\n                    <span class=\"badge badge-warning mb-1\">ความสัมพันธ์แบบ M:M (Many-to-Many)</span>\n                    <p style=\"font-size:0.86rem; margin-top:4px;\">\n                      <strong>กฎเหล็ก Relational Database:</strong> <u>ไม่สามารถเชื่อมความสัมพันธ์ M:M ได้โดยตรง!</u><br>\n                      <em>ในร้านเบเกอรี่:</em><br>\n                      • ออเดอร์ 1 ใบ มีเบเกอรี่ได้หลายเมนู และ เมนู 1 รายการ ก็อยู่ในออเดอร์ได้หลายใบ<br>\n                      🚨 <strong>วิธีแก้:</strong> ต้องสร้าง <strong>ตารางเชื่อม (Junction Table)</strong> ชื่อ <code>Order_Details</code> คั่นกลาง แล้วเปลี่ยนเป็น <strong>1:M สองเส้นวิ่งเข้าหาตารางเชื่อม</strong> โดยนำคู่ <code>Order_ID (FK)</code> + <code>Menu_ID (FK)</code> รวมกันเป็น Composite Primary Key!\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- VISUAL SVG ER DIAGRAM WITH VISIBLE CONNECTING LINES -->\n            <div class=\"diagram-canvas mt-3\" style=\"background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px 16px;\">\n              <div class=\"diagram-title-badge\" style=\"margin-bottom: 12px;\">\n                🗺️ แผนผัง ER Diagram ระบบร้านเบเกอรี่ พร้อมเส้นโยงความสัมพันธ์ (Relationship Lines)\n              </div>\n              <p style=\"font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;\">\n                เส้นเชื่อมต่อด้านล่างแสดงทิศทางการส่งต่อคีย์จาก <span style=\"color:#f59e0b; font-weight:bold;\">Primary Key [PK]</span> ไปยัง <span style=\"color:#38bdf8; font-weight:bold;\">Foreign Key [FK]</span> พร้อมสัญลักษณ์บอกจำนวน (1 ต่อ หลาย):\n              </p>\n\n              <!-- Responsive SVG Canvas -->\n              <div style=\"width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;\">\n                <svg viewBox=\"0 0 1000 660\" style=\"width: 100%; min-width: 820px; height: auto; display: block; font-family: inherit;\">\n                  <!-- Definitions for Markers / Arrowheads -->\n                  <defs>\n                    <linearGradient id=\"gradBlue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n                      <stop offset=\"0%\" stop-color=\"#3b82f6\" />\n                      <stop offset=\"100%\" stop-color=\"#1d4ed8\" />\n                    </linearGradient>\n                    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n                      <stop offset=\"0%\" stop-color=\"#8b5cf6\" />\n                      <stop offset=\"100%\" stop-color=\"#6d28d9\" />\n                    </linearGradient>\n                    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n                      <stop offset=\"0%\" stop-color=\"#10b981\" />\n                      <stop offset=\"100%\" stop-color=\"#047857\" />\n                    </linearGradient>\n                    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n                      <stop offset=\"0%\" stop-color=\"#f59e0b\" />\n                      <stop offset=\"100%\" stop-color=\"#b45309\" />\n                    </linearGradient>\n                    \n                    <!-- Arrowheads -->\n                    <marker id=\"arrow-blue\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\">\n                      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#3b82f6\" />\n                    </marker>\n                    <marker id=\"arrow-purple\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\">\n                      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#8b5cf6\" />\n                    </marker>\n                    <marker id=\"arrow-emerald\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\">\n                      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\" />\n                    </marker>\n                    <marker id=\"arrow-amber\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\">\n                      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f59e0b\" />\n                    </marker>\n\n                    <!-- Filter for glowing lines -->\n                    <filter id=\"glow-blue\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n                      <feGaussianBlur stdDeviation=\"3\" result=\"blur\" />\n                      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\" />\n                    </filter>\n                  </defs>\n\n                  <!-- ================= SVG CONNECTING LINES ================= -->\n                  <!-- Line 1: Customer (1) ➔ Orders (M) -->\n                  <g class=\"svg-link\">\n                    <path d=\"M 270 120 C 330 120, 340 180, 400 180\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3.5\" marker-end=\"url(#arrow-blue)\" filter=\"url(#glow-blue)\" />\n                    <circle cx=\"270\" cy=\"120\" r=\"5\" fill=\"#3b82f6\" />\n                    <rect x=\"285\" y=\"130\" width=\"94\" height=\"24\" rx=\"6\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\" />\n                    <text x=\"332\" y=\"146\" fill=\"#93c5fd\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1 : M (PK➔FK)</text>\n                  </g>\n\n                  <!-- Line 2: Employee (1) ➔ Orders (M) -->\n                  <g class=\"svg-link\">\n                    <path d=\"M 270 330 C 330 330, 340 260, 400 260\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"3.5\" marker-end=\"url(#arrow-purple)\" />\n                    <circle cx=\"270\" cy=\"330\" r=\"5\" fill=\"#8b5cf6\" />\n                    <rect x=\"282\" y=\"275\" width=\"102\" height=\"24\" rx=\"6\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n                    <text x=\"333\" y=\"291\" fill=\"#c4b5fd\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1 : M (แคชเชียร์)</text>\n                  </g>\n\n                  <!-- Line 3: Menu_Category (1) ➔ Menu_Items (M) -->\n                  <g class=\"svg-link\">\n                    <path d=\"M 845 180 L 845 250\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3.5\" marker-end=\"url(#arrow-emerald)\" />\n                    <circle cx=\"845\" cy=\"180\" r=\"5\" fill=\"#10b981\" />\n                    <rect x=\"795\" y=\"200\" width=\"100\" height=\"24\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n                    <text x=\"845\" y=\"216\" fill=\"#6ee7b7\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1 : M (ประเภท)</text>\n                  </g>\n\n                  <!-- Line 4: Orders (1) ➔ Order_Details (M) -->\n                  <g class=\"svg-link\">\n                    <path d=\"M 480 340 L 480 430\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3.5\" marker-end=\"url(#arrow-amber)\" />\n                    <circle cx=\"480\" cy=\"340\" r=\"5\" fill=\"#f59e0b\" />\n                    <rect x=\"428\" y=\"370\" width=\"104\" height=\"24\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\" />\n                    <text x=\"480\" y=\"386\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1 : M (ในออเดอร์)</text>\n                  </g>\n\n                  <!-- Line 5: Menu_Items (1) ➔ Order_Details (M) -->\n                  <g class=\"svg-link\">\n                    <path d=\"M 730 340 C 660 370, 630 430, 580 470\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3.5\" marker-end=\"url(#arrow-amber)\" />\n                    <circle cx=\"730\" cy=\"340\" r=\"5\" fill=\"#f59e0b\" />\n                    <rect x=\"635\" y=\"380\" width=\"112\" height=\"24\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\" />\n                    <text x=\"691\" y=\"396\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">1 : M (รายการเบเกอรี่)</text>\n                  </g>\n\n                  <!-- ================= SVG TABLE NODES ================= -->\n\n                  <!-- 1. Table: Customer -->\n                  <g transform=\"translate(40, 40)\">\n                    <rect width=\"230\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n                    <rect width=\"230\" height=\"34\" rx=\"10\" fill=\"url(#gradBlue)\" />\n                    <text x=\"115\" y=\"22\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">👤 Customer (ลูกค้า)</text>\n                    \n                    <text x=\"16\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\">Customer_ID</text>\n                    <rect x=\"175\" y=\"45\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"194\" y=\"58\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK</text>\n                    \n                    <line x1=\"10\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"92\" fill=\"#cbd5e1\" font-size=\"11.5\">Customer_Name (ชื่อ)</text>\n                    <text x=\"16\" y=\"114\" fill=\"#cbd5e1\" font-size=\"11.5\">Phone_Number (เบอร์โทร)</text>\n                    <text x=\"16\" y=\"136\" fill=\"#cbd5e1\" font-size=\"11.5\">Member_Level (ระดับสมาชิก)</text>\n                  </g>\n\n                  <!-- 2. Table: Employees -->\n                  <g transform=\"translate(40, 250)\">\n                    <rect width=\"230\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\" />\n                    <rect width=\"230\" height=\"34\" rx=\"10\" fill=\"url(#gradPurple)\" />\n                    <text x=\"115\" y=\"22\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">👨‍🍳 Employees (พนักงาน)</text>\n                    \n                    <text x=\"16\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\">Employee_ID</text>\n                    <rect x=\"175\" y=\"45\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"194\" y=\"58\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK</text>\n                    \n                    <line x1=\"10\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"92\" fill=\"#cbd5e1\" font-size=\"11.5\">Employee_Name (ชื่อ)</text>\n                    <text x=\"16\" y=\"114\" fill=\"#cbd5e1\" font-size=\"11.5\">Position / Role (ตำแหน่ง)</text>\n                    <text x=\"16\" y=\"136\" fill=\"#cbd5e1\" font-size=\"11.5\">Salary (เงินเดือน)</text>\n                  </g>\n\n                  <!-- 3. Table: Orders -->\n                  <g transform=\"translate(380, 120)\">\n                    <rect width=\"240\" height=\"220\" rx=\"10\" fill=\"#0f172a\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n                    <rect width=\"240\" height=\"34\" rx=\"10\" fill=\"url(#gradBlue)\" />\n                    <text x=\"120\" y=\"22\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">🧾 Orders (ออเดอร์คำสั่งซื้อ)</text>\n                    \n                    <text x=\"16\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\">Order_ID</text>\n                    <rect x=\"185\" y=\"45\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"204\" y=\"58\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK</text>\n                    \n                    <line x1=\"10\" y1=\"70\" x2=\"230\" y2=\"70\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"92\" fill=\"#cbd5e1\" font-size=\"11.5\">Order_Date (วันที่/เวลา)</text>\n                    \n                    <text x=\"16\" y=\"122\" fill=\"#93c5fd\" font-size=\"12\" font-weight=\"600\">Customer_ID</text>\n                    <rect x=\"185\" y=\"108\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#0284c7\" />\n                    <text x=\"204\" y=\"121\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">FK</text>\n                    \n                    <text x=\"16\" y=\"152\" fill=\"#c4b5fd\" font-size=\"12\" font-weight=\"600\">Employee_ID</text>\n                    <rect x=\"185\" y=\"138\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#7c3aed\" />\n                    <text x=\"204\" y=\"151\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">FK</text>\n\n                    <text x=\"16\" y=\"182\" fill=\"#cbd5e1\" font-size=\"11.5\">Total_Amount (ยอดรวม)</text>\n                    <text x=\"16\" y=\"204\" fill=\"#cbd5e1\" font-size=\"11.5\">Payment_Type (วิธีชำระ)</text>\n                  </g>\n\n                  <!-- 4. Table: Menu_Category -->\n                  <g transform=\"translate(730, 40)\">\n                    <rect width=\"230\" height=\"140\" rx=\"10\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\" />\n                    <rect width=\"230\" height=\"34\" rx=\"10\" fill=\"url(#gradEmerald)\" />\n                    <text x=\"115\" y=\"22\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">📂 Menu_Category (ประเภทเมนู)</text>\n                    \n                    <text x=\"16\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\">Category_ID</text>\n                    <rect x=\"175\" y=\"45\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"194\" y=\"58\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK</text>\n                    \n                    <line x1=\"10\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"92\" fill=\"#cbd5e1\" font-size=\"11.5\">Category_Name (ชื่อประเภท)</text>\n                    <text x=\"16\" y=\"114\" fill=\"#94a3b8\" font-size=\"10.5\">เช่น เค้ก, ครัวซองต์, กาแฟ</text>\n                  </g>\n\n                  <!-- 5. Table: Menu_Items -->\n                  <g transform=\"translate(730, 250)\">\n                    <rect width=\"230\" height=\"160\" rx=\"10\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\" />\n                    <rect width=\"230\" height=\"34\" rx=\"10\" fill=\"url(#gradEmerald)\" />\n                    <text x=\"115\" y=\"22\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">🥐 Menu_Items (รายการเมนู)</text>\n                    \n                    <text x=\"16\" y=\"58\" fill=\"#f8fafc\" font-size=\"12\">Menu_ID</text>\n                    <rect x=\"175\" y=\"45\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"194\" y=\"58\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK</text>\n                    \n                    <line x1=\"10\" y1=\"70\" x2=\"220\" y2=\"70\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"92\" fill=\"#cbd5e1\" font-size=\"11.5\">Menu_Name (ชื่อเมนู)</text>\n                    \n                    <text x=\"16\" y=\"122\" fill=\"#6ee7b7\" font-size=\"12\" font-weight=\"600\">Category_ID</text>\n                    <rect x=\"175\" y=\"108\" width=\"38\" height=\"18\" rx=\"4\" fill=\"#059669\" />\n                    <text x=\"194\" y=\"121\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">FK</text>\n\n                    <text x=\"16\" y=\"148\" fill=\"#cbd5e1\" font-size=\"11.5\">Price (ราคาต่อชิ้น)</text>\n                  </g>\n\n                  <!-- 6. Table: Order_Details (Junction Table M:M) -->\n                  <g transform=\"translate(370, 430)\">\n                    <rect width=\"260\" height=\"190\" rx=\"10\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n                    <rect width=\"260\" height=\"34\" rx=\"10\" fill=\"url(#gradAmber)\" />\n                    <text x=\"130\" y=\"22\" fill=\"#0f172a\" font-size=\"12.5\" font-weight=\"bold\" text-anchor=\"middle\">📦 Order_Details (ตารางเชื่อม M:M)</text>\n                    \n                    <text x=\"16\" y=\"60\" fill=\"#fde68a\" font-size=\"12\" font-weight=\"700\">Order_ID</text>\n                    <rect x=\"170\" y=\"46\" width=\"75\" height=\"20\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"207\" y=\"60\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK / FK</text>\n\n                    <text x=\"16\" y=\"95\" fill=\"#fde68a\" font-size=\"12\" font-weight=\"700\">Menu_ID</text>\n                    <rect x=\"170\" y=\"81\" width=\"75\" height=\"20\" rx=\"4\" fill=\"#f59e0b\" />\n                    <text x=\"207\" y=\"95\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">PK / FK</text>\n                    \n                    <line x1=\"10\" y1=\"110\" x2=\"250\" y2=\"110\" stroke=\"#334155\" stroke-width=\"1\" />\n                    <text x=\"16\" y=\"135\" fill=\"#cbd5e1\" font-size=\"12\">Quantity (จำนวนชิ้นที่สั่ง)</text>\n                    <text x=\"16\" y=\"162\" fill=\"#cbd5e1\" font-size=\"12\">Subtotal_Price (ราคารวม)</text>\n                  </g>\n                </svg>\n              </div>\n            </div>\n\n            <!-- DETAILED TABLE CARDS WITH EXPLICIT TRACING LABELS -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🗂️ รายละเอียดตารางและเส้นทางการโยงคีย์ในร้านเบเกอรี่ (Schema Tracing):</h5>\n              \n              <div class=\"er-grid mt-3\">\n                <!-- Card 1: Customer -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #3b82f6;\">\n                  <div class=\"er-table-header\" style=\"background:#1d4ed8;\">👤 Customer (ข้อมูลลูกค้า)</div>\n                  <div class=\"er-row\">\n                    <span><strong>Customer_ID</strong></span>\n                    <span class=\"er-key pk\">PK</span>\n                  </div>\n                  <div class=\"er-row\" style=\"background:rgba(59, 130, 246, 0.08); font-size:0.75rem; color:#60a5fa;\">\n                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Orders</span>\n                  </div>\n                  <div class=\"er-row\"><span>Customer_Name (ชื่อลูกค้า)</span></div>\n                  <div class=\"er-row\"><span>Phone_Number (เบอร์โทร)</span></div>\n                  <div class=\"er-row\"><span>Member_Level (เช่น Gold/Silver)</span></div>\n                </div>\n\n                <!-- Card 2: Employees -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #8b5cf6;\">\n                  <div class=\"er-table-header\" style=\"background:#6d28d9;\">👨‍🍳 Employees (พนักงาน & ตำแหน่ง)</div>\n                  <div class=\"er-row\">\n                    <span><strong>Employee_ID</strong></span>\n                    <span class=\"er-key pk\">PK</span>\n                  </div>\n                  <div class=\"er-row\" style=\"background:rgba(139, 92, 246, 0.08); font-size:0.75rem; color:#c4b5fd;\">\n                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Orders</span>\n                  </div>\n                  <div class=\"er-row\"><span>Employee_Name (ชื่อพนักงาน)</span></div>\n                  <div class=\"er-row\">\n                    <span><strong>Position / Role</strong> (ตำแหน่ง)</span>\n                    <span class=\"badge badge-purple\" style=\"font-size:0.7rem;\">แคชเชียร์/บาริสต้า</span>\n                  </div>\n                  <div class=\"er-row\"><span>Salary (เงินเดือน)</span></div>\n                </div>\n\n                <!-- Card 3: Orders -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #3b82f6;\">\n                  <div class=\"er-table-header\" style=\"background:#1e40af;\">🧾 Orders (ออเดอร์คำสั่งซื้อ)</div>\n                  <div class=\"er-row\">\n                    <span><strong>Order_ID</strong></span>\n                    <span class=\"er-key pk\">PK</span>\n                  </div>\n                  <div class=\"er-row\"><span>Order_Date (วันเวลาสั่ง)</span></div>\n                  <div class=\"er-row\" style=\"background:rgba(59, 130, 246, 0.1);\">\n                    <span style=\"color:#93c5fd;\"><strong>Customer_ID</strong> [รับจาก Customer]</span>\n                    <span class=\"er-key fk\">FK</span>\n                  </div>\n                  <div class=\"er-row\" style=\"background:rgba(139, 92, 246, 0.1);\">\n                    <span style=\"color:#c4b5fd;\"><strong>Employee_ID</strong> [แคชเชียร์ผู้รับออเดอร์]</span>\n                    <span class=\"er-key fk\">FK</span>\n                  </div>\n                  <div class=\"er-row\"><span>Total_Amount (ยอดรวมสุทธิ)</span></div>\n                </div>\n              </div>\n\n              <div class=\"er-grid mt-3\">\n                <!-- Card 4: Menu_Category -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #10b981;\">\n                  <div class=\"er-table-header\" style=\"background:#047857;\">📂 Menu_Category (ประเภทเมนู)</div>\n                  <div class=\"er-row\">\n                    <span><strong>Category_ID</strong></span>\n                    <span class=\"er-key pk\">PK</span>\n                  </div>\n                  <div class=\"er-row\" style=\"background:rgba(16, 185, 129, 0.08); font-size:0.75rem; color:#6ee7b7;\">\n                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Menu_Items</span>\n                  </div>\n                  <div class=\"er-row\"><span>Category_Name (เช่น เค้ก, ขนมปัง, กาแฟ)</span></div>\n                  <div class=\"er-row\"><span>Description (รายละเอียดหมวด)</span></div>\n                </div>\n\n                <!-- Card 5: Menu_Items -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #10b981;\">\n                  <div class=\"er-table-header\" style=\"background:#065f46;\">🥐 Menu_Items (รายการเมนูเบเกอรี่)</div>\n                  <div class=\"er-row\">\n                    <span><strong>Menu_ID</strong></span>\n                    <span class=\"er-key pk\">PK</span>\n                  </div>\n                  <div class=\"er-row\"><span>Menu_Name (เช่น ครัวซองต์, ชีสเค้ก)</span></div>\n                  <div class=\"er-row\" style=\"background:rgba(16, 185, 129, 0.1);\">\n                    <span style=\"color:#6ee7b7;\"><strong>Category_ID</strong> [รับจาก Category]</span>\n                    <span class=\"er-key fk\">FK</span>\n                  </div>\n                  <div class=\"er-row\"><span>Price (ราคาต่อชิ้น)</span></div>\n                </div>\n\n                <!-- Card 6: Order_Details (Junction Table) -->\n                <div class=\"er-table\" style=\"border-top: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.03);\">\n                  <div class=\"er-table-header\" style=\"background:#b45309; color:#fff;\">📦 Order_Details (ตารางเชื่อม M:M)</div>\n                  <div class=\"er-row\" style=\"background:rgba(245, 158, 11, 0.12);\">\n                    <span style=\"color:#fde68a;\"><strong>Order_ID</strong> [รับจาก Orders]</span>\n                    <span class=\"er-key pk\">PK / FK</span>\n                  </div>\n                  <div class=\"er-row\" style=\"background:rgba(245, 158, 11, 0.12);\">\n                    <span style=\"color:#fde68a;\"><strong>Menu_ID</strong> [รับจาก Menu_Items]</span>\n                    <span class=\"er-key pk\">PK / FK</span>\n                  </div>\n                  <div class=\"er-row\"><span>Quantity (จำนวนชิ้นที่สั่ง เช่น 2 ชิ้น)</span></div>\n                  <div class=\"er-row\"><span>Subtotal_Price (ราคารวมรายการนี้)</span></div>\n                </div>\n              </div>\n            </div>\n\n            <!-- EXPLICIT RELATIONSHIP BRIDGES EXPLAINED -->\n            <div class=\"card-outline mt-3\">\n              <h5 style=\"color:var(--primary);\">🔗 สรุปเส้นทางการโยงความสัมพันธ์ 4 เส้นในร้านเบเกอรี่ (อ่านแล้วเข้าใจทันที):</h5>\n              \n              <div class=\"steps-flow mt-3\">\n                <!-- Step 1 -->\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-primary mb-1\">เส้นที่ 1: ลูกค้า ➔ ออเดอร์</span>\n                  <h6 style=\"color:var(--text-main);\">Customer (1) ───&lt; (M) Orders</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>เหตุผล:</strong> ลูกค้า 1 คน สามารถเข้ามาซื้อเบเกอรี่ได้หลายออเดอร์ (1:M)<br>\n                    <strong>การโยงเส้น:</strong> ลากจาก <code>Customer.Customer_ID [PK]</code> ไปวางเป็น <code>Orders.Customer_ID [FK]</code>\n                  </p>\n                </div>\n\n                <div class=\"step-arrow\">➔</div>\n\n                <!-- Step 2 -->\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-purple mb-1\">เส้นที่ 2: พนักงาน ➔ ออเดอร์</span>\n                  <h6 style=\"color:var(--text-main);\">Employees (1) ───&lt; (M) Orders</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>เหตุผล:</strong> พนักงานตำแหน่งแคชเชียร์ 1 คน สามารถคีย์รับออเดอร์ลูกค้าได้หลายใบ (1:M)<br>\n                    <strong>การโยงเส้น:</strong> ลากจาก <code>Employees.Employee_ID [PK]</code> ไปวางเป็น <code>Orders.Employee_ID [FK]</code>\n                  </p>\n                </div>\n              </div>\n\n              <div class=\"steps-flow mt-3\">\n                <!-- Step 3 -->\n                <div class=\"step-box\" style=\"flex:1;\">\n                  <span class=\"badge badge-success mb-1\">เส้นที่ 3: หมวดเมนู ➔ รายการเมนู</span>\n                  <h6 style=\"color:var(--text-main);\">Category (1) ───&lt; (M) Menu_Items</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>เหตุผล:</strong> 1 ประเภทเมนู (เช่น 'เค้ก') มีขนมได้หลายเมนู (เช่น ช็อกโกแลตฟัดจ์, ชีสเค้กสตรอว์เบอร์รี) (1:M)<br>\n                    <strong>การโยงเส้น:</strong> ลากจาก <code>Menu_Category.Category_ID [PK]</code> ไปวางเป็น <code>Menu_Items.Category_ID [FK]</code>\n                  </p>\n                </div>\n\n                <div class=\"step-arrow\">➔</div>\n\n                <!-- Step 4 -->\n                <div class=\"step-box active\" style=\"flex:1;\">\n                  <span class=\"badge badge-warning mb-1\">เส้นที่ 4: ออเดอร์ &gt;───&lt; เมนู (M:M)</span>\n                  <h6 style=\"color:var(--text-main);\">Orders (M) &gt;───&lt; (M) Menu_Items</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted); margin-top:4px;\">\n                    <strong>เหตุผล:</strong> ออเดอร์ 1 ใบ มีขนมได้หลายเมนู และขนม 1 เมนู ก็ถูกสั่งในหลายออเดอร์ <strong>เป็นความสัมพันธ์ Many-to-Many!</strong><br>\n                    <strong>การโยงเส้น:</strong> แตกตารางเชื่อม <code>Order_Details</code> ขึ้นมาคั่นกลาง โดยดึง <code>Order_ID [FK]</code> และ <code>Menu_ID [FK]</code> มาจับคู่กันเป็น Composite Primary Key!\n                  </p>\n                </div>\n              </div>\n            </div>"
        },
        {
          "id": "ch5-dbms-sql-concurrency",
          "title": "8. สถาปัตยกรรม DBMS, ภาษา SQL (DDL vs DML) และ Concurrency Control",
          "content": "\n            <div class=\"grid-2\">\n              <!-- Overview of Database Types -->\n              <div class=\"card-outline\">\n                <h5>🗄️ ชนิดของฐานข้อมูล (Database Types - Slide 20)</h5>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>Flat file:</strong> โปรแกรมฐานข้อมูลอย่างง่ายที่เรคอร์ด <u>ไม่มีความสัมพันธ์ซึ่งกันและกัน</u> เช่น ไฟล์ Excel หรือไฟล์ CSV</li>\n                  <li><strong>Single-user (ผู้ใช้คนเดียว):</strong> เข้าใช้งานฐานข้อมูลได้ครั้งละ 1 คนเท่านั้น เช่น Microsoft Access, FileMaker</li>\n                  <li><strong>Multiple-user (ผู้ใช้หลายคน):</strong> รองรับผู้ใช้งานพร้อมกันนับสิบถึงนับหมื่นคน (Concurrent users) เช่น Oracle, Sybase, IBM DB2, Microsoft SQL Server</li>\n                </ul>\n              </div>\n\n              <!-- Schema & Data Dictionary -->\n              <div class=\"card-outline\">\n                <h5>📖 สกีมาและพจนานุกรมข้อมูล (Slide 21-22)</h5>\n                <ul style=\"font-size:0.84rem; color:var(--text-muted); padding-left:18px;\">\n                  <li><strong>Schema (สกีมา):</strong> โครงสร้างข้อมูลหรือพิมพ์เขียวที่ใช้อธิบายฐานข้อมูลทั้งหมด (Describes the entire database) ทั้งชื่อตาราง ฟิลด์ และความสัมพันธ์</li>\n                  <li><strong>Data Dictionary (พจนานุกรมข้อมูล):</strong> เอกสารคำอธิบายรายละเอียดทั้งหมดของข้อมูลที่ใช้ในฐานข้อมูล (ชนิดข้อมูล ขนาด ข้อจำกัด ค่าเริ่มต้น)</li>\n                </ul>\n              </div>\n            </div>\n\n            <!-- DDL vs DML -->\n            <div class=\"card-outline mt-3 border-cyan\">\n              <h5 style=\"color:var(--accent-cyan);\">💻 ภาษา SQL (Structured Query Language - Slide 22, 24)</h5>\n              <p style=\"font-size:0.88rem; color:var(--text-muted);\">\n                มาตรฐาน ANSI สำหรับการจัดการฐานข้อมูลเชิงสัมพันธ์ แบ่งคำสั่งออกเป็น 2 กลุ่มใหญ่:\n              </p>\n              <div class=\"grid-2 mt-2\">\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-primary mb-1\">1. Data Definition Language (DDL)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    คำสั่งสำหรับ <strong>กำหนดและแก้ไขโครงสร้างตาราง (Schema)</strong> ในฐานข้อมูล:<br>\n                    • <code>CREATE</code> (สร้างตารางหรือฐานข้อมูล)<br>\n                    • <code>ALTER</code> (แก้ไขโครงสร้าง เช่น เพิ่มคอลัมน์)<br>\n                    • <code>DROP</code> (ลบตารางหรือฐานข้อมูลทิ้ง)<br>\n                    • <code>TRUNCATE</code> (ล้างข้อมูลทั้งหมดในตารางแต่คงโครงสร้างไว้)\n                  </p>\n                </div>\n\n                <div class=\"card-feature\">\n                  <span class=\"badge badge-success mb-1\">2. Data Manipulation Language (DML)</span>\n                  <p style=\"font-size:0.84rem; color:var(--text-muted); margin-top:4px;\">\n                    คำสั่งสำหรับ <strong>จัดการกับเนื้อหาข้อมูลภายในตาราง (Data)</strong>:<br>\n                    • <code>SELECT</code> (สืบค้นและดึงข้อมูลออกมาดู)<br>\n                    • <code>INSERT</code> (เพิ่มเรคอร์ดข้อมูลใหม่เข้าไปในตาราง)<br>\n                    • <code>UPDATE</code> (แก้ไขข้อมูลเดิมที่มีอยู่ในตาราง)<br>\n                    • <code>DELETE</code> (ลบเรคอร์ดข้อมูลที่ระบุออกจากตาราง)\n                  </p>\n                </div>\n              </div>\n            </div>\n\n            <!-- Concurrency Control & DBA & DBMS Selection -->\n            <div class=\"grid-3 mt-3\">\n              <div class=\"card-outline border-amber\">\n                <span class=\"badge badge-warning mb-2\">Concurrency Control (Slide 23)</span>\n                <h6>การควบคุมภาวะพร้อมกัน</h6>\n                <p style=\"font-size:0.82rem; color:var(--text-muted);\">\n                  เมื่อมีผู้ใช้หลายคนพยายามอัปเดตข้อมูลในเรคอร์ดเดียวกันพร้อมกันในเสี้ยววินาที ระบบ DBMS จะใช้กลไกการล็อก (Locks) เพื่อป้องกันข้อมูลทับซ้อนและหลีกเลี่ยงปัญหาความขัดแย้งของข้อมูล\n                </p>\n              </div>\n\n              <div class=\"card-outline border-green\">\n                <span class=\"badge badge-success mb-2\">Database Administration (Slide 25)</span>\n                <h6>หน้าที่ของ DBA</h6>\n                <p style=\"font-size:0.82rem; color:var(--text-muted);\">\n                  ร่วมมือกับผู้ใช้เพื่อตัดสินใจเนื้อหาของฐานข้อมูล และร่วมมือกับโปรแกรมเมอร์เพื่อให้แน่ใจว่าโปรแกรมปฏิบัติตามมาตรฐานและกฎเกณฑ์ของ DBMS รวมถึงดูแลความปลอดภัยและประสิทธิภาพ\n                </p>\n              </div>\n\n              <div class=\"card-outline border-purple\">\n                <span class=\"badge badge-purple mb-2\">Selecting DBMS (Slide 26-27)</span>\n                <h6>6 เกณฑ์ในการเลือก DBMS</h6>\n                <p style=\"font-size:0.82rem; color:var(--text-muted);\">\n                  1. ขนาดฐานข้อมูล (Size)<br>\n                  2. ต้นทุน (Cost)<br>\n                  3. ผู้ใช้พร้อมกัน (Concurrent users)<br>\n                  4. ประสิทธิภาพ (Performance)<br>\n                  5. การเชื่อมต่อ (Integration)<br>\n                  6. ผู้จำหน่าย (Vendor)\n                </p>\n              </div>\n            </div>\n            "
        },
        {
          "id": "ch5-warehouse-mining",
          "title": "9. คลังข้อมูล (Data Warehouse), Data Mart และการทำเหมืองข้อมูล (Data Mining)",
          "content": "\n            <div class=\"note-card\">\n              <h4>🏭 การวิเคราะห์ข้อมูลระดับองค์กร (Data Warehouses, Data Marts, and Data Mining - Slide 28-29)</h4>\n              <p>เครื่องมือสารสนเทศสำหรับสนับสนุนการตัดสินใจเชิงกลยุทธ์ของผู้บริหารระดับสูง:</p>\n            </div>\n\n            <div class=\"grid-3 mt-3\">\n              <div class=\"card-outline border-cyan\">\n                <span class=\"badge badge-info mb-2\">1. Data Warehouse (คลังข้อมูล)</span>\n                <h6>แหล่งรวมข้อมูลองค์กร</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  ฐานข้อมูลขนาดใหญ่ที่ <strong>รวบรวมข้อมูลประวัติศาสตร์ทางธุรกิจจากหลากหลายแหล่งทั่วทั้งองค์กร</strong> (เช่น ยอดขาย บัญชี สต็อก ข้อมูลคู่แข่ง) เพื่อใช้สนับสนุนการตัดสินใจของผู้บริหาร\n                </p>\n              </div>\n\n              <div class=\"card-outline border-amber\">\n                <span class=\"badge badge-warning mb-2\">2. Data Mart (คลังข้อมูลย่อย)</span>\n                <h6>คลังข้อมูลเฉพาะส่วนงาน</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  <strong>Subset of a Data Warehouse:</strong> คลังข้อมูลขนาดย่อยที่คัดแยกข้อมูลเฉพาะส่วนงานหรือแผนกใดแผนกหนึ่งโดยเฉพาะ เช่น Data Mart เฉพาะฝ่ายการตลาด, Data Mart ฝ่ายการเงิน เพื่อให้สืบค้นได้รวดเร็วขึ้น\n                </p>\n              </div>\n\n              <div class=\"card-outline border-green\">\n                <span class=\"badge badge-success mb-2\">3. Data Mining (การทำเหมืองข้อมูล)</span>\n                <h6>การค้นหา Insight อัตโนมัติ</h6>\n                <p style=\"font-size:0.84rem; color:var(--text-muted);\">\n                  เครื่องมือวิเคราะห์สารสนเทศที่ใช้ <strong>การค้นหารูปแบบ (Patterns) และความสัมพันธ์ที่ซ่อนอยู่ใต้ข้อมูลมหาศาลโดยอัตโนมัติ</strong> (Automated discovery of patterns) โดยใช้ AI และสถิติขั้นสูง\n                </p>\n              </div>\n            </div>\n\n            <!-- Slide 29 ETL Architecture -->\n            <div class=\"diagram-canvas mt-3\">\n              <div class=\"diagram-title-badge\">🔄 สถาปัตยกรรมกระบวนการ ETL ใน Data Warehouse (Slide 29 - Figure 5.17)</div>\n              <p style=\"font-size:0.88rem; color:var(--text-muted); margin-bottom:14px;\">\n                ขั้นตอนการรวบรวมและกลั่นกรองข้อมูลจากแหล่งต่าง ๆ เข้าสู่คลังข้อมูล:\n              </p>\n              <div class=\"steps-flow\">\n                <div class=\"step-box\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-primary mb-1\">ขั้นตอนที่ 1</span>\n                  <h6>Data Sources</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">\n                    • Relational DBs<br>\n                    • Flat files<br>\n                    • Spreadsheets\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-accent mb-1\">ขั้นตอนที่ 2</span>\n                  <h6>Extraction Process</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">\n                    ดึงข้อมูล (Extract) จากระบบปฏิบัติการประจำวัน\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\" style=\"flex:1.3;\">\n                  <span class=\"badge badge-warning mb-1\">ขั้นตอนที่ 3</span>\n                  <h6>Data Cleanup & Transform</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">\n                    ทำความสะอาดข้อมูล กำจัดค่าผิดพลาด แปลงรูปแบบให้ตรงกัน\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box active\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-success mb-1\">ขั้นตอนที่ 4</span>\n                  <h6>Data Warehouse</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">\n                    คลังข้อมูลส่วนกลางพร้อมใช้ในการวิเคราะห์\n                  </p>\n                </div>\n                <div class=\"step-arrow\">➔</div>\n                <div class=\"step-box\" style=\"flex:1.2;\">\n                  <span class=\"badge badge-purple mb-1\">ขั้นตอนที่ 5</span>\n                  <h6>End-User Tools</h6>\n                  <p style=\"font-size:0.8rem; color:var(--text-muted);\">\n                    Query, Reports, Data Mining, Dashboards\n                  </p>\n                </div>\n              </div>\n            </div>\n            "
        }
      ],
      "exercises": [
        {
          "slideRef": "สไลด์หน้า 2",
          "question": "คำถามหมายเลข 1 ถึง 5 ในตารางข้อมูลนักเรียนเรียกว่าอะไร?",
          "sampleAnswer": "แนวคำตอบ: 'หมายเลข 1 = Field Names (ชื่อเขตข้อมูล/หัวคอลัมน์), หมายเลข 2 = Primary Key (คีย์หลักที่ระบุแต่ละเรคอร์ด เช่น Student ID), หมายเลข 3 = Fields / Columns (คอลัมน์แนวตั้ง), หมายเลข 4 = Record / Rows (แถวแนวนอนที่เก็บข้อมูลครบทุกฟิลด์ของ 1 คน), หมายเลข 5 = Data Items / Cells (ค่าข้อมูลในแต่ละช่อง เช่น Philip, Barker)'"
        },
        {
          "slideRef": "สไลด์หน้า 15",
          "question": "โจทย์: จงเพิ่มประเภทสินค้า/เมนูเบเกอรี่ ประกอบด้วย รหัสประเภท ชื่อประเภท คำอธิบาย รูป พร้อมกับเชื่อมความสัมพันธ์",
          "sampleAnswer": "แนวคำตอบ: \"สร้างตารางใหม่ชื่อ Menu_Category (หรือ Category) ประกอบด้วยฟิลด์: Category_ID (PK), Category_Name (เช่น เค้ก, ขนมปัง, กาแฟ), Description, Image จากนั้นเชื่อมความสัมพันธ์แบบ One-to-Many (1:M) ไปยังตาราง Menu_Items โดยนำ Category_ID (PK) ของตารางประเภท ไปวางเป็น Foreign Key (FK) ในตาราง Menu_Items เพื่อระบุว่าเมนูขนมเบเกอรี่แต่ละชิ้นสังกัดประเภทใด\""
        }
      ]
    }
  ],
  "flashcards": [
    {
      "chapter": "Ch 2",
      "question": "Traditional vs Project Structure ต่างกันอย่างไร?",
      "answer": "Traditional แบ่งตามสายงานและลำดับชั้นพีระมิด ส่วน Project รวมทีมหลายสายงานมาทำผลิตภัณฑ์เฉพาะ มีความยืดหยุ่นและตัดสินใจได้เร็วกว่า"
    },
    {
      "chapter": "Ch 2",
      "question": "3 ขั้นตอนใน Change Model ของ Lewin มีอะไรบ้าง?",
      "answer": "1. Unfreezing (ละลายพฤติกรรมเดิม) 2. Moving (ปรับเปลี่ยนเรียนรู้ระบบใหม่) 3. Refreezing (แช่แข็งให้ระบบใหม่กลายเป็นงานปกติ)"
    },
    {
      "chapter": "Ch 2",
      "question": "Reengineering (BPR) ต่างจาก Continuous Improvement อย่างไร?",
      "answer": "Reengineering คือการรื้อและออกแบบกระบวนการใหม่ทั้งหมดแบบถอนรากถอนโคนเพื่อผลลัพธ์ก้าวกระโดด ส่วน Continuous Improvement คือการค่อย ๆ ปรับปรุงทีละเล็กละน้อยอย่างต่อเนื่อง"
    },
    {
      "chapter": "Ch 2",
      "question": "Value Chain กับ Supply Chain ต่างกันอย่างไร?",
      "answer": "Value Chain มุ่งสร้างคุณค่าให้ลูกค้าตลอดกระบวนการ ส่วน Supply Chain มุ่งจัดการการไหลเวียนของวัตถุดิบและสินค้าจากต้นทางสู่มือลูกค้า"
    },
    {
      "chapter": "Ch 2",
      "question": "เป้าหมายสูงสุดของระบบ CRM คืออะไร?",
      "answer": "ทำให้ลูกค้ามีความพึงพอใจสูงสุดจากการใช้สินค้าหรือบริการ และสร้างความภักดีต่อแบรนด์ในระยะยาว"
    },
    {
      "chapter": "Ch 3",
      "question": "Kernel ในระบบปฏิบัติการคืออะไร?",
      "answer": "แกนหลักของ OS ที่เชื่อมโยงส่วนประกอบทั้งหมดเข้าด้วยกัน และควบคุมการทำงานของโปรแกรมอื่น ๆ ตลอดเวลา"
    },
    {
      "chapter": "Ch 3",
      "question": "Multitasking กับ Time-sharing ต่างกันอย่างไร?",
      "answer": "Multitasking คือการที่คอมพิวเตอร์รันได้มากกว่าหนึ่งโปรแกรมพร้อมกัน ส่วน Time-sharing คือการอนุญาตให้คนมากกว่าหนึ่งคนใช้งานเครื่องพร้อมกัน"
    },
    {
      "chapter": "Ch 3",
      "question": "Open-source, Freeware, Shareware ต่างกันอย่างไร?",
      "answer": "Open-source แก้ไขโค้ดได้ / Freeware ใช้ฟรีแต่แก้โค้ดไม่ได้ / Shareware ให้ลองใช้ฟรีแบบจำกัดเวลาหรือตัดทอนฟังก์ชัน"
    },
    {
      "chapter": "Ch 3",
      "question": "Middleware คืออะไร?",
      "answer": "ซอฟต์แวร์ตัวกลางที่ช่วยให้ระบบและโปรแกรมที่แตกต่างกันสามารถสื่อสารและแลกเปลี่ยนข้อมูลกันได้ รวมถึงเชื่อมระบบเก่ากับอินเทอร์เน็ต"
    },
    {
      "chapter": "Ch 4",
      "question": "Herbert Simon แบ่งกระบวนการตัดสินใจเป็น 4 ขั้นตอนอะไรบ้าง?",
      "answer": "1. Intelligence (ค้นหาปัญหา) 2. Design (ออกแบบทางเลือก) 3. Choice (ตัดสินใจเลือก) 4. Implementation (นำไปปฏิบัติจริง)"
    },
    {
      "chapter": "Ch 4",
      "question": "ปัญหา Structured กับ Unstructured ต่างกันอย่างไร?",
      "answer": "Structured มีกฎและวิธีแก้แน่นอน คอมพิวเตอร์ตัดสินใจแทนได้ ส่วน Unstructured ซับซ้อน ไม่มีสูตรสำเร็จ ต้องพึ่งวิจารณญาณของผู้บริหาร"
    },
    {
      "chapter": "Ch 4",
      "question": "5 องค์ประกอบของสถาปัตยกรรม DSS มีอะไรบ้าง?",
      "answer": "1. Data (ข้อมูล) 2. Models (แบบจำลอง) 3. Knowledge (ความรู้) 4. User Interface (ส่วนต่อประสาน) 5. Users (ผู้ใช้งาน)"
    },
    {
      "chapter": "Ch 4",
      "question": "Sensitivity Analysis (What-if Analysis) คืออะไร?",
      "answer": "การทดลองปรับเปลี่ยนตัวแปรหรือเงื่อนไขต่าง ๆ ในแบบจำลอง DSS เพื่อดูว่าผลลัพธ์ของการตัดสินใจจะเปลี่ยนแปลงไปอย่างไร"
    },
    {
      "chapter": "Ch 5",
      "question": "Hierarchy of Data เรียงจากเล็กไปใหญ่ได้อย่างไร?",
      "answer": "Bit -> Byte (Character) -> Field -> Record -> File (Table) -> Database"
    },
    {
      "chapter": "Ch 5",
      "question": "DDL กับ DML ใน SQL ต่างกันอย่างไร?",
      "answer": "DDL กำหนดโครงสร้างตาราง (CREATE, ALTER, DROP) ส่วน DML จัดการเนื้อหาข้อมูล (SELECT, INSERT, UPDATE, DELETE)"
    },
    {
      "chapter": "Ch 5",
      "question": "Selecting กับ Projecting ต่างกันอย่างไร?",
      "answer": "Selecting คือการเลือกเฉพาะ 'แถว' (Rows) ตามเกณฑ์ ส่วน Projecting คือการเลือกเฉพาะ 'คอลัมน์' (Columns) ที่ต้องการ"
    },
    {
      "chapter": "Ch 5",
      "question": "กฎเหล็กการวาง PK / FK ในความสัมพันธ์ 1:M คืออะไร?",
      "answer": "ต้องนำ Primary Key (PK) ของฝั่ง 1 ไปวางเป็น Foreign Key (FK) ในตารางฝั่ง Many (M) เสมอ!"
    },
    {
      "chapter": "Ch 5",
      "question": "ความสัมพันธ์แบบ Many-to-Many (M:M) แก้ไขใน RDBMS อย่างไร?",
      "answer": "ไม่สามารถเชื่อมตรงๆ ได้ ต้องสร้าง 'ตารางเชื่อม (Junction Table)' คั่นกลาง แล้วเปลี่ยนเป็นความสัมพันธ์ 1:M สองเส้นวิ่งเข้าหาตารางเชื่อม"
    },
    {
      "chapter": "Ch 5",
      "question": "สัญลักษณ์ขาเป็ด (Crow's Foot) ใน ER Diagram หมายถึงอะไร?",
      "answer": "แทนความหมายว่า 'Many' (ฝั่งที่มีได้หลายรายการ) ส่วนเส้นตรงขีดเดียวแทน 'One'"
    },
    {
      "chapter": "Ch 5",
      "question": "จากโจทย์หน้า 15 การเพิ่มตาราง Category ต้องเชื่อมกับตารางใด และส่งคีย์อย่างไร?",
      "answer": "เชื่อมกับตาราง Products แบบ 1:M โดยนำ Category_ID (PK) ไปเป็น Foreign Key (FK) ในตาราง Products"
    },
    {
      "chapter": "Ch 4",
      "question": "ความแตกต่างระหว่าง Decision Making กับ Problem Solving ใน Simon's Model คืออะไร?",
      "answer": "Decision Making ครอบคลุม 3 ขั้นแรก (Intelligence, Design, Choice) ส่วน Problem Solving ครอบคลุมทั้งวงจร (Decision Making + Implementation + Monitoring)"
    },
    {
      "chapter": "Ch 2",
      "question": "B2B (Business-to-Business) คืออะไร พร้อมยกตัวอย่าง?",
      "answer": "การซื้อขายระหว่างธุรกิจกับธุรกิจ เช่น Alibaba.com, โรงงานขายส่งวัตถุดิบให้บริษัท, Makro ขายส่งให้ร้านอาหาร ยอดสั่งซื้อครั้งละจำนวนมาก"
    },
    {
      "chapter": "Ch 2",
      "question": "B2C (Business-to-Consumer) คืออะไร พร้อมยกตัวอย่าง?",
      "answer": "ธุรกิจขายสินค้าหรือบริการให้ผู้บริโภครายบุคคลโดยตรง เช่น Shopee, Lazada, Amazon, Apple Store สั่งซื้อของส่วนตัว"
    },
    {
      "chapter": "Ch 2",
      "question": "C2C (Consumer-to-Consumer) คืออะไร พร้อมยกตัวอย่าง?",
      "answer": "ผู้บริโภคซื้อขายแลกเปลี่ยนสินค้ากันเอง มักเป็นสินค้ามือสอง เช่น Kaidee (ขายดี), Facebook Marketplace, กลุ่มส่งต่อของ"
    },
    {
      "chapter": "Ch 2",
      "question": "B2G (Business-to-Government) คืออะไร พร้อมยกตัวอย่าง?",
      "answer": "ธุรกิจเอกชนขายสินค้าหรือให้บริการแก่หน่วยงานภาครัฐ เช่น การประมูลโครงการจัดซื้อจัดจ้างภาครัฐผ่านระบบ e-GP"
    },
    {
      "chapter": "Ch 2",
      "question": "C2G (Consumer-to-Government) คืออะไร พร้อมยกตัวอย่าง?",
      "answer": "ประชาชนติดต่อ ชำระภาษี หรือทำธุรกรรมออนไลน์กับหน่วยงานรัฐ เช่น การยื่นภาษี E-filing กรมสรรพากร, ต่อภาษีรถยนต์ DLT"
    }
  ],
  "quizzes": [
    {
      "id": 1,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "โครงสร้างองค์กรแบบใดที่มีความยืดหยุ่นสูง มีทีมงานจากหลายสายงานมาร่วมกัน และสามารถยุบทีมได้เมื่องานเสร็จสิ้น?",
      "options": [
        "Traditional Organizational Structure",
        "Project and Team Organizational Structure",
        "Hierarchical Structure",
        "Bureaucratic Structure"
      ],
      "correctIndex": 1,
      "explanation": "Project and Team Structure เน้นที่ตัวผลิตภัณฑ์หรือบริการ โดยรวมผู้เชี่ยวชาญจากหลายแผนก (การเงิน, ผลิต, ขาย) มาร่วมทีม เป็นทีมชั่วคราวหรือถาวร ทำให้ประสานงานและตัดสินใจได้รวดเร็วกว่าแบบดั้งเดิม"
    },
    {
      "id": 2,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ขั้นตอนแรกในแบบจำลองการเปลี่ยนแปลง (Change Model) ของ Kurt Lewin คือข้อใด?",
      "options": [
        "Moving",
        "Refreezing",
        "Unfreezing",
        "Reengineering"
      ],
      "correctIndex": 2,
      "explanation": "ขั้นตอนแรกคือ Unfreezing (การละลายพฤติกรรมเดิม) เพื่อเปิดใจกว้างและเตรียมความพร้อมของคนในองค์กรต่อการเปลี่ยนแปลง ก่อนจะก้าวสู่ Moving และ Refreezing"
    },
    {
      "id": 3,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "การออกแบบกระบวนการทางธุรกิจ โครงสร้างองค์กร และค่านิยมใหม่แบบ 'ถอนรากถอนโคน' เพื่อให้ได้ผลลัพธ์ก้าวกระโดด เรียกว่าอะไร?",
      "options": [
        "Continuous Improvement",
        "Reengineering (BPR)",
        "Kaizen",
        "Refreezing"
      ],
      "correctIndex": 1,
      "explanation": "Reengineering (BPR) คือ Radical redesign of business processes เพื่อสร้างผลลัพธ์ที่ก้าวกระโดด ต่างจาก Continuous Improvement ที่เป็นการค่อย ๆ ปรับปรุงทีละเล็กละน้อย"
    },
    {
      "id": 4,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ระบบ CRM (Customer Relationship Management) มีเป้าหมายสูงสุดคือข้อใด?",
      "options": [
        "ลดจำนวนพนักงานขายในบริษัทให้น้อยที่สุด",
        "ทำให้ลูกค้ามีความพึงพอใจสูงสุดจากการใช้สินค้าหรือบริการ",
        "ลดภาษีนำเข้าวัตถุดิบจากต่างประเทศ",
        "ควบคุมการผลิตในโรงงานให้ตรงตามเวลา"
      ],
      "correctIndex": 1,
      "explanation": "เป้าหมายหลักของ CRM คือการบริหารความสัมพันธ์และทำให้ลูกค้าเกิดความพึงพอใจสูงสุด ช่วยเก็บข้อมูล วิเคราะห์พฤติกรรม และนำเสนอสิ่งที่ตรงใจลูกค้า"
    },
    {
      "id": 5,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ตำแหน่งใดในสายงาน IS ที่ทำหน้าที่เป็นตัวกลางในการเก็บ Requirement จากฝ่ายธุรกิจ แล้วแปลงเป็นข้อกำหนดเชิงระบบเพื่อส่งต่อให้โปรแกรมเมอร์?",
      "options": [
        "System Administrator",
        "Data Analyst",
        "Business Analyst (BA)",
        "Database Administrator (DBA)"
      ],
      "correctIndex": 2,
      "explanation": "Business Analyst (BA) มีหน้าที่วิเคราะห์ความต้องการทางธุรกิจของลูกค้า/ผู้บริหาร และสื่อสารแปลงเป็นสเปกเชิงระบบให้ทีมพัฒนาทำงานต่อได้อย่างถูกต้อง"
    },
    {
      "id": 6,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ข้อใดคือความแตกต่างหลักระหว่าง ห่วงโซ่คุณค่า (Value Chain) และ ห่วงโซ่อุปทาน (Supply Chain)?",
      "options": [
        "Value Chain เน้นการเคลื่อนย้ายวัตถุดิบ ส่วน Supply Chain เน้นการตลาด",
        "Value Chain มุ่งเน้นการสร้างคุณค่าให้ลูกค้าในทุกขั้นตอน ส่วน Supply Chain มุ่งเน้นการจัดการการไหลเวียนของสินค้าและวัตถุดิบ",
        "Value Chain ใช้กับโรงงานเท่านั้น ส่วน Supply Chain ใช้กับร้านค้าปลีก",
        "ทั้งสองคำมีความหมายและขอบเขตเหมือนกันทุกประการ"
      ],
      "correctIndex": 1,
      "explanation": "Value Chain เน้นสร้างคุณค่า (Value) ให้ลูกค้าประทับใจตลอดกระบวนการ ส่วน Supply Chain เน้นการบริหาร Flow วัตถุดิบและสินค้าให้ไปถึงมือผู้บริโภคได้อย่างมีประสิทธิภาพและต้นทุนต่ำสุด"
    },
    {
      "id": 7,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ข้อใดกล่าวถึงโครงสร้างองค์กรแบบดั้งเดิม (Traditional Organizational Structure) ได้ถูกต้อง?",
      "options": [
        "ไม่มีสายการบังคับบัญชา ทุกคนมีอำนาจเท่ากัน",
        "เป็นโครงสร้างลำดับชั้น (Hierarchical) หัวหน้าแผนกรายงานต่อผู้บริหารระดับสูง",
        "จัดตั้งขึ้นเพื่อทำงานโครงการระยะสั้นเท่านั้น",
        "เน้นการทำงานข้ามแผนกโดยไม่มีการแบ่งฝ่าย"
      ],
      "correctIndex": 1,
      "explanation": "Traditional Structure เป็นโครงสร้างแบบพีระมิดตามลำดับชั้น แบ่งตามแผนกหน้าที่ และรายงานขึ้นตรงต่อผู้บังคับบัญชาระดับสูง"
    },
    {
      "id": 8,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ในแบบจำลองการเปลี่ยนแปลงของ Lewin ขั้นตอนใดคือการทำให้กระบวนการใหม่กลายเป็น 'ธรรมชาติ' และเป็นส่วนหนึ่งของงานประจำวัน?",
      "options": [
        "Unfreezing",
        "Moving",
        "Refreezing",
        "Reengineering"
      ],
      "correctIndex": 2,
      "explanation": "Refreezing (แช่แข็งใหม่อีกครั้ง) คือการเสริมแรงให้พฤติกรรมใหม่กลายเป็นนิสัยถาวร (Second nature) และเป็นมาตรฐานใหม่ของงาน"
    },
    {
      "id": 9,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ข้อใดต่อไปนี้จัดเป็นความเสี่ยง (Risk) สำคัญในการนำระบบสารสนเทศใหม่เข้ามาใช้งานในองค์กร?",
      "options": [
        "พนักงานต่อต้านการเปลี่ยนแปลงและไม่ยอมใช้งานระบบใหม่ (User Resistance)",
        "ต้นทุนการพัฒนาอาจบานปลายมากกว่าผลตอบแทนที่จะได้รับ",
        "ความเสี่ยงเรื่องระบบล่มหรือข้อมูลรั่วไหล",
        "ถูกทุกข้อ"
      ],
      "correctIndex": 3,
      "explanation": "การเริ่มนำระบบ IS มาใช้มีความเสี่ยงรอบด้าน ทั้งด้านคน (ต่อต้านการเปลี่ยนแปลง), ด้านการเงิน (ต้นทุนเกินงบ), และด้านเทคนิค/ความปลอดภัย"
    },
    {
      "id": 10,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "บริษัท Amazon ใช้ระบบ CRM มาช่วยสนับสนุนธุรกิจในด้านใดที่เด่นชัดที่สุดในสไลด์?",
      "options": [
        "จัดการข้อมูลลูกค้าและประวัติการซื้อเพื่อแนะนำสินค้าที่ตรงใจ (Recommendation)",
        "ผลิตหุ่นยนต์ส่งของอัตโนมัติ",
        "คำนวณเงินเดือนพนักงานคลังสินค้า",
        "ตรวจสอบภาษีนำเข้าสินค้า"
      ],
      "correctIndex": 0,
      "explanation": "สไลด์ระบุว่า Amazon ใช้ CRM เพื่อจัดการข้อมูลลูกค้า ประวัติการซื้อ และแนะนำสินค้าที่ตรงกับความสนใจของลูกค้ารายบุคคล"
    },
    {
      "id": 11,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "สายอาชีพใดที่เน้นการออกแบบประสบการณ์ผู้ใช้ (User Experience) และหน้าตาระบบให้ใช้งานง่ายและสวยงาม?",
      "options": [
        "Database Administrator (DBA)",
        "UX/UI Designer",
        "System Administrator",
        "Network Engineer"
      ],
      "correctIndex": 1,
      "explanation": "UX/UI Designer มีหน้าที่ออกแบบ Interface และ Flow ประสบการณ์การใช้งานของระบบให้สะดวก รวดเร็ว และสวยงาม"
    },
    {
      "id": 12,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "สายอาชีพใดที่มีหน้าที่ดูแลความปลอดภัยของระบบ ป้องกันการโจมตีจากแฮกเกอร์ และตรวจสอบช่องโหว่ของข้อมูล?",
      "options": [
        "Information Security Specialist",
        "Web Programmer",
        "Business Analyst",
        "Data Entry"
      ],
      "correctIndex": 0,
      "explanation": "Information Security Specialist รับผิดชอบด้านความมั่นคงปลอดภัยไซเบอร์ ป้องกันการบุกรุกและดูแลรักษาความลับของข้อมูลองค์กร"
    },
    {
      "id": 13,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "การที่องค์กรธุรกิจเปลี่ยนจากการ 'รอให้ลูกค้าเดินเข้ามาซื้อที่หน้าร้าน' มาเป็นการ 'โทรศัพท์หรือติดต่อหาลูกค้าโดยตรงเชิงรุก' จัดเป็นการตอบสนองแบบใด?",
      "options": [
        "Traditional Business Approach",
        "Proactive Strategic Approach (กลยุทธ์เชิงรุก)",
        "Unstructured Strategy",
        "Kaizen Strategy"
      ],
      "correctIndex": 1,
      "explanation": "การติดต่อลูกค้าโดยตรง นำเสนอโปรโมชั่นเฉพาะบุคคล และนำระบบอัตโนมัติมาใช้ จัดเป็นการดำเนินธุรกิจแบบกลยุทธ์เชิงรุก (Proactive Strategy)"
    },
    {
      "id": 14,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems in Organizations",
      "question": "ใครคือผู้รับผิดชอบสูงสุดในการบริหารเวลา งบประมาณ และทรัพยากรเพื่อให้โครงการสารสนเทศสำเร็จตามเป้าหมาย?",
      "options": [
        "Project Manager (ผู้จัดการโครงการ)",
        "Web Programmer",
        "Data Analyst",
        "UI Designer"
      ],
      "correctIndex": 0,
      "explanation": "Project Manager (PM) ทำหน้าที่วางแผน ควบคุมงบประมาณ จัดสรรทีมงาน และบริหารความเสี่ยงเพื่อให้โปรเจกต์ส่งมอบได้ทันเวลา"
    },
    {
      "id": 15,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ส่วนที่สำคัญที่สุดของระบบปฏิบัติการ (OS) ซึ่งทำหน้าที่เป็นแก่นควบคุมและเชื่อมประสานส่วนประกอบทั้งหมดเข้าด้วยกัน เรียกว่าอะไร?",
      "options": [
        "Shell",
        "Kernel",
        "Compiler",
        "BIOS"
      ],
      "correctIndex": 1,
      "explanation": "Kernel คือแก่นของระบบปฏิบัติการ (Ties all components of the OS together and regulates other programs) ช่วยในการติดต่อและควบคุมการทำงานทั้งหมด"
    },
    {
      "id": 16,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ความสามารถของระบบปฏิบัติการในการรันโปรแกรมมากกว่าหนึ่งโปรแกรมในเวลาเดียวกัน เรียกว่าอะไร?",
      "options": [
        "Multitasking",
        "Time-sharing",
        "Scalability",
        "Hardware Independence"
      ],
      "correctIndex": 0,
      "explanation": "Multitasking คือ More than one program can run at the same time ในขณะที่ Time-sharing คือการอนุญาตให้ผู้ใช้มากกว่าหนึ่งคนใช้งานพร้อมกัน"
    },
    {
      "id": 17,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ซอฟต์แวร์ประเภทใดที่ให้ดาวน์โหลดทดลองใช้งานฟรี แต่มีการจำกัดเวลา หรือปิดกั้นฟังก์ชันบางอย่างจนกว่าจะชำระเงินซื้อตัวเต็ม?",
      "options": [
        "Freeware",
        "Open-source Software",
        "Shareware",
        "Public Domain"
      ],
      "correctIndex": 2,
      "explanation": "Shareware เป็นซอฟต์แวร์ที่ให้ทดลองใช้ฟรีในช่วงเวลาจำกัด (Trial) หรือจำกัดฟังก์ชัน เมื่อหมดเวลาต้องจ่ายเงินซื้อลิขสิทธิ์ ไม่สามารถแก้ไข Source Code ได้"
    },
    {
      "id": 18,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "Middleware มีหน้าที่สำคัญอย่างไรในระบบสารสนเทศ?",
      "options": [
        "ลบไฟล์ขยะและจัดเรียงข้อมูลในฮาร์ดดิสก์",
        "เป็นตัวกลางช่วยให้ระบบที่ต่างกันสามารถสื่อสารและแลกเปลี่ยนข้อมูลกันได้",
        "ออกแบบหน้าตาของแอปพลิเคชันให้สวยงาม",
        "สำรองข้อมูลลงคลาวด์โดยอัตโนมัติ"
      ],
      "correctIndex": 1,
      "explanation": "Middleware คือ Software that allows different systems to communicate and exchange data รวมถึงเชื่อมโยงระบบเก่า (Legacy system) เข้ากับระบบอินเทอร์เน็ตใหม่"
    },
    {
      "id": 19,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ซอฟต์แวร์ ERP (Enterprise Resource Planning) จัดเป็นซอฟต์แวร์ประยุกต์ประเภทใด?",
      "options": [
        "Personal Application Software",
        "Workgroup Application Software",
        "Enterprise Application Software",
        "System Utility Software"
      ],
      "correctIndex": 2,
      "explanation": "ERP เป็น Enterprise Application Software ที่จัดการและเชื่อมโยงข้อมูลการดำเนินงานที่สำคัญทั้งหมดของทั้งองค์กร (Global organization)"
    },
    {
      "id": 20,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ข้อใดไม่ใช่ตัวอย่างของโปรแกรมอรรถประโยชน์ (Utility Programs)?",
      "options": [
        "โปรแกรมสแกนไวรัส (Security Utility)",
        "โปรแกรมบีบอัดไฟล์ (File-compression utility)",
        "โปรแกรม Microsoft Excel",
        "โปรแกรมบล็อกสแปม (Spam and pop-up blocker)"
      ],
      "correctIndex": 2,
      "explanation": "Microsoft Excel จัดเป็น Personal Application Software (Spreadsheet) ส่วนโปรแกรมสแกนไวรัส บีบอัดไฟล์ และบล็อกสแปมจัดเป็น Utility Programs"
    },
    {
      "id": 21,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "User Interface แบบใดที่ต้องป้อนคำสั่งด้วยข้อความ (Text commands) ผ่านคีย์บอร์ดเพื่อสั่งงานคอมพิวเตอร์?",
      "options": [
        "GUI (Graphical User Interface)",
        "Command-based user interface (CLI)",
        "Touch-screen Interface",
        "Voice User Interface"
      ],
      "correctIndex": 1,
      "explanation": "Command-based user interface (CLI) กำหนดให้ผู้ใช้ต้องพิมพ์คำสั่งแบบ Text-based เพื่อทำงาน แตกต่างจาก GUI ที่ใช้ไอคอนและเมนู"
    },
    {
      "id": 22,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "API (Application Program Interface) มีบทบาทสำคัญอย่างไรต่อระบบปฏิบัติการ?",
      "options": [
        "ช่วยให้แอปพลิเคชันเรียกใช้งานฟังก์ชันของระบบปฏิบัติการได้โดยไม่ต้องขึ้นกับฮาร์ดแวร์โดยตรง (Hardware Independence)",
        "ใช้สำหรับเพิ่มความจุของแรมในเครื่อง",
        "ใช้สแกนหาข้อผิดพลาดในฮาร์ดดิสก์",
        "ใช้แปลงโค้ดภาษาไทยเป็นภาษาอังกฤษ"
      ],
      "correctIndex": 0,
      "explanation": "API ช่วยเชื่อมประสานให้ซอฟต์แวร์ประยุกต์สามารถเรียกใช้ความสามารถของ OS ได้อย่างเป็นมาตรฐาน ทำให้เกิด Hardware Independence"
    },
    {
      "id": 23,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ความสามารถของคอมพิวเตอร์ในการรองรับจำนวนผู้ใช้งานพร้อมกันที่เพิ่มขึ้นได้อย่างราบรื่น เรียกว่าอะไร?",
      "options": [
        "Multitasking",
        "Scalability (ความสามารถในการขยายขนาด)",
        "Time-sharing",
        "Memory paging"
      ],
      "correctIndex": 1,
      "explanation": "Scalability คือ Ability of the computer to handle an increasing number of concurrent users smoothly"
    },
    {
      "id": 24,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ข้อใดเป็นคุณลักษณะเด่นของ Open-Source Software?",
      "options": [
        "ต้องจ่ายค่าลิขสิทธิ์รายเดือนเสมอ",
        "ผู้ใช้สามารถเข้าถึง ตรวจสอบ แก้ไข และปรับปรุง Source Code ได้อย่างเสรี",
        "ห้ามนำไปใช้งานในเชิงพาณิชย์เด็ดขาด",
        "ไม่มีทางมีข้อผิดพลาดหรือบั๊กเลย"
      ],
      "correctIndex": 1,
      "explanation": "Open-Source Software เปิดเผยซอร์สโค้ดให้ทุกคนสามารถตรวจสอบ แก้ไข และปรับปรุงต่อยอดได้ เช่น ระบบปฏิบัติการ Linux"
    },
    {
      "id": 25,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "Freeware แตกต่างจาก Open-Source Software อย่างไร?",
      "options": [
        "Freeware ใช้งานฟรี แต่ไม่สามารถแก้ไขซอร์สโค้ดได้",
        "Freeware ต้องจ่ายเงินซื้อหลังจากทดลองใช้ 30 วัน",
        "Freeware แก้ไขซอร์สโค้ดได้อิสระกว่า",
        "ไม่มีความแตกต่างกันเลย"
      ],
      "correctIndex": 0,
      "explanation": "Freeware ให้ใช้ฟรีโดยไม่มีค่าใช้จ่ายและไม่มีกำหนดเวลา แต่เจ้าของสงวนลิขสิทธิ์และไม่เปิดเผยซอร์สโค้ดให้แก้ไข"
    },
    {
      "id": 26,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ซอฟต์แวร์ประเภท Groupware ถูกออกแบบมาเพื่อวัตถุประสงค์ใดเป็นหลัก?",
      "options": [
        "ตัดต่อวิดีโอระดับมืออาชีพ",
        "ช่วยให้กลุ่มบุคคลสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพและประสิทธิผล (Support teamwork)",
        "ดูแลและกู้คืนข้อมูลในฮาร์ดดิสก์",
        "จัดเก็บภาษีส่วนบุคคล"
      ],
      "correctIndex": 1,
      "explanation": "Groupware เป็น Workgroup Application Software ที่ช่วยสนับสนุนการทำงานร่วมกันเป็นทีม ไม่ว่าจะอยู่ที่เดียวกันหรือกระจายตัวอยู่ทั่วโลก"
    },
    {
      "id": 27,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "Service-Oriented Architecture (SOA) นำมาใช้ในระบบเพื่อประโยชน์ใด?",
      "options": [
        "ช่วยให้แอปพลิเคชันแบบแยกส่วน (Modular services) สามารถโต้ตอบและทำงานร่วมกันได้",
        "ลดการใช้พลังงานไฟฟ้าของเครื่องคอมพิวเตอร์",
        "เปลี่ยนระบบปฏิบัติการให้เป็นแบบ CLI ทั้งหมด",
        "ป้องกันคอมพิวเตอร์จากไวรัสโดยไม่ต้องติดตั้งโปรแกรม"
      ],
      "correctIndex": 0,
      "explanation": "SOA Uses modular application services to allow users and systems to interact with each other ช่วยให้ระบบต่าง ๆ สื่อสารและทำงานร่วมกันได้ง่ายขึ้น"
    },
    {
      "id": 28,
      "chapterId": "ch3",
      "chapterTitle": "Chapter 3: Software: Systems and Application Software",
      "question": "ข้อใดไม่ใช่เหตุผลที่บริษัทซอฟต์แวร์ต้องมีการอัปเกรดซอฟต์แวร์ (Software Upgrades) เป็นระยะ?",
      "options": [
        "เพื่อแก้ไขข้อผิดพลาด (Bugs หรือ Errors) ในเวอร์ชันเดิม",
        "เพื่อเพิ่มความสามารถและฟังก์ชันการทำงานใหม่ ๆ",
        "เพื่อให้ซอฟต์แวร์เก่าใช้งานไม่ได้โดยไม่มีเหตุผล",
        "เพื่อปรับปรุงความปลอดภัยและรองรับฮาร์ดแวร์รุ่นใหม่"
      ],
      "correctIndex": 2,
      "explanation": "การอัปเกรดซอฟต์แวร์มีวัตถุประสงค์เพื่อแก้บั๊ก เพิ่มฟังก์ชันใหม่ เพิ่มความปลอดภัย และรองรับเทคโนโลยีใหม่ ไม่ใช่ทำให้ใช้ไม่ได้โดยไร้เหตุผล"
    },
    {
      "id": 29,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ตามแบบจำลองของ Herbert Simon กระบวนการตัดสินใจขั้นตอนใดที่เน้นการ 'ค้นหาและวิเคราะห์ทางเลือกต่าง ๆ พร้อมสร้างแบบจำลอง'?",
      "options": [
        "Intelligence",
        "Design",
        "Choice",
        "Implementation"
      ],
      "correctIndex": 1,
      "explanation": "ขั้นตอน Design คือการคิดค้น พัฒนา และวิเคราะห์ทางเลือกในการแก้ปัญหา (Creativity, Finding alternatives, Analyzing solutions)"
    },
    {
      "id": 30,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "การตัดสินใจเกี่ยวกับ 'การสั่งซื้อสินค้าเข้าสต็อกตามจุดสั่งซื้อซ้ำ (Reorder Point)' จัดเป็นการตัดสินใจประเภทใด?",
      "options": [
        "Structured Decision (แบบโครงสร้าง)",
        "Unstructured Decision (แบบไม่มีโครงสร้าง)",
        "Semi-structured Decision (แบบกึ่งโครงสร้าง)",
        "Heuristic Decision"
      ],
      "correctIndex": 0,
      "explanation": "Structured Decision เป็นการตัดสินใจเกี่ยวกับปัญหาประจำที่มีเงื่อนไข กฎเกณฑ์ และขั้นตอนการคำนวณที่ชัดเจนตายตัว สามารถเขียนโปรแกรมอัตโนมัติจัดการได้"
    },
    {
      "id": 31,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ปัญหาประเภทใดที่ผู้บริหารระดับสูงต้องใช้ 'สัญชาตญาณ ประสบการณ์ และวิจารณญาณส่วนตัว' ในการตัดสินใจเป็นหลัก เนื่องจากไม่มีสูตรสำเร็จตายตัว?",
      "options": [
        "Structured Decision",
        "Unstructured Decision",
        "Routine Problem",
        "Programmed Decision"
      ],
      "correctIndex": 1,
      "explanation": "Unstructured Decision เป็นปัญหาที่ไม่มีโครงสร้างชัดเจน ซับซ้อน และคาดเดาได้ยาก เช่น การวางแผนยุทธศาสตร์ใหม่ หรือการวิจัยผลิตภัณฑ์พลิกวงการ จึงต้องพึ่งพาวิจารณญาณของมนุษย์เป็นหลัก"
    },
    {
      "id": 32,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ข้อใดไม่ใช่ 1 ใน 5 องค์ประกอบของสถาปัตยกรรม DSS?",
      "options": [
        "Data (ข้อมูล)",
        "Models (แบบจำลอง)",
        "Hardware Assembler (ตัวแปลภาษาเครื่อง)",
        "User Interface (ส่วนต่อประสานกับผู้ใช้)"
      ],
      "correctIndex": 2,
      "explanation": "สถาปัตยกรรม DSS 5 ส่วนประกอบด้วย: 1. ข้อมูล (Data) 2. โมเดล (Models) 3. ความรู้ (Knowledge) 4. ส่วนติดต่อกับผู้ใช้ (User Interface) และ 5. ผู้ใช้ (Users)"
    },
    {
      "id": 33,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ฟังก์ชัน Sensitivity Analysis ในระบบ DSS มีประโยชน์อย่างไร?",
      "options": [
        "ช่วยสแกนไวรัสในไฟล์ฐานข้อมูล",
        "ช่วยให้ผู้ใช้ทดลองปรับเปลี่ยนเงื่อนไขหรือตัวแปรต่าง ๆ เพื่อดูผลกระทบต่อผลลัพธ์ (What-if Analysis)",
        "ช่วยตรวจสอบคำสะกดผิดในเอกสาร",
        "ช่วยคำนวณเงินเดือนพนักงานอัตโนมัติ"
      ],
      "correctIndex": 1,
      "explanation": "Sensitivity Analysis ช่วยวิเคราะห์ความอ่อนไหว โดยจำลองว่าหากตัวแปรหรือสภาพแวดล้อมเปลี่ยนไป ผลลัพธ์ของการตัดสินใจจะเปลี่ยนไปอย่างไร ทำให้รับมือกับความไม่แน่นอนได้ดีขึ้น"
    },
    {
      "id": 34,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ขั้นตอนแรกในกระบวนการตัดสินใจของ Simon คือข้อใด?",
      "options": [
        "Choice",
        "Design",
        "Intelligence",
        "Implementation"
      ],
      "correctIndex": 2,
      "explanation": "Intelligence คือขั้นตอนแรกสุดในการตรวจสอบสแกนสภาพแวดล้อม ค้นหาปัญหา หรือระบุโอกาสทางธุรกิจ"
    },
    {
      "id": 35,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ข้อใดคือตัวอย่างของปัญหาแบบกึ่งโครงสร้าง (Semi-structured Decisions)?",
      "options": [
        "การคำนวณภาษีเงินได้ตามอัตราก้าวหน้า",
        "การวางแผนจัดโปรโมชั่นการตลาดหรือการวางแผนงบประมาณลงทุน",
        "การเบิกเงินสดจากตู้ ATM",
        "การพิมพ์ใบเสร็จรับเงิน"
      ],
      "correctIndex": 1,
      "explanation": "การวางแผนงบประมาณหรือโปรโมชั่นเป็นปัญหาแบบกึ่งโครงสร้าง เพราะมีข้อมูลตัวเลขให้คำนวณได้บางส่วน แต่ต้องใช้วิจารณญาณของผู้บริหารประเมินสภาวะตลาดร่วมด้วย"
    },
    {
      "id": 36,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "เครื่องมือทางเทคโนโลยีชนิดใดที่ช่วยให้ผู้บริหารสามารถวิเคราะห์ข้อมูลในมุมมองหลายมิติ (Multidimensional) ได้อย่างรวดเร็ว?",
      "options": [
        "OLAP (Online Analytical Processing)",
        "Compiler",
        "Antivirus",
        "Disk Defragmenter"
      ],
      "correctIndex": 0,
      "explanation": "OLAP เป็นเครื่องมือสำคัญของระบบ BI ที่ช่วยให้วิเคราะห์ข้อมูลแบบหลายมิติและทำ ad-hoc reporting ได้อย่างคล่องตัว"
    },
    {
      "id": 37,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ข้อใดคือสาเหตุสำคัญที่ทำให้การตัดสินใจในโลกธุรกิจปัจจุบันทำได้ยากขึ้น?",
      "options": [
        "ข้อมูลมีปริมาณมหาศาลและการแข่งขันสูง",
        "ความต้องการของผู้บริโภคเปลี่ยนแปลงอย่างรวดเร็วและคาดเดาได้ยาก",
        "กฎระเบียบของรัฐและความไม่แน่นอนทางการเมือง",
        "ถูกทุกข้อ"
      ],
      "correctIndex": 3,
      "explanation": "สไลด์ระบุชัดเจนว่า เทคโนโลยี ตลาดโลก การเปลี่ยนแปลงของผู้บริโภค กฎหมาย และความรวดเร็วที่ต้องใช้ตัดสินใจ ล้วนทำให้การตัดสินใจยากและซับซ้อนขึ้น"
    },
    {
      "id": 38,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "คุณลักษณะเด่นของระบบ DSS ที่เปิดโอกาสให้ผู้บริหารสามารถสนทนา สอบถาม และโต้ตอบกับระบบได้ทันที เรียกว่าอะไร?",
      "options": [
        "Batch processing",
        "Interactive (การโต้ตอบได้)",
        "Unidirectional",
        "Passive listening"
      ],
      "correctIndex": 1,
      "explanation": "DSS มีคุณสมบัติเด่นคือ Interactive (โต้ตอบได้) ทำให้ผู้ใช้สามารถป้อนเงื่อนไขและดูผลลัพธ์เพื่อนำไปกำหนดกลยุทธ์ได้ทันที"
    },
    {
      "id": 39,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ในยุค 2017 เป็นต้นมา แนวโน้มสำคัญของระบบ Business Intelligence คืออะไร?",
      "options": [
        "Augmented Analytics ที่ใช้ Machine Learning และ Natural Language Generation เข้ามาช่วยสร้าง Insight อัตโนมัติ",
        "การกลับไปใช้การจดบันทึกบนกระดาษ",
        "การยกเลิกระบบ Cloud ทั้งหมด",
        "การหยุดพัฒนาระบบอัตโนมัติ"
      ],
      "correctIndex": 0,
      "explanation": "Gartner ระบุว่า Augmented analytics (การนำ Machine learning และ AI มาสร้าง insight อัตโนมัติ) และ Cloud BI คือทิศทางหลักในปัจจุบัน"
    },
    {
      "id": 40,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "ความหมายของการจัดการ (Management) ตามสไลด์บทเรียนคือข้อใด?",
      "options": [
        "กระบวนการที่จะทำให้องค์กรบรรลุเป้าหมาย",
        "การลงโทษพนักงานที่ทำผิดกฎ",
        "การลดเงินเดือนพนักงานเพื่อประหยัดต้นทุน",
        "การซื้อคอมพิวเตอร์ใหม่ให้ทุกคน"
      ],
      "correctIndex": 0,
      "explanation": "การจัดการ (Management) คือกระบวนการที่จะทำให้องค์กรบรรลุเป้าหมายที่กำหนดไว้อย่างมีประสิทธิภาพ"
    },
    {
      "id": 41,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "โมเดลสนับสนุนการตัดสินใจแบบอัตโนมัติ (Automated Decision Support Framework) มีองค์ประกอบหลักตามลำดับการทำงานอย่างไร?",
      "options": [
        "Output ➔ Process ➔ Input",
        "Input (Technology, Theories, AI) ➔ Process (Business rules, Automated system) ➔ Output (Customized, Standard)",
        "Process ➔ Output ➔ Input",
        "Database ➔ Interface ➔ User"
      ],
      "correctIndex": 1,
      "explanation": "โครงสร้าง Framework หน้า 22 แบ่งเป็น Input (เทคโนโลยี, ทฤษฎี, AI, กระบวนการ) ➔ Process (กฎการตัดสินใจ, ระบบอัตโนมัติ) ➔ Output (ผลลัพธ์มาตรฐานหรือปรับแต่ง)"
    },
    {
      "id": 42,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (DSS)",
      "question": "การวิเคราะห์เปรียบเทียบทางเลือกและตัดสินใจเลือกทางออกที่ดีที่สุด ตรงกับขั้นตอนใดของ Simon?",
      "options": [
        "Intelligence",
        "Design",
        "Choice",
        "Implementation"
      ],
      "correctIndex": 2,
      "explanation": "Choice คือขั้นตอนการเปรียบเทียบผลและเลือกทางออกที่ดีที่สุด (Compare and select the best solution)"
    },
    {
      "id": 43,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ข้อใดเรียงลำดับชั้นของข้อมูล (The Hierarchy of Data) จากหน่วยเล็กที่สุดไปยังใหญ่ที่สุดได้อย่างถูกต้อง?",
      "options": [
        "Bit → Field → Byte → Record → File → Database",
        "Bit → Byte → Field → Record → File → Database",
        "Byte → Bit → Record → Field → Database → File",
        "Character → Field → Byte → Table → Database"
      ],
      "correctIndex": 1,
      "explanation": "ลำดับที่ถูกต้องคือ Bit (0 หรือ 1) → Byte/Character (8 บิต) → Field (เขตข้อมูล) → Record (ระเบียน) → File/Table (แฟ้มข้อมูล) → Database (ฐานข้อมูล)"
    },
    {
      "id": 44,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ในแบบจำลองฐานข้อมูลเชิงสัมพันธ์ (Relational Model) แต่ละแถว (Row) และแต่ละคอลัมน์ (Column) แทนสิ่งใดตามลำดับ?",
      "options": [
        "Attribute และ Entity",
        "Entity และ Attribute",
        "Primary Key และ Foreign Key",
        "File และ Field"
      ],
      "correctIndex": 1,
      "explanation": "ใน Relational Model แต่ละแถว (Row/Record) จะแสดงถึง Entity ข้อมูล 1 รายการ ส่วนแต่ละคอลัมน์ (Column) แสดงถึง Attribute (คุณลักษณะของ Entity)"
    },
    {
      "id": 45,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "การดำเนินการตัดเลือกเฉพาะคอลัมน์ (Columns) ที่ต้องการในตาราง โดยตัดคอลัมน์อื่นที่ไม่ใช้ออกไป เรียกว่าอะไร?",
      "options": [
        "Selecting",
        "Projecting",
        "Joining",
        "Linking"
      ],
      "correctIndex": 1,
      "explanation": "Projecting คือการคัดเลือกเฉพาะคอลัมน์ที่ต้องการ (Eliminates columns) ในขณะที่ Selecting คือการคัดเลือกแถวตามเกณฑ์ (Eliminates rows)"
    },
    {
      "id": 46,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "คำสั่งใดต่อไปนี้จัดอยู่ในกลุ่ม DDL (Data Definition Language) ของภาษา SQL?",
      "options": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "CREATE"
      ],
      "correctIndex": 3,
      "explanation": "DDL เป็นคำสั่งกำหนดและเปลี่ยนแปลงโครงสร้าง ได้แก่ CREATE, ALTER, DROP ในขณะที่ SELECT, INSERT, UPDATE, DELETE จัดเป็น DML (Data Manipulation Language)"
    },
    {
      "id": 47,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "เครื่องมือวิเคราะห์ข้อมูลอัตโนมัติเพื่อค้นหารูปแบบ (Patterns) และความสัมพันธ์ที่ซ่อนอยู่ภายในคลังข้อมูล เรียกว่าอะไร?",
      "options": [
        "Data Warehouse",
        "Data Mart",
        "Data Mining",
        "Data Dictionary"
      ],
      "correctIndex": 2,
      "explanation": "Data Mining คือ Information-analysis tool that involves the automated discovery of patterns and relationships in a data warehouse"
    },
    {
      "id": 48,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ฟิลด์หรือกลุ่มของฟิลด์ที่ใช้ระบุแต่ละระเบียน (Record) ในตารางอย่างเฉพาะเจาะจงไม่ให้ซ้ำกันเลย เรียกว่าอะไร?",
      "options": [
        "Foreign Key",
        "Primary Key (คีย์หลัก)",
        "Domain",
        "Composite Field"
      ],
      "correctIndex": 1,
      "explanation": "Primary Key คือ Field or set of fields that uniquely identifies the record โดยค่าในฟิลด์นี้จะต้องไม่ซ้ำกัน"
    },
    {
      "id": 49,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ขอบเขตของค่าข้อมูลที่เป็นไปได้และยอมรับได้สำหรับแต่ละ Attribute เรียกว่าอะไร?",
      "options": [
        "Entity",
        "Domain",
        "Tuple",
        "Schema"
      ],
      "correctIndex": 1,
      "explanation": "Domain หมายถึง Allowable values for data attributes เช่น เกรดของนักศึกษาจะต้องอยู่ในเซต {A, B+, B, C+, C, D+, D, F} เท่านั้น"
    },
    {
      "id": 50,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "การดำเนินการนำสองตารางขึ้นไปมารวมกัน (Combines two or more tables) เรียกว่าอะไร?",
      "options": [
        "Selecting",
        "Projecting",
        "Joining",
        "Filtering"
      ],
      "correctIndex": 2,
      "explanation": "Joining คือการนำสองตารางขึ้นไปมารวมข้อมูลกันโดยใช้แอตทริบิวต์ร่วมกันเป็นตัวเชื่อม"
    },
    {
      "id": 51,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "โครงสร้างหรือพิมพ์เขียวนิยามข้อมูลทั้งหมดของฐานข้อมูล (Used to describe the entire database) เรียกว่าอะไร?",
      "options": [
        "Schema",
        "Record",
        "Bit",
        "Transaction"
      ],
      "correctIndex": 0,
      "explanation": "Schema คือโครงสร้างข้อมูลหรือนิยามข้อมูลที่ใช้อธิบายฐานข้อมูลทั้งหมด ทั้งตาราง ฟิลด์ และความสัมพันธ์"
    },
    {
      "id": 52,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ใครคือผู้เชี่ยวชาญที่มีหน้าที่ดูแล ติดตั้ง ควบคุมนโยบาย และดำเนินกิจกรรมทั้งหมดที่เกี่ยวข้องกับฐานข้อมูลขององค์กร?",
      "options": [
        "Database Administrator (DBA)",
        "Data Entry Clerk",
        "Web Designer",
        "Marketing Specialist"
      ],
      "correctIndex": 0,
      "explanation": "DBA (Database Administrator) คือ Skilled IS professional who directs all activities related to an organization's database"
    },
    {
      "id": 53,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "คลังข้อมูลขนาดย่อยที่เก็บข้อมูลเฉพาะหน่วยงานหรือส่วนงานใดส่วนงานหนึ่ง (Subset of a data warehouse) เรียกว่าอะไร?",
      "options": [
        "Data Warehouse",
        "Data Mart",
        "Flat File",
        "Data Dictionary"
      ],
      "correctIndex": 1,
      "explanation": "Data Mart คือส่วนย่อยของ Data Warehouse (Subset) ที่จัดทำขึ้นเพื่อตอบสนองความต้องการของแผนกใดแผนกหนึ่งโดยเฉพาะ"
    },
    {
      "id": 54,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "กลไกที่ใช้ป้องกันไม่ให้เกิดความขัดแย้งของข้อมูลเมื่อมีผู้ใช้งานหลายคนพยายามเข้าถึงหรือแก้ไขข้อมูลเดียวกันในเวลาพร้อมกัน เรียกว่าอะไร?",
      "options": [
        "Concurrency Control (การควบคุมภาวะพร้อมกัน)",
        "Data Redundancy",
        "Data Inconsistency",
        "Projecting"
      ],
      "correctIndex": 0,
      "explanation": "Concurrency control คือกลไกของ DBMS ที่ใช้เพื่อหลีกเลี่ยงปัญหาความขัดแย้งของข้อมูลเมื่อมีผู้ใช้งานพร้อมกันหลายคน"
    },
    {
      "id": 55,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems",
      "question": "ความแตกต่างระหว่างวิธีจัดการข้อมูลแบบดั้งเดิม (Traditional approach) กับวิธีฐานข้อมูล (Database approach) คือข้อใด?",
      "options": [
        "แบบดั้งเดิมแยกไฟล์ข้อมูลตามแต่ละโปรแกรม แต่แบบฐานข้อมูลใช้แหล่งข้อมูลร่วมกัน (Pool of shared data)",
        "แบบดั้งเดิมเร็วกว่าแบบฐานข้อมูลเสมอ",
        "แบบฐานข้อมูลไม่จำเป็นต้องใช้โปรแกรมคอมพิวเตอร์",
        "แบบดั้งเดิมไม่มีวันเกิดความซ้ำซ้อนของข้อมูล"
      ],
      "correctIndex": 0,
      "explanation": "Traditional approach จัดเก็บไฟล์แยกกันสำหรับแต่ละโปรแกรม ทำให้ข้อมูลซ้ำซ้อน ส่วน Database approach รวมข้อมูลที่เกี่ยวข้องกันไว้ที่เดียวและแชร์ให้หลายโปรแกรมเข้าถึงร่วมกันได้"
    },
    {
      "id": 56,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "กฎเหล็กที่สำคัญที่สุดในการโยงความสัมพันธ์แบบ One-to-Many (1:M) บนฐานข้อมูลเชิงสัมพันธ์ คือข้อใด?",
      "options": [
        "นำ Foreign Key ของฝั่ง Many ไปเป็น Primary Key ของฝั่ง One",
        "นำ Primary Key (PK) ของฝั่ง One (1) ไปวางเป็น Foreign Key (FK) ในตารางฝั่ง Many (M) เสมอ",
        "สร้างตารางใหม่ขึ้นมาคั่นกลางเสมอ",
        "ลบ Primary Key ของทั้งสองตารางทิ้งไป"
      ],
      "correctIndex": 1,
      "explanation": "กฎเหล็กของความสัมพันธ์ 1:M คือ 'ต้องนำ Primary Key (PK) ของตารางฝั่ง 1 ไปวางเป็น Foreign Key (FK) ในตารางฝั่ง Many (M) เสมอ' เพื่อให้แต่ละแถวในฝั่ง Many รู้ว่าตนเองสัมพันธ์กับข้อมูลตัวใดในฝั่ง 1"
    },
    {
      "id": 57,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "ในระบบฐานข้อมูลเชิงสัมพันธ์ (RDBMS) เมื่อพบความสัมพันธ์แบบ Many-to-Many (M:M หรือ N:M) จะต้องแก้ไขอย่างไร?",
      "options": [
        "เชื่อมโยงเส้นตรงระหว่างสองตารางได้ทันทีโดยไม่ต้องแก้ไขอะไร",
        "แตกตารางเชื่อม (Junction Table / Associative Entity) ขึ้นมาคั่นตรงกลาง และเปลี่ยนเป็น 1:M สองเส้น",
        "ลบข้อมูลในตารางใดตารางหนึ่งออกครึ่งหนึ่ง",
        "แปลงให้กลายเป็นความสัมพันธ์แบบ 1:1 โดยอัตโนมัติ"
      ],
      "correctIndex": 1,
      "explanation": "RDBMS ไม่สามารถเก็บความสัมพันธ์แบบ M:M ได้โดยตรง จึงต้องสร้าง 'ตารางเชื่อม (Junction Table)' เช่น Order_Details ขึ้นมาคั่นกลาง แล้วเปลี่ยนให้กลายเป็น 1:M สองเส้นวิ่งเข้าหาตารางเชื่อม"
    },
    {
      "id": 58,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "จากโจทย์ในสไลด์หน้า 15: 'จงเพิ่มประเภทสินค้า (Category) พร้อมกับเชื่อมความสัมพันธ์' ข้อใดระบุการโยงเส้นและ Foreign Key ได้ถูกต้อง?",
      "options": [
        "สร้างตาราง Category และนำ Product_ID ไปเป็น FK ใน Category",
        "สร้างตาราง Category และนำ Category_ID (PK) ไปวางเป็น Foreign Key (FK) ในตาราง Products ด้วยความสัมพันธ์ 1:M",
        "เชื่อมโยงตาราง Category เข้ากับตาราง Delivery โดยตรง",
        "เชื่อมโยงตาราง Category แบบ Many-to-Many กับ Customer"
      ],
      "correctIndex": 1,
      "explanation": "ความสัมพันธ์ระหว่าง Category (ประเภทสินค้า) กับ Products (สินค้า) คือ 1:M (1 ประเภทมีสินค้าได้หลายรายการ) ดังนั้นจึงต้องนำ Category_ID ซึ่งเป็น PK ของ Category ไปใส่เป็น FK ในตาราง Products"
    },
    {
      "id": 59,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "ในสัญลักษณ์การโยงเส้นแบบ Crow's Foot Notation (สัญลักษณ์ขาเป็ด) ขาเป็ดสามแฉกแทนความหมายใด?",
      "options": [
        "One (มีเพียง 1 เดียว)",
        "Zero (ไม่มีข้อมูล)",
        "Many (มีได้หลายรายการ / กลุ่ม)",
        "Null (ค่าว่าง)"
      ],
      "correctIndex": 2,
      "explanation": "Crow's Foot (สัญลักษณ์สามแฉกคล้ายขาเป็ด) ใช้แทน 'Many' (ฝั่งที่มีได้หลายรายการ) ส่วนเส้นตรงขีดเดียวแทน 'One'"
    },
    {
      "id": 60,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "ตารางเชื่อม Order_Details ที่แปลงมาจากความสัมพันธ์ Many-to-Many ระหว่าง Order กับ Products จะมี Primary Key ในลักษณะใด?",
      "options": [
        "ใช้รหัสพนักงานขายเป็น Primary Key",
        "ไม่มี Primary Key เลย",
        "ใช้ Composite Primary Key ที่ประกอบด้วย (Order_ID + Product_ID) ซึ่งทั้งคู่เป็น Foreign Key มาจากตารางแม่",
        "สุ่มสร้างตัวเลขขึ้นมาใหม่โดยไม่เชื่อมกับตารางอื่น"
      ],
      "correctIndex": 2,
      "explanation": "ตารางเชื่อม (Junction Table) มักใช้ Composite Primary Key (คีย์หลักร่วม) ที่ประกอบด้วยคู่ของ Foreign Key ที่ดึงมาจากตารางแม่ทั้งสองฝั่ง (Order_ID และ Product_ID) เพื่อการันตีว่าสินค้าแต่ละชิ้นในออเดอร์นั้นจะไม่ซ้ำกัน"
    },
    {
      "id": 61,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "จาก ER Diagram ในสไลด์หน้า 14 ตาราง Customer เชื่อมโยงกับตาราง Order ด้วยความสัมพันธ์แบบใด และมีคีย์เชื่อมโยงอย่างไร?",
      "options": [
        "ความสัมพันธ์ 1:1 โดย Order_ID เป็น FK ใน Customer",
        "ความสัมพันธ์ 1:M โดยนำ Customer_ID (PK) ไปเป็น Foreign Key (FK) ในตาราง Order",
        "ความสัมพันธ์ M:M โดยเชื่อมกันโดยตรง",
        "ไม่มีความสัมพันธ์ใด ๆ ต่อกัน"
      ],
      "correctIndex": 1,
      "explanation": "ลูกค้า 1 คนสามารถเปิดคำสั่งซื้อได้หลายใบ (1:M) ดังนั้นในตาราง Order จึงต้องมี Customer_ID เป็น Foreign Key (FK) เพื่อบอกว่าออเดอร์นี้เป็นของลูกค้าคนใด"
    },
    {
      "id": 62,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "จากตัวอย่างตารางในสไลด์หน้า 17 การเชื่อมโยงข้อมูลระหว่าง Project Table กับ Department Table ใช้ฟิลด์คู่ใดในการ Linking?",
      "options": [
        "ฟิลด์ Dept. number ใน Project Table เชื่อมกับ ฟิลด์ Dept. ใน Department Table",
        "ฟิลด์ Project เชื่อมกับ Manager SSN",
        "ฟิลด์ Description เชื่อมกับ Dept. name",
        "ฟิลด์ SSN เชื่อมกับ Hire date"
      ],
      "correctIndex": 0,
      "explanation": "ในสไลด์หน้า 17 Project Table มีฟิลด์ Dept. number (FK) ที่มีค่าตรงกับฟิลด์ Dept. (PK) ของ Department Table ทำให้สามารถระบุได้ว่าแต่ละโปรเจกต์สังกัดแผนกใด"
    },
    {
      "id": 63,
      "chapterId": "ch4",
      "chapterTitle": "Chapter 4: Decision Support Systems (สถาปัตยกรรมและการโยง Diagram)",
      "question": "จากแผนผังสถาปัตยกรรม DSS 5 องค์ประกอบในสไลด์หน้า 25 ส่วนใดทำหน้าที่เป็นตัวกลางเชื่อมโยงระหว่าง 'ผู้ใช้ (Users)' กับส่วนประมวลผล 'Data & Models'?",
      "options": [
        "Kernel",
        "User Interface (ส่วนต่อประสานกับผู้ใช้)",
        "Compiler",
        "Power Supply"
      ],
      "correctIndex": 1,
      "explanation": "User Interface ทำหน้าที่เป็นตัวกลางรับคำสั่งและการโต้ตอบจาก User แล้วส่งไปประมวลผลร่วมกับ Data, Models และ Knowledge แล้วนำผลวิเคราะห์มาแสดงผลให้ผู้ใช้เห็น"
    },
    {
      "id": 64,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "หากต้องการออกแบบความสัมพันธ์แบบ One-to-One (1:1) เช่น บุคลากร 1 คน มีสำนักงานส่วนตัวได้ 1 ห้อง กฎการวาง Foreign Key (FK) คือข้อใด?",
      "options": [
        "ห้ามใส่ Foreign Key ในตารางใดเลย",
        "ต้องสร้างตารางที่สามขึ้นมาเชื่อมเสมอ",
        "สามารถนำ Primary Key ของตารางใดตารางหนึ่ง ไปเป็น Foreign Key ในอีกตารางหนึ่งได้",
        "ต้องนำ Foreign Key ไปใส่ทั้งสองตารางพร้อมกันเสมอ"
      ],
      "correctIndex": 2,
      "explanation": "สำหรับความสัมพันธ์แบบ 1:1 เราสามารถเลือกนำ Primary Key ของตารางใดตารางหนึ่งไปใส่เป็น Foreign Key ในอีกตารางหนึ่งได้ (มักใส่ในตารางที่มีความจำเป็นหรือเข้าถึงบ่อยกว่า)"
    },
    {
      "id": 65,
      "chapterId": "ch5",
      "chapterTitle": "Chapter 5: Database Systems (การโยงความสัมพันธ์ ER Diagram)",
      "question": "จากแผนภาพ Data Warehouse ในสไลด์หน้า 29 ขั้นตอนใดที่ทำหน้าที่ดึงข้อมูลจากแหล่งต้นทางและทำความสะอาดข้อมูลก่อนนำเข้าคลังข้อมูล?",
      "options": [
        "Data extraction process และ Data cleanup process (กระบวนการ ETL)",
        "Query and analysis process",
        "End-user direct input",
        "Data destruction process"
      ],
      "correctIndex": 0,
      "explanation": "จากรูปในสไลด์หน้า 29 ข้อมูลจาก Relational databases, Flat files, และ Spreadsheets จะถูกส่งผ่าน Data extraction process ➔ Data cleanup process (ทำความสะอาด ปรับรูปแบบให้ตรงกัน) ก่อนบันทึกลงใน Data Warehouse"
    },
    {
      "id": 66,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems (E-Commerce Models)",
      "question": "บริษัทผู้ผลิตชิ้นส่วนหน้าจออิเล็กทรอนิกส์ทำสัญญาซื้อขายส่งล็อตใหญ่ให้กับบริษัทผลิตสมาร์ตโฟน จัดเป็นรูปแบบพาณิชย์อิเล็กทรอนิกส์ประเภทใด?",
      "options": [
        "B2B (Business-to-Business)",
        "B2C (Business-to-Consumer)",
        "C2C (Consumer-to-Consumer)",
        "C2G (Consumer-to-Government)"
      ],
      "correctIndex": 0,
      "explanation": "B2B (Business-to-Business) คือธุรกรรมการค้าระหว่างภาคธุรกิจกับภาคธุรกิจด้วยกันเอง เช่น โรงงานผลิตชิ้นส่วนขายส่งให้บริษัทผู้ผลิต ยอดสั่งซื้อครั้งละจำนวนมาก"
    },
    {
      "id": 67,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems (E-Commerce Models)",
      "question": "นายสมชายกดสั่งซื้อหนังสือและหูฟังไร้สายผ่านเว็บไซต์ Shopee หรือ Lazada เพื่อนำมาใช้งานส่วนตัว จัดเป็นพาณิชย์อิเล็กทรอนิกส์รูปแบบใด?",
      "options": [
        "B2B (Business-to-Business)",
        "B2C (Business-to-Consumer)",
        "B2G (Business-to-Government)",
        "G2G (Government-to-Government)"
      ],
      "correctIndex": 1,
      "explanation": "B2C (Business-to-Consumer) คือการที่ร้านค้าหรือบริษัทธุรกิจจำหน่ายสินค้าหรือบริการให้แก่ผู้บริโภครายบุคคลโดยตรง"
    },
    {
      "id": 68,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems (E-Commerce Models)",
      "question": "การที่นักศึกษาโพสต์ขายกล้องถ่ายรูปมือสองหรือหนังสือเรียนที่ไม่ได้ใช้แล้วให้แก่บุคคลทั่วไปผ่าน Facebook Marketplace หรือ Kaidee จัดเป็นรูปแบบใด?",
      "options": [
        "B2C (Business-to-Consumer)",
        "B2B (Business-to-Business)",
        "C2C (Consumer-to-Consumer)",
        "B2G (Business-to-Government)"
      ],
      "correctIndex": 2,
      "explanation": "C2C (Consumer-to-Consumer) คือการที่ผู้บริโภคหรือบุคคลทั่วไปทำธุรกรรมซื้อขายแลกเปลี่ยนสินค้า (มักเป็นสินค้ามือสอง) กันเองโดยตรงผ่านแพลตฟอร์มตัวกลาง"
    },
    {
      "id": 69,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems (E-Commerce Models)",
      "question": "บริษัทเทคโนโลยีเอกชนยื่นซองประมูลโครงการติดตั้งระบบเครือข่ายและเซิร์ฟเวอร์ให้กับโรงพยาบาลรัฐผ่านระบบจัดซื้อจัดจ้าง e-GP จัดเป็นรูปแบบใด?",
      "options": [
        "B2C (Business-to-Consumer)",
        "B2G (Business-to-Government)",
        "C2G (Consumer-to-Government)",
        "C2C (Consumer-to-Consumer)"
      ],
      "correctIndex": 1,
      "explanation": "B2G (Business-to-Government) คือการทำธุรกรรมหรือการให้บริการระหว่างภาคธุรกิจเอกชนกับหน่วยงานภาครัฐ เช่น โครงการจัดซื้อจัดจ้างภาครัฐ (e-GP)"
    },
    {
      "id": 70,
      "chapterId": "ch2",
      "chapterTitle": "Chapter 2: Information Systems (E-Commerce Models)",
      "question": "การที่ประชาชนเข้าไปยื่นแบบชำระภาษีเงินได้บุคคลธรรมดาประจำปีผ่านระบบ E-filing ของกรมสรรพากร หรือต่อภาษีรถยนต์ออนไลน์ จัดเป็นรูปแบบใด?",
      "options": [
        "B2B (Business-to-Business)",
        "B2G (Business-to-Government)",
        "C2G (Consumer-to-Government)",
        "G2G (Government-to-Government)"
      ],
      "correctIndex": 2,
      "explanation": "C2G (Consumer-to-Government) หรือ Citizen-to-Government คือการที่ประชาชนทั่วไปทำธุรกรรม จ่ายค่าธรรมเนียม หรือชำระภาษีออนไลน์กับหน่วยงานภาครัฐ"
    }
  ]
};

// Export to window for vanilla browser usage
window.COURSE_DATA = COURSE_DATA;
