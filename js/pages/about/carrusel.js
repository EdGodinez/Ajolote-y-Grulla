export function renderCarrusel() {
  const container = document.getElementById("about-carrusel");

  if (!container) return;

  container.innerHTML = `
        <div class="container-fluid py-4" style="background-color: #c9b7f0;">
    <div id="slider-codersfree" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" class="active" data-bs-target="#slider-codersfree" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#slider-codersfree" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#slider-codersfree" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="card mx-auto shadow-sm border-0 rounded-9" style="max-width: 600px; ; background-color: #B7E6DB;">
            <div class="card-body text-center p-5">
              <i class="bx bx-target-lock carousel-icon" aria-hidden="true"></i>
              <h3 class="card-title mb-3">Misión</h3>
              <p class="card-text">Brindar a nuestros clientes en México acceso exclusivo a papelería japonesa de alta calidad, diseño único y funcionalidad destacada, transformando la rutina diaria de organización y creatividad en una experiencia inspiradora. Nos diferenciamos al acercar artículos innovadores y de creadores independientes que promueven la expresión personal.</p>
            </div>
          </div>
        </div>
        
        <div class="carousel-item">
          <div class="card mx-auto shadow-sm border-0  rounded-9" style="max-width: 600px;  background-color: #B7E6DB;">
            <div class="card-body text-center p-5">
              <i class="bx bx-show carousel-icon" aria-hidden="true"></i>
              <h3 class="card-title mb-3">Visión</h3>
              <p class="card-text">Ser el e-commerce referente en México de papelería estética y japonesa de nicho, reconocido por nuestra cuidada selección y una plataforma interactiva con perfilamiento dinámico. Buscamos conectar a una comunidad apasionada de creadores, estudiantes y profesionales con productos auténticos que inspiren sus ideas y proyectos cotidianos.</p>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="card mx-auto shadow-sm border-0 rounded-9" style="max-width: 600px;  background-color: #B7E6DB;">
            <div class="card-body text-center p-5">
              <i class="bx bx-heart carousel-icon" aria-hidden="true"></i>
              <h3 class="card-title mb-3">Valores</h3>
              <p class="card-text">Nos regimos por la originalidad, la creatividad y la responsabilidad hacia nuestros clientes ofreciendo productos excepcionales de papelería japonesa y un servicio centrado en enriquecer la experiencia de nuestros clientes.</p>
            </div>
          </div>
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#slider-codersfree" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#slider-codersfree" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>

    </div>
  </div>
    `;
}