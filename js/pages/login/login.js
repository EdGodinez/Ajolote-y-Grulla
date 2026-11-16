/* Buttons de formulario de Login */
const formularioLogin = document.getElementById("login-form");
const btnSubmitLogin = document.getElementById("btn-submit-login");

/* Buttons de formulario de Register */
const formularioRegister = document.getElementById("register-form");
const btnSubmitRegister = document.getElementById("btn-submit-register");




formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    const datos = new FormData(formulario);
    console.log(datos.get("username"));
    console.log(datos.get("password"));
});