
export function renderFooter() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    // const currentPage = window.location.pathname.split("/").pop();
    let footerHTML = `
        <div class="container-fluid principal text-white pt-5 pb-3">
            <div class="container">
                <div class="row align-items-start gy-4">

                    <!-- Columna 1: Logotipo centrado -->
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <a href="#"><img src="./assets/logos/Positivo.png"
                            alt="Logotipo de Ajolote y Grulla"
                            id="footer-logo"></a>
                    </div>

                    <!-- Columna 2: Redes Sociales -->
                    <div class="col-md-3 d-flex flex-column align-items-center">
                        <h5 class="footer-title mb-3">Redes Sociales</h5>
                        <div class="social-grid">
                            <a href="https://www.facebook.com/profile.php?id=61596419964468" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i class="bxl bx-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/ajogru/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i class="bxl bx-instagram"></i>
                            </a>
                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <i class="bxl bx-whatsapp"></i>
                            </a>
                            <a href="https://www.tiktok.com/@ajoygru" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <i class="bxl bx-tiktok"></i>
                            </a>
                            <a href="https://x.com/AjoloteGrulla" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <i class="bxl bx-twitter-x"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Columna 3: Navegación -->
                    <div class="col-md-3 d-flex flex-column align-items-center align-items-md-start">
                        <h5 class="footer-title mb-3">Navegación</h5>
                        <ul class="list-unstyled footer-list m-0">
                            <li><a href="./index.html">Inicio</a></li>
                            <li><a href="./products.html">Catálogo</a></li>
                            <li><a href="./about.html">Sobre Nosotros</a></li>
                            <li><a href="./contact.html">Contáctanos</a></li>
                        </ul>
                    </div>

                    <!-- Columna 4: Contacto -->
                    <div class="col-md-3 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                        <h5 class="footer-title mb-3">Contacto</h5>
                        <ul class="list-unstyled footer-list m-0">
                            <li><a href="mailto:soporte@ajoloteygrulla.com">soporte@ajoloteygrulla.com</a></li>
                            <li><span>+52 (55) 1234-5678</span></li>
                            <li><span>México</span></li>
                        </ul>
                    </div>

                </div>

                <!-- Línea divisoria y copyright -->
                <hr class="footer-divider mt-4 mb-3">
                <p class="text-center footer-copy m-0">
                    &copy; 2026 Ajolote y Grulla. Todos los derechos reservados.
                </p>
            </div>
        </div>
    `;

    footer.innerHTML = footerHTML;
}

/**
 * <!-- Redes Sociales -->
            <div class="item-footer" style="display: flex; flex-direction: column;">
            
                <div class="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61596419964468"
                    target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i class="bxl bx-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/ajogru/"
                    target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i class="bxl bx-instagram"></i>
                    </a>

                    <a href="https://www.whatsapp.com/"
                    target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <i class="bxl bx-whatsapp"></i>
                    </a>

                    <a href="https://www.tiktok.com/@ajoygru"
                    target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <i class="bxl bx-tiktok"></i>
                    </a>

                    <a href="https://x.com/AjoloteGrulla"
                    target="_blank" rel="noopener noreferrer" aria-label="X">
                        <i class="bxl bx-twitter-x"></i>
                    </a>
                </div>
            </div>
 */