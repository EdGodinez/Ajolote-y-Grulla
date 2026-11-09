import { renderHero } from "./hero.js";
import { carouselRendering } from "./carousel.js";
import { renderTeam } from "./team.js";
import { renderTeamCards } from "./presentationcards.js";

export function renderAbout() {
    renderHero();
    carouselRendering();
    renderTeam();
    renderTeamCards();
}