
export function renderHeader() {
    const header = document.getElementById("header");

    if (!header) return;

    // Obtener la página actual
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark"
             data-bs-theme="dark">
            <div class="container">

                <!-- Nombre de la tienda -->
                <a class="navbar-brand fw-bold" href="./index.html">
                    Ajolote & Grulla
                </a>

                <!-- Navegación -->
                <div class="d-flex gap-2">

                    <a href="./index.html"
                       class="btn ${currentPage === "index.html"
                           ? "btn-light"
                           : "btn-outline-light"}">
                        Inicio
                    </a>

                    <a href="./about.html"
                       class="btn ${currentPage === "about.html"
                           ? "btn-light"
                           : "btn-outline-light"}">
                        Acerca de nosotros
                    </a>

                </div>

            </div>
        </nav>
    `;
}
