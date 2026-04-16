// // Generic dropdown toggle — works for any number of dropdowns
// document.querySelectorAll('.nav-dropdown-container').forEach(container => {
//     const btn  = container.querySelector('.nav-link');
//     const menu = container.querySelector('.nav-dropdown-menu');

//     btn.addEventListener('click', e => {
//     e.stopPropagation();
//     const isOpen = menu.classList.contains('open');
//     console.log("Your mom");

//     // Close all open menus first
//     document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
//     document.querySelectorAll('.nav-link.open').forEach(b => {
//         b.classList.remove('open');
//         b.setAttribute('aria-expanded', 'false');
//     });

//     if (!isOpen) {
//         menu.classList.add('open');
//         btn.classList.add('open');
//         btn.setAttribute('aria-expanded', 'true');
//     }
//     });
// });

// // Click outside to close
// document.addEventListener('click', () => {
//     document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
//     document.querySelectorAll('.nav-link.open').forEach(b => {
//     b.classList.remove('open');
//     b.setAttribute('aria-expanded', 'false');
//     });
// });

// // Keyboard: Escape closes
// document.addEventListener('keydown', e => {
//     if (e.key === 'Escape') {
//     document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
//     document.querySelectorAll('.nav-link.open').forEach(b => {
//         b.classList.remove('open');
//         b.setAttribute('aria-expanded', 'false');
//     });
//     }
// });

// console.log("connected!!!!");



function initDropdowns() {
  document.querySelectorAll('.nav-dropdown-container').forEach(container => {
    const btn  = container.querySelector('.nav-link');
    const menu = container.querySelector('.nav-dropdown-menu');

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');

      document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.nav-link.open').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        menu.classList.add('open');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.nav-link.open').forEach(b => {
      b.classList.remove('open');
      b.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.nav-link.open').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

const observer = new MutationObserver(() => {
  if (document.querySelector('.nav-dropdown-container')) {
    observer.disconnect();
    initDropdowns();
  }
});

observer.observe(document.body, { childList: true, subtree: true });