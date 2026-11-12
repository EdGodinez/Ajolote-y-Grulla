import { productos } from "../products/products.js";

function validarName(name) {

}

function validarBrand(brand) {

}

function validarAward() {
    const award = document.querySelector("#premio");
    const valor = award.value.trim();
    const feedback = document.querySelector("#award-validation");
    if (award.value != "") {
        // Reglas de validacion, minimo 10 caracteres reales 
        const reglas = /^(?=(?:.*\S){5}).+$/;
        if (reglas.test(valor)) {
            const val = feedback.querySelector("div");
            if (val === null) {
                const valid = document.createElement("div");
                valid.textContent = "Correcto";
                valid.className = "valid-feedback";
                feedback.append(valid);
                award.classList.add("is-valid");
                // return true;
            } else {
                award.classList.replace(award.classList[1],"is-valid");
                const valid = feedback.querySelector("div");
                valid.textContent = "Correcto";
                valid.className = "valid-feedback";
                // return true;
            }
        } else {
            const val = feedback.querySelector("div");
            console.log(val);
            if (val !== null) {
                val.classList.replace("valid-feedback","invalid-feedback")
                val.textContent = "Incorrecto";
                award.classList.replace("is-valid","is-invalid");
            }else{
                award.classList.add("is-invalid");
                const valid = document.createElement("div");
                valid.textContent = "Incorrecto";
                valid.className = "invalid-feedback";
                feedback.append(valid);
            }
            // return false;
        }
    } else {
        const val = feedback.querySelector("div");
        if (val !== null) {
            val.remove();
        }
        award.classList.remove(award.classList[1]);
        

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
