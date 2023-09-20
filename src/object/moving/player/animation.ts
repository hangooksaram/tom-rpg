import { Position } from "../../..";
import { player } from "./Player";

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

export const setClickTargetAnimation = (clikedPositon: Position) => {
  const targetEl = document.createElement("div");
  targetEl.style.position = "absolute";
  targetEl.style.zIndex = "999";
  targetEl.style.top = `${clikedPositon.y}px`;
  targetEl.style.left = `${clikedPositon.x}px`;
  targetEl.classList.add("clicked");

  document.getElementById("root")?.appendChild(targetEl);

  setTimeout(() => {
    document.getElementById("root")?.removeChild(targetEl);
  }, 1000);
};
