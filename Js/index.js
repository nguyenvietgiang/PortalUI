document.addEventListener("DOMContentLoaded", function () {
  const microsoftBtn = document.querySelector(".microsoft-btn");

  microsoftBtn.addEventListener("click", function () {
    const clientId = "79c312b7-adad-43a8-b457-22d47c4f1fb4";
    const tenantId = "b64e7779-a39b-4812-b490-1d710747aac2";
    // Tự động lấy domain hiện tại để tránh lỗi redirect nếu KO dùng github pages bỏ /PortalUI/
    const redirectUri = window.location.origin + "/PortalUI//Pages/callback.html";
    const scope = "openid profile email";

    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_mode=fragment`;

    window.location.href = authUrl;
  });
});
