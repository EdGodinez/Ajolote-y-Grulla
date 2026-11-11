import { productos } from "../products/products.js";

function validarName(name) {

}

function validarBrand(brand) {

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
    let award = document.getElementById("premio");
    validarAward(award);

});

document.getElementById("btn-limpiarFormulario").addEventListener("click", e => (
    formulario.reset()
)
);        
