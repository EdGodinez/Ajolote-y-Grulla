export function renderFooter() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const currentPage = window.location.pathname.split("/").pop();

    footer.innerHTML = `
        <div class="text-light py-4" style="background-color:var(--azul-marino-intenso);">
            <div class="container">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    
                <!--Logotipo-->
                    <section>
                        <a 
                        href="#">
                            <img src="./assets/footer/Logo.png" alt="Logotipo de Ajolote y Grulla">
                        </a>
                    </section>
                   
                <!--Redes Sociales-->
                    <section >    
                        <a 
                        href="https://www.instagram.com/ajolote_y_grulla?psln=MW96ZTJxcmJjcG5mNw==" 
                        target="_blank">
                            <img src="./assets/footer/FB.png" 
                            alt="Link a la pagina de Facebook de Ajolote y Grulla" >
                        </a>

                        <a 
                        href="https://www.instagram.com/ajolote_y_grulla?psln=MW96ZTJxcmJjcG5mNw=="
                        target="_blank" >
                            <img src="./assets/footer/IG.png" 
                            alt="Link a la pagina de Instagram de Ajolote y Grulla" >
                        </a>

                        <a 
                        href="https://www.instagram.com/ajolote_y_grulla?psln=MW96ZTJxcmJjcG5mNw==" 
                        target="_blank">
                            <img src="./assets/footer/TK.png" 
                            alt="Link a la pagina de TikTok de Ajolote y Grulla" >
                        </a>

                        <a 
                        href="https://www.instagram.com/ajolote_y_grulla?psln=MW96ZTJxcmJjcG5mNw==" 
                        target="_blank">
                            <img src="./assets/footer/WA.png" 
                            alt="Link a Whatsapp de Ajolote y Grulla" >
                        </a>

                        <a 
                        href="https://www.instagram.com/ajolote_y_grulla?psln=MW96ZTJxcmJjcG5mNw==" 
                        target="_blank">
                            <img src="./assets/footer/X.png" 
                            alt="Link a la pagina de X de Ajolote y Grulla" >
                        </a>  
                    </section>

                <!--Navegacion-->
                    <section>
                        <h5 style="color:var(--rosa-coral)">Navegación</h5>
                        <ul class="list-unstyled p-0">
                            <li><a href="#" class="text-light text-decoration-none">Inicio</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Catálogo</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Sobre Nosotros</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Contáctanos</a></li>
                        </ul>
                    </section>

                <!--Contactanos-->
                    <section>
                        <h5 style="color:var(--rosa-coral)">Contáctanos</h5>
                        <h6>Contactanos</h6>
                        <h6>Contactanos</h6>
                        <h6>Contactanos</h6>
                        <h6>Contactanos</h6>
                        
                    </section>
                </div>
            </div>
        </div>
    `;

}

// renderFooter();
