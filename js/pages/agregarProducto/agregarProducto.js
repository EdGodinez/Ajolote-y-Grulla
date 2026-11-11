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

const CATEGORIAS_VALIDAS = ["Plumas y Lapiceros", "Accesorios", "Cintas Adhesivas", "Útiles", "Marcadores"];

function validarBrand(brand) {
    const textoLimpio = brand.trim();
    
    // REGEX: Letras (incluyendo acentos), números, espacios, guiones y ampersand (&)
    const regexValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\-\&]+$/;
    
    // Evalua longitud mínima, máxima y que cumpla el regex
    if (textoLimpio.length >= 2 && textoLimpio.length <= 50 && regexValido.test(textoLimpio)) {
        return true;
    }
    alert("La Marca ingresada no es valida. Debe tener entre 2 y 50 caracteres y no contener simbolos especiales.");
    
    return false;
}

function validarAward(award) {
    const valor = award.value.trim();
    console.log(valor);
    if (valor != "") {
        // Reglas de validacion, minimo 10 caracteres reales 
        const reglas = /^(?=(?:.*\S){10}).+$/;
        if (reglas.test(valor)) {
            console.log("ok");
            return true;
        } else {
            return false;
        }
    } else {
        return true;      
    }
}

function validarDescription(description) {
    const texto = (description ?? "").trim();
    let error = "";
    if (texto === "") error = "La descripción es obligatoria.";
    else if (texto.length < 10) error = "La descripción debe tener al menos 10 caracteres.";
    else if (texto.length > 500) error = "La descripción no puede superar 500 caracteres.";
    else if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(texto)) error = "La descripción debe incluir letras, no solo números o símbolos.";
    return resolverCampo("descripcion", error);
}

function validarDetail(detail) {

}

function validarCharacteristics(characteristics) {
    const seleccionadas = document.querySelectorAll('#caracteristicas .form-check-input:checked');
    
    if (seleccionadas.length === 0) {
        return false;
    } else {
        return true;
    }
}


function validarCategory(category) {
    if (typeof category !== "string" || category.trim() === "") {
        alert("Selecciona una categoría.");
        return false;
    }

    if (!CATEGORIAS_VALIDAS.includes(category.trim())) {
        alert("La categoría seleccionada no es válida.");
        return false;
    }

    return true;
}

function validarPrice(price) {
    
    if (price.trim() == "") {
        return false ;
    }

    let precioNumero = Number(price)
    if (Number.isNaN(precioNumero)) {
        return false ;
    }

    if (precioNumero < 0.01) {
        return false ;
    }

     if (price.includes(".") && precioTexto.split(".")[1].length > 2) {
        return false;
    }

    return true;
    
}

function validarImg(img) {

}

function agregarProducto(producto) {

}

const formulario = document.getElementById("form-agregar-producto");


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let award = document.getElementById("premio");
    validarAward(award);

});

document.getElementById("btn-limpiarFormulario").addEventListener("click", e => (
    formulario.reset()
)
);        
