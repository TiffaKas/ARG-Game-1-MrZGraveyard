// 全局跳转拦截器
document.addEventListener('click', function(e) {
    // 探测点击对象或其父级是否有 onclick 属性
    let target = e.target.closest('[onclick]');
    
    if (target) {
        const attr = target.getAttribute('onclick');
        
        // 匹配包含 location.href 的跳转逻辑
        if (attr && attr.includes('location.href')) {
            // 阻止原有的行内逻辑执行
            e.stopImmediatePropagation();
            e.preventDefault();
            
            // 提取 URL
            const urlMatch = attr.match(/location\.href\s*=\s*['"](.*?)['"]/);
            if (urlMatch && urlMatch[1]) {
                window.open(urlMatch[1], '_blank');
            }
        }
    }
}, true); // 使用捕获模式确保优先执行
