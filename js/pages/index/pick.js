import { productos } from "../products/products.js";
import { renderSectionHeader } from "./section-header.js";
import { abreDetalle } from "../products/productoDetalle.js";
import { formatearPrecio } from "../../utils/formatoPrecio.js";

/**
 * Producto del mes. Para cambiarlo, basta con poner otro id y su imagen o video
 * (media acepta { type: "image", src } o { type: "video", src, poster }).
 */
const PICK_DEL_MES = {
  productId: 9,
  title: "Washi-tapes",
  media: {
    type: "video",
    src: "./assets/images/home-pick/video-pick.mp4",
    poster: "./assets/images/home-pick/video-pick-poster.jpg",
  },
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
 * El botón de carrito lleva la clase btn-agregar-carrito y el data-id del producto para conectarlo con el carrito;
 * "Ver más" abre el detalle del producto.
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
        <p class="producto-precio">${formatearPrecio(producto.price)}</p>
        <div class="d-flex flex-wrap gap-3 mt-2">
          <button type="button" data-id="${producto.id}" class="btn-agregar-carrito w-auto px-4">
            <i class="bi bi-bag-plus" aria-hidden="true"></i>
            Agregar al carrito
          </button>
          <button type="button" class="btn btn-secondary rounded-pill px-4 btn-ver-detalle">
            Ver más
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        ${PICK_MEDIA[media.type](media, producto.productName)}
      </div>
    </div>`;

  pickSection
    .querySelector(".btn-ver-detalle")
    .addEventListener("click", () => abreDetalle(producto.id));
}
