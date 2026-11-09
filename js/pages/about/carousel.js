/**
 * Carousel exported
 * 
 * @exports
 * @returns {void}
 */

export function carouselRendering() {
    const carouselContainer = document.getElementById("about-carrusel");
    if(!carouselContainer) return 0;

    let carouselHTML = `
    <div class="">
        <section class="prueba-carrusel">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner imgs-carrusel">

                <div class="carousel-item active">
                    <img src="/Ajolote-y-Grulla/assets/about-carrusel/tarjeta1.png" 
                    class="img-fluid img-prueba" alt="...">

                    <div class="texto-tarjeta">
                        <h3 class="card-title mb-3">Misión</h3>
                        <p class="card-text">Brindar a nuestros clientes en México acceso exclusivo a papelería japonesa de alta calidad, diseño único y funcionalidad destacada, transformando la rutina diaria de organización y creatividad en una experiencia inspiradora. Nos diferenciamos al acercar artículos innovadores y de creadores independientes que promueven la expresión personal y el amor por los detalles.</p>
                    </div>
                
                </div>
                <div class="carousel-item">
                    <img src="/Ajolote-y-Grulla/assets/about-carrusel/tarjeta2.png" 
                    class="img-fluid img-prueba" alt="...">

                    <div class="texto-tarjeta">
                        <h3 class="card-title mb-3">Visión</h3>
                        <p class="card-text">Brindar a nuestros clientes en México acceso exclusivo a papelería japonesa de alta calidad, diseño único y funcionalidad destacada, transformando la rutina diaria de organización y creatividad en una experiencia inspiradora. Nos diferenciamos al acercar artículos innovadores y de creadores independientes que promueven la expresión personal y el amor por los detalles.</p>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <img src="/Ajolote-y-Grulla/assets/about-carrusel/tarjeta3.png" 
                    class="img-fluid img-prueba" alt="...">

                    <div class="texto-tarjeta">
                        <h3 class="card-title mb-3">Valores</h3>
                        <p class="card-text">Brindar a nuestros clientes en México acceso exclusivo a papelería japonesa de alta calidad, diseño único y funcionalidad destacada, transformando la rutina diaria de organización y creatividad en una experiencia inspiradora. Nos diferenciamos al acercar artículos innovadores y de creadores independientes que promueven la expresión personal y el amor por los detalles.</p>
                    </div>
        
                </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>

            </div>
        </section>
    </div>

    
    `;

    carouselContainer.innerHTML = carouselHTML;
}
