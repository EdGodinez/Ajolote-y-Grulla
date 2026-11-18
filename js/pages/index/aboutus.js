
/**
 * Inicializa la vista de la seccion de "About Us" en index
 * 
 * @export
 * @returns {void} No retorna ningún valor.
 */
export function renderIndexAboutUs() {
  const productsElement = document.getElementById("about");
  if (!productsElement) return;

  let htmlContent = `
        <div class="row align-items-center g-4">
            <div class="col-12 col-lg-6 p-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jzqqDw31lv45A1Q28d7E29vkjIn0L7_7N0LkqJ9K5oW30uXQSYAHI-4&s=10"
                class="img-fluid"
                alt=""
              />
            </div>
            <div
              class="col-12 col-lg-6 d-flex align-items-center justify-content-center"
            >
              <div>
                <p class="eyebrow d-flex align-items-center gap-2 m-2">
                  SOBRE NOSOTROS <span></span> 私たちについて
                </p>

                <h1>
                  Creemos en los<br /><i class="fst-italic"
                    >rituales pequeños.</i
                  >
                </h1>
                <p class="">...</p>

                <button class="btn btn-info">
                  Conoce nuestra historia
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
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
    `;

   

  productsElement.innerHTML = htmlContent ;
}

renderIndexAboutUs();
