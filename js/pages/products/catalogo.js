import { productos } from "./products.js";

const TODOS = "Todos";

const CARACTERISTICA_PRIORITARIA = "No sabía que lo necesitaba";
const MAX_ETIQUETAS = 2;

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// Pone primero la característica prioritaria y se queda solo con las primeras
function seleccionarEtiquetas(characteristics) {
  const prioritarias = characteristics.filter(c => c === CARACTERISTICA_PRIORITARIA);
  const resto = characteristics.filter(c => c !== CARACTERISTICA_PRIORITARIA);

  return [...prioritarias, ...resto].slice(0, MAX_ETIQUETAS);
}

function crearEtiquetas(characteristics) {
  return seleccionarEtiquetas(characteristics)
    .map(caracteristica => `<span class="producto-etiqueta">${caracteristica}</span>`)
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
function crearFiltros(contenedor, opciones, claseFiltro, alSeleccionar) {
  [TODOS, ...opciones].forEach(opcion => {
    const boton = document.createElement("button");
    const esTodos = opcion === TODOS;

    boton.type = "button";
    boton.textContent = opcion;
    boton.className = esTodos
      ? "filtro filtro-todos activo"
      : `filtro ${claseFiltro}`;
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

  crearFiltros(filtrosCategorias, categorias, "filtro-categoria", categoria => {
    categoriaActiva = categoria;
    filtrarProductos();
  });

  crearFiltros(filtrosCharacteristics, characteristics, "filtro-caracteristica", caracteristica => {
    caracteristicaActiva = caracteristica;
    filtrarProductos();
  });

  buscador.addEventListener("input", filtrarProductos);

  filtrarProductos();
}