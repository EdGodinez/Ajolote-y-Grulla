/**
 * Encabezado que comparten las secciones de inicio: eyebrow, título y, si se necesita, un enlace a la derecha.
 *
 * @export
 * @param {{ eyebrow: string, title: string, link?: { label: string, href: string } }} encabezado
 * @returns {string} HTML del encabezado.
 */
export function renderSectionHeader({ eyebrow, title, link }) {
  return `
    <div class="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
      <div>
        <p class="eyebrow d-flex align-items-center gap-2 mb-2"><span></span> ${eyebrow}</p>
        <h2 class="section-title mb-0">${title}</h2>
      </div>
      ${link ? `
        <a href="${link.href}" class="section-link d-inline-flex align-items-center gap-1">
          ${link.label} <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
        </a>` : ""}
    </div>`;
}
