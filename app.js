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

document.addEventListener('DOMContentLoaded', () => {
    updateStatus(); 
    loadNewLevel();
    
    // ✨ 音效按鈕監聽
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

// 生成 3 題會話
function generateNewSession() {
    const available = triviaDB.filter(q => !state.usedQuestions.includes(q.id));
    
    if (available.length < 3) {
        // 題庫不足，重置並重新生成
        state.usedQuestions = [];
        localStorage.setItem('atomic_used_q', '[]');
        generateNewSession();
        return;
    }

    // 隨機抽 3 題
    let shuffled = [...available].sort(()=>Math.random()-0.5);
    state.currentSession = shuffled.slice(0, 3);
    state.sessionProgress = 0;
    state.sessionCorrect = 0;
}

// 顯示目前這一題
function renderQuestion(container) {
    const q = state.currentSession[state.sessionProgress];
    const progress = state.sessionProgress + 1;
    
    container.innerHTML = `
        <div style="text-align: center; font-size: 0.9rem; color: #94a3b8; margin-bottom: 12px; font-weight: bold;">
            進度: ${progress} / 3
        </div>
        <div class="mode-icon">🔥</div>
        <p class="q-text">${q.q}</p>
        <div class="options-grid">
            ${q.options.map((o, i) => `<button class="btn-opt" onclick="checkAns(${i}, ${q.a})">${o}</button>`).join('')}
        </div>
    `;
}

function checkAns(user, ans) {
    const q = state.currentSession[state.sessionProgress];
    
    if(user === ans) {
        // ✨ 全屏閃光特效
        document.body.style.backgroundColor = "#d1fae5"; // 瞬間變綠
        setTimeout(() => document.body.style.backgroundColor = "", 200); // 0.2秒後變回來

        // 答對：寵物開心
        playSound('correct');
        setPetMood('happy');
        
        // 記錄已回答
        if (q.dbId) {
            state.usedQuestions.push(q.dbId);
            localStorage.setItem('atomic_used_q', JSON.stringify(state.usedQuestions));
        }
        
        state.sessionProgress++;
        updateProgressEmoji(); // 更新進度圖示
        
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
        // ✨ 全屏紅光特效
        document.body.style.backgroundColor = "#fee2e2"; // 瞬間變紅
        setTimeout(() => document.body.style.backgroundColor = "", 200);

        // 答錯
        playSound('wrong');
        setPetMood('hurt');
        
        setTimeout(() => {
            alert("這也能答錯？可憐？！");
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

// ✨ 遊戲結束畫面
function showGameEnd(success) {
    playSound('levelup');
    const emoji = state.sessionCorrect === 3 ? '🏆' : '🎉';
    const message = state.sessionCorrect === 3 
        ? `3 都答對了！再試啊！`
        : `答對 ${state.sessionCorrect} / 3`;

    const fb = document.getElementById('feedback');
    fb.style.display = 'block';
    fb.innerHTML = `
        <div style="font-size:3rem">${emoji}</div>
        <h3>遊戲結束！升到 LV.${state.level}</h3>
        <p>${message}</p>
        <button class="btn-next" onclick="loadNewLevel()">🤔都答對了！再試啊！</button>
    `;
}

// ✨ 更新進度圖示
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

// ✨ 音效系統
function playSound(type) {
    // 檢查是否關閉音效
    if (!state.soundEnabled) return;
    
    try {
        // 檢查瀏覽器是否支持 Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'correct') {
            // 答對音效 - 開心的音調
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
            // 答錯音效 - 低沉的音調
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
            // 升級音效 - 歡樂上升的音調
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

// ✨ 修改：更新稱號名字和寵物狀態
function updateStatus() {
    const rank = getRank(state.level);
    
    document.getElementById('level-title').innerText = `第 ${state.level} 關`;
    document.getElementById('xp-display').innerText = `${rank} LV.${state.level}`;
    document.getElementById('xp-bar-fill').style.width = `100%`; // 充滿進度條

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

    // 心情覆蓋
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
    
    // 更新進度圖示
    updateProgressEmoji();
}

// ✨ 有趣的稱號名字
function getRank(level) {
    if (level >= 15) return '神秘消失術大師';
    if (level >= 12) return '咖啡永遠不夠的人';
    if (level >= 9) return '睡覺也能思考的人';
    if (level >= 6) return '連 Wi-Fi 都連不上的人';
    if (level >= 3) return '半桶水專家';
    return '剛出爐的吐司';
}


