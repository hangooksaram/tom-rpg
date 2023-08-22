import { ObjectId } from "..";
import { enemyStore } from "../store/enemy";

const initHPBar = (id: ObjectId) => {
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

const decreaseHPBar = (id: ObjectId) => {
  const enemy = enemyStore.enemiesList.find((e) => e.id === id);
  const hpBar = document.getElementById(`${id}-hp-bar`);

  hpBar!.style.width = `${enemy?.health}px`;
};

export { initHPBar, decreaseHPBar };
