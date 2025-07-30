// Hiển thị ngày tháng hiện tại theo định dạng 'Thứ [thứ], [ngày]/[tháng]/[năm]'

document.addEventListener("DOMContentLoaded", function () {
  // Hiển thị ngày tháng hiện tại
  var dateSpan = document.getElementById("currentDate");
  if (dateSpan) {
    var days = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    var now = new Date();
    var dayOfWeek = days[now.getDay()];
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    dateSpan.textContent = `${dayOfWeek}, ${day}/${month}/${year}`;
  }

  // Lấy thông tin user từ localStorage và hiển thị tên
  var userNameSpans = [
    document.getElementById("userName"),
    document.getElementById("userNameInline"),
  ];
  var userAvatar = document.getElementById("userAvatar");
  var userStr = localStorage.getItem("user");
  var name = "Người dùng";
  var avatar =
    "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png";
  if (userStr) {
    try {
      var user = JSON.parse(userStr);
      // Ưu tiên displayName, nếu không có thì dùng givenName + surname, nếu không có thì dùng userPrincipalName
      if (user.displayName && user.displayName.trim() !== "") {
        name = user.displayName;
      } else if (user.givenName && user.surname) {
        name = user.givenName + " " + user.surname;
      } else if (user.userPrincipalName) {
        name = user.userPrincipalName;
      }
      // Nếu có ảnh đại diện (nâng cao, nếu lấy từ Graph API)
      // if (user.photo) avatar = user.photo;
    } catch (e) {
      name = "Người dùng";
    }
  }
  userNameSpans.forEach(function (span) {
    if (span) span.textContent = name;
  });
  if (userAvatar) userAvatar.src = avatar;

  // Xử lý nút đăng xuất
  var logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("user");
      // Đăng xuất tài khoản Microsoft khỏi trình duyệt
      const logoutUrl =
        "https://login.microsoftonline.com/common/oauth2/v2.0/logout" +
        "?post_logout_redirect_uri=" +
        encodeURIComponent(
          //window.location.origin + "../index.html"
          window.location.origin + "/PortalUI/index.html"
        );

      window.location.href = logoutUrl;
    });
  }

  // Dropdown user menu logic (gộp lại, tránh lặp code)
  var toggleBtn = document.getElementById("userMenuToggle");
  var dropdown = document.getElementById("userDropdown");
  if (toggleBtn && dropdown) {
    dropdown.classList.add("hidden");
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });
    // Đóng dropdown khi click ngoài
    document.addEventListener("click", function (e) {
      if (!dropdown.classList.contains("hidden")) {
        if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
          dropdown.classList.add("hidden");
        }
      }
    });
    // Không đóng khi click trong dropdown
    dropdown.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Toggle view between grid and list for app sections
  const toggleViewBtn = document.getElementById("toggleViewBtn");
  const appLists = document.querySelectorAll(".app-list");
  let isListView = false;
  if (toggleViewBtn) {
    toggleViewBtn.addEventListener("click", function () {
      isListView = !isListView;
      appLists.forEach((list) => {
        if (isListView) {
          list.classList.add("list-view");
        } else {
          list.classList.remove("list-view");
        }
      });
      // Change icon
      const icon = toggleViewBtn.querySelector("i");
      if (icon) {
        icon.className = isListView
          ? "ri-list-check-2 mr-1"
          : "ri-layout-grid-line mr-1";
      }
      // Change text
      const span = toggleViewBtn.querySelector("span");
      if (span) {
        span.textContent = isListView ? "Dạng bảng" : "Dạng lưới";
      }
    });
  }
});

// Toggle view between grid and list for app sections
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleViewBtn");
  const appLists = document.querySelectorAll(".app-list");
  let isListView = false;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      isListView = !isListView;
      appLists.forEach((list) => {
        if (isListView) {
          list.classList.add("list-view");
        } else {
          list.classList.remove("list-view");
        }
      });
      // Change icon
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        icon.className = isListView
          ? "ri-list-check-2 mr-1"
          : "ri-layout-grid-line mr-1";
      }
      // Change text
      const span = toggleBtn.querySelector("span");
      if (span) {
        span.textContent = isListView ? "Dạng bảng" : "Dạng lưới";
      }
    });
  }
});
