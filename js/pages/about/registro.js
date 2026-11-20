const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
<<<<<<< HEAD
    
=======

>>>>>>> 925170a8e857683afde9461837a36b12601d44b3
    const datos = new FormData(formulario);
    const password = datos.get("password");
    const confirmPassword = datos.get("confirm-password");

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, revísalas.");
        return; // Detiene el proceso si no coinciden
<<<<<<< HEAD
    }
=======
    }
});
>>>>>>> 925170a8e857683afde9461837a36b12601d44b3
