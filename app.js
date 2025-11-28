let state = {
    xp: parseInt(localStorage.getItem('atomic_xp') || 0),
    level: parseInt(localStorage.getItem('atomic_level') || 1),
    usedQuestions: JSON.parse(localStorage.getItem('atomic_used_q') || '[]'),
    currentSession: [], // 這一局的 3 題
    sessionProgress: 0, // 目前進度 (0-2)
    sessionCorrect: 0, // 這一局答對幾題
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
    const title = document.getElementById('level-title');

    generateNewSession();
    
    header.classList.remove('boss-mode');
    title.innerText = `第 ${state.level} 關`;
    
    renderQuestion(stage);
}

// 生成 3 題會話 (混合難度版 & 嚴格防重複)
function generateNewSession() {
    // 1. 先過濾掉所有「已使用」的題目
    let available = triviaDB.filter(q => !state.usedQuestions.includes(q.id));
    
    // 2. 如果題目不夠 3 題了（200題都做完了），則重置題庫
    if (available.length < 3) {
        alert("太強了！你已經做完所有題目！題庫將重置，開始第二輪挑戰！");
        state.usedQuestions = [];
        localStorage.setItem('atomic_used_q', '[]');
        generateNewSession(); // 重新執行
        return;
    }

    // 3. 分離難度
    let easy = available.filter(q => (q.difficulty || 0) === 0);
    let medium = available.filter(q => (q.difficulty || 0) === 1);
    let hard = available.filter(q => (q.difficulty || 0) >= 2);

    let sessionQuestions = [];

    // 4. 根據等級配題
    if (state.level <= 5) {
        sessionQuestions = [...getRandom(easy, 2), ...getRandom(medium, 1)];
    } else if (state.level <= 15) {
        sessionQuestions = [...getRandom(easy, 1), ...getRandom(medium, 2)];
    } else {
        sessionQuestions = [...getRandom(easy, 1), ...getRandom(medium, 1), ...getRandom(hard, 1)];
    }
    
    // 5. 補足題目 (如果某種難度缺題)
    if (sessionQuestions.length < 3) {
        let needed = 3 - sessionQuestions.length;
        let remaining = available.filter(q => !sessionQuestions.includes(q));
        sessionQuestions.push(...getRandom(remaining, needed));
    }

    state.currentSession = sessionQuestions;
    state.sessionProgress = 0;
    state.sessionCorrect = 0;
}

function getRandom(arr, n) {
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(n, arr.length));
}

function renderQuestion(container) {
    const q = state.currentSession[state.sessionProgress];
    const progress = state.sessionProgress + 1;
    
    let diffIcon = '🟢';
    if ((q.difficulty || 0) === 1) diffIcon = '🟡';
    if ((q.difficulty || 0) >= 2) diffIcon = '🔴';

    container.innerHTML = `
        <div style="text-align: center; font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px; font-weight: bold;">
            進度: ${progress} / 3
        </div>
        <div class="mode-icon">${diffIcon}</div>
        <p class="q-text">${q.q}</p>
        <div class="options-grid">
            ${q.options.map((o, i) => `<button class="btn-opt" onclick="checkAns(${i}, ${q.a})">${o}</button>`).join('')}
        </div>
    `;
}

function checkAns(user, ans) {
    const q = state.currentSession[state.sessionProgress];
    
    if(user === ans) {
        // ✨ 全屏閃光 (綠)
        document.body.style.backgroundColor = "#d1fae5"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200); 

        playSound('correct');
        setPetMood('happy');
        state.sessionCorrect++;
        
        // ✨ 關鍵修正：使用 q.id 而不是 q.dbId
        // 只有答對才記錄為「已使用」，確保不會再出現
        if (q.id !== undefined) {
            // 確保不重複添加
            if (!state.usedQuestions.includes(q.id)) {
                state.usedQuestions.push(q.id);
                localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
            }
        }
        
        state.sessionProgress++;
        updateProgressEmoji(); 
        
        if(state.sessionProgress >= 3) {
            state.level++;
            localStorage.setItem('atomic_level', state.level);
            setTimeout(() => showGameEnd(true), 600);
        } else {
            setTimeout(() => renderQuestion(document.getElementById('game-stage')), 800);
        }
        
    } else {
        // ✨ 全屏閃光 (紅)
        document.body.style.backgroundColor = "#fee2e2"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200);

        playSound('wrong');
        setPetMood('hurt');
        
        // 答錯會顯示解析，但題目不會被標記為「已使用」，下次還有機會遇到（複習）
        setTimeout(() => {
            alert(`答錯了！\n正確答案是：${q.options[q.a]}\n解析：${q.note}`);
            setPetMood('normal');
        }, 300);
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

function showGameEnd(success) {
    playSound('levelup');
    const emoji = state.sessionCorrect === 3 ? '🏆' : '🎉';
    
    const randomGif = danceGifs[Math.floor(Math.random() * danceGifs.length)];
    
    const message = state.sessionCorrect === 3 
        ? `3 題全對！太強了！`
        : `答對 ${state.sessionCorrect} / 3`;

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    
    fb.innerHTML = `
        <div style="margin-bottom: 15px;">
            <img src="${randomGif}" style="width: 100%; max-width: 220px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        </div>
        <div style="font-size:2.5rem; margin-top: -10px;">${emoji}</div>
        <h3 style="margin: 5px 0;">升級啦！LV.${state.level}</h3>
        <p style="color: #64748b; margin-bottom: 20px;">${message}</p>
        <button class="btn-next" onclick="loadNewLevel()">繼續嗨 💃</button>
    `;
}

function updateProgressEmoji() {
    const progressDiv = document.getElementById('progress-emoji');
    if (!progressDiv) return;
    const progress = (state.sessionProgress / 3) * 100;
    
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
    const rank = getRank(state.level);
    document.getElementById('level-title').innerText = `第 ${state.level} 關`;
    document.getElementById('xp-display').innerText = `${rank} LV.${state.level}`;
    document.getElementById('xp-bar-fill').style.width = `100%`; 

    const petAvatar = document.getElementById('pet-avatar');
    const petStatus = document.getElementById('pet-status');
    
    let icon = '🍞';
    let text = '剛出爐的吐司';

    if (state.level >= 2) { icon = '🤨'; text = '有點懷疑人生'; }
    if (state.level >= 3) { icon = '🧠🔥'; text = '腦子著火'; }
    if (state.level >= 5) { icon = '📚🤓'; text = '書呆子進化'; }
    if (state.level >= 8) { icon = '👔💼'; text = '上班族痛苦版'; }
    if (state.level >= 12) { icon = '😵‍💫☕'; text = '咖啡中毒 無法自拔'; }
    if (state.level >= 18) { icon = '🤖⚡'; text = '機器人失控'; }
    if (state.level >= 25) { icon = '👽🌀'; text = '外星人來襲'; }

    if (state.petMood === 'happy') {
        if (state.level < 2) icon = '🍞🥳'; 
        else if (state.level < 3) icon = '🤨🎊';
        else if (state.level < 5) icon = '🧠💯';
        else if (state.level < 8) icon = '📚🏆';
        else if (state.level < 12) icon = '👔💪';
        else if (state.level < 18) icon = '☕😍';
        else icon = '🤖✨🚀'; 
    } 
    else if (state.petMood === 'hurt') {
        if (state.level < 2) icon = '🍞😭';
        else if (state.level < 3) icon = '🤨😡';
        else if (state.level < 5) icon = '🧠💥';
        else if (state.level < 8) icon = '📚😭';
        else if (state.level < 12) icon = '👔😤';
        else if (state.level < 18) icon = '☕😩';
        else icon = '🤖💔'; 
    }

    petAvatar.innerText = icon;
    petStatus.innerText = `階段：${text}`;
    updateProgressEmoji();
}

function getRank(level) {
    if (level >= 15) return '神秘消失術大師';
    if (level >= 12) return '咖啡永遠不夠的人';
    if (level >= 9) return '睡覺也能思考的人';
    if (level >= 6) return '連 Wi-Fi 都連不上的人';
    if (level >= 3) return '半桶水專家';
    return '剛出爐的吐司';
}
