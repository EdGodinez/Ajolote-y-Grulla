export function renderTeam() {
    const container = document.getElementById("about-team");

    if (!container) return;

    container.innerHTML = `
        <div class="about-team__container">
            <h2>Nuestro equipo</h2>
            <p>Conoce a las personas detrás del proyecto.</p>
        </div>
    `;
}