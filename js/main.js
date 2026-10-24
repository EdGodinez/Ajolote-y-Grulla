
/* ==========================================
   COMPONENTES GLOBALES
   ========================================== */

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

/* ==========================================
   COMPONENTES DE INICIO
   ========================================== */

import { renderIndexHero } from "./pages/index/hero.js";
import { renderCategories } from "./pages/index/categories.js";
import { renderProducts } from "./pages/index/products.js";
import { renderIndexAboutUs } from "./pages/index/aboutus.js";

/* ==========================================
   INICIALIZACIÓN
   ========================================== */

// Componentes globales
renderHeader();
renderFooter();

// Componentes exclusivos de index.html
if (document.getElementById("productSection")) {
    renderIndexHero();
    renderCategories();
    renderProducts();
    renderIndexAboutUs();
}
