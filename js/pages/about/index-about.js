import { renderHero } from "./hero.js";
import { renderCarrusel } from "./carrusel.js";
import { renderTeam } from "./team.js";

export function renderAbout() {
    renderHero();
    renderCarrusel();
    renderTeam();
}