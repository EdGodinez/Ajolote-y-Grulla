import { renderSectionHeader } from "./section-header.js";

/**
 * Categorías del catálogo con su kanji y el color de su tarjeta.
 * "filtro" debe escribirse igual que "category" en products.js: es lo que recibe el catálogo en la URL.
 * 筆 escritura · 飾 adorno · 貼 pegar · 具 herramienta · 印 marca
 */
const CATEGORIES = [
  { titulo: "Plumas y lapiceros", filtro: "Plumas y Lapiceros", kanji: "筆", descripcion: "Escritura que fluye", color: "bg-cat-red" },
  { titulo: "Accesorios", filtro: "Accesorios", kanji: "飾", descripcion: "Detalles que acompañan", color: "bg-cat-purple" },
  { titulo: "Cintas adhesivas", filtro: "Cintas Adhesivas", kanji: "貼", descripcion: "Pega, decora y anota", color: "bg-cat-green" },
  { titulo: "Útiles", filtro: "Útiles", kanji: "具", descripcion: "Herramientas ingeniosas", color: "bg-cat-pink" },
  { titulo: "Marcadores", filtro: "Marcadores", kanji: "印", descripcion: "Resalta lo importante", color: "bg-cat-navy" },
];

function renderCategoryCard({ titulo, filtro, kanji, descripcion, color }) {
  return `
    <div class="col">
      <a href="./products.html?categoria=${encodeURIComponent(filtro)}" class="d-flex flex-column h-100 shadow-sm p-4 ${color} position-relative categorie-card">
        <span class="fw-bolder fs-1 position-absolute top-0 end-0 pe-4 pt-2 opacity-50" aria-hidden="true">${kanji}</span>
        <div class="text-start mt-5">
          <h3 class="fw-bold">${titulo}</h3>
          <p class="fst-italic">${descripcion}</p>
        </div>
        <div class="d-flex justify-content-end mt-auto">
          <i class="bi bi-arrow-up-right fs-4" aria-hidden="true"></i>
        </div>
      </a>
    </div>`;
}

/**
 * Renderiza la sección de categorías del catálogo en la página de inicio.
 *
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderCategories() {
  const categoriesElement = document.getElementById("categories");
  if (!categoriesElement) return;

  categoriesElement.innerHTML = `
    ${renderSectionHeader({
      eyebrow: "JUSTO LO QUE BUSCABAS",
      title: "Visita nuestro catálogo",
      link: { label: "Ver catálogo completo", href: "./products.html" },
    })}
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4">
      ${CATEGORIES.map(renderCategoryCard).join("")}
    </div>`;
}
