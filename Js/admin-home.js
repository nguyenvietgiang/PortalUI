// Xử lý chuyển đổi tab và modal cho Admin Home

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const categoryTab = document.getElementById('categoryTab');
    const appTab = document.getElementById('appTab');
    const categorySection = document.getElementById('categorySection');
    const appSection = document.getElementById('appSection');
    categoryTab.addEventListener('click', function(e) {
        e.preventDefault();
        categoryTab.classList.add('bg-primary', 'text-white');
        categoryTab.classList.remove('text-gray-700');
        appTab.classList.remove('bg-primary', 'text-white');
        appTab.classList.add('text-gray-700');
        categorySection.classList.remove('hidden');
        appSection.classList.add('hidden');
    });
    appTab.addEventListener('click', function(e) {
        e.preventDefault();
        appTab.classList.add('bg-primary', 'text-white');
        appTab.classList.remove('text-gray-700');
        categoryTab.classList.remove('bg-primary', 'text-white');
        categoryTab.classList.add('text-gray-700');
        appSection.classList.remove('hidden');
        categorySection.classList.add('hidden');
    });

    // Modal handling
    const categoryModal = document.getElementById('categoryModal');
    const appModal = document.getElementById('appModal');
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    const addAppBtn = document.getElementById('addAppBtn');
    const closeCategoryModal = document.getElementById('closeCategoryModal');
    const closeAppModal = document.getElementById('closeAppModal');
    const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');
    const cancelAppBtn = document.getElementById('cancelAppBtn');

    addCategoryBtn.addEventListener('click', function() {
        categoryModal.classList.remove('hidden');
        categoryModal.classList.add('flex');
    });
    addAppBtn.addEventListener('click', function() {
        appModal.classList.remove('hidden');
        appModal.classList.add('flex');
    });
    function closeCategoryModalFunc() {
        categoryModal.classList.add('hidden');
        categoryModal.classList.remove('flex');
    }
    function closeAppModalFunc() {
        appModal.classList.add('hidden');
        appModal.classList.remove('flex');
    }
    closeCategoryModal.addEventListener('click', closeCategoryModalFunc);
    cancelCategoryBtn.addEventListener('click', closeCategoryModalFunc);
    closeAppModal.addEventListener('click', closeAppModalFunc);
    cancelAppBtn.addEventListener('click', closeAppModalFunc);
    categoryModal.addEventListener('click', function(e) {
        if (e.target === categoryModal) {
            closeCategoryModalFunc();
        }
    });
    appModal.addEventListener('click', function(e) {
        if (e.target === appModal) {
            closeAppModalFunc();
        }
    });
});
