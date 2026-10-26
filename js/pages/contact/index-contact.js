import { renderContact as renderContactComponent } from "./contact.js";
import { initContactForm } from "./form.js";

export function renderContact() {

    // Renderizar la página de contacto
    renderContactComponent();

    // Inicializar el formulario de Formspree
    initContactForm();

}