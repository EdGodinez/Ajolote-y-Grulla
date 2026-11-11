import { renderHero } from "./hero.js";
import { renderCarrusel } from "./carrusel.js";
import { renderTeam } from "./team.js";
import { renderTeamCards } from "./presentationcards.js";

export function renderAbout() {
    renderHero();
    renderCarrusel();
    renderTeam();
    renderTeamCards();
}