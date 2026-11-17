const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

const formulario = document.getElementById("form-nueva-password");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevaPassword = document.getElementById("nuevaPassword").value.trim();

    if (!token) {
        alert("El token de recuperación no es válido o falta en el enlace.");
        return;
    }

    try {
        const respuesta = await fetch("https://ajolote-backend.onrender.com/api/cambiar-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token, nuevaPassword })
        });

        const datos = await respuesta.json();

        if (datos.ok) {
            alert(datos.mensaje);
            // Redirigir al login o página principal
            window.location.href = "./index.html"; 
        } else {
            alert("Error: " + datos.mensaje);
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor.");
    }
});