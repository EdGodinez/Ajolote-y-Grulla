// Categorías permitidas
export const CATEGORIAS_VALIDAS = [
    "Plumas y Lapiceros",
    "Accesorios",
    "Cintas Adhesivas",
    "Útiles",
    "Marcadores"
];

// Validar nombre
export const validarNombre = (valor) => {
    const nombre = valor.trim();

    if (!nombre) {
        return "El nombre es obligatorio.";
    }

    if (nombre.length < 3 || nombre.length > 77) {
        return "El nombre debe tener entre 3 y 77 caracteres.";
    }

    if (!/^[\p{L}]{2}/u.test(nombre)) {
        return "El nombre debe comenzar con al menos dos letras.";
    }

    return null;
};

// Validar marca
export const validarMarca = (valor) => {
    const marca = valor.trim();

    if (!marca) {
        return "La marca es obligatoria.";
    }

    if (marca.length < 2 || marca.length > 50) {
        return "La marca debe tener entre 2 y 50 caracteres.";
    }

    if (!/^[\p{L}\p{N}\s&-]+$/u.test(marca)) {
        return "La marca contiene caracteres no permitidos.";
    }

    return null;
};

// Validar categoría
export const validarCategoria = (valor) => {
    if (!CATEGORIAS_VALIDAS.includes(valor)) {
        return "Selecciona una categoría válida.";
    }

    return null;
};

// Validar características
export const validarCaracteristicas = (valores) => {
    if (!Array.isArray(valores) || valores.length === 0) {
        return "Selecciona al menos una característica.";
    }

    return null;
};

// Validar premio (opcional)
export const validarPremio = (valor) => {
    const premio = valor.trim();

    if (!premio) {
        return null;
    }

    if (premio.length < 5) {
        return "El premio debe tener al menos 5 caracteres.";
    }

    return null;
};

// Validar precio
export const validarPrecio = (valor) => {
    if (String(valor).trim() === "") {
        return "El precio es obligatorio.";
    }

    const precio = Number(valor);

    if (!Number.isFinite(precio) || precio <= 0) {
        return "Ingresa un precio mayor que cero.";
    }

    if (!/^\d+(\.\d{1,2})?$/.test(String(valor))) {
        return "El precio debe tener máximo dos decimales.";
    }

    return null;
};

// Validar imagen
export const validarImagen = (valor) => {
    const imagen = valor.trim();

    if (!imagen) {
        return "La imagen es obligatoria.";
    }

    const esRutaRelativa = /^(?:\.\/)?(?:[\w-]+\/)*[\w-]+\.(?:jpg|jpeg|png|webp|gif)$/i.test(imagen);

    let esUrlValida = false;

    try {
        const url = new URL(imagen);

        esUrlValida =
            ["http:", "https:"].includes(url.protocol) &&
            /\.(jpg|jpeg|png|webp|gif)$/i.test(url.pathname);
    } catch {
        esUrlValida = false;
    }

    if (!esRutaRelativa && !esUrlValida) {
        return "Ingresa una ruta o URL válida de imagen.";
    }

    return null;
};

// Validar descripción
export const validarDescripcion = (valor) => {
    const descripcion = valor.trim();

    if (!descripcion) {
        return "La descripción es obligatoria.";
    }

    if (descripcion.length < 10 || descripcion.length > 500) {
        return "La descripción debe tener entre 10 y 500 caracteres.";
    }

    if (!/\p{L}/u.test(descripcion)) {
        return "La descripción debe contener letras.";
    }

    return null;
};

// Validar detalle
export const validarDetalle = (valor) => {
    const detalle = valor.trim();

    if (!detalle) {
        return "El detalle es obligatorio.";
    }

    if (detalle.length < 20 || detalle.length > 800) {
        return "El detalle debe tener entre 20 y 800 caracteres.";
    }

    return null;
};

// Centralizar todas las validaciones
export const validaciones = {
    name: validarNombre,
    brand: validarMarca,
    category: validarCategoria,
    characteristics: validarCaracteristicas,
    award: validarPremio,
    price: validarPrecio,
    img: validarImagen,
    description: validarDescripcion,
    detail: validarDetalle
};