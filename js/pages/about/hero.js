export function renderHero() {
    const container = document.getElementById("about-hero");

    if (!container) return;

    container.innerHTML = `
        <div class="container-fluid flex-grow-1">
                <main class="col-md-12 py-4">
                    <h1 class="display-5 fw-bold text-left">Sobre Nosotros</h1>      

                    <div class="card shadow-sm my-4 overflow-hidden">
                        <div class="row g-0">
                            <div class="col-md-8">
                            <p class="card-text">
                             Ajolote y Grulla es un e-commerce de artículos de papelería japonesa en México.
                             En nuestro catálogo destacan productos ganadores de los prestigiosos premios <strong>"Japanese Stationery Awards."</strong>                             
                             Como diferenciador logramos mejorar la experiencia de búsqueda detallando la singularidad 
                             de cada artículo, no solo por su funcionalidad o características, sino con descripciones 
                             que destaquen su "personalidad".
                            </p>
                        </div> 

                        <div class="col-md-4">
                            <img src="https://m.media-amazon.com/images/I/81V9c0GCb+L._UF1000,1000_QL80_.jpg"
                                class="img-fluid h-100 object-fit-cover"
                                alt="Logo de Ajolote y Grulla">
                        </div>
                    </div>
            </main>
        </div>
    `;
}