import { productos } from "../products/products.js";
import { renderSectionHeader } from "./section-header.js";

/**
 * Producto del mes. Para cambiarlo, basta con poner otro id y su imagen o video.
 * El video de las washi tapes está pendiente; cuando exista, se cambia media a:
 * { type: "video", src: "./assets/images/home-pick/video-pick.mp4", poster: "..." }
 */
const PICK_DEL_MES = {
  productId: 9,
  title: "Washi-tapes",
  media: { type: "image", src: "./assets/productos/P15-Cintas-Washi.jpg" },
};

const PICK_MEDIA = {
  image: ({ src }, alt) => `
    <img src="${src}" alt="${alt}" class="pick-media" loading="lazy" />`,

  video: ({ src, poster }) => `
    <video src="${src}" poster="${poster}" class="pick-media"
      autoplay muted loop playsinline aria-hidden="true"></video>`,
};

/**
 * Renderiza la sección del pick del mes con la información del producto tomada de products.js.
 * El botón lleva la clase btn-agregar-carrito y el data-id del producto para conectarlo con el carrito.
 *
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderPickOfTheMonth() {
  const pickSection = document.getElementById("pickSection");
  const producto = productos.find(({ id }) => id === PICK_DEL_MES.productId);
  if (!pickSection || !producto) return;

  const { title, media } = PICK_DEL_MES;

  pickSection.innerHTML = `
    <div class="row align-items-center g-4 g-lg-5">
      <div class="col-12 col-lg-5">
        ${renderSectionHeader({ eyebrow: "NUESTRO PICK DEL MES", title })}
        <p class="pick-text fw-bold">${producto.description}</p>
        <p class="pick-text fw-bold">${producto.detail}</p>
        <button type="button" data-id="${producto.id}"
          class="btn btn-sakura rounded-pill px-4 py-2 mt-2 fw-bold text-uppercase btn-agregar-carrito">
          Agregar al carrito <i class="bi bi-bag-plus ms-1" aria-hidden="true"></i>
        </button>
      </div>
      <div class="col-12 col-lg-7">
        ${PICK_MEDIA[media.type](media, producto.productName)}
      </div>
    </div>`;
}
