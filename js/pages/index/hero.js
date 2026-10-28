
/**
 * Inicializa la vista de la seccion de "Hero" en index
 * 
 * @export
 * @returns {void} No retorna ningún valor.
 */

export function renderIndexHero() {
  const heroElement = document.getElementById("hero");
  if (!heroElement) return;

  let htmlContent = `
        <div class="row align-items-center g-4">
            <!-- COL DE HERO -->
            <div class="col-12 col-lg-6">
              <p class="eyebrow d-flex align-items-center gap-2 m-2">
                <span></span> PAPELERIA PARA DÍAS BONITOS
              </p>
              <h1>
                Haz espacio<br /><i class="fst-italic">para lo bonito.</i>
              </h1>
              <p class="">
                Objetos pequeños, rituales lentos y colores que hacen que
                escribir vuelva a sentirse especial.
              </p>
              <a class="btn btn-info" href="#coleccion"
                >Explorar colección
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path></svg
              ></a>
              <div class="hero-note d-flex align-items-center gap-3 py-3">
                <span class="stamp border rounded-pill border-3 p-2  ">暮</span
                ><span  class="text"
                  >Diseñado en Japón<br /><strong>para tu mundo</strong></span
                >
              </div>
            </div>
            <!-- COL DE HERO -->
            <div
              class="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center"
              style="min-height: 400px"
            >
              <div class="hero-circle"></div>
              <div class="hero-card-green shadow"></div>
              <img
                src="https://m.media-amazon.com/images/I/81eKYRufo8L.jpg"
                class="hero-main-img shadow-lg img-fluid"
                style="max-width: 60%"
              />
              <!-- <span>書くことは、旅</span> -->
              <div class="hero-floating-tag">
                毎日を <br />
                たのしく
              </div>
            </div>
          </div>
    `;

   

  heroElement.innerHTML = htmlContent ;
}

renderIndexHero();
