
import { productos } from "./products.js";

const clasesCategorias = {
  "Plumas y Lapiceros": "categoria-plumas",
  "Accesorios": "categoria-accesorios",
  "Cintas Adhesivas": "categoria-cintas",
  "Útiles": "categoria-utiles",
  "Marcadores": "categoria-marcadores"
};

export function initCatalogo() {

  const contenedor = document.getElementById("lista-productos");
  const filtros = document.getElementById("filtros-categorias");
  const buscador = document.getElementById("buscar-producto");
  const mensaje = document.getElementById("sin-resultados");

  // Verificar que existan los elementos
  if (!contenedor || !filtros || !buscador || !mensaje) return;

  let categoriaActiva = "Todos";

  const categorias = [
    "Todos",
    ...new Set(productos.map(producto => producto.categoria))
  ];

  //Normalizar texto
  function normalizarTexto(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  //Mostrar productos
  function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

      const claseCategoria =
        clasesCategorias[producto.categoria] || "categoria-default";

      // Crear tarjeta
      const tarjeta = `
        <div class="col-6 col-md-4 col-lg-3">

          <article class="producto-card h-100">

            <!-- Categoría -->
            <span class="producto-categoria ${claseCategoria}">
              ${producto.categoria}
            </span>

            <!-- Imagen -->
            <div class="producto-imagen">
              <img
                src="${producto.img}"
                alt="${producto.name}"
                loading="lazy"
              >
            </div>

            <!-- Información -->
            <div class="producto-info">

              <h3 class="producto-nombre">
                ${producto.name}
              </h3>

              <p class="producto-descripcion">
                ${producto.description}
              </p>

              <!-- Precio -->
              <p class="producto-precio">
                $${producto.price} MXN
              </p>

              <!-- Botones -->
              <div class="producto-acciones">

                <button
                  type="button"
                  class="btn-agregar-carrito"
                  data-id="${producto.id}"
                >
                  <i class="bi bi-bag-plus"></i>
                  Agregar al carrito
                </button>

                <button
                  type="button"
                  class="btn-ver-mas"
                  data-id="${producto.id}"
                >
                  Ver más
                </button>

              </div>

            </div>

          </article>

        </div>
      `;

      contenedor.insertAdjacentHTML("beforeend", tarjeta);

    });
  }


  //Filtrar productos
  function filtrarProductos() {

    const texto = normalizarTexto(buscador.value);

    const productosFiltrados = productos.filter(producto => {

      const coincideCategoria =
        categoriaActiva === "Todos" ||
        producto.categoria === categoriaActiva;

      const coincideBusqueda =
        normalizarTexto(producto.name).includes(texto) ||
        normalizarTexto(producto.marca).includes(texto) ||
        normalizarTexto(producto.description).includes(texto);

      return coincideCategoria && coincideBusqueda;

    });

    mostrarProductos(productosFiltrados);

    mensaje.classList.toggle(
      "d-none",
      productosFiltrados.length > 0
    );
  }


  //Busqueda de productos en tiempo real
  buscador.addEventListener("input", filtrarProductos);


  //Filtros por categoria
  categorias.forEach(categoria => {

    const boton = document.createElement("button");

    boton.type = "button";
    boton.textContent = categoria;

    const claseCategoria =
      clasesCategorias[categoria] || "categoria-default";

    boton.className = `filtro-categoria ${claseCategoria}`;

    if (categoria === "Todos") {
      boton.className = "filtro-categoria filtro-todos activo";
    }

    boton.setAttribute(
      "aria-pressed",
      String(categoria === "Todos")
    );

    boton.addEventListener("click", () => {

      categoriaActiva = categoria;

      filtrarProductos();

      filtros.querySelectorAll(".filtro-categoria").forEach(btn => {

        const activo = btn === boton;

        btn.classList.toggle("activo", activo);

        btn.setAttribute(
          "aria-pressed",
          String(activo)
        );

      });

    });

    filtros.appendChild(boton);

  });

  filtrarProductos();

}
