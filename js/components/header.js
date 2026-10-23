
export function renderHeader() {
    const header = document.getElementById("header");

    if (!header) return;

    // Obtener la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">

                <!-- Nombre de la tienda -->
                <a class="navbar-brand fw-bold" href="./index.html">
                    Ajolote & Grulla
                </a>

                <!-- barra de busqueda -->
                <div class=d-flex>
                <form class="form-contol rounded-5 container-fluid">
                    <div class="input-group barra-encabezado">
                        <input class="form-control me-2" type="search" placeholder="Busca tu producto" aria-label="Buscar">
                        <button class="btn me-2" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </form>
                </div>

                <!-- links de Navegación -->
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerPestañas" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerPestañas">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 input-group">
                        <li class="nav-item">
                            <a href="./index.html" class="nav-link${currentPage === "index.html"
                                ? " activo"
                                : " nav-link"}">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link 
                                ${currentPage === "#"
                                ? " activo"
                                : " nav-link"}">Catalogo</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link 
                                ${currentPage === "#"
                                ? " activo"
                                : " nav-link"}">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a href="./about.html" class="nav-link 
                                ${currentPage === "about.html"
                                ? " activo"
                                : " nav-link"}">Contactanos</a>
                        </li>
                    </ul>                    
                </div>
                <div class="col-md-3 text-end"> 
                <button type="button" id="carritoCompra" class="btn"><i class="bi bi-cart2"></i></button> 
                <button type="button" id="btnInicioSesion" class="btn me-2">Login</button> 
         
                </div>



            </div>
        </nav>
    `;
}
