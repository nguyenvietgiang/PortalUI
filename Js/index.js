
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
