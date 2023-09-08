import { player } from "../object/moving/Player";
export const setHpStatus = () => {
  (document.getElementsByClassName(
    "player-hp"
  )[0] as HTMLDivElement)!.style.height = `${
    (player.health / player.maxHealth) * 150
  }px`;
};

export const setHitAnimation = (el: HTMLElement) => {
  el.classList.add("hit");

  setTimeout(() => {
    el.classList.remove("hit");
  }, 1000);
};

export const showHitDamage = (el: HTMLElement, damage: number) => {
  const damageEl = document.createElement("div");
  if (el.id.includes("player")) {
    damageEl.classList.add("player-hit-damage");
  }
  damageEl.innerHTML = damage.toString();
  el!.appendChild(damageEl);
  setTimeout(() => {
    el.removeChild(damageEl);
  }, 1000);
};
