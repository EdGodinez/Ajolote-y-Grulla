import { productos } from "./products.js";

const dlg = document.querySelector("#detalle");

function abreDetalle(id) {
  const p = productos.find((x) => x.id === id);
  if (!p) return;
  document.querySelector("#detalle-contenido").innerHTML = `
    <div class="row g-0 p-4">
      <p class="detalle-premio premio-dorado d-inline-flex align-items-center gap-2 rounded-pill w-auto px-3 py-1 mb-2">
        <i class="bi bi-award-fill"></i>
        <span>${p.award}</span>
      </p>
      <h2>${p.productName}</h2>
      <div class="col-12 col-md-5 d-flex align-items-center justify-content-center  position-relative">
        <!-- Carrousel  -->
        <div class="carousel slide carousel-fade carousel-drop-shrink" id="detailedCarouser">
          <div class="carousel-inner" style="height: 260px;">
            <div class="carousel-item h-100 active">
              <img src="${p.img}" alt="${p.productName}" onerror="this.remove()" class="d-block w-100 h-100 object-fit-contain">
            </div>
            <div class="carousel-item h-100">
              <video 
                src="./assets/images/home-pick/video-pick.mp4" 
                class="d-block w-100 h-100 object-fit-contain" 
                autoplay muted loop playsinline></video>
            </div>
          
            
          </div>
          <!-- Carrousel Btns-->
            <div class="carousel-indicators position-static mt-3">
              <button type="button" data-bs-target="#detailedCarouser" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#detailedCarouser" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
        </div>

      </div>
      <div class="detalle-texto col-12 col-md-7 pt-3 px-5">
        <p class="detalle-marca text-muted">${p.brand} </p>
        <span class="producto-etiqueta mb-2">${p.category}</span>
        <p class="detalle-precio" style="color: var(--azul-marino-intenso); font-weight: 700; font-size: 1.5rem">$${p.price.toFixed(2)}</p>
        <p class="">${p.detail}</p>
        <ul class=" d-flex flex-wrap  px-0 gap-2 pe-none">${p.characteristics.map((t) => `<li class="filtro filtro-categoria ">${t}</li>`).join("")}</ul>
        <div class="producto-acciones">
        <button type="button" class="btn btn-primary rounded-pill py-3 mb-1" data-id="${p.id}">
            <i class="bi bi-bag-plus"></i>
             Agregar al carrito
        </button>
      </div>
    </div>
    `;
  dlg.dataset.id = id;
  dlg.showModal();
}

function clickDetalleProducto() {
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg || e.target.closest(".detalle-cerrar")) {
      dlg.close();
      return;
    }
    const btn = e.target.closest("[data-accion]");
    if (btn) accion(btn.dataset.accion, dlg.dataset.id);
  });
}

export { abreDetalle, clickDetalleProducto };
