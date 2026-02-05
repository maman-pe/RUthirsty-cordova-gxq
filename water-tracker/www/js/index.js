document.addEventListener('deviceready', onDeviceReady, false);

const STORAGE_KEY = 'waterRecords';
const DATE_KEY = 'lastDate';

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // 初始化应用
    initApp();

    // 绑定打卡按钮事件
    const checkInBtn = document.getElementById('checkInBtn');
    checkInBtn.addEventListener('click', handleCheckIn);
}

function initApp() {
    // 检查是否是新的一天，如果是则清空记录
    checkAndResetDaily();

    // 加载并显示记录
    loadRecords();
}

function checkAndResetDaily() {
    const today = getTodayDate();
    const lastDate = localStorage.getItem(DATE_KEY);

    if (lastDate !== today) {
        // 新的一天，清空记录
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        localStorage.setItem(DATE_KEY, today);
    }
}

function getTodayDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function handleCheckIn() {
    // 添加点击动画效果
    const btn = document.getElementById('checkInBtn');
    btn.classList.add('ripple');
    setTimeout(() => btn.classList.remove('ripple'), 600);

    // 记录打卡时间
    const now = new Date();
    const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    // 获取现有记录
    const records = getRecords();

    // 添加新记录
    records.unshift({
        time: timeString,
        timestamp: now.getTime()
    });

    // 保存记录
    saveRecords(records);

    // 更新显示
    loadRecords();

    // 可选：添加震动反馈（如果设备支持）
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function getRecords() {
    const recordsStr = localStorage.getItem(STORAGE_KEY);
    return recordsStr ? JSON.parse(recordsStr) : [];
}

function saveRecords(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function loadRecords() {
    const records = getRecords();

    // 更新今日次数
    const todayCount = document.getElementById('todayCount');
    todayCount.textContent = records.length;

    // 更新记录列表
    const recordsList = document.getElementById('recordsList');

    if (records.length === 0) {
        recordsList.innerHTML = '<p class="empty-message">暂无记录，点击上方按钮开始打卡</p>';
    } else {
        recordsList.innerHTML = records.map((record, index) => `
            <div class="record-item">
                <div class="record-icon">💧</div>
                <div class="record-time">第 ${records.length - index} 次 - ${record.time}</div>
            </div>
        `).join('');
    }
}
