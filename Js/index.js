document.addEventListener("DOMContentLoaded", function () {
  const microsoftBtn = document.querySelector(".microsoft-btn");

  microsoftBtn.addEventListener("click", function () {
    const clientId = "79c312b7-adad-43a8-b457-22d47c4f1fb4";
    const tenantId = "b64e7779-a39b-4812-b490-1d710747aac2";
    //const redirectUri = window.location.origin + "/Pages/callback.html";
    const redirectUri =
      "https://nguyenvietgiang.github.io/PortalUI/Pages/callback.html";

    // 🎯 Thêm scope để lấy id_token: 'openid profile email User.Read'
    const scope = "openid profile email User.Read";

    // ✅ Sửa response_type thành 'id_token token'
    // ✅ Thêm nonce (bắt buộc nếu muốn lấy id_token)
    const authUrl =
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
      `?client_id=${clientId}` +
      `&response_type=id_token token` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&response_mode=fragment` +
      `&nonce=random123`;

    window.location.href = authUrl;
  });
});
