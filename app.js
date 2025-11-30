let state = {
    round: parseInt(localStorage.getItem('atomic_round') || 1), // 記錄第幾輪挑戰
    usedQuestions: [], // 本局已出現的題目ID，每局重置
    currentSession: [], // 這一局的 30 題
    sessionProgress: 0, // 目前進度 (0-29)
    sessionCorrect: 0, // 這一局答對幾題
    petMood: 'normal',
    soundEnabled: JSON.parse(localStorage.getItem('atomic_sound') || 'true')
};

// 隨機慶祝 GIF
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
    
    // 生成新的 30 題會話
    generateNewSession();
    
    document.getElementById('level-title').innerText = `第 ${state.round} 輪挑戰`;
    renderQuestion(stage);
}

// ✨ 生成 30 題隨機不重複的會話
function generateNewSession() {
    state.usedQuestions = []; // 每輪開始時重置
    
    // 隨機打亂整個題庫
    let shuffled = [...triviaDB].sort(() => 0.5 - Math.random());
    
    // 抽取前 30 題
    state.currentSession = shuffled.slice(0, 30);
    state.sessionProgress = 0;
    state.sessionCorrect = 0;
}

function renderQuestion(container) {
    const q = state.currentSession[state.sessionProgress];
    const progress = state.sessionProgress + 1;
    const total = state.currentSession.length; // 總數為 30
    
    let diffIcon = '🟢';
    if ((q.difficulty || 0) === 1) diffIcon = '🟡';
    if ((q.difficulty || 0) >= 2) diffIcon = '🔴';

    container.innerHTML = `
        <div style="text-align: center; font-size: 1.1rem; color: #64748b; margin-bottom: 15px; font-weight: bold;">
            進度: <span style="color:#6366f1">${progress}</span> / ${total}
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
        document.body.style.backgroundColor = "#d1fae5"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200); 
        playSound('correct');
        setPetMood('happy');
        state.sessionCorrect++;
        nextStep();
    } else {
        document.body.style.backgroundColor = "#fee2e2"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200);
        playSound('wrong');
        setPetMood('hurt');
        
        setTimeout(() => {
            alert(`答錯了！\n正確答案是：${q.options[q.a]}\n解析：${q.note}`);
            setPetMood('normal');
            nextStep();
        }, 300);
    }
}

function nextStep() {
    state.sessionProgress++;
    updateStatus(); // 更新進度條
    
    // 判斷是否完成本輪 (30題)
    if(state.sessionProgress >= state.currentSession.length) {
        setTimeout(() => showGameEnd(), 600);
    } else {
        setTimeout(() => renderQuestion(document.getElementById('game-stage')), 500);
    }
}

function setPetMood(mood) {
    const avatar = document.getElementById('pet-avatar');
    avatar.classList.remove('pet-happy', 'pet-hurt');
    void avatar.offsetWidth;
    if (mood === 'happy') avatar.classList.add('pet-happy');
    if (mood === 'hurt') avatar.classList.add('pet-hurt');
}

// ✨ 結算畫面 (根據正確率給稱號)
function showGameEnd() {
    playSound('levelup');
    const total = state.currentSession.length;
    const accuracy = Math.round((state.sessionCorrect / total) * 100);
    
    let rankTitle = '';
    let emoji = '🎉';

    if (accuracy === 100) {
        rankTitle = '王者之王';
        emoji = '👑';
    } else if (accuracy >= 99) {
        rankTitle = '傳奇王者';
        emoji = '🏆';
    } else if (accuracy >= 80) {
        rankTitle = '白金大師';
        emoji = '🥇';
    } else if (accuracy >= 60) {
        rankTitle = '略知一二';
        emoji = '👍';
    } else if (accuracy >= 40) {
        rankTitle = '天選錯題王';
        emoji = '😂';
    } else {
        rankTitle = '一日球迷';
        emoji = '⚾';
    }
    
    // 增加挑戰輪次
    state.round++;
    localStorage.setItem('atomic_round', state.round);
    
    const randomGif = danceGifs[Math.floor(Math.random() * danceGifs.length)];

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    
    fb.innerHTML = `
        <div style="margin-bottom: 15px;">
            <img src="${randomGif}" style="width: 100%; max-width: 220px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        </div>
        <div style="font-size:2.5rem; margin-top: -10px;">${emoji}</div>
        <h3 style="margin: 5px 0;">最終稱號：${rankTitle}</h3>
        <div style="font-size: 1.2rem; margin: 10px 0; color: #333;">
            答對：<span style="color:green; font-weight:bold;">${state.sessionCorrect}</span> / ${total} 題
        </div>
        <p style="color: #64748b; margin-bottom: 20px;">正確率：${accuracy}%</p>
        <button class="btn-next" onclick="loadNewLevel()">再來一局 ➡</button>
    `;
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

// ✨ 更新狀態列和進度條
function updateStatus() {
    // 上方進度條改為顯示「本輪進度」
    let progressPercent = 0;
    if (state.currentSession.length > 0) {
        progressPercent = (state.sessionProgress / state.currentSession.length) * 100;
    }
    document.getElementById('xp-bar-fill').style.width = `${progressPercent}%`; 

    // 寵物區塊保持簡單
    document.getElementById('pet-avatar').innerText = '⚾';
    document.getElementById('pet-status').innerText = '中職知識王挑戰';
    document.getElementById('xp-display').innerText = ``; // 清空舊的等級顯示
}
