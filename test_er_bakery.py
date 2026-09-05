# -*- coding: utf-8 -*-
"""
Test script to build the complete Bakery Shop ER Diagram with visible connecting lines,
SVG diagram, interactive table cards, and relationship explanations.
"""

bakery_er_html = '''
            <div class="note-card">
              <h4>🥖 ตัวอย่างระบบร้านเบเกอรี่ (Bakery Shop Database System)</h4>
              <p>ระบบฐานข้อมูลสำหรับร้านเบเกอรี่และคาเฟ่ ประกอบด้วย <strong>ข้อมูลลูกค้า, ออเดอร์คำสั่งซื้อ, ข้อมูลพนักงานและตำแหน่งงาน, ประเภทเมนูเบเกอรี่, รายการเมนู และรายละเอียดการสั่งซื้อ</strong></p>
            </div>

            <!-- Theory: Cardinality & Rules -->
            <div class="card-outline mt-3">
              <h5 style="color:var(--primary);">📐 กฎเหล็กการโยงเส้นความสัมพันธ์ (Cardinality Rules)</h5>
              <div class="grid-2 mt-2">
                <div class="card-feature border-green">
                  <div>
                    <span class="badge badge-success mb-1">ความสัมพันธ์แบบ 1:M (One-to-Many)</span>
                    <p style="font-size:0.86rem; margin-top:4px;">
                      <strong>กฎเหล็ก PK/FK:</strong> <u>ต้องนำ Primary Key (PK) ของฝั่ง 1 ไปวางเป็น Foreign Key (FK) ในฝั่ง Many (M) เสมอ!</u><br>
                      <em>ในร้านเบเกอรี่:</em><br>
                      • ลูกค้า 1 คน (1) สั่งได้หลายออเดอร์ (M) ➔ <code>Customer_ID (PK)</code> ไปเป็น <code>FK</code> ใน Orders<br>
                      • พนักงาน 1 คน (1) รับได้หลายออเดอร์ (M) ➔ <code>Employee_ID (PK)</code> ไปเป็น <code>FK</code> ใน Orders<br>
                      • ประเภทเมนู 1 ประเภท (1) มีเมนูได้หลายรายการ (M) ➔ <code>Category_ID (PK)</code> ไปเป็น <code>FK</code> ใน Menu_Items
                    </p>
                  </div>
                </div>

                <div class="card-feature border-amber">
                  <div>
                    <span class="badge badge-warning mb-1">ความสัมพันธ์แบบ M:M (Many-to-Many)</span>
                    <p style="font-size:0.86rem; margin-top:4px;">
                      <strong>กฎเหล็ก Relational Database:</strong> <u>ไม่สามารถเชื่อมความสัมพันธ์ M:M ได้โดยตรง!</u><br>
                      <em>ในร้านเบเกอรี่:</em><br>
                      • ออเดอร์ 1 ใบ มีเบเกอรี่ได้หลายเมนู และ เมนู 1 รายการ ก็อยู่ในออเดอร์ได้หลายใบ<br>
                      🚨 <strong>วิธีแก้:</strong> ต้องสร้าง <strong>ตารางเชื่อม (Junction Table)</strong> ชื่อ <code>Order_Details</code> คั่นกลาง แล้วเปลี่ยนเป็น <strong>1:M สองเส้นวิ่งเข้าหาตารางเชื่อม</strong> โดยนำคู่ <code>Order_ID (FK)</code> + <code>Menu_ID (FK)</code> รวมกันเป็น Composite Primary Key!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- VISUAL SVG ER DIAGRAM WITH VISIBLE CONNECTING LINES -->
            <div class="diagram-canvas mt-3" style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px 16px;">
              <div class="diagram-title-badge" style="margin-bottom: 12px;">
                🗺️ แผนผัง ER Diagram ระบบร้านเบเกอรี่ พร้อมเส้นโยงความสัมพันธ์ (Relationship Lines)
              </div>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
                เส้นเชื่อมต่อด้านล่างแสดงทิศทางการส่งต่อคีย์จาก <span style="color:#f59e0b; font-weight:bold;">Primary Key [PK]</span> ไปยัง <span style="color:#38bdf8; font-weight:bold;">Foreign Key [FK]</span> พร้อมสัญลักษณ์บอกจำนวน (1 ต่อ หลาย):
              </p>

              <!-- Responsive SVG Canvas -->
              <div style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
                <svg viewBox="0 0 1000 660" style="width: 100%; min-width: 820px; height: auto; display: block; font-family: inherit;">
                  <!-- Definitions for Markers / Arrowheads -->
                  <defs>
                    <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#1d4ed8" />
                    </linearGradient>
                    <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#8b5cf6" />
                      <stop offset="100%" stop-color="#6d28d9" />
                    </linearGradient>
                    <linearGradient id="gradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#10b981" />
                      <stop offset="100%" stop-color="#047857" />
                    </linearGradient>
                    <linearGradient id="gradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#f59e0b" />
                      <stop offset="100%" stop-color="#b45309" />
                    </linearGradient>
                    
                    <!-- Arrowheads -->
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
                    </marker>
                    <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#8b5cf6" />
                    </marker>
                    <marker id="arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
                    </marker>
                    <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
                    </marker>

                    <!-- Filter for glowing lines -->
                    <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <!-- ================= SVG CONNECTING LINES ================= -->
                  <!-- Line 1: Customer (1) ➔ Orders (M) -->
                  <g class="svg-link">
                    <path d="M 270 120 C 330 120, 340 180, 400 180" fill="none" stroke="#3b82f6" stroke-width="3.5" marker-end="url(#arrow-blue)" filter="url(#glow-blue)" />
                    <circle cx="270" cy="120" r="5" fill="#3b82f6" />
                    <rect x="285" y="130" width="94" height="24" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
                    <text x="332" y="146" fill="#93c5fd" font-size="11" font-weight="700" text-anchor="middle">1 : M (PK➔FK)</text>
                  </g>

                  <!-- Line 2: Employee (1) ➔ Orders (M) -->
                  <g class="svg-link">
                    <path d="M 270 330 C 330 330, 340 260, 400 260" fill="none" stroke="#8b5cf6" stroke-width="3.5" marker-end="url(#arrow-purple)" />
                    <circle cx="270" cy="330" r="5" fill="#8b5cf6" />
                    <rect x="282" y="275" width="102" height="24" rx="6" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" />
                    <text x="333" y="291" fill="#c4b5fd" font-size="11" font-weight="700" text-anchor="middle">1 : M (แคชเชียร์)</text>
                  </g>

                  <!-- Line 3: Menu_Category (1) ➔ Menu_Items (M) -->
                  <g class="svg-link">
                    <path d="M 845 180 L 845 250" fill="none" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrow-emerald)" />
                    <circle cx="845" cy="180" r="5" fill="#10b981" />
                    <rect x="795" y="200" width="100" height="24" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
                    <text x="845" y="216" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">1 : M (ประเภท)</text>
                  </g>

                  <!-- Line 4: Orders (1) ➔ Order_Details (M) -->
                  <g class="svg-link">
                    <path d="M 480 340 L 480 430" fill="none" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#arrow-amber)" />
                    <circle cx="480" cy="340" r="5" fill="#f59e0b" />
                    <rect x="428" y="370" width="104" height="24" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
                    <text x="480" y="386" fill="#fcd34d" font-size="11" font-weight="700" text-anchor="middle">1 : M (ในออเดอร์)</text>
                  </g>

                  <!-- Line 5: Menu_Items (1) ➔ Order_Details (M) -->
                  <g class="svg-link">
                    <path d="M 730 340 C 660 370, 630 430, 580 470" fill="none" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#arrow-amber)" />
                    <circle cx="730" cy="340" r="5" fill="#f59e0b" />
                    <rect x="635" y="380" width="112" height="24" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
                    <text x="691" y="396" fill="#fcd34d" font-size="11" font-weight="700" text-anchor="middle">1 : M (รายการเบเกอรี่)</text>
                  </g>

                  <!-- ================= SVG TABLE NODES ================= -->

                  <!-- 1. Table: Customer -->
                  <g transform="translate(40, 40)">
                    <rect width="230" height="150" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="2" />
                    <rect width="230" height="34" rx="10" fill="url(#gradBlue)" />
                    <text x="115" y="22" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">👤 Customer (ลูกค้า)</text>
                    
                    <text x="16" y="58" fill="#f8fafc" font-size="12">Customer_ID</text>
                    <rect x="175" y="45" width="38" height="18" rx="4" fill="#f59e0b" />
                    <text x="194" y="58" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK</text>
                    
                    <line x1="10" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="1" />
                    <text x="16" y="92" fill="#cbd5e1" font-size="11.5">Customer_Name (ชื่อ)</text>
                    <text x="16" y="114" fill="#cbd5e1" font-size="11.5">Phone_Number (เบอร์โทร)</text>
                    <text x="16" y="136" fill="#cbd5e1" font-size="11.5">Member_Level (ระดับสมาชิก)</text>
                  </g>

                  <!-- 2. Table: Employees -->
                  <g transform="translate(40, 250)">
                    <rect width="230" height="150" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="2" />
                    <rect width="230" height="34" rx="10" fill="url(#gradPurple)" />
                    <text x="115" y="22" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">👨‍🍳 Employees (พนักงาน)</text>
                    
                    <text x="16" y="58" fill="#f8fafc" font-size="12">Employee_ID</text>
                    <rect x="175" y="45" width="38" height="18" rx="4" fill="#f59e0b" />
                    <text x="194" y="58" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK</text>
                    
                    <line x1="10" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="1" />
                    <text x="16" y="92" fill="#cbd5e1" font-size="11.5">Employee_Name (ชื่อ)</text>
                    <text x="16" y="114" fill="#cbd5e1" font-size="11.5">Position / Role (ตำแหน่ง)</text>
                    <text x="16" y="136" fill="#cbd5e1" font-size="11.5">Salary (เงินเดือน)</text>
                  </g>

                  <!-- 3. Table: Orders -->
                  <g transform="translate(380, 120)">
                    <rect width="240" height="220" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="2" />
                    <rect width="240" height="34" rx="10" fill="url(#gradBlue)" />
                    <text x="120" y="22" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">🧾 Orders (ออเดอร์คำสั่งซื้อ)</text>
                    
                    <text x="16" y="58" fill="#f8fafc" font-size="12">Order_ID</text>
                    <rect x="185" y="45" width="38" height="18" rx="4" fill="#f59e0b" />
                    <text x="204" y="58" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK</text>
                    
                    <line x1="10" y1="70" x2="230" y2="70" stroke="#334155" stroke-width="1" />
                    <text x="16" y="92" fill="#cbd5e1" font-size="11.5">Order_Date (วันที่/เวลา)</text>
                    
                    <text x="16" y="122" fill="#93c5fd" font-size="12" font-weight="600">Customer_ID</text>
                    <rect x="185" y="108" width="38" height="18" rx="4" fill="#0284c7" />
                    <text x="204" y="121" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">FK</text>
                    
                    <text x="16" y="152" fill="#c4b5fd" font-size="12" font-weight="600">Employee_ID</text>
                    <rect x="185" y="138" width="38" height="18" rx="4" fill="#7c3aed" />
                    <text x="204" y="151" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">FK</text>

                    <text x="16" y="182" fill="#cbd5e1" font-size="11.5">Total_Amount (ยอดรวม)</text>
                    <text x="16" y="204" fill="#cbd5e1" font-size="11.5">Payment_Type (วิธีชำระ)</text>
                  </g>

                  <!-- 4. Table: Menu_Category -->
                  <g transform="translate(730, 40)">
                    <rect width="230" height="140" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2" />
                    <rect width="230" height="34" rx="10" fill="url(#gradEmerald)" />
                    <text x="115" y="22" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">📂 Menu_Category (ประเภทเมนู)</text>
                    
                    <text x="16" y="58" fill="#f8fafc" font-size="12">Category_ID</text>
                    <rect x="175" y="45" width="38" height="18" rx="4" fill="#f59e0b" />
                    <text x="194" y="58" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK</text>
                    
                    <line x1="10" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="1" />
                    <text x="16" y="92" fill="#cbd5e1" font-size="11.5">Category_Name (ชื่อประเภท)</text>
                    <text x="16" y="114" fill="#94a3b8" font-size="10.5">เช่น เค้ก, ครัวซองต์, กาแฟ</text>
                  </g>

                  <!-- 5. Table: Menu_Items -->
                  <g transform="translate(730, 250)">
                    <rect width="230" height="160" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2" />
                    <rect width="230" height="34" rx="10" fill="url(#gradEmerald)" />
                    <text x="115" y="22" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">🥐 Menu_Items (รายการเมนู)</text>
                    
                    <text x="16" y="58" fill="#f8fafc" font-size="12">Menu_ID</text>
                    <rect x="175" y="45" width="38" height="18" rx="4" fill="#f59e0b" />
                    <text x="194" y="58" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK</text>
                    
                    <line x1="10" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="1" />
                    <text x="16" y="92" fill="#cbd5e1" font-size="11.5">Menu_Name (ชื่อเมนู)</text>
                    
                    <text x="16" y="122" fill="#6ee7b7" font-size="12" font-weight="600">Category_ID</text>
                    <rect x="175" y="108" width="38" height="18" rx="4" fill="#059669" />
                    <text x="194" y="121" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">FK</text>

                    <text x="16" y="148" fill="#cbd5e1" font-size="11.5">Price (ราคาต่อชิ้น)</text>
                  </g>

                  <!-- 6. Table: Order_Details (Junction Table M:M) -->
                  <g transform="translate(370, 430)">
                    <rect width="260" height="190" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5" />
                    <rect width="260" height="34" rx="10" fill="url(#gradAmber)" />
                    <text x="130" y="22" fill="#0f172a" font-size="12.5" font-weight="bold" text-anchor="middle">📦 Order_Details (ตารางเชื่อม M:M)</text>
                    
                    <text x="16" y="60" fill="#fde68a" font-size="12" font-weight="700">Order_ID</text>
                    <rect x="170" y="46" width="75" height="20" rx="4" fill="#f59e0b" />
                    <text x="207" y="60" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK / FK</text>

                    <text x="16" y="95" fill="#fde68a" font-size="12" font-weight="700">Menu_ID</text>
                    <rect x="170" y="81" width="75" height="20" rx="4" fill="#f59e0b" />
                    <text x="207" y="95" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">PK / FK</text>
                    
                    <line x1="10" y1="110" x2="250" y2="110" stroke="#334155" stroke-width="1" />
                    <text x="16" y="135" fill="#cbd5e1" font-size="12">Quantity (จำนวนชิ้นที่สั่ง)</text>
                    <text x="16" y="162" fill="#cbd5e1" font-size="12">Subtotal_Price (ราคารวม)</text>
                  </g>
                </svg>
              </div>
            </div>

            <!-- DETAILED TABLE CARDS WITH EXPLICIT TRACING LABELS -->
            <div class="card-outline mt-3">
              <h5 style="color:var(--primary);">🗂️ รายละเอียดตารางและเส้นทางการโยงคีย์ในร้านเบเกอรี่ (Schema Tracing):</h5>
              
              <div class="er-grid mt-3">
                <!-- Card 1: Customer -->
                <div class="er-table" style="border-top: 4px solid #3b82f6;">
                  <div class="er-table-header" style="background:#1d4ed8;">👤 Customer (ข้อมูลลูกค้า)</div>
                  <div class="er-row">
                    <span><strong>Customer_ID</strong></span>
                    <span class="er-key pk">PK</span>
                  </div>
                  <div class="er-row" style="background:rgba(59, 130, 246, 0.08); font-size:0.75rem; color:#60a5fa;">
                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Orders</span>
                  </div>
                  <div class="er-row"><span>Customer_Name (ชื่อลูกค้า)</span></div>
                  <div class="er-row"><span>Phone_Number (เบอร์โทร)</span></div>
                  <div class="er-row"><span>Member_Level (เช่น Gold/Silver)</span></div>
                </div>

                <!-- Card 2: Employees -->
                <div class="er-table" style="border-top: 4px solid #8b5cf6;">
                  <div class="er-table-header" style="background:#6d28d9;">👨‍🍳 Employees (พนักงาน & ตำแหน่ง)</div>
                  <div class="er-row">
                    <span><strong>Employee_ID</strong></span>
                    <span class="er-key pk">PK</span>
                  </div>
                  <div class="er-row" style="background:rgba(139, 92, 246, 0.08); font-size:0.75rem; color:#c4b5fd;">
                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Orders</span>
                  </div>
                  <div class="er-row"><span>Employee_Name (ชื่อพนักงาน)</span></div>
                  <div class="er-row">
                    <span><strong>Position / Role</strong> (ตำแหน่ง)</span>
                    <span class="badge badge-purple" style="font-size:0.7rem;">แคชเชียร์/บาริสต้า</span>
                  </div>
                  <div class="er-row"><span>Salary (เงินเดือน)</span></div>
                </div>

                <!-- Card 3: Orders -->
                <div class="er-table" style="border-top: 4px solid #3b82f6;">
                  <div class="er-table-header" style="background:#1e40af;">🧾 Orders (ออเดอร์คำสั่งซื้อ)</div>
                  <div class="er-row">
                    <span><strong>Order_ID</strong></span>
                    <span class="er-key pk">PK</span>
                  </div>
                  <div class="er-row"><span>Order_Date (วันเวลาสั่ง)</span></div>
                  <div class="er-row" style="background:rgba(59, 130, 246, 0.1);">
                    <span style="color:#93c5fd;"><strong>Customer_ID</strong> [รับจาก Customer]</span>
                    <span class="er-key fk">FK</span>
                  </div>
                  <div class="er-row" style="background:rgba(139, 92, 246, 0.1);">
                    <span style="color:#c4b5fd;"><strong>Employee_ID</strong> [แคชเชียร์ผู้รับออเดอร์]</span>
                    <span class="er-key fk">FK</span>
                  </div>
                  <div class="er-row"><span>Total_Amount (ยอดรวมสุทธิ)</span></div>
                </div>
              </div>

              <div class="er-grid mt-3">
                <!-- Card 4: Menu_Category -->
                <div class="er-table" style="border-top: 4px solid #10b981;">
                  <div class="er-table-header" style="background:#047857;">📂 Menu_Category (ประเภทเมนู)</div>
                  <div class="er-row">
                    <span><strong>Category_ID</strong></span>
                    <span class="er-key pk">PK</span>
                  </div>
                  <div class="er-row" style="background:rgba(16, 185, 129, 0.08); font-size:0.75rem; color:#6ee7b7;">
                    <span>↳ 🔗 ส่งต่อไปเป็น FK ในตาราง Menu_Items</span>
                  </div>
                  <div class="er-row"><span>Category_Name (เช่น เค้ก, ขนมปัง, กาแฟ)</span></div>
                  <div class="er-row"><span>Description (รายละเอียดหมวด)</span></div>
                </div>

                <!-- Card 5: Menu_Items -->
                <div class="er-table" style="border-top: 4px solid #10b981;">
                  <div class="er-table-header" style="background:#065f46;">🥐 Menu_Items (รายการเมนูเบเกอรี่)</div>
                  <div class="er-row">
                    <span><strong>Menu_ID</strong></span>
                    <span class="er-key pk">PK</span>
                  </div>
                  <div class="er-row"><span>Menu_Name (เช่น ครัวซองต์, ชีสเค้ก)</span></div>
                  <div class="er-row" style="background:rgba(16, 185, 129, 0.1);">
                    <span style="color:#6ee7b7;"><strong>Category_ID</strong> [รับจาก Category]</span>
                    <span class="er-key fk">FK</span>
                  </div>
                  <div class="er-row"><span>Price (ราคาต่อชิ้น)</span></div>
                </div>

                <!-- Card 6: Order_Details (Junction Table) -->
                <div class="er-table" style="border-top: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.03);">
                  <div class="er-table-header" style="background:#b45309; color:#fff;">📦 Order_Details (ตารางเชื่อม M:M)</div>
                  <div class="er-row" style="background:rgba(245, 158, 11, 0.12);">
                    <span style="color:#fde68a;"><strong>Order_ID</strong> [รับจาก Orders]</span>
                    <span class="er-key pk">PK / FK</span>
                  </div>
                  <div class="er-row" style="background:rgba(245, 158, 11, 0.12);">
                    <span style="color:#fde68a;"><strong>Menu_ID</strong> [รับจาก Menu_Items]</span>
                    <span class="er-key pk">PK / FK</span>
                  </div>
                  <div class="er-row"><span>Quantity (จำนวนชิ้นที่สั่ง เช่น 2 ชิ้น)</span></div>
                  <div class="er-row"><span>Subtotal_Price (ราคารวมรายการนี้)</span></div>
                </div>
              </div>
            </div>

            <!-- EXPLICIT RELATIONSHIP BRIDGES EXPLAINED -->
            <div class="card-outline mt-3">
              <h5 style="color:var(--primary);">🔗 สรุปเส้นทางการโยงความสัมพันธ์ 4 เส้นในร้านเบเกอรี่ (อ่านแล้วเข้าใจทันที):</h5>
              
              <div class="steps-flow mt-3">
                <!-- Step 1 -->
                <div class="step-box" style="flex:1;">
                  <span class="badge badge-primary mb-1">เส้นที่ 1: ลูกค้า ➔ ออเดอร์</span>
                  <h6 style="color:var(--text-main);">Customer (1) ───&lt; (M) Orders</h6>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                    <strong>เหตุผล:</strong> ลูกค้า 1 คน สามารถเข้ามาซื้อเบเกอรี่ได้หลายออเดอร์ (1:M)<br>
                    <strong>การโยงเส้น:</strong> ลากจาก <code>Customer.Customer_ID [PK]</code> ไปวางเป็น <code>Orders.Customer_ID [FK]</code>
                  </p>
                </div>

                <div class="step-arrow">➔</div>

                <!-- Step 2 -->
                <div class="step-box" style="flex:1;">
                  <span class="badge badge-purple mb-1">เส้นที่ 2: พนักงาน ➔ ออเดอร์</span>
                  <h6 style="color:var(--text-main);">Employees (1) ───&lt; (M) Orders</h6>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                    <strong>เหตุผล:</strong> พนักงานตำแหน่งแคชเชียร์ 1 คน สามารถคีย์รับออเดอร์ลูกค้าได้หลายใบ (1:M)<br>
                    <strong>การโยงเส้น:</strong> ลากจาก <code>Employees.Employee_ID [PK]</code> ไปวางเป็น <code>Orders.Employee_ID [FK]</code>
                  </p>
                </div>
              </div>

              <div class="steps-flow mt-3">
                <!-- Step 3 -->
                <div class="step-box" style="flex:1;">
                  <span class="badge badge-success mb-1">เส้นที่ 3: หมวดเมนู ➔ รายการเมนู</span>
                  <h6 style="color:var(--text-main);">Category (1) ───&lt; (M) Menu_Items</h6>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                    <strong>เหตุผล:</strong> 1 ประเภทเมนู (เช่น 'เค้ก') มีขนมได้หลายเมนู (เช่น ช็อกโกแลตฟัดจ์, ชีสเค้กสตรอว์เบอร์รี) (1:M)<br>
                    <strong>การโยงเส้น:</strong> ลากจาก <code>Menu_Category.Category_ID [PK]</code> ไปวางเป็น <code>Menu_Items.Category_ID [FK]</code>
                  </p>
                </div>

                <div class="step-arrow">➔</div>

                <!-- Step 4 -->
                <div class="step-box active" style="flex:1;">
                  <span class="badge badge-warning mb-1">เส้นที่ 4: ออเดอร์ &gt;───&lt; เมนู (M:M)</span>
                  <h6 style="color:var(--text-main);">Orders (M) &gt;───&lt; (M) Menu_Items</h6>
                  <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
                    <strong>เหตุผล:</strong> ออเดอร์ 1 ใบ มีขนมได้หลายเมนู และขนม 1 เมนู ก็ถูกสั่งในหลายออเดอร์ <strong>เป็นความสัมพันธ์ Many-to-Many!</strong><br>
                    <strong>การโยงเส้น:</strong> แตกตารางเชื่อม <code>Order_Details</code> ขึ้นมาคั่นกลาง โดยดึง <code>Order_ID [FK]</code> และ <code>Menu_ID [FK]</code> มาจับคู่กันเป็น Composite Primary Key!
                  </p>
                </div>
              </div>
            </div>
'''
print("Bakery ER HTML generated, length:", len(bakery_er_html))
