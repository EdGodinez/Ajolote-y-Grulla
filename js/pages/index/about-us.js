/**
 * Contenido del artículo del blog sobre los Japanese Stationery Awards.
 * Para actualizar el artículo solo se edita este objeto.
 */
const BLOG_POST = {
  kicker: "Conoce los",
  title: "Japanese Stationery Awards.",
  paragraphs: [
    "La papelería japonesa sigue sorprendiéndonos, y este año, los ganadores de los Japanese Stationery Awards —considerados los premios Óscar del mundo de la papelería en Japón— demuestran por qué la innovación, la funcionalidad y el ingenio de diseño son inigualables.",
    "Evaluados por expertos de la industria, diseñadores y figuras influyentes del sector bajo criterios estrictos de originalidad, practicidad y ergonomía, los galardonados de esta edición destacan por transformar la rutina diaria en una experiencia sumamente placentera.",
    "Entre los imprescindibles se encuentran el ingenioso estuche de ovni, los brillantes marcadores de glitter que llenan de vida cualquier trazo, la versátil goma moldeable que siempre luce perfecta, el práctico clip para libros y los adorables cutters de animales que hacen que abrir cada paquete sea una auténtica delicia.",
  ],
  image: {
    src: "./assets/images/home-blog/polaroid-premios-2026.png",
    alt: "Foto tipo polaroid de la revista de los premios de papelería 2026 junto a un estuche de ovni y un peluche lila",
  },
};

/**
 * Garabatos decorativos; cada uno se acomoda en una esquina con su clase blog-deco--{posicion}.
 */
const BLOG_DECORATIONS = [
  { src: "./assets/images/home-blog/deco-corazon-estrellas.png", position: "top" },
  { src: "./assets/images/home-blog/deco-espiral-estrellas.png", position: "bottom" },
];

const renderDecoration = ({ src, position }) => `
  <img src="${src}" alt="" class="blog-deco blog-deco--${position} d-none d-lg-block" aria-hidden="true" />`;

/**
 * Renderiza la sección del blog de los Japanese Stationery Awards en la página de inicio.
 *
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderIndexAboutUs() {
  const aboutElement = document.getElementById("about");
  if (!aboutElement) return;

  const { kicker, title, paragraphs, image } = BLOG_POST;

  aboutElement.innerHTML = `
    <div class="row align-items-center g-4 g-lg-5 py-lg-5">
      <div class="col-10 col-md-6 col-lg-4 mx-auto">
        <img src="${image.src}" alt="${image.alt}" class="img-fluid" loading="lazy" />
      </div>
      <article class="col-12 col-lg-8">
        <h2 class="blog-title mb-4">
          <span class="blog-kicker d-block">${kicker}</span>
          ${title}
        </h2>
        ${paragraphs.map((text) => `<p class="blog-text">${text}</p>`).join("")}
      </article>
    </div>
    ${BLOG_DECORATIONS.map(renderDecoration).join("")}`;
}
