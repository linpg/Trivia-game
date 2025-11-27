let state = {
    xp: parseInt(localStorage.getItem('atomic_xp') || 0),
    level: parseInt(localStorage.getItem('atomic_level') || 1),
    usedQuestions: JSON.parse(localStorage.getItem('atomic_used_q') || '[]'),
    currentTask: null,
    bossProgress: 0,
    petMood: 'normal' // 新增：寵物心情 (normal, happy, hurt)
};

document.addEventListener('DOMContentLoaded', () => {
    updateStatus(); 
    loadNewLevel();
});

function loadNewLevel() {
    // 換關卡時，把心情重置為 normal
    setPetMood('normal');

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
        setPetMood('happy'); // 答對 Boss 題：開心
        state.bossProgress++;
        if(state.bossProgress >= 5) showFeedback(true, "擊敗 Boss！");
        else setTimeout(() => renderBoss(document.getElementById('game-stage')), 800); // 延遲一點讓玩家看到開心動畫
    } else {
        setPetMood('hurt'); // 答錯 Boss 題：受傷
        alert("被 Boss 打敗了！重來！");
        state.bossProgress = 0;
        renderBoss(document.getElementById('game-stage'));
    }
}

function checkAns(user, ans) {
    if(user === ans) {
        // 答對：寵物開心
        setPetMood('happy');
        
        if (state.currentTask.dbId) {
            state.usedQuestions.push(state.currentTask.dbId);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        if (state.currentTask.reset) {
            state.usedQuestions = [];
            localStorage.setItem('atomic_used_q', '[]');
        }
        
        // 稍微延遲顯示結算，讓玩家能看到寵物跳起來
        setTimeout(() => {
            showFeedback(true, state.currentTask.note);
        }, 600);
        
    } else {
        // 答錯：寵物受傷
        setPetMood('hurt');
        
        // 震動一下後彈出警告
        setTimeout(() => {
            alert("答錯了！寵物受傷了 😢\n再試一次！");
            setPetMood('normal'); // 恢復正常讓玩家繼續
        }, 300);
    }
}

// ✨ 新增：控制寵物心情與動畫 ✨
function setPetMood(mood) {
    state.petMood = mood;
    updateStatus(); // 重新渲染寵物圖案
    
    const avatar = document.getElementById('pet-avatar');
    // 移除舊動畫
    avatar.classList.remove('pet-happy', 'pet-hurt');
    
    // 強制觸發重繪 (Reflow) 以便重新播放動畫
    void avatar.offsetWidth;

    // 加入新動畫
    if (mood === 'happy') avatar.classList.add('pet-happy');
    if (mood === 'hurt') avatar.classList.add('pet-hurt');
}

function showFeedback(success, note) {
    state.xp += 20;
    let levelUp = false;
    if(state.xp >= 100) { 
        state.xp %= 100; 
        state.level++;
        levelUp = true; 
    }
    
    localStorage.setItem('atomic_xp', state.xp);
    localStorage.setItem('atomic_level', state.level);
    // 這裡不呼叫 updateStatus，因為我們想保留 'happy' 的表情直到按下下一關
    // 但我們需要更新 XP 條文字，所以手動更新一下文字就好
    document.getElementById('xp-display').innerText = `LV.${state.level}`;
    document.getElementById('xp-bar-fill').style.width = `${state.xp}%`;

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    fb.innerHTML = `
        <div style="font-size:3rem">${levelUp ? '🆙' : '🎉'}</div>
        <h3>${levelUp ? '升級啦！' : '挑戰成功！'}</h3>
        <p>${note}</p>
        <button class="btn-next" onclick="loadNewLevel()">下一關 ➡</button>
    `;
}

function updateStatus() {
    // 1. 計算玩家稱號
    let rank = '剛出爐的吐司';
    if (state.level >= 10) rank = '半桶水專家';
    if (state.level >= 20) rank = '連 Wi-Fi 都連不上的人';
    if (state.level >= 30) rank = '睡覺也能思考的人';
    if (state.level >= 40) rank = '咖啡永遠不夠的人';
    if (state.level >= 50) rank = '神秘消失術大師';

    // 2. 更新文字顯示
    // 左上角：顯示目前的關卡數
    document.getElementById('level-title').innerText = `第 ${state.level} 關`;
    
    // 右上角：顯示 稱號 + 等級 + XP
    document.getElementById('xp-display').innerText = `${rank} LV.${state.level} (${state.xp}%)`;
    
    // 進度條
    document.getElementById('xp-bar-fill').style.width = `${state.xp}%`;

    // 3. 寵物進化邏輯 (這是剛剛寫好的，保持不變)
    const petAvatar = document.getElementById('pet-avatar');
    const petStatus = document.getElementById('pet-status');
    let icon = '🥚';
    let text = '孵化中...';

    if (state.level >= 5) { icon = '🥚'; text = '破殼而出'; }
    if (state.level >= 10) { icon = '🦕'; text = '幼年期'; }
    if (state.level >= 20) { icon = '🦅'; text = '青年期'; }
    if (state.level >= 30) { icon = '🐊'; text = '成熟期'; }
    if (state.level >= 40) { icon = '🦖'; text = '老年期'; }
    if (state.level >= 50) { icon = '🐉'; text = '靈魂昇華'; }
    if (state.level >= 60) { icon = '🐲'; text = '成為天使'; }

    // ✨ 心情覆蓋 (如果開心或受傷，暫時改變表情) ✨
    if (state.petMood === 'happy') {
        // 開心時加愛心或笑臉
        if (state.level < 5) icon = '✨🥚✨'; 
        else if (state.level < 10) icon = '🦕❤️';
        else if (state.level < 20) icon = '🦎🎵';
        else icon += '🥰'; 
    } 
    else if (state.petMood === 'hurt') {
        // 受傷時變暈眩或受傷
        if (state.level < 5) icon = '🥚💥';
        else if (state.level < 10) icon = '🦕🔥';
        else icon = '👾'; 
    }

    petAvatar.innerText = icon;
    petStatus.innerText = `階段：${text}`;
}
