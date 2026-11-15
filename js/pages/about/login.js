import { guardarUsuarioLogueado } from "../../components/sesion.js";


const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    const datos = new FormData(formulario);
    const nombreUsuario = datos.get("username");
    const contrasena = datos.get("password");
    guardarUsuarioLogueado({ nombre: nombreUsuario });
    window.location.href = "index.html";
});