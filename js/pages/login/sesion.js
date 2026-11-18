export let alerta = 0;

// funcion para verificar usuario desde login
export function verificarUsuarioSesion(usuarioVerificar) {
    // Obtener usuarios registrados        
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if(usuarios.length > 0){
        console.log(usuarios[0]);
        const correoExiste = usuarios.find(correo => correo.email === usuarioVerificar.correo);
        if (correoExiste === undefined) {
            alerta = 2;
        } else {
            if (correoExiste.password === usuarioVerificar.contrasena ) {
                const user = {
                    id: correoExiste.id,
                    fullname: correoExiste.fullname,
                    email: correoExiste.email
                }
                // Funcion para guardar sesion de usuario que esta correctamente logeado
                userSesionActive(user);
            } else {
                alerta = 3;
            }
        }
    }else{
        alerta = 1;
    }
}

// funcion que agrega datos de sesion
function userSesionActive(user) {
    sessionStorage.setItem("sesionActiva", JSON.stringify(user));
}

// funcion para consultar datos de secion activa
export function consultSesionActive() {
    let userGuardado = sessionStorage.getItem("sesionActiva");
    if (userGuardado === null) {
        return null;
    } else {
        return JSON.parse(userGuardado);
    }
}

export function logout() {
    sessionStorage.removeItem("sesionActiva"); 
    window.location.href = "index.html";   
}
