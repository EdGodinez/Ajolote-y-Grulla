let categories = [
  { titulo: "Escritura", kanji: "文", descripcion: "Plumas que fluyen" },
  { titulo: "Papel Bonito", kanji: "紙", descripcion: "Para tus ideas" },
  { titulo: "Organizacion", kanji: "整", descripcion: "Orden con encanto" },
  { titulo: "Regalos", kanji: "贈", descripcion: "Detalles para compartir" },
];

let colors = ["bg-cat-red", "bg-cat-purple", "bg-cat-green", "bg-cat-pink"];


/**
 * Inicializa la vista de la seccion de "Categorias" en Index
 * 
 * @export
 * @global {Array<object>} categorias - Arreglo global con los nombres de las categorías a renderizar.
 * @global {Array<string>} colors - Arreglo global con los nombres de los backgrounds de las tarjetas de categoria.
 * @returns {void} No retorna ningún valor.
 */
export function renderCategories() {
  const categoriesElement = document.getElementById("categories");
  if (!categoriesElement) return;

  let htmlContent = `
        <p class="eyebrow d-flex align-items-center gap-2 m-2 "><span></span> ENCUENTRA TU RITUAL</p>
        <h1>Pequeñas cosas,<br /><i>grandes momentos.</i></h1>
        <a href="#" class="d-block d-flex  justify-content-end ">
                Ver mas categorias
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
        <div class="row py-4 g-4">
    `;

  let indice = 0;
  categories.forEach((element) => {
    htmlContent += `
        <div href="#" target="_blank" class="col-12 col-sm-6 col-lg-3">
            <div class=" h-100 shadow-sm p-4 ${colors[indice]} position-relative categorie-card">
              <!-- Contenido de la categoría -->
              <span class="fw-bolder fs-1 position-absolute top-0 end-0 pe-4 pt-2 opacity-50">${element.kanji}</span>

              <div class="text-start mt-3">
                <h3 class="fw-bold">${element.titulo}</h3>
                <p class="fst-italic">${element.descripcion}</p>
              </div>
              <div class="d-flex justify-content-end">
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
              </div>
            </div>
          </div>
    `;

    indice++;
  });

  categoriesElement.innerHTML = htmlContent + ` </div> `;
}

renderCategories();