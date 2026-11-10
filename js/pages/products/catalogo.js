import { productos } from "./products.js";

const TODOS = "Todos";

// Cada valor apunta a una clase de color genérica definida en products.css
const clasesCategorias = {
  "Plumas y Lapiceros": "etiqueta-sakura",
  "Accesorios": "etiqueta-lila",
  "Cintas Adhesivas": "etiqueta-menta",
  "Útiles": "etiqueta-coral",
  "Marcadores": "etiqueta-marino"
};

// Agrupadas por color: estética, juego, funcionalidad e innovación
const clasesCharacteristics = {
  "Aesthetic": "etiqueta-sakura",
  "Elegante": "etiqueta-sakura",
  "Diseño minimalista": "etiqueta-sakura",
  "Creativo": "etiqueta-lila",
  "Divertido": "etiqueta-lila",
  "Original": "etiqueta-lila",
  "Práctico": "etiqueta-menta",
  "Multifuncional": "etiqueta-menta",
  "Ergonómico": "etiqueta-menta",
  "Innovador": "etiqueta-marino",
  "Diseño inteligente": "etiqueta-marino",
  "No sabía que lo necesitaba": "etiqueta-marino"
};

function obtenerClase(clases, valor) {
  return clases[valor] || "etiqueta-default";
}

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function crearEtiquetas(characteristics) {
  return characteristics
    .map(caracteristica => `
      <span class="producto-etiqueta ${obtenerClase(clasesCharacteristics, caracteristica)}">
        ${caracteristica}
      </span>
    `)
    .join("");
}

function crearTarjeta(producto) {
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <article class="producto-card h-100">

        <div class="producto-etiquetas">
          ${crearEtiquetas(producto.characteristics)}
        </div>

        <div class="producto-imagen">
          <img src="${producto.img}" alt="${producto.productName}" loading="lazy">
        </div>

        <div class="producto-info">
          <h3 class="producto-nombre">${producto.productName}</h3>
          <p class="producto-descripcion">${producto.description}</p>
          <p class="producto-precio">$${producto.price} MXN</p>

          <div class="producto-acciones">
            <button type="button" class="btn-agregar-carrito" data-id="${producto.id}">
              <i class="bi bi-bag-plus"></i>
              Agregar al carrito
            </button>
            <button type="button" class="btn-ver-mas" data-id="${producto.id}">
              Ver más
            </button>
          </div>
        </div>

      </article>
    </div>
  `;
}

// Genera un grupo de botones de filtro; sirve para categorías y características
function crearFiltros(contenedor, opciones, clases, alSeleccionar) {
  [TODOS, ...opciones].forEach(opcion => {
    const boton = document.createElement("button");
    const esTodos = opcion === TODOS;

    boton.type = "button";
    boton.textContent = opcion;
    boton.className = esTodos
      ? "filtro filtro-todos activo"
      : `filtro ${obtenerClase(clases, opcion)}`;
    boton.setAttribute("aria-pressed", String(esTodos));

    boton.addEventListener("click", () => {
      contenedor.querySelectorAll(".filtro").forEach(btn => {
        const activo = btn === boton;
        btn.classList.toggle("activo", activo);
        btn.setAttribute("aria-pressed", String(activo));
      });

      alSeleccionar(opcion);
    });

    contenedor.appendChild(boton);
  });
}

export function initCatalogo() {
  const contenedor = document.getElementById("lista-productos");
  const filtrosCategorias = document.getElementById("filtros-categorias");
  const filtrosCharacteristics = document.getElementById("filtros-characteristics");
  const buscador = document.getElementById("buscar-producto");
  const mensaje = document.getElementById("sin-resultados");

  if (!contenedor || !filtrosCategorias || !filtrosCharacteristics || !buscador || !mensaje) return;

  let categoriaActiva = TODOS;
  let caracteristicaActiva = TODOS;

  const categorias = [...new Set(productos.map(producto => producto.category))];
  const characteristics = [...new Set(productos.flatMap(producto => producto.characteristics))];

  function mostrarProductos(lista) {
    contenedor.innerHTML = lista.map(crearTarjeta).join("");
    mensaje.classList.toggle("d-none", lista.length > 0);
  }

  function filtrarProductos() {
    const texto = normalizarTexto(buscador.value);

    const productosFiltrados = productos.filter(producto => {
      const coincideCategoria =
        categoriaActiva === TODOS || producto.category === categoriaActiva;

      const coincideCaracteristica =
        caracteristicaActiva === TODOS || producto.characteristics.includes(caracteristicaActiva);

      const textoProducto = normalizarTexto([
        producto.productName,
        producto.brand,
        producto.description,
        producto.detail,
        ...producto.characteristics
      ].join(" "));

      return coincideCategoria && coincideCaracteristica && textoProducto.includes(texto);
    });

    mostrarProductos(productosFiltrados);
  }

  crearFiltros(filtrosCategorias, categorias, clasesCategorias, categoria => {
    categoriaActiva = categoria;
    filtrarProductos();
  });

  crearFiltros(filtrosCharacteristics, characteristics, clasesCharacteristics, caracteristica => {
    caracteristicaActiva = caracteristica;
    filtrarProductos();
  });

  buscador.addEventListener("input", filtrarProductos);

  filtrarProductos();
}