let state = {
    xp: parseInt(localStorage.getItem('atomic_xp') || 0),
    level: parseInt(localStorage.getItem('atomic_level') || 1),
    // 讀取已回答過的題目 ID
    usedQuestions: JSON.parse(localStorage.getItem('atomic_used_q') || '[]'),
    currentTask: null,
    bossProgress: 0
};

document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
    loadNewLevel();
});

function loadNewLevel() {
    const stage = document.getElementById('game-stage');
    stage.innerHTML = '';
    document.getElementById('feedback').style.display = 'none';
    
    const header = document.querySelector('.header');
    const title = document.getElementById('level-title');

    if (state.level % 50 === 0) {
        state.currentTask = generateBossLevel(state.level);
        state.bossProgress = 0;
        header.classList.add('boss-mode');
        title.innerText = "🔥 BOSS 關卡";
        renderBoss(stage);
        return;
    } 

    header.classList.remove('boss-mode');
    title.innerText = `關卡 ${state.level}`;
    
    // 傳入 usedQuestions 進行去重
    state.currentTask = getNextLevel(state.level, state.usedQuestions);
    renderQuiz(state.currentTask, stage);
}

function renderQuiz(task, container) {
    container.innerHTML = `
        <div class="mode-icon">📚</div>
        <p class="q-text">${task.q}</p>
        <div class="options-grid">
            ${task.options.map((o, i) => `<button class="btn-opt" onclick="checkAns(${i}, ${task.a})">${o}</button>`).join('')}
        </div>
    `;
}

function renderBoss(container) {
    const q = state.currentTask.questions[state.bossProgress];
    container.innerHTML = `
        <div class="mode-icon">⚔️</div>
        <div style="color:#ef4444; font-weight:bold; text-align:center; margin-bottom:10px">BOSS 進度: ${state.bossProgress+1}/5</div>
        <p class="q-text">${q.q}</p>
        <div class="options-grid">
            ${q.options.map((o, i) => `<button class="btn-opt" onclick="checkBoss(${i}, ${q.a})">${o}</button>`).join('')}
        </div>
    `;
}

function checkBoss(u, a) {
    if(u === a) {
        state.bossProgress++;
        if(state.bossProgress >= 5) showFeedback(true, "擊敗 Boss！");
        else renderBoss(document.getElementById('game-stage'));
    } else {
        alert("被 Boss 打敗了！重來！");
        state.bossProgress = 0;
        renderBoss(document.getElementById('game-stage'));
    }
}

function checkAns(user, ans) {
    // 如果答對了，記錄題目 ID
    if(user === ans) {
        if (state.currentTask.dbId) {
            state.usedQuestions.push(state.currentTask.dbId);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        // 檢查是否是全破重置
        if (state.currentTask.reset) {
            state.usedQuestions = [];
            localStorage.setItem('atomic_used_q', '[]');
        }
        showFeedback(true, state.currentTask.note);
    } else {
        alert("答錯了！再試一次");
    }
}

function showFeedback(success, note) {
    state.xp += 20;
    if(state.xp >= 100) { state.xp %= 100; state.level++; }
    localStorage.setItem('atomic_xp', state.xp);
    localStorage.setItem('atomic_level', state.level);
    updateStatus();

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    fb.innerHTML = `
        <div style="font-size:3rem">🎉</div>
        <h3>挑戰成功！</h3>
        <p>${note}</p>
        <button class="btn-next" onclick="loadNewLevel()">下一關 ➡</button>
    `;
}

function updateStatus() {
    document.getElementById('xp-display').innerText = `LV.${state.level} | XP: ${state.xp}/100`;
    document.getElementById('xp-bar-fill').style.width = `${state.xp}%`;
}
