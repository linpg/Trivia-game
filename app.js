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

// ✨ 進階玩法：隨機辣妹/慶祝 GIF 列表
const danceGifs = [
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // 復古迪斯可
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczhrazZycGM5MG9vdGJteG00aWp0cjhpaG40eGplcmhyZ205MTF6ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EbaEWv3icphQI/giphy.gif", // 歡呼
    "https://media.giphy.com/media/l2JIdnF6aJcNqyJXq/giphy.gif", // 派對
    "https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif",     // 碧昂絲
    "https://media.giphy.com/media/11u7t453jrQxY4/giphy.gif",     // 啦啦隊
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3M1c2J4czRsb21qMHdkMDFmNHF1Nmc2cmU1Y3BuMzhjbmgxNTMzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4j9XOYo6IVDK8/giphy.gif",  
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZhMWZ2M24zMmFja2pwNTJhN2x3cDE0djFqZDh6dXFya2FkeTJncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3UkqVq3F50bVCi9URl/giphy.gif",
   "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjIxeGdsc3QxdGRkaGY1aWxiejFxZTc0dHZqaG55cjV3aGR4MzI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13JipyoTNNvM2c/giphy.gif",
    "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif"  // 歡樂跳舞
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
    
    // 初始化按鈕顯示
    document.getElementById('sound-toggle').innerText = state.soundEnabled ? '🔊' : '🔇';
});

function loadNewLevel() {
    setPetMood('normal');

    const stage = document.getElementById('game-stage');
    stage.innerHTML = '';
    document.getElementById('feedback').style.display = 'none';
    
    const header = document.querySelector('.header');
    const title = document.getElementById('level-title');

    // 生成新的 3 題會話
    generateNewSession();
    
    header.classList.remove('boss-mode');
    title.innerText = `第 ${state.level} 關`;
    
    // 顯示第一題
    renderQuestion(stage);
}

// ✨ 生成 3 題會話 (混合難度版 - 不會太難)
function generateNewSession() {
    let available = triviaDB.filter(q => !state.usedQuestions.includes(q.id));
    
    if (available.length < 3) {
        // 題庫不足，重置
        state.usedQuestions = [];
        localStorage.setItem('atomic_used_q', '[]');
        generateNewSession();
        return;
    }

    // 分離出簡單、中等、困難題
    let easy = available.filter(q => (q.difficulty || 0) === 0);
    let medium = available.filter(q => (q.difficulty || 0) === 1);
    let hard = available.filter(q => (q.difficulty || 0) >= 2);

    let sessionQuestions = [];

    // 難度策略：根據等級配比
    if (state.level <= 5) {
        // LV 1-5：2 簡單 + 1 中等 (新手保護期)
        sessionQuestions = [
            ...getRandom(easy, 2),
            ...getRandom(medium, 1)
        ];
    } else if (state.level <= 15) {
        // LV 6-15：1 簡單 + 2 中等
        sessionQuestions = [
            ...getRandom(easy, 1),
            ...getRandom(medium, 2)
        ];
    } else {
        // LV 16+：1 簡單 + 1 中等 + 1 困難
        sessionQuestions = [
            ...getRandom(easy, 1),
            ...getRandom(medium, 1),
            ...getRandom(hard, 1)
        ];
    }
    
    // 如果湊不夠 3 題 (比如簡單題用完了)，就從剩餘題目裡隨機補
    if (sessionQuestions.length < 3) {
        let needed = 3 - sessionQuestions.length;
        let remaining = available.filter(q => !sessionQuestions.includes(q));
        sessionQuestions.push(...getRandom(remaining, needed));
    }

    state.currentSession = sessionQuestions;
    state.sessionProgress = 0;
    state.sessionCorrect = 0;
}

// 輔助函數：隨機取 n 個
function getRandom(arr, n) {
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(n, arr.length));
}

// 顯示目前這一題
function renderQuestion(container) {
    const q = state.currentSession[state.sessionProgress];
    const progress = state.sessionProgress + 1;
    
    // 難度圖示
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
        // ✨ 全屏閃光特效 (綠色)
        document.body.style.backgroundColor = "#d1fae5"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200); 

        // 答對：寵物開心
        playSound('correct');
        setPetMood('happy');
        state.sessionCorrect++;
        
        // 記錄已回答
        if (q.dbId) {
            state.usedQuestions.push(q.dbId);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        
        // 顯示解析 (可選)
        // alert(q.note); 
        
        state.sessionProgress++;
        updateProgressEmoji(); 
        
        if(state.sessionProgress >= 3) {
            // 3 題全部答完！遊戲結束
            state.level++;
            localStorage.setItem('atomic_level', state.level);
            
            setTimeout(() => {
                showGameEnd(true);
            }, 600);
        } else {
            // 下一題
            setTimeout(() => renderQuestion(document.getElementById('game-stage')), 800);
        }
        
    } else {
        // ✨ 全屏閃光特效 (紅色)
        document.body.style.backgroundColor = "#fee2e2"; 
        setTimeout(() => document.body.style.backgroundColor = "", 200);

        // 答錯
        playSound('wrong');
        setPetMood('hurt');
        
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

// ✨ 遊戲結束畫面 (辣妹跳舞版)
function showGameEnd(success) {
    playSound('levelup');
    const emoji = state.sessionCorrect === 3 ? '🏆' : '🎉';
    
    // ✨ 隨機選一張跳舞 GIF
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

// 更新進度圖示
function updateProgressEmoji() {
    const progressDiv = document.getElementById('progress-emoji');
    if (!progressDiv) return;
    
    // 計算目前進度百分比
    const progress = (state.sessionProgress / 3) * 100;
    
    let emoji = '🐢'; // 0-33%
    if (progress >= 33) emoji = '🐇'; // 33-66%
    if (progress >= 66) emoji = '🚀'; // 66-100%
    
    progressDiv.innerText = emoji;
}

// 音效系統
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
        }
        
        else if (type === 'wrong') {
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
        }
        
        else if (type === 'levelup') {
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
    } catch(e) {
        console.log('音效系統暫時無法使用');
    }
}

// 更新稱號名字和寵物狀態
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

// 有趣的稱號名字
function getRank(level) {
    if (level >= 15) return '神秘消失術大師';
    if (level >= 12) return '咖啡永遠不夠的人';
    if (level >= 9) return '睡覺也能思考的人';
    if (level >= 6) return '連 Wi-Fi 都連不上的人';
    if (level >= 3) return '半桶水專家';
    return '剛出爐的吐司';
}

