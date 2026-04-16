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
  console.log('[topnav] initDropdowns called');

  const containers = document.querySelectorAll('.nav-dropdown-container');
  console.log(`[topnav] found ${containers.length} dropdown container(s)`);

  containers.forEach(container => {
    const btn  = container.querySelector('.nav-link');
    const menu = container.querySelector('.nav-dropdown-menu');

    console.log('[topnav] attaching listeners to:', btn);

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');
      console.log(`[topnav] dropdown clicked, was open: ${isOpen}`);

      document.querySelectorAll('.nav-dropdown-menu.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.nav-link.open').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        menu.classList.add('open');
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        console.log('[topnav] dropdown opened');
      } else {
        console.log('[topnav] dropdown closed');
      }
    });
  });

  document.addEventListener('click', () => {
    const openMenus = document.querySelectorAll('.nav-dropdown-menu.open');
    if (openMenus.length) {
      console.log('[topnav] outside click — closing all dropdowns');
      openMenus.forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.nav-link.open').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      console.log('[topnav] Escape pressed — closing all dropdowns');
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
    console.log('[topnav] .nav-dropdown-container found in DOM — initializing');
    observer.disconnect();
    console.log('[topnav] MutationObserver disconnected');
    initDropdowns();
  }
});

console.log('[topnav] MutationObserver started, watching for nav...');
observer.observe(document.body, { childList: true, subtree: true });