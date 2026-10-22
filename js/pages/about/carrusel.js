export function renderCarrusel() {
    const container = document.getElementById("about-carrusel");

    if (!container) return;

    container.innerHTML = `
        <div class="about-carrusel">
            <h2>Nuestra filosofía</h2>

            <div class="about-carrusel">
                <article>
                    <h3>Misión</h3>
                    <p>Nuestra misión...</p>
                </article>
            </div>
        </div>
    `;
}