document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess');
    const submitBtn = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('message');

    submitBtn.addEventListener('click', function() {
        const answer = guessInput.value.trim();
        if (answer === '我喜欢你') {
            messageDiv.innerHTML = '<span style="color: #ff6b6b; font-size: 24px;">猜对啦！我也超级超级喜欢你哦！</span>';
            messageDiv.style.animation = 'fadeIn 2s';
        } else {
            messageDiv.textContent = '再想想吧，就四个字哦~';
        }
    });

    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});