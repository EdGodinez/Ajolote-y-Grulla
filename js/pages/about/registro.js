const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    const datos = new FormData(formulario);
    const password = datos.get("password");
    const confirmPassword = datos.get("confirm-password");

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, revísalas.");
        return; // Detiene el proceso si no coinciden
    }