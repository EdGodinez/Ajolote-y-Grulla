export function renderFooter() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    // const currentPage = window.location.pathname.split("/").pop();

    footer.innerHTML = `
        <div class="main-container-footer">
         
         <!--Logotipo-->
            <img src="./assets/footer/Logo.png" class="item-footer" style="padding-top: 20px;">


         <!--Redes Sociales-->
            <div class="item-footer" style="display: flex; flex-direction: column;">
                <h5 class="header-text-footer item-footer" style="padding-bottom: 10px; padding-top: 20px;">Redes Sociales</h5>
                <div class="social-icons">
                    <a 
                    href="https://www.facebook.com/"
                    target="_blank">
                    <img src="./assets/footer/FB.png" 
                    alt="Link a Facebook de Ajolote y Grulla"
                    class="">
                    </a>

                    <a 
                    href="https://www.instagram.com/"
                    target="_blank">
                    <img src="./assets/footer/IG.png" 
                    alt="Link a Instagram de Ajolote y Grulla"
                    class="">
                    </a>

                    <a 
                    href="https://www.whatsapp.com/"
                    target="_blank">
                    <img src="./assets/footer/WA.png" 
                    alt="Link a Whatsapp de Ajolote y Grulla"
                    class="">
                    </a>

                    <a 
                    href="https://www.tiktok.com/"
                    target="_blank">
                    <img src="./assets/footer/TK.png" 
                    alt="Link a TikTok de Ajolote y Grulla"
                    class="">
                    </a>

                    <a 
                    href="https://x.com/"
                    target="_blank">
                    <img src="./assets/footer/X.png" 
                    alt="Link a X de Ajolote y Grulla"
                    class="">
                    </a>
                </div>
        
            </div>
         
        
         <!--Navegación -->
            <div class="only-nav-footer" class="item-footer">
                <h5 class="header-text-footer" class="item-footer" style="padding-top: 40px;">Navegación</h5>
                <nav>
                    <ul class="" style="padding: 10px; list-style: none;">
                        <li><a href="#" class="p-text-footer">Inicio</a></li>
                        <li><a href="#" class="p-text-footer">Catálogo</a></li>
                        <li><a href="#" class="p-text-footer">Sobre Nosotros</a></li>
                        <li><a href="#" class="p-text-footer">Contáctanos</a></li>
                    </ul>
                </nav>
            </div>

         <!--Información de contacto -->
            <div >
                <h5 class="header-text-footer" class="item-footer" style="padding-top: 40px;">Contactanos</h5>
                <address >
                    <p class="p-text-footer">soporte@ajoloteygrulla.com</p>
                    <p class="p-text-footer">+52 (55) 1234-5678</p>
                    <p class="p-text-footer">CDMX, México</p>
                </address>
            </div>

        
         <!--Linea Rosa-->
            <img src="./assets/footer/Vector.png" alt="Línea decorativa Ajolote y Grulla" class="footer-line-img">

         <!-- Derechos de Autor -->
            <p class="footer-copy">&copy; 2026 Ajolote y Grulla. Todos los derechos reservados.</p>
        </div>
        `;

}

// renderFooter();
