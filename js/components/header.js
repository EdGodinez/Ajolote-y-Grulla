
export function renderHeader() {
    const header = document.getElementById("header");

    if (!header) return;

    // Obtener la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-xl">
            <div class="container-fluid ">

                <!-- Nombre de la tienda -->
                <a class="navbar-brand d-flex align-items-center" href="./index.html">
                <img src="./assets/logos/Positivo.png" alt="Logo" id="logo" width="40" height="32" class="d-inline-block aling-text-top me-2">
                <span class="d-none d-md-inline">Ajolote & Grulla </span>
                </a>

                <!-- barra de busqueda -->
              
<div class="d-flex align-items-center d-xl-none">
    <button class="btn btn-busqueda-Collapse" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasBusqueda" aria-controls="offcanvasBusqueda">
        <i class="bi bi-search"></i>
    </button>
</div>

<form id="formBusqueda" class="d-none d-xl-flex rounded-5 col-xx-lg">
    <div class="input-group barra-encabezado">
        <input class="form-control" type="search" placeholder="Busca tu producto" aria-label="Buscar">
        <button class="btn btn-busqueda" type="button"><i class="bi bi-search"></i></button>
    </div>
</form>


                <!-- links de Navegación -->
                <div clas="d-flex col-xxl-3 me-auto ms-auto justify-content-between">
                <button id="btnMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerPestañas" aria-controls="navbarTogglerPestañas" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse text-nowrap" id="navbarTogglerPestañas">

                    <ul class="navbar-nav align-items-center me-auto mb-1 mb-xl-0">
                        <li class="nav-item p-2 ms-auto">
                            <a href="./index.html" class="nav-link ${currentPage === "index.html"
            ? " activo"
            : " nav-link"}">Inicio</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./products.html" class="nav-link 
                                ${currentPage === "products.html"
            ? "activo"
            : " nav-link"}">Catálogo</a>
                        </li>
                        <li class="nav-item p-2 ms-auto">
                            <a href="./about.html" class="nav-link 
                                ${currentPage === "about.html"
            ? "activo"
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
        <div class="offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="offcanvasBusqueda" aria-labelledby="offcanvasBusquedaLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="input-group justify-content-center">
    <form id="formBusqueda" class="rounded-5 ">
    <div class="input-group barra-encabezado">
        <input class="form control" type="search" placeholder="Busca tu producto" aria-label="Buscar">
        <button class="btn btn-busqueda" type="button"><i class="bi bi-search"></i></button>
        </div>
        </form>
    </div>
  </div>
</div>

    `;
}
