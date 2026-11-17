/**
 * Exportando la logica para recuperar contrasenia
 * 
 * @param {*} email 
 */

export async function solicitarRecuperacion(email) {
    try {
        const respuesta = await fetch("https://ajolote-backend.onrender.com/api/recuperar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const datos = await respuesta.json();

        if (datos.ok) {
            console.log("Ta bien")
        } else {
            alert("Alert: " + datos.mensaje);
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor.");
    }
}