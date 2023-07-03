import { ObjectId } from "..";
import store, { enemies } from "../store/store";

const initHPBar = (id: ObjectId) => {
  const enemy = document.getElementById(id);
  const hpBarEl = document.createElement("div") as HTMLDivElement;
  hpBarEl.id = `${id}-hp-bar`;
  enemy!.appendChild(hpBarEl);
  const hpBarStyle = {
    width: "30px",
    height: "10px",
    backgroundColor: "red",
  };
  Object.assign(hpBarEl.style, hpBarStyle);
};

const decreaseHPBar = (id: ObjectId) => {
  const enemy = enemies.find((e) => e.id === id);
  const hpBar = document.getElementById(`${id}-hp-bar`);

  hpBar!.style.width = `${enemy?.health}px`;
};

export { initHPBar, decreaseHPBar };
