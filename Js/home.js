// User menu dropdown toggle logic (only show/hide on click, never on hover)
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.getElementById('userMenuToggle');
  var dropdown = document.getElementById('userDropdown');
  if (toggleBtn && dropdown) {
    // Always keep dropdown hidden unless toggled
    dropdown.classList.add('hidden');
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.classList.contains('hidden')) {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      }
    });
    // Prevent closing when clicking inside dropdown
    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});

// Toggle view between grid and list for app sections
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleViewBtn');
  const appLists = document.querySelectorAll('.app-list');
  let isListView = false;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      isListView = !isListView;
      appLists.forEach(list => {
        if (isListView) {
          list.classList.add('list-view');
        } else {
          list.classList.remove('list-view');
        }
      });
      // Change icon
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isListView ? 'ri-list-check-2 mr-1' : 'ri-layout-grid-line mr-1';
      }
      // Change text
      const span = toggleBtn.querySelector('span');
      if (span) {
        span.textContent = isListView ? 'Dạng bảng' : 'Dạng lưới';
      }
    });
  }
});
