// sidebar.js
(function() {
    const sidebarHTML = `
    <style>
        :root { --p-bg: #1d2731; --gold: #b8977e; --dark: #333; }
        .side { width: 260px; background: var(--p-bg); color: #fff; border-right: 4px solid var(--gold); display: flex; flex-direction: column; height: 100vh; position: fixed; left: 0; top: 0; }
        .nav-menu { margin-top: 20px; flex: 1; overflow-y: auto; }
        .menu-label { padding: 15px 25px 5px; font-size: 11px; color: #555; letter-spacing: 1px; }
        .nav-item { padding: 12px 25px; font-size: 14px; color: var(--gold); cursor: pointer; transition: all 0.3s; display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.03); text-decoration: none; }
        .nav-item:hover { background: rgba(255,255,255,0.1); padding-left: 30px; }
        .nav-item span { margin-right: 15px; font-size: 10px; }
        /* 兼容主内容区偏移 */
        body { padding-left: 260px; } 
    </style>
    <div class="side">
        <div style="padding:40px 20px; text-align:center">
            <h1 style="color:var(--gold); font-size:22px; letter-spacing:4px; margin:0">千安公墓</h1>
            <p style="font-size:10px; color:#555; margin-top:5px;">ADMIN TERMINAL v7.0</p>
        </div>
        <div class="nav-menu">
            <div class="menu-label">内部管理</div>
            <a class="nav-item" href="rules.html"><span> [00] </span> 员工工作守则</a>
            <a class="nav-item" href="system.html"><span> [01] </span> 档案检索模块</a>
            <a class="nav-item" href="entry.html"><span> [02] </span> 数据录入终端</a>
            <a class="nav-item" href="list.html"><span> [03] </span> 已录入档案库</a>
            <a class="nav-item" href="diagram.html"><span> [04] </span> 实时墓位平面图</a>
            <a class="nav-item" href="complain.html"><span> [05] </span> 异常投诉报告</a>
            <a class="nav-item" href="email.html"><span> [06] </span> 内部行政邮箱</a>
            <div class="menu-label">外部连接</div>
            <a class="nav-item" href="official.html" target="_blank"><span> - </span> 访问对外官网</a>
            <a class="nav-item" href="https://www.google.com" target="_blank"><span> - </span> 全网搜索引擎</a>
        </div>
        <div style="padding:20px; font-size:11px; color:#444;">系统状态：稳定<br>© 2026 Q-A Admin</div>
    </div>
    `;
    document.write(sidebarHTML);
})();
