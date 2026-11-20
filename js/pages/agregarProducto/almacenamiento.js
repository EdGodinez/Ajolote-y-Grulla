import { productos } from "../products/products.js";

const CLAVE_STORAGE = "productosAgregados";

// Obtener productos almacenados
export function obtenerProductosGuardados() {
    try {
        const datos = JSON.parse(
            localStorage.getItem(CLAVE_STORAGE) || "[]"
        );

        return Array.isArray(datos) ? datos : [];
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}

// Obtener todos los productos
export function obtenerTodosLosProductos() {
    return [
        ...productos,
        ...obtenerProductosGuardados()
    ];
}

// Normalizar texto para comparaciones
function normalizarTexto(texto) {
    return String(texto)
        .trim()
        .replace(/\s+/g, " ")
        .toLocaleLowerCase("es");
}

// Comprobar productos duplicados
export function existeProducto(nombre, marca) {
    const nombreNormalizado = normalizarTexto(nombre);
    const marcaNormalizada = normalizarTexto(marca);

    return obtenerTodosLosProductos().some(producto => {
        return (
            normalizarTexto(
                producto.productName ?? producto.name ?? ""
            ) === nombreNormalizado &&
            normalizarTexto(producto.brand ?? "") === marcaNormalizada
        );
    });
}

// Generar identificador
export function generarId() {
    const ids = obtenerTodosLosProductos()
        .map(producto => Number(producto.id))
        .filter(id => Number.isSafeInteger(id) && id > 0);

    return ids.length > 0
        ? Math.max(...ids) + 1
        : 1;
}

// Guardar producto
export function guardarProducto(producto) {
    if (existeProducto(producto.productName, producto.brand)) {
        throw new Error(
            "Ya existe un producto registrado con ese nombre y marca."
        );
    }

    const productosGuardados = obtenerProductosGuardados();

    const nuevoProducto = {
        ...producto,
        id: generarId(),
        price: Number(producto.price)
    };

    productosGuardados.push(nuevoProducto);

    localStorage.setItem(
        CLAVE_STORAGE,
        JSON.stringify(productosGuardados)
    );

    return nuevoProducto;
}