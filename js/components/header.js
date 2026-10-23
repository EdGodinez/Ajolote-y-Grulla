
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

                <!-- Nombre de la tienda -->
                <form class="container-fluid">
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                </form>

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
