import { renderIndexHero } from "./hero.js";
import { renderCategories } from "./categories.js";
import { renderProducts } from "./products.js";
import { renderIndexAboutUs } from "./about-us.js";

export function renderIndex() {

    // Renderizar seccion del hero de index
    renderIndexHero();

    // Inicializar seccion de categorias de index
    renderCategories();

    // Inicializa seccion de productos destacados de index
    renderProducts();

    // Renderizamos seccion de About Us
    renderIndexAboutUs();

}