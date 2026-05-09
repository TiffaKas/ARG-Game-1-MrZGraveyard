// task.js
(function() {
    // 统一样式，确保在所有页面表现一致
    const injectStyles = () => {
        if (document.getElementById('task-js-styles')) return;
        const style = document.createElement('style');
        style.id = 'task-js-styles';
        style.innerHTML = `
            .work-popup { position: fixed; bottom: 20px; right: 20px; width: 380px; max-height: 450px; background: #fff; border: 2px solid #b8977e; display: flex; flex-direction: column; z-index: 9999; box-shadow: 0 10px 40px rgba(0,0,0,0.3); font-family: "SimSun", serif; }
            .popup-header { background: #1d2731; color: #b8977e; padding: 12px 20px; font-weight: bold; font-size: 13px; }
            .popup-content { padding: 20px; overflow-y: auto; font-size: 14px; line-height: 1.8; white-space: pre-wrap; background: #fdfdfd; flex: 1; color: #333; }
            .popup-footer { padding: 15px; border-top: 1px solid #eee; }
            .action-btn { width: 100%; background: #1d2731; color: #b8977e; border: none; padding: 12px; cursor: pointer; font-weight: bold; }
        `;
        document.head.appendChild(style);
    };

    const displayTaskPopup = (content) => {
        // 如果已经存在弹窗，则不重复创建
        if (document.querySelector('.work-popup')) return;

        injectStyles();
        const div = document.createElement('div');
        div.className = 'work-popup';
        div.innerHTML = `
            <div class="popup-header"><span>待处理原始附单</span></div>
            <div class="popup-content">${content}</div>
            <div class="popup-footer"><button class="action-btn" onclick="location.href='entry.html'">前往录入</button></div>
        `;
        document.body.appendChild(div);
    };

    const monitorTask = () => {
        const task = localStorage.getItem('current_task_content');
        if (task) {
            displayTaskPopup(task);
        } else {
            // 如果任务完成了（被删除），自动移除页面上的弹窗
            const existingPopup = document.querySelector('.work-popup');
            if (existingPopup) existingPopup.remove();
        }
    };

    // 初始检查
    window.addEventListener('load', () => {
        monitorTask();
        // 持续轮询，检测跨页面的任务下发
        setInterval(monitorTask, 3000);
    });
})();
