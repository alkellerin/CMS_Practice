// sidenav.js
// Location: vtl/javascript/sidenav.js

var navItems = document.querySelectorAll('.nav-item');

function showContent(tabId) {
    // Update active states
    navItems.forEach(function (item) {
        item.classList.remove('active');
    });

    var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
    if (activeItem) {
        activeItem.classList.add('active');

        var parentTab = activeItem.getAttribute('data-parent');
        if (parentTab) {
            var parentItem = document.querySelector('[data-tab="' + parentTab + '"]');
            if (parentItem) {
                parentItem.classList.add('active');
            }
        }
    }

    // Reload the content container via query param
    var contentContainer = document.querySelector('.content-area');
    if (contentContainer) {
        fetch('?tab=' + tabId)
            .then(function (response) { return response.text(); })
            .then(function (html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                var newContent = doc.querySelector('.content-area');
                if (newContent) {
                    contentContainer.innerHTML = newContent.innerHTML;
                }
            });
    }
}

function closeAllDropdowns() {
    var allSubItems = document.querySelectorAll('.nav-item.sub');
    var allDropdownIcons = document.querySelectorAll('.dropdown-arrow');

    allSubItems.forEach(function (item) {
        item.classList.remove('show');
    });

    allDropdownIcons.forEach(function (icon) {
        icon.classList.remove('expanded');
    });
}

function toggleDropdown(parentTab) {
    var subItems = document.querySelectorAll('.nav-item.sub[data-parent="' + parentTab + '"]');
    var dropdownIcon = document.querySelector('[data-tab="' + parentTab + '"] .dropdown-arrow');

    var isExpanded = false;
    subItems.forEach(function (item) {
        if (item.classList.contains('show')) {
            isExpanded = true;
        }
    });

    subItems.forEach(function (item) {
        if (isExpanded) {
            item.classList.remove('show');
        } else {
            item.classList.add('show');
        }
    });

    if (dropdownIcon) {
        if (isExpanded) {
            dropdownIcon.classList.remove('expanded');
        } else {
            dropdownIcon.classList.add('expanded');
        }
    }
}

// Add click event listeners
navItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var tabId = this.getAttribute('data-tab');
        var hasDropdown = this.getAttribute('data-has-dropdown');
        var isSubItem = this.classList.contains('sub');

        if (hasDropdown) {
            var otherDropdowns = document.querySelectorAll('[data-has-dropdown]');
            otherDropdowns.forEach(function (dropdown) {
                var dropdownTab = dropdown.getAttribute('data-tab');
                if (dropdownTab !== tabId) {
                    var subItems = document.querySelectorAll('.nav-item.sub[data-parent="' + dropdownTab + '"]');
                    var icon = document.querySelector('[data-tab="' + dropdownTab + '"] .dropdown-arrow');
                    subItems.forEach(function (sub) { sub.classList.remove('show'); });
                    if (icon) { icon.classList.remove('expanded'); }
                }
            });
            toggleDropdown(tabId);
            showContent(tabId);
        } else {
            if (!isSubItem) {
                closeAllDropdowns();
            }
            showContent(tabId);
        }
    });
});

// Initialize with first tab active
var firstTab = document.querySelector('.nav-item[data-tab]');
if (firstTab) {
    showContent(firstTab.getAttribute('data-tab'));
}