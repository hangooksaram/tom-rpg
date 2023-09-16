import { ObjectId } from "..";
import { enemyStore } from "../store/enemy";

export class EnemyUi {
  public el: HTMLDivElement;

  constructor(el: HTMLDivElement) {
    this.el = el;
  }

  setHpBar(health: number) {
    const hpBarEl = document.createElement("div") as HTMLDivElement;
    hpBarEl.id = `${this.el.id}-hp-bar`;
    this.el!.appendChild(hpBarEl);
    const hpBarStyle = {
      width: `${health}px`,
      height: "10px",
      backgroundColor: "red",
    };
    Object.assign(hpBarEl.style, hpBarStyle);
  }

  decreaseHPBar(health: number) {
    const hpBar = document.getElementById(`${this.el.id}-hp-bar`);
    hpBar!.style.width = `${health}px`;
  }

  setHitAnimation() {
    const hitAnimation = document.createElement("div");
    hitAnimation.classList.add("bullet-hit");
    setTimeout(() => {
      document.getElementById(this.el.id)?.removeChild(hitAnimation);
    }, 1000);
    document.getElementById(this.el.id)?.appendChild(hitAnimation);
  }

  setDestoryAnimation() {
    this.el.classList.add("enemy-destroyed");
  }

  setHitAnimationContainer() {
    const hitAnimationContainer = document.createElement("div");
    hitAnimationContainer.id = `hit-animation-container-${this.el!.id}`;
    Object.assign(hitAnimationContainer.style, {
      ...hitAnimationContainer.style,
      position: "relative",
      width: "100%",
      height: "100%",
    });
    this.el.appendChild(hitAnimationContainer);
  }
}
