
export function renderHeader() {
    const header = document.getElementById("header");

    if (!header) return;

    // Obtener la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-xl">
            <div class="container-fluid">

                <!-- Nombre de la tienda -->
                <a class="navbar-brand d-flex align-items-center" href="./index.html">
                    <img src="./assets/logos/Positivo.png" alt="Logo" id="logo" width="40" height="32" class="d-inline-block align-text-top me-2">
                    <span id="nombreTienda" class="d-none d-md-inline">Ajolote & Grulla</span>
                </a>

                <!-- Barra de búsqueda móvil -->
                <div class="d-flex align-items-center d-xl-none">
                    <button class="btn btn-busqueda-Collapse" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBusqueda" aria-controls="offcanvasBusqueda" aria-label="Abrir búsqueda">
                        <i class="bi bi-search"></i>
                    </button>
                </div>

                <!-- Barra de búsqueda escritorio -->
                <form id="formBusqueda" class="d-none d-xl-flex rounded-5 col-xx-lg">
                    <div class="input-group barra-encabezado">
                        <input class="form-control" type="search" placeholder="Busca tu producto" aria-label="Buscar">
                        <button class="btn btn-busqueda" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </form>

                <!-- Botón de navegación móvil -->
                <div class="d-flex align-items-center d-xl-none">
                    <button id="btnMenu" class="btn navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" aria-label="Abrir menú">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <!-- Navegación escritorio -->
                <div class="d-none d-xl-flex text-nowrap" id="navbarTogglerPestañas">
                    <ul class="navbar-nav align-items-center me-auto mb-1 mb-xl-0">
                        <li class="nav-item p-2 ms-auto">
                            <a href="./index.html" class="nav-link ${currentPage === "index.html" ? "activo" : ""}">Inicio</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./products.html" class="nav-link ${currentPage === "products.html" ? "activo" : ""}">Catálogo</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./about.html" class="nav-link ${currentPage === "about.html" ? "activo" : ""}">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./contact.html" class="nav-link ${currentPage === "contact.html" ? "activo" : ""}">Contáctanos</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="#" id="carritoCompra" class="btn rounded-pill px-3">
                                <i class="bi bi-cart2"></i>
                            </a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="#" id="btnInicioSesion" class="btn rounded-pill px-3">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Offcanvas de búsqueda -->
        <div class="offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="offcanvasBusqueda" aria-labelledby="offcanvasBusquedaLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>
            <div class="offcanvas-body">
                <div class="input-group justify-content-center">
                    <form class="rounded-5">
                        <div class="input-group barra-encabezado">
                            <input class="form-control" type="search" placeholder="Busca tu producto" aria-label="Buscar">
                            <button class="btn btn-busqueda" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Offcanvas de navegación -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-label="Menú de navegación">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav me-auto mb-1 mb-xl-0">
                    <li class="nav-item p-2 ms-auto">
                        <a href="#" class="btn rounded-pill px-3 carritoCompra">
                            <i class="bi bi-cart2"></i>
                        </a>
                    </li>
                    <li class="nav-item p-2 ms-auto">
                        <a href="#" class="btn rounded-pill px-3 btnInicioSesion">Iniciar Sesión</a>
                    </li>
                    <li class="nav-item p-2 ms-auto">
                        <a href="./index.html" class="nav-link ${currentPage === "index.html" ? "activo" : ""}">Inicio</a>
                    </li>
                    <li class="nav-item p-2 ms-auto">
                        <a href="./products.html" class="nav-link ${currentPage === "products.html" ? "activo" : ""}">Catálogo</a>
                    </li>
                    <li class="nav-item p-2 ms-auto">
                        <a href="./about.html" class="nav-link ${currentPage === "about.html" ? "activo" : ""}">Sobre Nosotros</a>
                    </li>
                    <li class="nav-item p-2 ms-auto">
                        <a href="./contact.html" class="nav-link ${currentPage === "contact.html" ? "activo" : ""}">Contáctanos</a>
                    </li>
                </ul>
            </div>
        </div>
    `;
}