import { renderIndexHero } from "./hero.js";
import { renderProducts } from "./products.js";
import { renderPickOfTheMonth } from "./pick.js";
import { renderCategories } from "./categories.js";
import { renderIndexAboutUs } from "./about-us.js";

export function renderIndex() {

    // Renderizar seccion del hero de index
    renderIndexHero();

    // Seccion "No sabía que lo necesitaba"
    renderProducts();

    // Seccion del pick del mes
    renderPickOfTheMonth();

    // Seccion de categorias del catalogo
    renderCategories();

    // Renderizamos seccion de About Us
    renderIndexAboutUs();

}
