

export function guardarUsuarioLogueado (usuario){
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario))
}

export function obtenerUsuarioLogueado (){
    let usuarioGuardado = localStorage.getItem("usuarioLogueado")

    if (usuarioGuardado === null){
         return null;
    } else {
        return JSON.parse(usuarioGuardado)
    }
}

export function cerrarSesion (){
    localStorage.removeItem("usuarioLogueado")
    window.location.href = "index.html"
}