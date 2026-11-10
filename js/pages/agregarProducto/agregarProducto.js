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

}

function validarCategory(category) {

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

});