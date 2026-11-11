import { productos } from "../products/products.js";

const CATEGORIAS_VALIDAS = ["Plumas y Lapiceros", "Accesorios", "Cintas Adhesivas", "Útiles", "Marcadores"];

function validarName(name) {

}

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
