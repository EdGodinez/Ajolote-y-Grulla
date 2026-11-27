/* ==========================================
   CHATBOT - AJOLOTE Y GRULLA
   Componente global del asistente virtual
   ========================================== */

export function renderChatbot() {

    // Evitar crear el chatbot más de una vez
    if (document.getElementById("chatbot-container")) {
        return;
    }

    // Contenedor principal
    const chatbot = document.createElement("div");
    chatbot.id = "chatbot-container";
    chatbot.className = "chatbot-container";

    chatbot.innerHTML = `

        <div class="chatbot-tooltip">
            ¡Hola! ¿Te ayudo a encontrar algo?
        </div>

        <button
         id="chatbot-toggle"
         class="chatbot-toggle"
         type="button"
         aria-label="Abrir asistente virtual"
         aria-expanded="false"
        >

         <video autoplay muted loop playsinline>
             <source src="./assets/videos_axo/hola.mp4" type="video/mp4">
            </video>
        </button>

        <section
            id="chatbot-window"
            class="chatbot-window"
            aria-label="Asistente virtual"
            hidden
        >
            <header class="chatbot-header">
                <div>
                    <h2>¡Hola! Soy tu asistente</h2>
                    <p>Estoy aquí para ayudarte</p>
                </div>

                <button
                    id="chatbot-close"
                    type="button"
                    aria-label="Cerrar chat"
                >
                    <i class="bi bi-x-lg"></i>
                </button>
            </header>

            <div id="chatbot-messages" class="chatbot-messages">
                <div class="chatbot-message chatbot-message-bot">
                    ¡Hola! ¿Qué estás buscando hoy?
                </div>
            </div>

            <form id="chatbot-form" class="chatbot-form">
                <input
                    id="chatbot-input"
                    type="text"
                    placeholder="Escribe tu pregunta..."
                    aria-label="Escribe tu pregunta"
                    autocomplete="off"
                    required
                >

                <button type="submit" aria-label="Enviar mensaje">
                    <i class="bi bi-send-fill"></i>
                </button>
            </form>
        </section>
    `;

    document.body.appendChild(chatbot);

        // Elementos del chatbot
    const toggle = document.getElementById("chatbot-toggle");
    const close = document.getElementById("chatbot-close");
    const windowChat = document.getElementById("chatbot-window");
    const form = document.getElementById("chatbot-form");
    const input = document.getElementById("chatbot-input");
    const messages = document.getElementById("chatbot-messages");

    // Abrir chatbot
    toggle.addEventListener("click", () => {
        windowChat.hidden = false;
        toggle.setAttribute("aria-expanded", "true");

        document.querySelector(".chatbot-tooltip").style.display = "none";

        input.focus();
    });

    // Cerrar chatbot
    close.addEventListener("click", () => {
        windowChat.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    });

    // Enviar mensajes
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userMessage = input.value.trim();

        if (userMessage === "") {
            return;
        }

        // Mostrar mensaje del usuario
        const messageElement = document.createElement("div");
        messageElement.className = "chatbot-message chatbot-message-user";
        messageElement.textContent = userMessage;

        messages.appendChild(messageElement);

        // Limpiar campo
        input.value = "";

        // Bajar automáticamente al último mensaje
        messages.scrollTop = messages.scrollHeight;
    });
}