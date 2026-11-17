import { guardarUsuarioLogueado } from "../../components/sesion.js";

/* Buttons de formulario de Login */
const formularioLogin = document.getElementById("login-form");
const btnSubmitLogin = document.getElementById("btn-submit-login");

/* Buttons de formulario de Register */
const formularioRegister = document.getElementById("register-form");
const btnSubmitRegister = document.getElementById("btn-submit-register");

// Revisa el correo que escribió la persona.
// Revisa que no esté vacío, que no tenga espacios y que tenga formato de
// correo (algo, una arroba, un dominio y un punto).
// Devuelve el mensaje del primer error que encuentre, o un texto vacío
// ("") si el correo es válido.
function validarCorreo(correo) {
    if (correo.trim() === "") {
        return "El correo es obligatorio";
    }

    if (correo.includes(" ")) {
        return "El correo no puede tener espacios";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        return "Escribe un correo válido, por ejemplo nombre@correo.com";
    }

    return "";
}

// Revisa la contraseña que escribió la persona.
// Revisa que no esté vacía, que tenga al menos 9 caracteres y que tenga
// una mayúscula, una minúscula y un carácter especial.
// Devuelve el mensaje del primer error que encuentre, o un texto vacío
// ("") si la contraseña es válida.
function validarContrasena(contrasena) {
    if (contrasena.trim() === "") {
        return "La contraseña es obligatoria";
    }

    if (contrasena.length < 9) {
        return "La contraseña debe tener al menos 9 caracteres";
    }

    if (!/[A-Z]/.test(contrasena)) {
        return "La contraseña necesita al menos una letra mayúscula";
    }

    if (!/[a-z]/.test(contrasena)) {
        return "La contraseña necesita al menos una letra minúscula";
    }

    if (!/[^A-Za-z0-9]/.test(contrasena)) {
        return "La contraseña necesita al menos un carácter especial";
    }

    return "";
}

// Crea un párrafo vacío justo debajo del campo indicado (por su atributo
// name) y lo devuelve, para escribir ahí el mensaje de error.
function crearEspacioError(nombreCampo) {
    const campo = formularioLogin.querySelector(`[name="${nombreCampo}"]`);
    const espacioError = document.createElement("p");
    espacioError.className = "text-danger small mt-1 mb-0";
    campo.insertAdjacentElement("afterend", espacioError);
    return espacioError;
}

// Solo se activa si el formulario de login existe en la página
if (formularioLogin) {
    // Desactiva la validación del navegador para que se vean los mensajes propios
    formularioLogin.noValidate = true;

    const espacioErrorCorreo = crearEspacioError("email");
    const espacioErrorContrasena = crearEspacioError("password");

    formularioLogin.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const datos = new FormData(formularioLogin);
        const correo = datos.get("email");
        const contrasena = datos.get("password");

        // Guarda lo que responde cada validación (mensaje de error o "")
        const mensajeErrorCorreo = validarCorreo(correo);
        const mensajeErrorContrasena = validarContrasena(contrasena);

        // Muestra los mensajes debajo de cada campo. Si no hay error,
        // el texto vacío borra el mensaje anterior.
        espacioErrorCorreo.textContent = mensajeErrorCorreo;
        espacioErrorContrasena.textContent = mensajeErrorContrasena;

        // Si algún campo tiene error, se detiene y no inicia sesión
        if (mensajeErrorCorreo !== "" || mensajeErrorContrasena !== "") {
            return;
        }

        // El navbar muestra el nombre, así que se usa la parte del correo
        // antes de la arroba como nombre
        guardarUsuarioLogueado({ nombre: correo.split("@")[0], correo: correo });
        window.location.href = "index.html";
    });
}