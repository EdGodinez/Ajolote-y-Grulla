
export function renderContact() {
    const contact = document.getElementById("contact");

    if (!contact) return;

    contact.innerHTML = `
        <section class="contact-section py-5">
            <div class="container">

                <div class="mb-4">
                    <h1 class="display-4 fw-bold contact-title">
                        Contáctanos
                    </h1>
                    <p class="contact-description mb-0">
                        ¿Tienes dudas sobre tu pedido, un producto o necesitas asistencia?
                        <br>
                        Estamos aquí para ayudarte.
                    </p>
                </div>

                <div class="contact-grid">

                    <!-- Formulario -->
                    <div class="contact-card bg-white p-4">
                        <h2 class="fw-bold mb-2">Envíanos un mensaje</h2>
                        <p class="text-secondary mb-4">
                            Completa el formulario y nos pondremos en contacto contigo.
                        </p>

                        <form
                            id="contact-form"
                            action="https://formspree.io/f/mqppekov"
                            method="POST"
                        >
                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    Nombre <span class="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Ej. María Rodríguez"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">
                                    Correo electrónico <span class="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    autocomplete="email"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="contactPhone" class="form-label">
                                    Teléfono <span class="required">*</span>
                                </label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    id="contactPhone"
                                    name="phone"
                                    placeholder="Ej. 5512345678"
                                    autocomplete="tel"
                                    inputmode="numeric"
                                    pattern="[0-9]{10}"
                                    maxlength="10"
                                    title="Ingresa 10 dígitos numéricos"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="message" class="form-label">
                                    Mensaje <span class="required">*</span>
                                </label>
                                <textarea
                                    class="form-control"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Escribe tus comentarios o dudas aquí..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="btn contact-button px-4 py-2"
                            >
                                Enviar mensaje
                                <i class="bx bx-right-arrow-alt fs-4 ms-2"></i>
                            </button>

                            <div id="form-status" aria-live="polite"></div>
                        </form>
                    </div>

                    <!-- Información de contacto -->
                    <div class="contact-info-card p-4">
                        <h2 class="fw-bold mb-3">Información de contacto</h2>
                        <p class="text-secondary mb-4">
                            También puedes comunicarte con nosotros por estos medios.
                        </p>

                        <div class="contact-info-item d-flex gap-3">
                            <div class="contact-icon">
                                <i class="bx bx-envelope"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5 class="fw-bold mb-1">Correo electrónico</h5>
                                <a
                                    href="mailto:ajoloteygrulla@outlook.com"
                                    class="contact-highlight"
                                >
                                    ajoloteygrulla@outlook.com
                                </a>
                                <p class="contact-small mb-0 mt-1">
                                    Te respondemos en menos de 24 horas.
                                </p>
                            </div>
                        </div>

                        <hr class="contact-divider">

                        <div class="contact-info-item d-flex gap-3">
                            <div class="contact-icon">
                                <i class="bx bx-phone"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5 class="fw-bold mb-1">Teléfono</h5>
                                <a
                                    href="tel:+525512345678"
                                    class="contact-highlight"
                                >
                                    +52 (55) 1234-5678
                                </a>
                                <p class="contact-small mb-0 mt-1">
                                    Lun - Vie, 9:00 a 18:00 hrs.
                                </p>
                            </div>
                        </div>

                        <hr class="contact-divider">

                        <div class="contact-info-item d-flex gap-3">
                            <div class="contact-icon">
                                <i class="bx bx-time-five"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5 class="fw-bold mb-1">Horario de atención</h5>
                                <p class="contact-highlight mb-1">
                                    Lunes a Viernes
                                </p>
                                <p class="contact-small mb-0">
                                    9:00 a 18:00 hrs. (CDMX)
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Ubicación -->
                    <div class="contact-location-card p-4">
                        <h2 class="fw-bold mb-3">Nuestra ubicación</h2>
                        <p class="text-secondary mb-4">
                            Visítanos en nuestra ubicación de referencia.
                        </p>

                        <div class="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5929.627057167084!2d-99.2750948844065!3d19.361105935353535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d200deba18c34d%3A0xe7c4a41a4e29c6a0!2sCentro%20Santa%20Fe!5e0!3m2!1ses-419!2smx!4v1794236257157!5m2!1ses-419!2smx"
                                title="Ubicación de referencia de Ajolote y Grulla"
                                loading="lazy"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <p class="contact-location-text mt-3 mb-1">
                            <i class="bx bx-map-pin"></i>
                            Centro Santa Fe, Ciudad de México
                        </p>
                        <p class="contact-small mb-0">
                            Ubicación ficticia con fines académicos.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    `;
}