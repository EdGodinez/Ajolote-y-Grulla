
export function renderHeader() {
    const header = document.getElementById("header");

    if (!header) return;

    // Obtener la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-md">
            <div class="container-fluid">

                <!-- Nombre de la tienda -->
                <a class="navbar-brand d-flex align-items-center" href="./index.html">
                <img src="./assets/images/Positivo.png" alt="Logo" id="logo" width="40" height="32" class="d-inline-block aling-text-top me-2">
                <span class="d-none d-md-inline">Ajolote & Grulla </span>
                </a>

                <!-- barra de busqueda -->
                <div class=d-flex>
                <form id="formBusqueda" class="form-control rounded-5 container-fluid">
                    <div class="input-group barra-encabezado">
                        <input class="form-control" type="search" placeholder="Busca tu producto" aria-label="Buscar">
                        <button class="btn btn-busqueda" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </form>
                </div>

                <!-- links de Navegación -->
                <div clas="col-md-4">
                <button id="btnMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerPestañas" aria-controls="navbarTogglerPestañas" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerPestañas">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 input-group">
                        <li class="nav-item p-2 ms-auto">
                            <a href="./index.html" class="nav-link ${currentPage === "index.html"
                                ? " activo"
                                : " nav-link"}">Inicio</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./products.html" class="nav-link 
                                ${currentPage === "products.html" 
                                ? " activo"
                                : " nav-link"}">Catálogo</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./about.html" class="nav-link 
                                ${currentPage === "about.html"
                                ? " activo"
                                : " nav-link"}">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./contact.html" class="nav-link 
                                ${currentPage === "contact.html"
                                ? " activo"
                                : " nav-link"}">Contáctanos</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a type="button" href="#" id="carritoCompra" class="btn rounded-pill px-3"><i class="bi bi-cart2"></i></a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a type="button" href="#" id="btnInicioSesion" class="btn rounded-pill px-3">Iniciar Sesión</i></a>
                        </li>
                  </ul>    
                </div>
                </div>
            </div>
        </nav>
    `;
}
