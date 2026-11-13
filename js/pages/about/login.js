const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    const datos = new FormData(formulario);
    console.log(datos.get("username"));
    console.log(datos.get("password"));
});