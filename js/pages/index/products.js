import { productos } from "../products/products.js";
import { renderSectionHeader } from "./section-header.js";

const CARACTERISTICA_DESTACADA = "No sabía que lo necesitaba";

/**
 * Tarjeta de producto: al pasar el cursor, la imagen se acerca y sube el botón de agregar al carrito.
 * El botón lleva la clase btn-agregar-carrito y el data-id del producto para conectarlo con el carrito.
 *
 * @param {object} producto Producto de la lista de products.js.
 * @returns {string} HTML de la tarjeta.
 */
function renderProductCard({ id, category, productName, price, img }) {
  return `
    <article class="col-12 col-sm-6 col-lg-3 product">
      <div class="position-relative overflow-hidden">
        <img src="${img}" alt="${productName}" class="w-100" loading="lazy" />
        <div class="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-center">
          <button type="button" data-id="${id}" class="btn-agregar-carrito purchase-btn shadow">
            <i class="bi bi-bag-plus" aria-hidden="true"></i>
            Agregar al carrito
          </button>
        </div>
      </div>
      <div class="product-info d-flex justify-content-between gap-3 py-3">
        <div>
          <span class="etiqueta etiqueta-categoria mb-2">${category}</span>
          <h3 class="h5">${productName}</h3>
        </div>
        <strong class="text-nowrap">$${price} MXN</strong>
      </div>
    </article>`;
}

/**
 * Renderiza la sección con los productos que tienen la característica "No sabía que lo necesitaba".
 *
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderProducts() {
  const productSection = document.getElementById("productSection");
  if (!productSection) return;

  const destacados = productos.filter((producto) =>
    producto.characteristics.includes(CARACTERISTICA_DESTACADA)
  );

  productSection.innerHTML = `
    ${renderSectionHeader({
      eyebrow: "EXPLORA NUESTRA CATEGORÍA FAVORITA",
      title: CARACTERISTICA_DESTACADA,
      link: { label: "Ver todo", href: `./products.html?caracteristica=${encodeURIComponent(CARACTERISTICA_DESTACADA)}` },
    })}
    <div class="row g-4" id="products">
      ${destacados.map(renderProductCard).join("")}
    </div>`;
}
