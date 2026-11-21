import { verificarUsuarioSesion, alerta } from "./sesion.js";

/* Buttons de formulario de Login */
const formularioLogin = document.getElementById("login-form");

// Solo se activa si el formulario de login existe en la página
if (formularioLogin) {
    // Desactiva la validación del navegador para que se vean los mensajes propios
    formularioLogin.noValidate = true;

    document.querySelector("#login-email").addEventListener("keyup", verificarEmail);
    document.querySelector("#login-password").addEventListener("keyup", verificarPassword);

    formularioLogin.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue
        let emailValido = verificarEmail();
        let passwordValido = verificarPassword();
        if (emailValido && passwordValido) {
            const datosConsulta = {
                correo: correo.toLocaleLowerCase().trim(),
                contrasena: contrasena
            }
            verificarUsuarioSesion(datosConsulta);
            if (alerta != 0) {
                mostrarAlerta(alerta);
            } else {
                window.location.href = "index.html";
            }
        } else{
            mostrarAlerta(4);
        }

    });
}
//Alerta general de logueo
function mostrarAlerta(al) {
    let mensaje = "";
    switch (al) {
        case 1:
            mensaje = "Es necesario Registrarse";
            break;
        case 2:
            mensaje = "El usuario no esta registrado";
            break;
        case 3:
            mensaje = "Error datos no coinciden con registro";
            break;
        default:
            mensaje = "Error al iniciar sesión";
            break;
    }
    const contenedor = document.getElementById("btn-submit-login");
    const alertaError = document.createElement("div");
    alertaError.className = "alert alert-danger text-end";
    alertaError.textContent = mensaje;
    contenedor.insertAdjacentElement("afterend",alertaError);
    setTimeout(() => {
        alertaError.remove();
    }, 3000);
    return;
}

function verificarEmail() {
    let email = document.querySelector("#login-email");
    let evalue = email.value.trim();
    let feedback = document.querySelector("#emailLabel");
    if (evalue != "") {
        // Reglas de validacion
        // expresion regular para correo valido
        const reglas = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (reglas.test(evalue)) {
            if (email.classList[1] === undefined) {
                email.classList.add("is-valid");
                const valid = document.createElement("p");
                valid.textContent = "Campo válido";
                valid.className = "d-inline valid-feedback";
                feedback.append(valid);
            } else {
                let notif = feedback.querySelectorAll("p");
                let textoAlert = notif[1];
                email.classList.replace(email.classList[1], "is-valid");
                textoAlert.textContent = "Campo válido";
                textoAlert.classList.replace(textoAlert.classList[1], "valid-feedback");
            }
            return true;
        } else {
            if (email.classList[1] === undefined) {
                email.classList.add("is-invalid");
                const valid = document.createElement("p");
                valid.textContent = "Campo inválido";
                valid.className = "d-inline invalid-feedback";
                feedback.append(valid);
            } else {
                let notif = feedback.querySelectorAll("p");
                let textoAlert = notif[1];
                email.classList.replace(email.classList[1], "is-invalid");
                textoAlert.textContent = "Campo inválido";
                textoAlert.classList.replace(textoAlert.classList[1], "invalid-feedback");

            }
            return false;
        }
    } else {
        if (email.classList[1] === undefined) {
            email.classList.add("is-invalid");
            const valid = document.createElement("p");
            valid.textContent = "Campo inválido, es necesario rellenar campo";
            valid.className = "d-inline invalid-feedback";
            feedback.append(valid);
        } else {
            let notif = feedback.querySelectorAll("p");
            let textoAlert = notif[1];
            email.classList.replace(email.classList[1], "is-invalid");
            textoAlert.textContent = "Campo inválido, es necesario rellenar campo";
            textoAlert.classList.replace(textoAlert.classList[1], "invalid-feedback");
        }
        return false;
    }
}

function verificarPassword() {
    let password = document.querySelector("#login-password");
    let pvalue = password.value.trim();
    let feedback = document.querySelector("#passwordLabel");
    // comprobar que el campo no quede vacio
    if (pvalue != "") {
        if (password.classList[1] === undefined) {
            password.classList.add("is-valid");
            const valid = document.createElement("p");
            valid.textContent = "Campo válido";
            valid.className = "d-inline valid-feedback";
            feedback.append(valid);
        } else {
            let notif = feedback.querySelectorAll("p");
            let textoAlert = notif[1];
            password.classList.replace(password.classList[1], "is-valid");
            textoAlert.textContent = "Campo válido";
            textoAlert.classList.replace(textoAlert.classList[1], "valid-feedback");
        }
        return true;

    } else {
        if (password.classList[1] === undefined) {
            password.classList.add("is-invalid");
            const valid = document.createElement("p");
            valid.textContent = "Campo inválido, es necesario rellenar campo";
            valid.className = "d-inline invalid-feedback";
            feedback.append(valid);
        } else {
            let notif = feedback.querySelectorAll("p");
            let textoAlert = notif[1];
            password.classList.replace(password.classList[1], "is-invalid");
            textoAlert.textContent = "Campo inválido, es necesario rellenar campo";
            textoAlert.classList.replace(textoAlert.classList[1], "invalid-feedback");
        }
        return false;
    }
}