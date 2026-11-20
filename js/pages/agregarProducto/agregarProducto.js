import { validaciones } from "./validaciones.js";
import { guardarProducto } from "./almacenamiento.js";

// Referencias del formulario
const formulario = document.getElementById("form-agregar-producto");
const botonLimpiar = document.getElementById("btn-limpiarFormulario");
const contadorNombre = document.getElementById("contadorName");

// Campos individuales
const campos = [
    "name",
    "brand",
    "category",
    "award",
    "price",
    "img",
    "description",
    "detail"
];

// Obtener los datos del formulario
function obtenerDatosFormulario() {
    const datos = new FormData(formulario);

    return {
        productName: datos.get("name").trim(),
        brand: datos.get("brand").trim(),
        category: datos.get("category"),
        characteristics: datos.getAll("characteristics"),
        award: datos.get("award").trim(),
        price: datos.get("price"),
        img: datos.get("img").trim(),
        description: datos.get("description").trim(),
        detail: datos.get("detail").trim()
    };
}

// Mostrar el estado de validación de un campo
function mostrarValidacion(campo, mensaje) {
    const feedback = document.getElementById(`error-${campo.id}`);

    if (mensaje) {
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");

        campo.setAttribute("aria-invalid", "true");

        feedback.textContent = mensaje;
    } else {
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");

        campo.setAttribute("aria-invalid", "false");

        feedback.textContent = "";
    }
}

// Validar un campo individual
function validarCampo(campo) {
    const valor = campo.value;

    const mensaje = validaciones[campo.id](valor);

    mostrarValidacion(campo, mensaje);

    return mensaje === null;
}

// Validar el grupo de características
function validarGrupoCaracteristicas() {
    const seleccionadas = [
        ...formulario.querySelectorAll(
            'input[name="characteristics"]:checked'
        )
    ].map(checkbox => checkbox.value);

    const mensaje = validaciones.characteristics(seleccionadas);

    const feedback = document.getElementById(
        "error-characteristics"
    );

    feedback.textContent = mensaje || "";
    feedback.hidden = mensaje === null;

    const checkboxes = formulario.querySelectorAll(
        'input[name="characteristics"]'
    );

    checkboxes.forEach(checkbox => {
        checkbox.setAttribute(
            "aria-invalid",
            mensaje ? "true" : "false"
        );
    });

    return mensaje === null;
}

// Actualizar contador del nombre
function actualizarContadorNombre() {
    const campoNombre = document.getElementById("name");

    const longitud = campoNombre.value.length;
    const maximo = Number(campoNombre.maxLength);

    contadorNombre.textContent = `${longitud}/${maximo}`;

    contadorNombre.classList.toggle(
        "text-danger",
        longitud >= maximo
    );

    contadorNombre.classList.toggle(
        "text-muted",
        longitud < maximo
    );
}

// Validar todo el formulario
function validarFormulario() {
    let formularioValido = true;
    let primerCampoInvalido = null;

    campos.forEach(id => {
        const campo = document.getElementById(id);

        if (!validarCampo(campo)) {
            formularioValido = false;

            if (!primerCampoInvalido) {
                primerCampoInvalido = campo;
            }
        }
    });

    if (!validarGrupoCaracteristicas()) {
        formularioValido = false;

        if (!primerCampoInvalido) {
            primerCampoInvalido = formulario.querySelector(
                'input[name="characteristics"]'
            );
        }
    }

    if (primerCampoInvalido) {
        primerCampoInvalido.focus();
    }

    return formularioValido;
}

// Limpiar las validaciones visuales
function limpiarValidaciones() {
    campos.forEach(id => {
        const campo = document.getElementById(id);

        campo.classList.remove("is-valid", "is-invalid");
        campo.removeAttribute("aria-invalid");

        document.getElementById(
            `error-${id}`
        ).textContent = "";
    });

    const feedbackCaracteristicas = document.getElementById(
        "error-characteristics"
    );

    feedbackCaracteristicas.textContent = "";
    feedbackCaracteristicas.hidden = true;

    formulario.querySelectorAll(
        'input[name="characteristics"]'
    ).forEach(checkbox => {
        checkbox.removeAttribute("aria-invalid");
    });

    actualizarContadorNombre();
}

// Eventos de validación en tiempo real
campos.forEach(id => {
    const campo = document.getElementById(id);

    const evento = campo.tagName === "SELECT"
        ? "change"
        : "input";

    campo.addEventListener(evento, () => {
        validarCampo(campo);

        if (id === "name") {
            actualizarContadorNombre();
        }
    });
});

// Evento de los checkboxes
formulario.querySelectorAll(
    'input[name="characteristics"]'
).forEach(checkbox => {
    checkbox.addEventListener(
        "change",
        validarGrupoCaracteristicas
    );
});

// Evento para limpiar el formulario
botonLimpiar.addEventListener("click", () => {
    formulario.reset();
    limpiarValidaciones();
});

// Evento para enviar el formulario
formulario.addEventListener("submit", event => {
    event.preventDefault();

    if (!validarFormulario()) {
        return;
    }

    const producto = obtenerDatosFormulario();

    try {
        const nuevoProducto = guardarProducto(producto);

        console.log("Producto registrado:", nuevoProducto);

        window.location.href = "./products.html";

    } catch (error) {
        console.error("Error al registrar producto:", error);

        const campoNombre = document.getElementById("name");

        mostrarValidacion(campoNombre, error.message);

        campoNombre.focus();
    }
});

// Inicializar contador
actualizarContadorNombre();