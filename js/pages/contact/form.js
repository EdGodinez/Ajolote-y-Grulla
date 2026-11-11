export function initContactForm() {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        const originalContent = button.innerHTML;

        button.disabled = true;
        button.textContent = "Enviando...";
        status.innerHTML = "";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {

                status.innerHTML = `
                    <div class="alert alert-success mt-3" role="status">
                        <i class="bx bx-check-circle me-2"></i>
                        ¡Mensaje enviado correctamente!
                        Nos pondremos en contacto contigo pronto.
                    </div>
                `;

                form.reset();

            } else {
                throw new Error("Error al enviar el formulario");
            }

        } catch (error) {

            status.innerHTML = `
                <div class="alert alert-danger mt-3" role="alert">
                    <i class="bx bx-error-circle me-2"></i>
                    No se pudo enviar el mensaje.
                    Inténtalo nuevamente.
                </div>
            `;

            console.error(error);

        } finally {
            button.disabled = false;
            button.innerHTML = originalContent;
        }
    });
}