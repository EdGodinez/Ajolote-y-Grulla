import { productos } from "../products/products.js";

function validarName(name) {

}

function validarBrand(brand) {

}

function validarAward() {
    let award = document.querySelector("#premio");
    const valor = award.value.trim();
    console.log(valor);
    const feedback = document.querySelector("#award-validation");
    if (award.value != "") {
        // Reglas de validacion, minimo 10 caracteres reales 
        const reglas = /^(?=(?:.*\S){5}).+$/;
        if (reglas.test(valor)) {
            const val = feedback.querySelector(".valid-feedback");
            console.log(val);
            if (val === null) {
                award.classList.add("is-valid");
                const valid = document.createElement("div");
                valid.textContent = "Correcto";
                valid.className = "valid-feedback";
                feedback.append(valid);
                // return true;
            } else {
                // return true;
            }
        } else {
            const val = feedback.querySelector("div");
            console.log(val);
            if (val !== null) {
                val.classList.replace(".invalid-fe5edback")
                val.textContent = "Incorrecto";
            }
            award.classList.replace("is-valid","is-invalid");
            // return false;
        }
    } else {
        const val = feedback.querySelector("div");
        if (val !== null) {
            val.remove();
        }
        award.classList.remove();
        

        // return true;
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
});

document.querySelector("#premio").addEventListener("input", validarAward);

document.getElementById("btn-limpiarFormulario").addEventListener("click", e => (
    formulario.reset()
)
);        
