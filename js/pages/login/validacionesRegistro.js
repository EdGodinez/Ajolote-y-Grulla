
const campos = {
    fullname: "fullnameLabel",
    "register-email": "registerEmailLabel",
    "register-phone": "phoneLabel",
    "register-password": "registerPasswordLabel",
    "confirm-password": "confirmPasswordLabel"
};

function mostrarValidacion(id, mensaje = "") {
    const input = document.getElementById(id);
    const label = document.getElementById(campos[id]);

    if (!input || !label) return false;

    const valido = mensaje === "";

    input.classList.toggle("is-valid", valido);
    input.classList.toggle("is-invalid", !valido);

    let feedback = label.querySelector(".registro-feedback");

    if (!feedback) {
        feedback = document.createElement("span");
        feedback.className = "registro-feedback d-inline ms-1";
        label.append(feedback);
    }

    feedback.textContent = valido ? "Campo válido" : mensaje;

    feedback.classList.toggle("text-success", valido);
    feedback.classList.toggle("text-danger", !valido);

    return valido;
}

export function verificarCampoRegistro(id) {
    const input = document.getElementById(id);
    if (!input) return false;

    const valor = input.value.trim();
    let mensaje = "";

    switch (id) {
        case "fullname":
            if (valor.length < 2) {
                mensaje = "Campo inválido. Mínimo 2 caracteres";
            }
            break;

        case "register-email":
            if (valor === "") {
                mensaje = "Campo inválido, es necesario rellenar campo";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
                mensaje = "Formato de correo electrónico inválido";
            }
            break;

        case "register-phone":
            if (!/^\d{10}$/.test(valor)) {
                mensaje = "Campo inválido. Debe contener 10 dígitos";
            }
            break;

        case "register-password":
            if (input.value.length < 8) {
                mensaje = "Campo inválido. Mínimo 8 caracteres";
            }
            break;

        case "confirm-password":
            if (!input.value) {
                mensaje = "Campo inválido. Confirma tu contraseña";
            } else if (
                input.value !==
                document.getElementById("register-password").value
            ) {
                mensaje = "Las contraseñas no coinciden";
            }
            break;
    }

    return mostrarValidacion(id, mensaje);
}

export function validarFormularioRegistro() {
    const resultados = Object.keys(campos).map(verificarCampoRegistro);
    return resultados.every(Boolean);
}

export function iniciarValidacionesRegistro() {
    const formulario = document.getElementById("register-form");
    if (!formulario) return;

    formulario.noValidate = true;

    Object.keys(campos).forEach((id) => {
        const input = document.getElementById(id);

        input.addEventListener("keyup", () => {
            verificarCampoRegistro(id);

            if (
                id === "register-password" &&
                document.getElementById("confirm-password").value
            ) {
                verificarCampoRegistro("confirm-password");
            }
        });

        input.addEventListener("change", () => {
            verificarCampoRegistro(id);
        });
    });
}
