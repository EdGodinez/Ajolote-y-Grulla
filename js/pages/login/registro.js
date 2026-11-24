
import {
  iniciarValidacionesRegistro,
  validarFormularioRegistro
} from "./validacionesRegistro.js";

iniciarValidacionesRegistro();

const formulario = document.getElementById("register-form");

if (formulario) {
  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validarFormularioRegistro()) return;

    const datos = new FormData(formulario);

    const fullname = datos.get("fullname").trim();
    const email = datos.get("email").trim().toLowerCase();
    const password = datos.get("password");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existeUsuario = usuarios.some(
      usuario => usuario.email === email
    );

    if (existeUsuario) {
      mostrarErrorRegistro("Este correo electrónico ya está registrado.");
      return;
    }

    const nuevoUsuario = {
      id: crypto.randomUUID(),
      fullname,
      email,
      password
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Prueba de registro en Render para recuperación de contraseña
    await registrarUsuario(email, password);

    // Limpiar formulario y validaciones

    formulario.reset();

    formulario.querySelectorAll(".form-control").forEach(campo => {
      campo.classList.remove("is-valid", "is-invalid");
    });

    formulario.querySelectorAll(".registro-feedback").forEach(mensaje => {
      mensaje.remove();
    });

    // Cambiar al formulario de Login
    document.getElementById("btn-toggle-register")?.click();

    // Mostrar Toast de registro exitoso
    const toastElemento = document.getElementById("toast-registro");

    const toast = bootstrap.Toast.getOrCreateInstance(toastElemento, {
      animation: true,
      autohide: true,
      delay: 4000
    });

    toast.show();

  });
}

function mostrarErrorRegistro(mensaje) {
  let alerta = formulario.querySelector(".alert-registro");

  if (!alerta) {
    alerta = document.createElement("div");
    alerta.className = "alert alert-danger text-center alert-registro";
    document.getElementById("btn-submit-register").after(alerta);
  }

  alerta.textContent = mensaje;
}

export async function registrarUsuario(email, password) {
  try {
    const respuesta = await fetch(
      "https://ajolote-backend.onrender.com/api/registro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    );

    if (!respuesta.ok) {
      console.error("Error al registrar usuario en Render");
      return false;
    }

    const datos = await respuesta.json();

    if (!datos.ok) {
      console.error(datos.mensaje);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error de conexión:", error);
    return false;
  }
}