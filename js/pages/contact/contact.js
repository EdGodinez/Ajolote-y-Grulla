export function renderContact() {
    const contact = document.getElementById("contact");

    if (!contact) return;

    contact.innerHTML = `
       <section class="contact-section py-5">
            <div class="container">

                <!-- Encabezado -->
                <div class="mb-5">
                    <h1 class="display-4 fw-bold contact-title">
                        Contáctanos
                    </h1>

                    <p class="contact-description mb-0">
                        ¿Tienes dudas sobre tu pedido, un producto o necesitas asistencia?
                        <br>
                        Estamos aquí para ayudarte.
                    </p>
                </div>


                <div class="row g-4 align-items-stretch">

                    <!-- FORMULARIO -->
                    <div class="col-lg-7">

                        <div class="contact-card bg-white p-4 p-md-5 h-100">

                            <h2 class="fw-bold mb-2">
                                Envíanos un mensaje
                            </h2>

                            <p class="text-secondary mb-4">
                                Completa el siguiente formulario y nos pondremos
                                en contacto lo más pronto posible.
                            </p>


                            <form
                                id="contact-form"
                                action="https://formspree.io/f/mqppekov"
                                method="POST"
                            >

                                <!-- Nombre -->
                                <div class="mb-4">
                                    <label for="name" class="form-label">
                                        Nombre
                                        <span class="required">*</span>
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


                                <!-- Correo -->
                                <div class="mb-4">
                                    <label for="email" class="form-label">
                                        Correo electrónico
                                        <span class="required">*</span>
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


                                <!-- Teléfono -->
                                <div class="mb-4">
                                    <label for="phone" class="form-label">
                                        Teléfono
                                        <span class="required">*</span>
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


                                <!-- Mensaje -->
                                <div class="mb-3">
                                    <label for="message" class="form-label">
                                        Mensaje
                                        <span class="required">*</span>
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


                                <!-- Botón -->
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

                    </div>


                    <!-- INFORMACIÓN DE CONTACTO  -->
                    <div class="col-lg-5">

                        <div class="contact-info-card p-4 p-md-5 h-100">

                            <h2 class="fw-bold mb-3">
                                Información de contacto
                            </h2>

                            <p class="text-secondary mb-5">
                                También puedes comunicarte con nosotros
                                a través de estos medios.
                            </p>


                            <!-- Correo -->
                            <div class="contact-info-item d-flex gap-3">

                                <div class="contact-icon">
                                    <i class="bx bx-envelope"></i>
                                </div>

                                <div>
                                    <h5 class="fw-bold mb-1">
                                        Correo electrónico
                                    </h5>

                                    <a
                                        href="mailto:soporte@ajoloteygrulla.com.mx"
                                        class="contact-highlight"
                                    >
                                        soporte@ajoloteygrulla.com.mx
                                    </a>

                                    <p class="contact-small mb-0 mt-1">
                                        Te respondemos en menos de 24 horas.
                                    </p>
                                </div>

                            </div>


                            <hr class="contact-divider">


                            <!-- Teléfono -->
                            <div class="contact-info-item d-flex gap-3">

                                <div class="contact-icon">
                                    <i class="bx bx-phone"></i>
                                </div>

                                <div>
                                    <h5 class="fw-bold mb-1">
                                        Teléfono
                                    </h5>

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


                            <!-- Horario -->
                            <div class="contact-info-item d-flex gap-3">

                                <div class="contact-icon">
                                    <i class="bx bx-time-five"></i>
                                </div>

                                <div>
                                    <h5 class="fw-bold mb-1">
                                        Horario de atención
                                    </h5>

                                    <p class="contact-highlight mb-1">
                                        Lunes a Viernes
                                    </p>

                                    <p class="contact-small mb-0">
                                        9:00 a 18:00 hrs. (CDMX)
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    `;

}
