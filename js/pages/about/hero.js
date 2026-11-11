export function renderHero() {
    const container = document.getElementById("about-hero");

    if (!container) return;

    container.innerHTML = `
        <section class="hero-about py-5">
            <div class="container py-lg-4">
                <div class="row align-items-center g-5">

<<<<<<< HEAD
<<<<<<< HEAD
                    <div class="col-12 col-lg-6 text-center text-lg-start">
                        <h1 class="hero-about__titulo display-4 fw-bold mb-4">
                            Sobre<br>nosotros:
                        </h1>

                        <div class="papel-nota mx-auto mx-lg-0">
                            <p class="mb-0"> 
                                Ajolote y Grulla es un e-commerce de artículos de papelería japonesa en México.
                                En nuestro catálogo destacan productos ganadores de los prestigiosos premios
                                <strong>"Japanese Stationery Awards."</strong>
                                Como diferenciador logramos mejorar la experiencia de búsqueda detallando la
                                singularidad de cada artículo, no solo por su funcionalidad o características,
                                sino con descripciones que destaquen su "personalidad".
                            </p>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 text-center">
=======
                    <div class="col-12 col-md-6 text-center text-md-start">
                        <h1 class="hero-about__titulo display-4 fw-bold fst-italic mb-4">
=======
                    <div class="col-12 col-lg-6 text-center text-lg-start">
                        <h1 class="hero-about__titulo display-4 fw-bold mb-4">
>>>>>>> bbaa0528a4c84e641c257eded6f762b3b4da6d67
                            Sobre<br>nosotros:
                        </h1>

                        <div class="papel-nota mx-auto mx-lg-0">
                            <p class="mb-0"> 
                                Ajolote y Grulla es un e-commerce de artículos de papelería japonesa en México.
                                En nuestro catálogo destacan productos ganadores de los prestigiosos premios
                                <strong>"Japanese Stationery Awards."</strong>
                                Como diferenciador logramos mejorar la experiencia de búsqueda detallando la
                                singularidad de cada artículo, no solo por su funcionalidad o características,
                                sino con descripciones que destaquen su "personalidad".
                            </p>
                        </div>
                    </div>

<<<<<<< HEAD
                    <div class="col-12 col-md-6 text-center">
>>>>>>> fc8b0e18771f57a5fd9e528c1acc8932819bb160
=======
                    <div class="col-12 col-lg-6 text-center">
>>>>>>> bbaa0528a4c84e641c257eded6f762b3b4da6d67
                        <img src="assets/logos/Logotipo-Principal.png"
                            class="img-fluid hero-about__img"
                            alt="Logo de Ajolote y Grulla">
                    </div>

                </div>
            </div>
        </section>
    `;
}