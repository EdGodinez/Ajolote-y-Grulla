/**
 * Contenido de cada diapositiva del carrusel del hero.
 * Para agregar o cambiar una diapositiva solo se edita este arreglo.
 */
const HERO_SLIDES = [
  {
    eyebrow: "PAPELERÍA JAPONESA EN MÉXICO",
    title: "¡Lo quiero<br />Tokio!",
    titleTag: "h1",
    largeTitle: true,
    lead: "<em>LLEGARON LOS GANADORES DE LOS JAPANESE STATIONERY AWARDS 2026</em>",
    cta: { label: "¡Compra ahora!", href: "./products.html" },
    textCols: 6,
    interval: 6300,
    media: {
      type: "video",
      src: "./assets/images/home-hero/video-hero.mp4",
      poster: "./assets/images/home-hero/video-hero-poster.jpg",
    },
  },
  {
    kicker: "¿Qué son los",
    title: "Japanese<br />Stationery Awards?",
    titleTag: "h2",
    paragraphs: [
      "¡Los Japanese Stationery Awards son el equivalente a los premios Óscar, pero para el mundo de la papelería en Japón!",
    ],
    cta: { label: "Conoce más", href: "#about" },
    textCols: 6,
    media: {
      type: "collage",
      images: [
        { src: "./assets/images/home-hero/washi-tape.png", alt: "Cinta washi" },
        { src: "./assets/images/home-hero/cuter-foca.png", alt: "Cúter en forma de foca" },
        { src: "./assets/images/home-hero/lapiz.png", alt: "Marcador con brillos" },
        { src: "./assets/images/home-hero/clip-libro.png", alt: "Clips para libro sujetando las páginas" },
      ],
    },
  },
  {
    layout: "spotlight",
    title: "¡Regalo sorpresa!",
    titleTag: "h2",
    largeTitle: true,
    lead: "Con tu pedido al registrarte por primera vez.",
    paragraphs: ["¡No pierdas la oportunidad!"],
    cta: { label: "¡Regístrate ahora!", href: "./login.html" },
    aside: {
      src: "./assets/images/home-hero/cajita-sorpresa.png",
      alt: "Cajita de regalo sonriente",
    },
    media: {
      type: "background",
      src: "./assets/images/home-hero/regalo-sorpresa.webp",
      alt: "Selección de papelería japonesa de regalo",
    },
  },
];

/**
 * Palabras decorativas en japonés: papel, tijeras, papelería, útiles, lápiz, goma y cuaderno.
 * Cada una se acomoda en la orilla con su clase hero-deco--N.
 */
const HERO_DECORATIONS = ["紙", "ハサミ", "文房具屋", "文具", "鉛筆", "消しゴム", "ノート"];

const CAROUSEL_ID = "heroCarousel";

/**
 * Devuelve el HTML solo si el valor existe; evita repetir ternarios en cada campo opcional.
 */
const optional = (value, template) => (value ? template(value) : "");

/**
 * Cada tipo de imagen del hero tiene su propia forma de pintarse.
 */
const MEDIA_RENDERERS = {
  video: ({ src, poster }) => `
    <video src="${src}" poster="${poster}" class="hero-media d-block mx-auto shadow-lg"
      autoplay muted loop playsinline aria-hidden="true"></video>`,

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

const renderMedia = (media) => MEDIA_RENDERERS[media.type](media);

const renderTitle = ({ title, titleTag, largeTitle }, extraClasses = "") => `
  <${titleTag} class="hero-title${largeTitle ? " hero-title--xl" : ""} ${extraClasses} mb-0">${title}</${titleTag}>`;

const renderSupportText = ({ lead, paragraphs = [] }) => `
  ${optional(lead, (text) => `<p class="hero-lead mb-0">${text}</p>`)}
  ${paragraphs.map((text) => `<p class="hero-text fw-bold mb-0">${text}</p>`).join("")}`;

const renderCta = ({ label, href }) => `
  <a class="btn btn-sakura btn-hero rounded-pill d-inline-flex align-items-center justify-content-center gap-3" href="${href}">
    ${label} <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
  </a>`;

/**
 * Acomodos disponibles para una diapositiva:
 * - split: texto a la izquierda e imagen a la derecha (slides 1 y 2).
 * - spotlight: título centrado arriba; abajo, imagen secundaria con botón y texto al centro (slide 3).
 */
const SLIDE_LAYOUTS = {
  split: (slide) => `
    <div class="row align-items-center g-5 hero-slide">
      <div class="col-12 col-lg-${slide.textCols} d-flex flex-column align-items-start hero-copy position-relative z-1">
        ${optional(slide.eyebrow, (text) => `
          <p class="eyebrow d-flex align-items-center gap-2 mb-0"><span></span> ${text}</p>`)}
        ${optional(slide.kicker, (text) => `<p class="hero-lead mb-0">${text}</p>`)}
        ${renderTitle(slide)}
        ${renderSupportText(slide)}
        ${renderCta(slide.cta)}
      </div>
      <div class="col-12 col-lg-${12 - slide.textCols}">
        ${renderMedia(slide.media)}
      </div>
    </div>`,

  spotlight: (slide) => `
    <div class="hero-slide hero-slide--spotlight d-flex flex-column hero-copy">
      ${renderTitle(slide, "text-center position-relative z-1 mt-auto")}
      <div class="row align-items-center g-4 position-relative z-1 mb-auto">
        <div class="col-12 col-lg-4 order-2 order-lg-1 d-flex flex-column align-items-center hero-copy">
          <img src="${slide.aside.src}" alt="${slide.aside.alt}" class="hero-aside" />
          ${renderCta(slide.cta)}
        </div>
        <div class="col-12 col-lg-4 order-1 order-lg-2 d-flex flex-column text-center hero-copy">
          ${renderSupportText(slide)}
        </div>
      </div>
      ${renderMedia(slide.media)}
    </div>`,
};

function renderSlide(slide, index) {
  const layout = SLIDE_LAYOUTS[slide.layout ?? "split"];

  return `
    <div class="carousel-item${index === 0 ? " active" : ""}"${optional(slide.interval, (ms) => ` data-bs-interval="${ms}"`)}>
      ${HERO_DECORATIONS.map(
        (kanji, i) => `<span class="hero-deco hero-deco--${i + 1} d-none d-lg-block" aria-hidden="true">${kanji}</span>`
      ).join("")}
      <div class="container-fluid hero-container py-5">
        ${layout(slide)}
      </div>
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

  heroElement.addEventListener("slid.bs.carousel", restartActiveVideo);
}

/**
 * Reinicia el video de la diapositiva que acaba de entrar para que siempre se vea desde el principio.
 *
 * @param {Event} event Evento "slid.bs.carousel" de Bootstrap.
 * @returns {void} No retorna ningún valor.
 */
function restartActiveVideo(event) {
  const video = event.relatedTarget.querySelector("video");
  if (!video) return;

  video.currentTime = 0;
  video.play();
}
