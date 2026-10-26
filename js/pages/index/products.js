const products = [
  {
    id: 1,
    categoria: "Escritura",
    titulo: "Set de gel Sakura",
    precio: 18.9,
    imagen:
      "https://www.japanbrands.com.pe/cdn/shop/files/00000014618766_A02.webp?v=1784817030&width=533",
  },
  {
    id: 2,
    categoria: "Papel Bonito",
    titulo: "Libreta Kokuyo Campus",
    precio: 22.5,
    imagen: "https://m.media-amazon.com/images/I/61RhZe0UOUL.jpg",
  },
  {
    id: 3,
    categoria: "Escritura",
    titulo: "Marcadores Mildliner",
    precio: 25.0,
    imagen: "https://m.media-amazon.com/images/I/61+UTGlMreL.jpg",
  },
  {
    id: 4,
    categoria: "Organización",
    titulo: "Goma Tombow Mono",
    precio: 5.5,
    imagen: "https://m.media-amazon.com/images/I/71Au5IGcJOL.jpg",
  },
];

const categorias = [...new Set(products.map((p) => p.categoria))];

/**
 * Renderiza los encabezados, la estructura principal de filtros por categoría 
 * y el contenedor base para las tarjetas de productos en el DOM.
 * 
 * @global {Array<string>} categorias - Arreglo global con los nombres de las categorías a renderizar.
 * @returns {void} No retorna ningún valor (modifica el DOM directamente).
 */
function renderHeadersFilters() {
  const productSectionElement = document.getElementById("productSection");
  if (!productSectionElement) return;

  /* Aqui se agrega el texto antes de renderizar categorias y productos */
  let htmlContent = `
        <p class="eyebrow d-flex align-items-center gap-2 m-2">
            <span></span> LA SELECCIÓN
          </p>
          <h1>Favoritos<i class="fst-italic"> de la casa.</i></h1>
          <a href="#" class="d-block d-flex justify-content-end">
            Ver todo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-right"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>

          <div class="nav nav-underline border-bottom border-2" id="categoriesFilter">
            <div class="nav-item">
                <button class="nav-link active" data-categoria="Todos">Todos</button>
            </div>

    `;

  /* Aqui se renderizan las categorias filtradas del objeto de productos */
  categorias.forEach((element) => {
    htmlContent += `
            <div class="nav-item">
              <button class="nav-link" data-categoria="${element}">${element}</button>
            </div>
          
        `;
  });

  /* Se cierra etiqueta ul de lista de categorias y abren etiquetas divs para productos */
  htmlContent += `
        </div>
        <div>
            <div class="row py-4 g-4" id="products">
            </div>
        </div>
  `;

  productSectionElement.innerHTML = htmlContent;
}

/**
 * Renderiza el grill de los productos y la estructura de cada tarjeta de productos en "productSection" en index)
 * 
 * @global {Array<string>} products - Arreglo global con los productos a renderizar.
 * @returns {void} No retorna ningún valor (modifica el DOM directamente).
 */
function renderProductGrill(categoriaSeleccionada = "Todos") {
  const productsElement = document.getElementById("products");
  if (!productsElement) return;

  // Se filtra arreglo segun la categoria seleccionada
  const filteredProducts =
    categoriaSeleccionada === "Todos"
      ? products
      : products.filter((prod) => prod.categoria === categoriaSeleccionada);

  let htmlContent = ``;
  // Se renderizan los productos filtrados
  filteredProducts.forEach((element) => {
    htmlContent += `
        <a
                href="#"
                target="_blank"
                class="col-12 col-sm-6 col-lg-3 position-relative product"
              >
                <div class="position-relative overflow-hidden">
                  <img
                    src="${element.imagen}"
                    alt=""
                    class="w-100"
                  />
                  <div class="position-absolute bottom-0 start-0 end-0 p-3">
                    <button
                      class="btn btn-outline-secondary rounded-pill shadow fw-bold w-100 py-2 purchase-btn glass-effect"
                      onclick=""
                    >
                      Agregar al carrito +
                    </button>
                  </div>
                </div>

                <div class="d-flex justify-content-between py-3">
                  <div>
                    <p>${element.categoria}</p>
                    <h5>${element.titulo}</h5>
                  </div>
                  <strong>$${element.precio}</strong>
                </div>
        </a>
    `;
  });

  productsElement.innerHTML = htmlContent;
}

/**
 * Inicializa la vista de productos, renderizando los componentes base
 * y configurando el escuchador de eventos para el filtrado por categorías.
 * 
 * @export
 * @returns {void} No retorna ningún valor.
 */

export function renderProducts() {
    // Verificar si existe la sección de productos
    const productSection = document.getElementById("productSection");

    if (!productSection) return;

    // Renderizar componentes
    renderHeadersFilters();
    renderProductGrill();

    // Obtener el contenedor de filtros
    const container = document.getElementById("categoriesFilter");

    if (!container) return;

    // Escuchar clics en las categorías
    container.addEventListener("click", (e) => {
        if (!e.target.matches(".nav-link")) return;

        // Remover la categoría activa anterior
        const activo = container.querySelector(".active");

        if (activo) {
            activo.classList.remove("active");
        }

        // Activar la nueva categoría
        e.target.classList.add("active");

        // Filtrar y renderizar productos
        const categoria = e.target.getAttribute("data-categoria");

        renderProductGrill(categoria);
    });
}
