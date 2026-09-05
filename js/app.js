/**
 * IS Study & Exam Hub - Main Application Controller
 */

class App {
  constructor() {
    this.currentTab = 'notes';
    this.activeChapter = 'ch2';
    this.flashcardIndex = 0;
    this.currentTheme = localStorage.getItem('is_theme') || 'dark';
    this.deviceMode = localStorage.getItem('is_device_mode') || null;
    this.selectedModalMode = null;

    this.init();
  }

  init() {
    // Apply theme
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeButton();

    // Check & Initialize Device Mode
    this.initDeviceMode();

    // Render Chapters Ribbon
    this.renderChapterRibbon();

    // Render Initial Tab (Study Notes)
    this.renderNotesView();

    // Initialize Quiz Engine
    window.quizEngine = new QuizEngine(COURSE_DATA);

    // Render Flashcard Initial
    this.renderFlashcard();

    // Render Exercises View
    this.renderExercisesView();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('is_theme', this.currentTheme);
    this.updateThemeButton();
  }

  updateThemeButton() {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = this.currentTheme === 'dark' ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด';
    }
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    
    // Update Top Navigation Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update Mobile Bottom Navigation Items
    document.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = panel.id === `view-${tabName}` ? 'block' : 'none';
    });

    const ribbon = document.getElementById('chapter-ribbon');
    if (tabName === 'flashcards') {
      if (ribbon) ribbon.style.display = 'none';
    } else {
      if (ribbon) ribbon.style.display = 'flex';
    }

    if (tabName === 'quiz') {
      window.quizEngine.startQuiz(this.activeChapter);
    }

    // Scroll to top smoothly on tab switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectChapter(chapterId) {
    this.activeChapter = chapterId;
    document.querySelectorAll('.ch-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.ch === chapterId);
    });

    if (this.currentTab === 'notes') {
      this.renderNotesView();
    } else if (this.currentTab === 'quiz') {
      window.quizEngine.startQuiz(chapterId);
    } else if (this.currentTab === 'exercises') {
      this.renderExercisesView();
    }
  }

  renderChapterRibbon() {
    const ribbon = document.getElementById('chapter-ribbon');
    if (!ribbon) return;

    const chips = [
      { id: 'all', label: '🌟 ทุกบทเรียน (All)', icon: '📚' },
      ...COURSE_DATA.chapters.map(c => ({
        id: c.id,
        label: `${c.number}: ${c.thTitle}`,
        icon: c.icon
      }))
    ];

    ribbon.innerHTML = chips.map((c, idx) => `
      <div class="ch-chip ${c.id === this.activeChapter ? 'active' : ''}" 
           data-ch="${c.id}" 
           onclick="window.app.selectChapter('${c.id}')">
        <span>${c.icon}</span>
        <span>${c.label}</span>
      </div>
    `).join('');
  }

  renderNotesView() {
    const container = document.getElementById('notes-content-container');
    if (!container) return;

    let targetChapters = [];
    if (this.activeChapter === 'all') {
      targetChapters = COURSE_DATA.chapters;
    } else {
      targetChapters = COURSE_DATA.chapters.filter(c => c.id === this.activeChapter);
    }

    let html = '';
    targetChapters.forEach(chap => {
      html += `
        <div class="mb-4">
          <div class="study-header-card">
            <div>
              <div class="badge badge-primary mb-2">${chap.number}</div>
              <h2>${chap.icon} ${chap.thTitle}</h2>
              <p>${chap.title} — ${chap.description}</p>
            </div>
            <button class="btn-main" onclick="window.app.startQuizForChapter('${chap.id}')" style="white-space:nowrap;">
              ✍️ ทำข้อสอบบทนี้
            </button>
          </div>

          <div class="content-block">
            ${chap.sections.map(sec => `
              <div class="section-card">
                <div class="section-title">
                  <span>📌</span> ${sec.title}
                </div>
                <div>${sec.content}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderExercisesView() {
    const container = document.getElementById('exercises-content-container');
    if (!container) return;

    let targetChapters = [];
    if (this.activeChapter === 'all') {
      targetChapters = COURSE_DATA.chapters;
    } else {
      targetChapters = COURSE_DATA.chapters.filter(c => c.id === this.activeChapter);
    }

    let hasExercises = false;
    let html = '';

    targetChapters.forEach(chap => {
      if (chap.exercises && chap.exercises.length > 0) {
        hasExercises = true;
        html += `
          <div class="mb-4">
            <h3 style="margin-bottom: 16px; display:flex; align-items:center; gap:8px;">
              <span>${chap.icon}</span> แบบฝึกหัดในสไลด์ ${chap.number}: ${chap.thTitle}
            </h3>
            ${chap.exercises.map(ex => `
              <div class="exercise-box">
                <div class="exercise-header">
                  <span class="badge badge-primary">${ex.slideRef}</span>
                </div>
                <h4 style="font-size:1.05rem; margin-bottom: 8px;">${ex.question}</h4>
                <div class="exercise-answer-box">
                  <strong style="color: var(--accent-emerald);">💡 เฉลยและตัวอย่างคำตอบ:</strong>
                  <p style="margin-top: 6px; font-size:0.95rem;">${ex.sampleAnswer}</p>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    });

    if (!hasExercises) {
      container.innerHTML = `
        <div class="section-card text-center" style="padding: 40px 20px; text-align: center;">
          <h4>🔍 ในบทนี้ไม่มีแบบฝึกหัดคำถามปลายเปิดในสไลด์</h4>
          <p style="color: var(--text-muted); margin-top: 8px;">สามารถไปที่แท็บ 'แบบทดสอบ' เพื่อทำแบบทดสอบวัดความเข้าใจได้ทันทีครับ</p>
          <button class="btn-main mt-3" onclick="window.app.switchTab('quiz')">ไปที่แบบทดสอบ ✍️</button>
        </div>
      `;
    } else {
      container.innerHTML = html;
    }
  }

  startQuizForChapter(chId) {
    this.activeChapter = chId;
    this.selectChapter(chId);
    this.switchTab('quiz');
  }

  // Flashcards methods
  renderFlashcard() {
    const list = COURSE_DATA.flashcards;
    const item = list[this.flashcardIndex];
    if (!item) return;

    const card = document.getElementById('flashcard-elem');
    const qElem = document.getElementById('flashcard-q');
    const aElem = document.getElementById('flashcard-a');
    const badge = document.getElementById('flashcard-badge');
    const counter = document.getElementById('flashcard-counter');

    if (card) card.classList.remove('flipped');
    if (qElem) qElem.textContent = item.question;
    if (aElem) aElem.textContent = item.answer;
    if (badge) badge.textContent = item.chapter;
    if (counter) counter.textContent = `${this.flashcardIndex + 1} / ${list.length}`;
  }

  flipFlashcard() {
    const card = document.getElementById('flashcard-elem');
    if (card) card.classList.toggle('flipped');
  }

  nextFlashcard() {
    const total = COURSE_DATA.flashcards.length;
    this.flashcardIndex = (this.flashcardIndex + 1) % total;
    this.renderFlashcard();
  }

  prevFlashcard() {
    const total = COURSE_DATA.flashcards.length;
    this.flashcardIndex = (this.flashcardIndex - 1 + total) % total;
    this.renderFlashcard();
  }

  searchNotes(keyword) {
    const q = keyword.trim().toLowerCase();
    const container = document.getElementById('notes-content-container');
    if (!q) {
      this.renderNotesView();
      return;
    }

    const cards = container.querySelectorAll('.section-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? 'block' : 'none';
    });
  }

  // Device Mode & Adaptive UX/UI Methods
  detectDeviceType() {
    const width = window.innerWidth;
    const ua = navigator.userAgent.toLowerCase();
    const isMobileUA = /mobile|iphone|ipod|android.*mobile|windows phone/i.test(ua);
    const isTabletUA = /ipad|tablet|(android(?!.*mobile))/i.test(ua);

    if (isMobileUA || width <= 640) {
      return 'mobile';
    } else if (isTabletUA || (width > 640 && width <= 1024)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  initDeviceMode() {
    const savedMode = localStorage.getItem('is_device_mode');
    if (savedMode && ['desktop', 'tablet', 'mobile'].includes(savedMode)) {
      this.applyDeviceMode(savedMode);
    } else {
      // Auto-detect and show prompt modal on first visit
      const detected = this.detectDeviceType();
      this.applyDeviceMode(detected);
      setTimeout(() => {
        this.openDeviceModal(detected);
      }, 200);
    }
  }

  openDeviceModal(preselectedMode = null) {
    const modal = document.getElementById('device-modal');
    if (!modal) return;

    const detected = this.detectDeviceType();
    const targetMode = preselectedMode || this.deviceMode || detected;

    // Show recommendation pill on the detected card
    ['desktop', 'tablet', 'mobile'].forEach(m => {
      const pill = document.getElementById(`pill-${m}`);
      if (pill) pill.style.display = m === detected ? 'block' : 'none';
    });

    this.selectModalDevice(targetMode);
    modal.style.display = 'flex';
  }

  selectModalDevice(mode) {
    this.selectedModalMode = mode;
    ['desktop', 'tablet', 'mobile'].forEach(m => {
      const card = document.getElementById(`card-mode-${m}`);
      if (card) card.classList.toggle('selected', m === mode);
    });
  }

  // 1-Click Master Launch: Auto-detects device, sets mode, remembers preference, enters app
  oneClickAutoLaunch() {
    const detected = this.detectDeviceType();
    const rememberCheckbox = document.getElementById('remember-device-choice');

    if (!rememberCheckbox || rememberCheckbox.checked) {
      localStorage.setItem('is_device_mode', detected);
    } else {
      localStorage.removeItem('is_device_mode');
    }

    this.applyDeviceMode(detected);
    const modal = document.getElementById('device-modal');
    if (modal) modal.style.display = 'none';
  }

  // Direct Click on any Device Card: Instantly applies that mode and enters
  directSelectAndLaunch(mode) {
    this.selectedModalMode = mode;
    const rememberCheckbox = document.getElementById('remember-device-choice');

    if (!rememberCheckbox || rememberCheckbox.checked) {
      localStorage.setItem('is_device_mode', mode);
    } else {
      localStorage.removeItem('is_device_mode');
    }

    this.applyDeviceMode(mode);
    const modal = document.getElementById('device-modal');
    if (modal) modal.style.display = 'none';
  }

  confirmDeviceChoice() {
    const mode = this.selectedModalMode || this.detectDeviceType();
    this.directSelectAndLaunch(mode);
  }

  applyDeviceMode(mode) {
    this.deviceMode = mode;
    document.documentElement.setAttribute('data-device-mode', mode);

    const btn = document.getElementById('device-mode-btn');
    if (btn) {
      let icon = '💻';
      let label = 'คอมพิวเตอร์';
      if (mode === 'tablet') {
        icon = '📟';
        label = 'แท็บเล็ต (iPad)';
      } else if (mode === 'mobile') {
        icon = '📱';
        label = 'สมาร์ตโฟน';
      }
      btn.innerHTML = `${icon} โหมด: ${label}`;
    }
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});

