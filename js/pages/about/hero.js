export function renderHero() {
    const container = document.getElementById("about-hero");

    if (!container) return;

    container.innerHTML = `
        <section class="hero-about py-5">
            <div class="container py-lg-4">
                <div class="row align-items-center g-5">

                    <div class="col-12 col-md-6 text-center text-md-start">
                        <h1 class="hero-about__titulo display-4 fw-bold fst-italic mb-4">
                            Sobre<br>nosotros:
                        </h1>
                        <p class="fs-5 mb-4">
                            Ajolote y Grulla es un e-commerce de artículos de papelería japonesa en México.
                            En nuestro catálogo destacan productos ganadores de los prestigiosos premios
                            <strong>"Japanese Stationery Awards."</strong>
                            Como diferenciador logramos mejorar la experiencia de búsqueda detallando la
                            singularidad de cada artículo, no solo por su funcionalidad o características,
                            sino con descripciones que destaquen su "personalidad".
                        </p>
                        <div class="hero-about__linea mx-auto mx-md-0"></div>
                    </div>

                    <div class="col-12 col-md-6 text-center">
                        <img src="assets/images/Logotipo-Principal.png"
                            class="img-fluid hero-about__img"
                            alt="Logo de Ajolote y Grulla">
                    </div>

                </div>
            </div>
        </section>
    `;
}