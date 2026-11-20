export let alerta = 0;

// funcion para verificar usuario desde login
export function verificarUsuarioSesion(usuarioVerificar) {
    // Obtener usuarios registrados        
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if(usuarios.length > 0){
        const usuarioEncontrado = usuarios.find(user => user.email === usuarioVerificar.correo);
        if (usuarioEncontrado === undefined) {
            alerta = 2;
        } else {
            if (usuarioEncontrado.password === usuarioVerificar.contrasena) {
                const user = {
                    id: usuarioEncontrado.id,
                    fullname: usuarioEncontrado.fullname,
                    email: usuarioEncontrado.email
                }
                // Funcion para guardar sesion de usuario que esta correctamente logeado
                userSesionActive(user);
                alerta = 0;
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
