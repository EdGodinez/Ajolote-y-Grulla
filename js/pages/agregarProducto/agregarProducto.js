import { productos } from "../products/products.js";

const CATEGORIAS_VALIDAS = ["Plumas y Lapiceros", "Accesorios", "Cintas Adhesivas", "Útiles", "Marcadores"];

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

}

function validarImg(img) {

}

function agregarProducto(producto) {

}

const formulario = document.getElementById("form-agregar-producto");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

});