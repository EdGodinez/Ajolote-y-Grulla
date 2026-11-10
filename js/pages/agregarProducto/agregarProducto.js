import { productos } from "../products/products.js";

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