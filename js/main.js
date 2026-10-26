
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
   COMPONENTE DE ABOUT
   ========================================== */

import { renderAbout } from "./pages/about/index-about.js";

/* ==========================================
   COMPONENTE DE CONTACT
   ========================================== */

import { renderContact } from "./pages/contact/index-contact.js";


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

// Componentes exclusivos de about.html
if (document.getElementById("about-hero")) {
    renderAbout();
}

// Componentes exclusivos de contact.html
if (document.getElementById("contact")) {
    renderContact();
}

