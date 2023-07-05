import { ObjectId } from "..";
import store from "../store/store";

const initHPBar = (id: ObjectId) => {
  const player = document.getElementById(id);
  const hpBarEl = document.createElement("div") as HTMLDivElement;
  hpBarEl.id = `${id}-hp-bar`;
  player!.appendChild(hpBarEl);
  const hpBarStyle = {
    width: "100vw",
    height: "10px",
    backgroundColor: "red",
  };
  Object.assign(hpBarEl.style, hpBarStyle);
};

const decreaseHPBar = (health: number) => {
  const hpBar = document.getElementById(`player-hp-bar`);

  hpBar!.style.width = `${health}px`;
};

export { initHPBar, decreaseHPBar };
