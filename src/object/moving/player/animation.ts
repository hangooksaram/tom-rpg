import { Position } from "../../..";
import { player } from "./Player";

export class PlayerUi {
  public el: HTMLDivElement;

  constructor(el: HTMLDivElement) {
    this.el = el;
  }

  setHpStatus() {
    (document.getElementsByClassName(
      "player-hp"
    )[0] as HTMLDivElement)!.style.height = `${
      (player.health / player.maxHealth) * 150
    }px`;
  }

  setHitAnimation() {
    this.el.classList.add("hit");

    setTimeout(() => {
      this.el.classList.remove("hit");
    }, 1000);
  }

  showHitDamage(damage: number) {
    const damageEl = document.createElement("div");
    if (this.el.id.includes("player")) {
      damageEl.classList.add("player-hit-damage");
    }
    damageEl.innerHTML = damage.toString();
    this.el!.appendChild(damageEl);
    setTimeout(() => {
      this.el.removeChild(damageEl);
    }, 1000);
  }
}

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
