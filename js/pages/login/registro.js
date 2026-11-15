const formulario = document.getElementById("register-form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener datos del formulario
    const datos = new FormData(formulario);

    const fullname = datos.get("fullname").trim();
    const email = datos.get("email").trim().toLowerCase();
    const password = datos.get("password");
    const confirmPassword = datos.get("confirm-password");

    // Validar contraseñas
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, revísalas.");
        return;
    }

    // Obtener usuarios registrados
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya existe
    const existeUsuario = usuarios.some(usuario => usuario.email === email);

    if (existeUsuario) {
        alert("Este correo electrónico ya está registrado.");
        return;
    }

    // Crear objeto usuario
    const nuevoUsuario = {
        id: crypto.randomUUID(),
        fullname: fullname,
        email: email,
        password: password
    };

    // Agregar usuario al arreglo
    usuarios.push(nuevoUsuario);

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Confirmar registro
    alert("Usuario registrado exitosamente.");

    // Limpiar formulario
    formulario.reset();
});