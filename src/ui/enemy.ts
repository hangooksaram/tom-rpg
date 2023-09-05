import { ObjectId } from "..";
import { enemyStore } from "../store/enemy";

export const initHPBar = (id: ObjectId) => {
  const enemyState = enemyStore.enemiesList.find((e) => e.id === id);
  const enemy = document.getElementById(id);
  const hpBarEl = document.createElement("div") as HTMLDivElement;
  hpBarEl.id = `${id}-hp-bar`;
  enemy!.appendChild(hpBarEl);
  const hpBarStyle = {
    width: `${enemyState?.health}px`,
    height: "10px",
    backgroundColor: "red",
  };
  Object.assign(hpBarEl.style, hpBarStyle);
};

export const decreaseHPBar = (id: ObjectId) => {
  const enemy = enemyStore.enemiesList.find((e) => e.id === id);
  const hpBar = document.getElementById(`${id}-hp-bar`);

  hpBar!.style.width = `${enemy?.health}px`;
};

export const setHitAnimation = (id: string) => {
  const hitAnimation = document.createElement("div");

  hitAnimation.classList.add("bullet-hit");

  const enemey = document
    .getElementById(`hit-animation-container-${id}`)!
    .appendChild(hitAnimation);

  setTimeout(() => {
    document.getElementById(id)?.removeChild(hitAnimation);
  }, 1000);
};
