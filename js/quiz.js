/**
 * IS Study & Exam Hub - Quiz Engine
 * Interactive Assessment, Question Limit Selector, Timer, Explanations, Review Mode
 */

class QuizEngine {
  constructor(data) {
    this.allQuestions = data.quizzes;
    this.currentQuizList = [];
    this.currentIndex = 0;
    this.selectedAnswers = {}; // { questionId: selectedIndex }
    this.score = 0;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.activeChapterFilter = "all";
    this.questionLimit = "all"; // 'all', 10, 25
  }

  setQuestionLimit(limit) {
    this.questionLimit = limit;
    this.startQuiz(this.activeChapterFilter);
  }

  startQuiz(chapterFilter = "all") {
    this.activeChapterFilter = chapterFilter;
    let pool = [];
    if (chapterFilter === "all") {
      pool = [...this.allQuestions];
    } else {
      pool = this.allQuestions.filter(q => q.chapterId === chapterFilter);
    }

    // Shuffle questions
    pool.sort(() => Math.random() - 0.5);

    // Apply limit if specified
    if (this.questionLimit !== "all") {
      const num = parseInt(this.questionLimit, 10);
      this.currentQuizList = pool.slice(0, num);
    } else {
      this.currentQuizList = pool;
    }

    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.score = 0;
    this.timerSeconds = 0;

    this.startTimer();
    this.renderCurrentQuestion();
  }

  startTimer() {
    clearInterval(this.timerInterval);
    const timerElem = document.getElementById("quiz-timer-display");
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
      const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
      if (timerElem) timerElem.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  getCurrentQuestion() {
    return this.currentQuizList[this.currentIndex];
  }

  selectOption(optionIndex) {
    const q = this.getCurrentQuestion();
    if (this.selectedAnswers[q.id] !== undefined) return; // already answered

    this.selectedAnswers[q.id] = optionIndex;
    const isCorrect = optionIndex === q.correctIndex;
    if (isCorrect) this.score++;

    this.renderAnswerFeedback(optionIndex, q.correctIndex);
  }

  renderCurrentQuestion() {
    const q = this.getCurrentQuestion();
    if (!q) {
      this.showResult();
      return;
    }

    const quizContent = document.getElementById("quiz-card-content");
    const progressText = document.getElementById("quiz-progress-text");
    const progressFill = document.getElementById("quiz-progress-fill");

    const total = this.currentQuizList.length;
    const currentNum = this.currentIndex + 1;
    const percent = ((currentNum - 1) / total) * 100;

    if (progressText) progressText.textContent = `คำถามข้อที่ ${currentNum} จาก ${total} ข้อ`;
    if (progressFill) progressFill.style.width = `${percent}%`;

    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, idx) => `
      <button class="option-btn" onclick="window.quizEngine.selectOption(${idx})" id="opt-${idx}">
        <div class="option-prefix">${letters[idx]}</div>
        <div class="option-text">${opt}</div>
      </button>
    `).join('');

    quizContent.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div class="badge badge-primary">${q.chapterTitle}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          หมวด: ${this.activeChapterFilter === 'all' ? 'รวมทุกบท (All)' : q.chapterId.toUpperCase()}
        </div>
      </div>
      <h3 class="question-title">${q.question}</h3>
      <div class="options-list">
        ${optionsHtml}
      </div>
      <div class="explanation-card" id="explanation-card">
        <h5 id="explanation-title"></h5>
        <p id="explanation-body">${q.explanation}</p>
      </div>
      <div class="quiz-footer">
        <button class="btn-secondary" onclick="window.quizEngine.prevQuestion()" id="btn-prev" ${this.currentIndex === 0 ? 'style="visibility:hidden;"' : ''}>
          ⬅️ ย้อนกลับ
        </button>
        <button class="btn-main" onclick="window.quizEngine.nextQuestion()" id="btn-next" style="display:none;">
          ข้อถัดไป ➡️
        </button>
      </div>
    `;
  }

  renderAnswerFeedback(selectedIndex, correctIndex) {
    const letters = ['A', 'B', 'C', 'D'];
    const allOptBtns = document.querySelectorAll(".option-btn");
    allOptBtns.forEach(btn => btn.classList.add("disabled"));

    const selectedBtn = document.getElementById(`opt-${selectedIndex}`);
    const correctBtn = document.getElementById(`opt-${correctIndex}`);
    const explanationCard = document.getElementById("explanation-card");
    const explanationTitle = document.getElementById("explanation-title");
    const btnNext = document.getElementById("btn-next");

    if (selectedIndex === correctIndex) {
      if (selectedBtn) selectedBtn.classList.add("correct");
      if (explanationTitle) explanationTitle.innerHTML = "🎉 ยอดเยี่ยม! ตอบถูกต้อง";
      if (explanationCard) explanationCard.style.borderColor = "var(--accent-emerald)";
    } else {
      if (selectedBtn) selectedBtn.classList.add("wrong");
      if (correctBtn) correctBtn.classList.add("correct");
      if (explanationTitle) explanationTitle.innerHTML = `❌ ยังไม่ถูกต้อง (คำตอบที่ถูกคือข้อ ${letters[correctIndex]})`;
      if (explanationCard) explanationCard.style.borderColor = "var(--accent-rose)";
    }

    if (explanationCard) explanationCard.classList.add("show");
    if (btnNext) {
      btnNext.style.display = "inline-flex";
      btnNext.textContent = this.currentIndex === this.currentQuizList.length - 1 ? "ดูผลคะแนนและบทวิเคราะห์ 🏁" : "ข้อถัดไป ➡️";
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.currentQuizList.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      this.showResult();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentQuestion();
      const q = this.getCurrentQuestion();
      const answered = this.selectedAnswers[q.id];
      if (answered !== undefined) {
        this.renderAnswerFeedback(answered, q.correctIndex);
      }
    }
  }

  showResult() {
    this.stopTimer();
    const quizContent = document.getElementById("quiz-card-content");
    const progressFill = document.getElementById("quiz-progress-fill");
    if (progressFill) progressFill.style.width = `100%`;

    const total = this.currentQuizList.length;
    const score = this.score;
    const percent = Math.round((score / total) * 100);

    let feedback = "";
    let badgeClass = "badge-success";
    if (percent >= 80) {
      feedback = "🌟 ยอดเยี่ยมมาก! คุณเข้าใจเนื้อหาได้ดีมาก พร้อมสอบและได้คะแนนระดับ A แน่นอน!";
      badgeClass = "badge-success";
    } else if (percent >= 60) {
      feedback = "👍 ทำได้ดีมาก! ลองทบทวนข้อที่ตอบผิดด้านล่างอีกสักนิดเพื่อความแม่นยำ 100%";
      badgeClass = "badge-warning";
    } else {
      feedback = "📖 ควรทบทวนเนื้อหาเพิ่มเติม แนะนำให้ดูเฉลยละเอียดของข้อที่ผิดด้านล่าง และกลับไปอ่านสรุปเนื้อหาอีกรอบครับ";
      badgeClass = "badge-danger";
    }

    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const timeSpent = `${mins} นาที ${secs} วินาที`;

    // Filter incorrect questions for review
    const mistakes = this.currentQuizList.filter(q => this.selectedAnswers[q.id] !== q.correctIndex);
    const letters = ['A', 'B', 'C', 'D'];

    let mistakesHtml = '';
    if (mistakes.length > 0) {
      mistakesHtml = `
        <div style="margin-top: 36px; text-align: left;">
          <h3 style="margin-bottom: 16px; display:flex; align-items:center; gap:8px;">
            <span>❌</span> ทบทวนข้อที่ตอบผิด (${mistakes.length} ข้อ)
          </h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${mistakes.map(q => {
              const userAnsIdx = this.selectedAnswers[q.id];
              const userAnsText = userAnsIdx !== undefined ? `${letters[userAnsIdx]}. ${q.options[userAnsIdx]}` : 'ไม่ได้ตอบ';
              const correctAnsText = `${letters[q.correctIndex]}. ${q.options[q.correctIndex]}`;
              return `
                <div class="card-outline border-rose" style="padding: 16px;">
                  <div class="badge badge-primary mb-2">${q.chapterTitle}</div>
                  <h4 style="font-size: 1.02rem; margin-bottom: 8px;">${q.question}</h4>
                  <p style="color: var(--accent-rose); font-size: 0.92rem;"><strong>คำตอบของคุณ:</strong> ${userAnsText}</p>
                  <p style="color: var(--accent-emerald); font-size: 0.92rem; margin-top: 4px;"><strong>คำตอบที่ถูกต้อง:</strong> ${correctAnsText}</p>
                  <div class="note-card mt-2" style="background: rgba(16, 185, 129, 0.08); border-left-color: var(--accent-emerald);">
                    <p style="font-size: 0.88rem; color: var(--text-main);"><strong>คำอธิบาย:</strong> ${q.explanation}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else {
      mistakesHtml = `
        <div class="note-card mt-4" style="background: rgba(16, 185, 129, 0.1); border-left-color: var(--accent-emerald);">
          <h4>🎉 ยอดเยี่ยมแบบไร้ที่ติ!</h4>
          <p>คุณตอบถูกต้องครบทุกข้อ 100% เต็มเก่งมากครับ</p>
        </div>
      `;
    }

    quizContent.innerHTML = `
      <div class="score-card">
        <div class="score-circle" style="--percent: ${percent}">
          <div class="score-circle-inner">
            <span class="score-number">${percent}%</span>
            <span class="score-label">${score}/${total} ข้อ</span>
          </div>
        </div>
        <h2 style="margin-bottom: 8px;">สรุปผลการทดสอบ</h2>
        <div class="badge ${badgeClass} mb-3" style="font-size: 0.95rem; padding: 6px 16px;">
          ได้คะแนน ${score} เต็ม ${total} ข้อ
        </div>
        <p style="max-width: 550px; margin: 0 auto 16px auto; color: var(--text-muted); font-size: 1rem;">
          ${feedback}
        </p>
        <p style="font-size: 0.88rem; color: var(--text-sub); margin-bottom: 24px;">
          ⏱️ ใช้เวลาทำข้อสอบ: ${timeSpent}
        </p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <button class="btn-main" onclick="window.quizEngine.startQuiz('${this.activeChapterFilter}')">
            🔄 สอบใหม่อีกครั้ง
          </button>
          <button class="btn-secondary" onclick="window.app.switchTab('notes')">
            📚 อ่านสรุปเนื้อหา
          </button>
          <button class="btn-secondary" onclick="window.app.switchTab('flashcards')">
            📇 ฝึกจำ Flashcards
          </button>
        </div>

        ${mistakesHtml}
      </div>
    `;
  }
}

window.QuizEngine = QuizEngine;
