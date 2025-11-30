let state = {
    xp: parseInt(localStorage.getItem('atomic_xp') || 0),
    level: parseInt(localStorage.getItem('atomic_level') || 1),
    usedQuestions: JSON.parse(localStorage.getItem('atomic_used_q') || '[]'),
    currentSession: [], // 這一輪的 50 題
    sessionProgress: 0, // 目前進度 (0-49)
    sessionCorrect: 0, // 這一輪答對幾題
    petMood: 'normal',
    soundEnabled: JSON.parse(localStorage.getItem('atomic_sound') || 'true') // 音效開關
};

// 隨機辣妹/慶祝 GIF 列表
const danceGifs = [
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/3o7TKv6MgQfdSRT01G/giphy.gif",
    "https://media.giphy.com/media/l2JIdnF6aJcNqyJXq/giphy.gif",
    "https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif",
    "https://media.giphy.com/media/11u7t453jrQxY4/giphy.gif",
    "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif"
];

document.addEventListener('DOMContentLoaded', () => {
    updateStatus(); 
    loadNewLevel();
    
    // 音效按鈕監聽
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('atomic_sound', state.soundEnabled);
        soundToggle.innerText = state.soundEnabled ? '🔊' : '🔇';
    });
    
    document.getElementById('sound-toggle').innerText = state.soundEnabled ? '🔊' : '🔇';
});

function loadNewLevel() {
    setPetMood('normal');

    const stage = document.getElementById('game-stage');
    stage.innerHTML = '';
    document.getElementById('feedback').style.display = 'none';
    
    const header = document.querySelector('.header');
    
    // 生成新的 50 題會話
    generateNewSession();
    
    header.classList.remove('boss-mode');
    
    // 顯示目前是第幾輪挑戰
    const round = Math.floor(state.usedQuestions.length / 50) + 1;
    document.getElementById('level-title').innerText = `第 ${round} 輪挑戰`;
    
    renderQuestion(stage);
}

// 生成 50 題會話 (不重複)
function generateNewSession() {
    // 1. 過濾掉已做過的題目
    let available = triviaDB.filter(q => !state.usedQuestions.includes(q.id));
    
    // 2. 如果題目不夠 50 題了（或者剛好做完 200 題）
    if (available.length === 0) {
        alert("太強了！200 題全部完成！題庫將重置，重新開始第一輪！");
        state.usedQuestions = [];
        localStorage.setItem('atomic_used_q', '[]');
        available = [...triviaDB]; // 重置後重新獲取
    } 

    // 3. 隨機抽取 50 題 (如果不足 50 題就取剩下的)
    let shuffled = [...available].sort(() => 0.5 - Math.random());
    state.currentSession = shuffled.slice(0, 50);
    state.sessionProgress = 0;
    state.sessionCorrect = 0;
}

function renderQuestion(container) {
    // 檢查是否還有題目
    if (!state.currentSession[state.sessionProgress]) return;

    const q = state.currentSession[state.sessionProgress];
    const progress = state.sessionProgress + 1;
    const total = state.currentSession.length;
    
    let diffIcon = '🟢';
    if ((q.difficulty || 0) === 1) diffIcon = '🟡';
    if ((q.difficulty || 0) >= 2) diffIcon = '🔴';

    container.innerHTML = `
        <div style="text-align: center; font-size: 1.1rem; color: #64748b; margin-bottom: 15px; font-weight: bold;">
            本輪進度: <span style="color:#6366f1">${progress}</span> / ${total}
        </div>
        <div class="mode-icon">${diffIcon}</div>
        <p class="q-text" style="font-size: 1.3rem;">${q.q}</p>
        <div class="options-grid">
            ${q.options.map((o, i) => `<button class="btn-opt" onclick="checkAns(${i}, ${q.a})">${o}</button>`).join('')}
        </div>
    `;
}

function checkAns(user, ans) {
    const q = state.currentSession[state.sessionProgress];
    
    if(user === ans) {
        // 答對
        document.body.style.backgroundColor = "#d1fae5"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200); 
        playSound('correct');
        setPetMood('happy');
        state.sessionCorrect++;
        
        // 記錄已回答 (無論這輪結果如何，答過的就不再出現)
        if (!state.usedQuestions.includes(q.id)) {
            state.usedQuestions.push(q.id);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        
        nextStep();
        
    } else {
        // 答錯
        document.body.style.backgroundColor = "#fee2e2"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200);
        playSound('wrong');
        setPetMood('hurt');
        
        // 答錯也要記錄為「已使用」，避免重複
        if (!state.usedQuestions.includes(q.id)) {
            state.usedQuestions.push(q.id);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        
        setTimeout(() => {
            alert(`答錯了！\n正確答案是：${q.options[q.a]}\n解析：${q.note}`);
            setPetMood('normal');
            nextStep();
        }, 300);
    }
}

function nextStep() {
    state.sessionProgress++;
    updateProgressEmoji();
    updateStatus(); // 更新總進度條
    
    // 判斷是否完成本輪 (50題)
    if(state.sessionProgress >= state.currentSession.length) {
        setTimeout(() => showGameEnd(), 600);
    } else {
        setTimeout(() => renderQuestion(document.getElementById('game-stage')), 500);
    }
}

function setPetMood(mood) {
    state.petMood = mood;
    updateStatus(); 
    
    const avatar = document.getElementById('pet-avatar');
    avatar.classList.remove('pet-happy', 'pet-hurt');
    void avatar.offsetWidth;
    if (mood === 'happy') avatar.classList.add('pet-happy');
    if (mood === 'hurt') avatar.classList.add('pet-hurt');
}

// 結算畫面 (50題結束)
function showGameEnd() {
    playSound('levelup');
    const total = state.currentSession.length;
    const score = Math.round((state.sessionCorrect / total) * 100);
    
    let emoji = '🎉';
    let title = '挑戰完成！';
    if (score >= 90) { emoji = '🏆'; title = '棒球大師！'; }
    else if (score >= 60) { emoji = '👍'; title = '表現不錯！'; }
    else { emoji = '💪'; title = '再接再厲！'; }
    
    // 完成一輪升一級
    state.level++;
    localStorage.setItem('atomic_level', state.level);
    
    const randomGif = danceGifs[Math.floor(Math.random() * danceGifs.length)];

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    
    fb.innerHTML = `
        <div style="margin-bottom: 15px;">
            <img src="${randomGif}" style="width: 100%; max-width: 220px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        </div>
        <div style="font-size:2.5rem; margin-top: -10px;">${emoji}</div>
        <h3 style="margin: 5px 0;">${title}</h3>
        <div style="font-size: 1.2rem; margin: 10px 0; color: #333;">
            答對：<span style="color:green; font-weight:bold;">${state.sessionCorrect}</span> / ${total} 題
        </div>
        <p style="color: #64748b; margin-bottom: 20px;">正確率：${score}%</p>
        <button class="btn-next" onclick="loadNewLevel()">下一輪挑戰 ➡</button>
    `;
}

function updateProgressEmoji() {
    const progressDiv = document.getElementById('progress-emoji');
    if (!progressDiv) return;
    
    // 根據 50 題的進度顯示
    let progress = 0;
    if (state.currentSession.length > 0) {
        progress = (state.sessionProgress / state.currentSession.length) * 100;
    }
    
    let emoji = '🐢';
    if (progress >= 33) emoji = '🐇';
    if (progress >= 66) emoji = '🚀';
    progressDiv.innerText = emoji;
}

function playSound(type) {
    if (!state.soundEnabled) return;
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (type === 'correct') {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.connect(gain);
            gain.connect(audioContext.destination);
            osc.frequency.setValueAtTime(800, audioContext.currentTime);
            osc.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
            gain.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
            osc.start(audioContext.currentTime);
            osc.stop(audioContext.currentTime + 0.2);
        } else if (type === 'wrong') {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.connect(gain);
            gain.connect(audioContext.destination);
            osc.frequency.setValueAtTime(400, audioContext.currentTime);
            osc.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
            gain.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
            osc.start(audioContext.currentTime);
            osc.stop(audioContext.currentTime + 0.2);
        } else if (type === 'levelup') {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.connect(gain);
            gain.connect(audioContext.destination);
            osc.frequency.setValueAtTime(600, audioContext.currentTime);
            osc.frequency.setValueAtTime(900, audioContext.currentTime + 0.15);
            osc.frequency.setValueAtTime(1200, audioContext.currentTime + 0.3);
            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
            gain.gain.setValueAtTime(0, audioContext.currentTime + 0.4);
            osc.start(audioContext.currentTime);
            osc.stop(audioContext.currentTime + 0.4);
        }
    } catch(e) {}
}

function updateStatus() {
    // 顯示總答題數/200
    const totalUsed = state.usedQuestions.length;
    document.getElementById('xp-display').innerText = `已完成: ${totalUsed} / 200 題`;
    document.getElementById('xp-bar-fill').style.width = `${(totalUsed / 200) * 100}%`; 

    const petAvatar = document.getElementById('pet-avatar');
    const petStatus = document.getElementById('pet-status');
    
    // 棒球主題進化
    let icon = '🥚';
    let text = '棒球小白';

    if (totalUsed >= 10) { icon = '⚾'; text = '少棒隊員'; }
    if (totalUsed >= 50) { icon = '🧢'; text = '青棒好手'; }
    if (totalUsed >= 100) { icon = '🏟️'; text = '職棒新秀'; }
    if (totalUsed >= 150) { icon = '🌟'; text = '明星球員'; }
    if (totalUsed >= 190) { icon = '👑'; text = '傳奇巨星'; }

    if (state.petMood === 'happy') icon += '✨';
    if (state.petMood === 'hurt') icon += '💔';

    petAvatar.innerText = icon;
    petStatus.innerText = `稱號：${text}`;
    
    updateProgressEmoji();
}

// 用不到這個函數了，稱號邏輯已經合併到 updateStatus
function getRank(level) {
    return '';
}
