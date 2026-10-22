export function renderHero() {
    const container = document.getElementById("about-hero");

    if (!container) return;

    container.innerHTML = `
        <div class="about-hero__container">
            <h1>Conoce Ajolote & Grulla</h1>
            <p>
                Acercamos la esencia de la papelería
                japonesa a México.
            </p>
        </div>
    `;
}