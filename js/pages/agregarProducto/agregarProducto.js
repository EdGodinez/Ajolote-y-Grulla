let catalogoProductos = [];
import("../products/products.js")
    .then((modulo) => {
        if (modulo && Array.isArray(modulo.productos)) {
            catalogoProductos = modulo.productos;
        }
    })
    .catch(() => {
        console.warn("Aviso: No se pudo cargar products.js, validando localmente.");
    });

document.addEventListener("DOMContentLoaded", () => {
    const campoNombre = document.getElementById("name");
    const campoMarca = document.getElementById("marca");
    const textoContador = document.getElementById("contadorName");
    const cajaErrorNombre = document.getElementById("alertname");
    const recuadroAlertaMarca = document.getElementById("alerttrade");
    const formularioProducto = document.getElementById("form-agregar-producto");

    if (!campoNombre || !textoContador) {
        console.error("Error: No existen los elementos #name o #contadorName en el HTML.");
        return;
    }

    const limiteMaximo = Number(campoNombre.getAttribute("maxlength")) || 77;
    textoContador.textContent = `0/${limiteMaximo}`;

    function evaluarReglasNombre(valorNombre, valorMarca) {
        const nombreSinEspacios = valorNombre.trim();
        const marcaSinEspacios = (valorMarca || "").trim().toLowerCase();
        const nombreEnMinusculas = nombreSinEspacios.toLowerCase();

        const regexIniciaConPalabra = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{2,}/;

        if (nombreSinEspacios.length === 0) {
            return { esValido: false, codigoError: "vacio", mensaje: "El nombre no puede estar vacío." };
        }

        if (!regexIniciaConPalabra.test(nombreSinEspacios)) {
            return { esValido: false, codigoError: "formato", mensaje: "El nombre debe comenzar con una palabra válida (mínimo 2 letras)." };
        }

        if (nombreSinEspacios.length < 3) {
            return { esValido: false, codigoError: "longitud", mensaje: "El nombre debe tener al menos 3 caracteres." };
        }
        const incluyePalabraMarca = /\bmarca\b/i.test(nombreSinEspacios) || nombreEnMinusculas.includes("marca");
        const repiteTextoMarca = marcaSinEspacios.length > 0 && nombreEnMinusculas.includes(marcaSinEspacios);

        if (incluyePalabraMarca || repiteTextoMarca) {
            return {
                esValido: false,
                codigoError: "marcaRepetida",
                mensaje: "Colocar marca en el siguiente recuadro"
            };
        }

        const existeDuplicado = catalogoProductos.some((item) => {
            const itemNombre = (item.name || "").trim().toLowerCase();
            const itemMarca = (item.brand || item.marca || "").trim().toLowerCase();
            return itemNombre === nombreEnMinusculas && itemMarca === marcaSinEspacios;
        });

        if (existeDuplicado) {
            return { esValido: false, codigoError: "duplicado", mensaje: "Ya existe un producto con ese nombre y marca." };
        }

        return { esValido: true, codigoError: "ninguno", mensaje: "" };
    }

    function actualizarInterfazNombre() {
        const cadenaActual = campoNombre.value;
        const totalCaracteres = cadenaActual.length;

        if (totalCaracteres >= limiteMaximo) {
            textoContador.textContent = `${totalCaracteres}/${limiteMaximo} - Límite alcanzado`;
            textoContador.classList.remove("text-muted");
            textoContador.classList.add("text-danger", "fw-bold");
        } else {
            textoContador.textContent = `${totalCaracteres}/${limiteMaximo}`;
            textoContador.classList.add("text-muted");
            textoContador.classList.remove("text-danger", "fw-bold");
        }

        if (cadenaActual.length === 0) {
            campoNombre.classList.remove("is-invalid", "is-valid");
            if (recuadroAlertaMarca) recuadroAlertaMarca.style.display = "none";
            if (cajaErrorNombre) cajaErrorNombre.style.display = "none";
            return;
        }
        const valorMarcaActual = campoMarca ? campoMarca.value : "";
        const resultado = evaluarReglasNombre(cadenaActual, valorMarcaActual);

        if (resultado.esValido) {
            campoNombre.classList.remove("is-invalid");
            campoNombre.classList.add("is-valid");
            if (recuadroAlertaMarca) recuadroAlertaMarca.style.display = "none";
            if (cajaErrorNombre) cajaErrorNombre.style.display = "none";
        } else {
            campoNombre.classList.remove("is-valid");
            campoNombre.classList.add("is-invalid");

            if (resultado.codigoError === "marcaRepetida") {
                if (recuadroAlertaMarca) {
                    recuadroAlertaMarca.textContent = resultado.mensaje;
                    recuadroAlertaMarca.style.display = "block";
                }
                if (cajaErrorNombre) cajaErrorNombre.style.display = "none";
            } else {
                if (recuadroAlertaMarca) recuadroAlertaMarca.style.display = "none";
                if (cajaErrorNombre) {
                    cajaErrorNombre.textContent = resultado.mensaje;
                    cajaErrorNombre.style.display = "block";
                }
            }
        }
    }

    campoNombre.addEventListener("input", actualizarInterfazNombre);
    if (campoMarca) {
        campoMarca.addEventListener("input", actualizarInterfazNombre);
    }

    if (formularioProducto) {
        formularioProducto.addEventListener("submit", (event) => {
            event.preventDefault();
            actualizarInterfazNombre();
        });
    }
});

function validarBrand(brand) {
    
}

function validarAward(award) {

}

function validarDescription(description) {

}

function validarDetail(detail) {

}

function validarCharacteristics(characteristics) {

}

function validarCategory(category) {

}

function validarPrice(price) {

}

function validarImg(img) {

}

function agregarProducto(producto) {

}

const formulario = document.getElementById("form-agregar-producto");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

});

