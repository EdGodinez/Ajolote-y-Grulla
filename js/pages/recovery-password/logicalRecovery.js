/**
 * Exportando la logica para recuperar contrasenia
 * 
 * @param {*} email 
 */

export const solicitarRecuperacion = async (email) => {
    try {
        alert("Enviando correo, por favor espera un momento...");

        const respuesta = await fetch("https://ajolote-backend.onrender.com/api/recuperar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const datos = await respuesta.json();

        if (datos.ok) {
            alert("Correo enviado correctamente. Revisa tu bandeja de entrada.");
        } else {
            alert("Error: " + datos.mensaje);
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor.");
    }
};