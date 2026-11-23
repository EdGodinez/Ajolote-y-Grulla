/**
 * Da formato de precio mexicano con dos decimales, por ejemplo 1300 → "1,300.00 MXN".
 *
 * @export
 * @param {number|string} precio Precio del producto.
 * @returns {string} Precio con formato.
 */
export function formatearPrecio(precio) {
  const cantidad = Number(precio).toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${cantidad} MXN`;
}
