import { productos } from "../products/products.js";

function validarName(name) {

}

function validarBrand(brand) {

}

function validarAward(award) {

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