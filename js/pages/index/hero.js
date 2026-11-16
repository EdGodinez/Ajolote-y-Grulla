/**
 * Contenido de cada diapositiva del carrusel del hero.
 * Para agregar o cambiar una diapositiva solo se edita este arreglo.
 */
const HERO_SLIDES = [
  {
    eyebrow: "PAPELERÍA JAPONESA EN MÉXICO",
    title: "¡Lo quiero<br />Tokio!",
    titleTag: "h1",
    lead: "<em>LLEGARON LOS GANADORES DE LOS JAPANESE STATIONERY AWARDS 2026</em>",
    cta: { label: "¡Compra ahora!", href: "./products.html" },
    textCols: 6,
    media: {
      type: "image",
      src: "./assets/images/home-hero/hero-principal.png",
      alt: "Productos ganadores de los Japanese Stationery Awards 2026",
    },
  },
  {
    kicker: "¿Qué son los",
    title: "Japanese<br />Stationery Awards?",
    titleTag: "h2",
    paragraphs: [
      "<strong>¡Los Japanese Stationery Awards son el equivalente a los premios Óscar, pero para el mundo de la papelería en Japón!</strong>",
      "Premian a esas joyas de ingeniería japonesa que hacen que organizar tus notas, estudiar o trabajar se sienta como un verdadero apapacho al corazón.",
    ],
    cta: { label: "¡Compra ahora!", href: "./products.html" },
    textCols: 7,
    media: {
      type: "collage",
      images: [
        { src: "./assets/images/home-hero/washi-tape.png", alt: "Cinta washi" },
        { src: "./assets/images/home-hero/estuche-ovni.png", alt: "Estuche en forma de ovni" },
        { src: "./assets/images/home-hero/lapiz.png", alt: "Lápiz japonés" },
        { src: "./assets/images/home-hero/cuter-foca.png", alt: "Cúter en forma de foca" },
      ],
    },
  },
  {
    title: "¡Regalo sorpresa!",
    titleTag: "h2",
    lead: "Con tu pedido al registrarte por primera vez.",
    paragraphs: ["¡No pierdas la oportunidad!"],
    cta: { label: "¡Regístrate ahora!", href: "./registro.html" },
    textCols: 6,
    media: {
      type: "background",
      src: "./assets/images/home-hero/regalo-sorpresa.png",
      alt: "Selección de papelería japonesa de regalo",
    },
  },
];

const HERO_DECORATIONS = ["紙", "ハサミ", "文房具屋", "文具"];

const CAROUSEL_ID = "heroCarousel";

/**
 * Devuelve el HTML solo si el valor existe; evita repetir ternarios en cada campo opcional.
 */
const optional = (value, template) => (value ? template(value) : "");

/**
 * Cada tipo de imagen del hero tiene su propia forma de pintarse.
 */
const MEDIA_RENDERERS = {
  image: ({ src, alt }) => `
    <img src="${src}" alt="${alt}" class="hero-media d-block mx-auto shadow-lg" />`,

  collage: ({ images }) => `
    <div class="hero-collage">
      ${images
        .map(
          ({ src, alt }, index) => `
        <img src="${src}" alt="${alt}" class="hero-collage__item hero-collage__item--${index + 1}" />`
        )
        .join("")}
    </div>`,

  background: ({ src, alt }) => `
    <img src="${src}" alt="${alt}" class="hero-bg" />`,
};

function renderSlideText(slide) {
  const { eyebrow, kicker, title, titleTag, lead, paragraphs = [], cta } = slide;

  return `
    ${optional(eyebrow, (text) => `
      <p class="eyebrow d-flex align-items-center gap-2 mb-0"><span></span> ${text}</p>`)}
    ${optional(kicker, (text) => `<p class="hero-lead mb-0">${text}</p>`)}
    <${titleTag} class="hero-title mb-0">${title}</${titleTag}>
    ${optional(lead, (text) => `<p class="hero-lead mb-0">${text}</p>`)}
    ${paragraphs.map((text) => `<p class="fs-5 mb-0">${text}</p>`).join("")}
    <a class="btn btn-hero rounded-pill px-4 py-2 fs-5 fst-italic d-inline-flex align-items-center gap-2" href="${cta.href}">
      ${cta.label} <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>`;
}

function renderSlide(slide, index) {
  return `
    <div class="carousel-item${index === 0 ? " active" : ""}">
      <div class="container py-5">
        <div class="row align-items-center g-5 hero-slide">
          <div class="col-12 col-lg-${slide.textCols} d-flex flex-column align-items-start gap-4">
            ${renderSlideText(slide)}
          </div>
          <div class="col-12 col-lg-${12 - slide.textCols}">
            ${MEDIA_RENDERERS[slide.media.type](slide.media)}
          </div>
        </div>
      </div>
      ${HERO_DECORATIONS.map(
        (kanji, i) => `<span class="hero-deco hero-deco--${i + 1} d-none d-lg-block" aria-hidden="true">${kanji}</span>`
      ).join("")}
    </div>`;
}

function renderIndicator(_, index) {
  const activeAttributes = index === 0 ? 'class="active" aria-current="true"' : "";

  return `
    <button type="button" data-bs-target="#${CAROUSEL_ID}" data-bs-slide-to="${index}"
      ${activeAttributes} aria-label="Diapositiva ${index + 1}"></button>`;
}

function renderControl(direction, label, icon) {
  return `
    <button class="carousel-control-${direction} d-none d-lg-flex" type="button"
      data-bs-target="#${CAROUSEL_ID}" data-bs-slide="${direction}">
      <span class="hero-carousel__control"><i class="bi bi-chevron-${icon}" aria-hidden="true"></i></span>
      <span class="visually-hidden">${label}</span>
    </button>`;
}

/**
 * Renderiza el carrusel del hero de la página de inicio.
 *
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderIndexHero() {
  const heroElement = document.getElementById("hero");
  if (!heroElement) return;

  heroElement.innerHTML = `
    <div id="${CAROUSEL_ID}" class="carousel slide hero-carousel" data-bs-ride="carousel" data-bs-interval="6000">
      <div class="carousel-indicators">
        ${HERO_SLIDES.map(renderIndicator).join("")}
      </div>
      <div class="carousel-inner">
        ${HERO_SLIDES.map(renderSlide).join("")}
      </div>
      ${renderControl("prev", "Anterior", "left")}
      ${renderControl("next", "Siguiente", "right")}
    </div>`;
}
