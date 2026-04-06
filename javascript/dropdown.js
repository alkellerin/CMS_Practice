function toggleDropdownComp(btn) {
    const menu = btn.nextElementSibling;
    btn.classList.toggle('open');
    menu.classList.toggle('open');
}

function selectItem(item) {
    const menu = item.closest('.dropdown-menu');
    const btn = menu.previousElementSibling;
    const placeholder = btn.querySelector('.dropdown-placeholder');

    placeholder.textContent = item.textContent;
    btn.classList.remove('open');
    menu.classList.remove('open');
}

// Close when clicking outside
document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown-container').forEach(container => {
        if (!container.contains(e.target)) {
            container.querySelector('.dropdown-input').classList.remove('open');
            container.querySelector('.dropdown-menu').classList.remove('open');
        }
    });
});