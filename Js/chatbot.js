// Chatbot functionality
class Chatbot {
  constructor() {
    this.botResponses = [
      "Chào bạn! Tôi có thể giúp bạn tìm hiểu về các ứng dụng trong Traphaco Portal.",
      "Bạn cần hỗ trợ gì về hệ thống HRM, Laboratory hay các ứng dụng khác?",
      "Tôi có thể hướng dẫn bạn cách sử dụng các tính năng trong portal.",
      "Bạn có gặp khó khăn gì khi truy cập vào các hệ thống không?",
      "Tôi sẽ ghi nhận phản hồi của bạn và chuyển đến bộ phận kỹ thuật.",
      "Cảm ơn bạn đã sử dụng Traphaco Portal. Còn gì tôi có thể hỗ trợ?",
      "Bạn có thể mô tả chi tiết vấn đề để tôi hỗ trợ tốt hơn không?",
      "Tôi đang học hỏi để cải thiện trải nghiệm người dùng. Cảm ơn phản hồi của bạn!",
    ];

    this.init();
  }

  init() {
    this.createChatElements();
    this.bindEvents();
  }

  createChatElements() {
    // Create chatbot icon
    const chatbotIcon = document.createElement("div");
    chatbotIcon.className = "chatbot-icon";
    chatbotIcon.id = "chatbotIcon";
    chatbotIcon.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,1 12,8H11V10A1,1 0 0,1 10,11H9A1,1 0 0,1 8,10V9A1,1 0 0,1 9,8H10V7.73C9.4,7.39 9,6.74 9,6A2,2 0 0,1 11,4V2A2,2 0 0,1 12,2M21,9V10A1,1 0 0,1 20,11H19A1,1 0 0,1 18,10V9A1,1 0 0,1 19,8H20A1,1 0 0,1 21,9M16,11A1,1 0 0,1 17,12V13A1,1 0 0,1 16,14H15A1,1 0 0,1 14,13V12A1,1 0 0,1 15,11H16M10,15A1,1 0 0,1 11,16V17A1,1 0 0,1 10,18H9A1,1 0 0,1 8,17V16A1,1 0 0,1 9,15H10M7,12A2,2 0 0,1 9,14A2,2 0 0,1 7,16A2,2 0 0,1 5,14A2,2 0 0,1 7,12Z"/>
            </svg>
        `;

    // Create chat window
    const chatWindow = document.createElement("div");
    chatWindow.className = "chat-window";
    chatWindow.id = "chatWindow";
    chatWindow.innerHTML = `
            <div class="chat-header">
                <div class="bot-info">
                    <div class="bot-avatar">
                        <svg viewBox="0 0 24 24">
                            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A1,1 0 0,1 12,8H11V10A1,1 0 0,1 10,11H9A1,1 0 0,1 8,10V9A1,1 0 0,1 9,8H10V7.73C9.4,7.39 9,6.74 9,6A2,2 0 0,1 11,4V2A2,2 0 0,1 12,2M21,9V10A1,1 0 0,1 20,11H19A1,1 0 0,1 18,10V9A1,1 0 0,1 19,8H20A1,1 0 0,1 21,9M16,11A1,1 0 0,1 17,12V13A1,1 0 0,1 16,14H15A1,1 0 0,1 14,13V12A1,1 0 0,1 15,11H16M10,15A1,1 0 0,1 11,16V17A1,1 0 0,1 10,18H9A1,1 0 0,1 8,17V16A1,1 0 0,1 9,15H10M7,12A2,2 0 0,1 9,14A2,2 0 0,1 7,16A2,2 0 0,1 5,14A2,2 0 0,1 7,12Z"/>
                        </svg>
                    </div>
                    <div>
                        <div class="bot-name">Traphaco Assistant</div>
                        <div class="bot-status">Đang trực tuyến</div>
                    </div>
                </div>
                <button class="close-btn" id="closeChat">&times;</button>
            </div>

            <div class="chat-messages" id="chatMessages">
                <div class="message bot-message">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        Xin chào! Tôi là Traphaco Assistant. Tôi có thể hỗ trợ bạn về các ứng dụng trong portal. Bạn cần giúp gì?
                    </div>
                </div>
            </div>

            <div class="typing-indicator" id="typingIndicator">
                <div class="message-avatar">🤖</div>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>

            <div class="chat-input-container">
                <div class="chat-input-group">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Nhập tin nhắn...">
                    <button class="send-btn" id="sendBtn">
                        <svg viewBox="0 0 24 24">
                            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

    // Append to body
    document.body.appendChild(chatbotIcon);
    document.body.appendChild(chatWindow);

    // Store references
    this.chatbotIcon = document.getElementById("chatbotIcon");
    this.chatWindow = document.getElementById("chatWindow");
    this.closeChat = document.getElementById("closeChat");
    this.chatInput = document.getElementById("chatInput");
    this.sendBtn = document.getElementById("sendBtn");
    this.chatMessages = document.getElementById("chatMessages");
    this.typingIndicator = document.getElementById("typingIndicator");
  }

  bindEvents() {
    // Toggle chat window
    this.chatbotIcon.addEventListener("click", () => {
      this.chatWindow.classList.add("show");
      this.chatInput.focus();
    });

    this.closeChat.addEventListener("click", () => {
      this.chatWindow.classList.remove("show");
    });

    // Send message events
    this.sendBtn.addEventListener("click", () => this.sendMessage());

    this.chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.sendMessage();
      }
    });

    // Close chat when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !this.chatWindow.contains(e.target) &&
        !this.chatbotIcon.contains(e.target)
      ) {
        this.chatWindow.classList.remove("show");
      }
    });

    // Auto-scroll new messages
    const observer = new MutationObserver(() => {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    });

    observer.observe(this.chatMessages, {
      childList: true,
      subtree: true,
    });
  }

  sendMessage() {
    const message = this.chatInput.value.trim();
    if (message === "") return;

    // Add user message
    this.addMessage(message, "user");
    this.chatInput.value = "";

    // Show typing indicator
    this.showTypingIndicator();

    // Simulate bot response delay
    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.generateResponse(message);
      this.addMessage(response, "bot");
    }, 1000 + Math.random() * 2000);
  }

  generateResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Traphaco-specific responses
    if (message.includes("hrm") || message.includes("nhân sự")) {
      return "Hệ thống HRM giúp bạn quản lý nhân sự, chấm công, nghỉ phép và lương thưởng. Bạn có thể truy cập qua nút 'Truy cập' trong card HRM.";
    }

    if (message.includes("labo") || message.includes("laboratory")) {
      return "Hệ thống Labo dành cho Labo NC giúp quản lý các hoạt động nghiên cứu. Bạn cần quyền truy cập từ bộ phận Labo NC.";
    }

    if (message.includes("base") || message.includes("văn phòng")) {
      return "Base là hệ thống quản lý văn phòng chung cho tất cả phòng ban. Bạn có thể truy cập thông qua đăng nhập Microsoft.";
    }

    if (message.includes("lalalab") || message.includes("chất lượng")) {
      return "LalaLab là hệ thống quản lý chất lượng và sản xuất dành cho Phòng quản lý chất lượng.";
    }

    if (message.includes("power bi") || message.includes("báo cáo")) {
      return "Power BI giúp xây dựng báo cáo và phân tích dữ liệu, được quản lý bởi Phòng công nghệ thông tin.";
    }

    if (message.includes("đăng nhập") || message.includes("login")) {
      return "Bạn cần đăng nhập bằng tài khoản Microsoft để truy cập portal. Nếu gặp lỗi, vui lòng liên hệ IT Support.";
    }

    if (message.includes("lỗi") || message.includes("không vào được")) {
      return "Tôi sẽ ghi nhận vấn đề của bạn. Vui lòng mô tả chi tiết lỗi để tôi hỗ trợ tốt hơn, hoặc liên hệ IT Support.";
    }

    // Default responses
    return this.botResponses[
      Math.floor(Math.random() * this.botResponses.length)
    ];
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = sender === "user" ? "👤" : "🤖";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    this.chatMessages.appendChild(messageDiv);
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  showTypingIndicator() {
    this.typingIndicator.style.display = "flex";
    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
  }

  hideTypingIndicator() {
    this.typingIndicator.style.display = "none";
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Chatbot();
});
