// TAB Navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all buttons and panels
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        // Activate clicked button and corresponding panel
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});