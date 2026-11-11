/* ==========================================
   COMPONENTES GLOBALES
   ========================================== */

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

/* ==========================================
   COMPONENTE DE INICIO
   ========================================== */

import { renderIndex } from "./pages/index/index-index.js";

/* ==========================================
   COMPONENTE DE ABOUT
   ========================================== */

import { renderAbout } from "./pages/about/index-about.js";

/* ==========================================
   COMPONENTE DE CONTACT
   ========================================== */

import { renderContact } from "./pages/contact/index-contact.js";

/* ==========================================
   COMPONENTE CATALOGO
   ========================================== */

   import { initCatalogo } from "./pages/products/catalogo.js";

/* ==========================================
   INICIALIZACIÓN
   ========================================== */

// Componentes globales
renderHeader();
renderFooter();

// Componentes exclusivos de index.html
if (document.getElementById("productSection")) {
    renderIndex()
}

// Componentes exclusivos de about.html
if (document.getElementById("about-hero")) {
    renderAbout();
}

// Componentes exclusivos de contact.html
if (document.getElementById("contact")) {
    renderContact();
}

// Componentes exclusivos de products.html
if (document.getElementById("lista-productos")) {
    initCatalogo();
}