const formulario = document.getElementById("register-form");

formulario.addEventListener("submit", async(event) => { // agregue async
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

    // Prueba para registrar usuarios en una base de datos en la nube -
    // Trabaja en conjunto con recoveryPassword
    await registrarUsuario(email, password);

    // Limpiar formulario
    formulario.reset();
});



/**
 * Prueba con base de datos alojada en "Render"
 * Solo para probar funcion de recovery password
 * @param {*} email 
 * @param {*} password 
 */

export async function registrarUsuario(email, password) {
    try {
        const respuesta = await fetch("https://ajolote-backend.onrender.com/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const datos = await respuesta.json();

        if (datos.ok) {
            alert("Alerta: " + datos.mensaje);
            
        } else {
            alert("Alerta: " + datos.mensaje);
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor.");
    }
}