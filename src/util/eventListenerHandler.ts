import { toggleInventory } from "../object/inventory/animation";
import { player } from "../object/moving/player/Player";
import { setClickTargetAnimation } from "../object/moving/player/animation";
import { savePlayerData } from "../server/data";
import { mapsStore } from "../store/maps";
import { createLowEnemyObject } from "./object";

export const addSaveDataEvent = () => {
  document.getElementById("save")?.addEventListener("click", savePlayerData);
};
export const addInventoryToggleEvent = () => {
  document
    .getElementById("inventory-toggle-btn")
    ?.addEventListener("click", () => {
      toggleInventory();
    });
};

export const addPlayerMoveEvent = () => {
  document
    .getElementById(mapsStore.currentMap?.id!)!
    .addEventListener("mousedown", (e) => {
      if (!mapsStore.isChanging) {
        player.move(e.clientX, e.clientY);
        setClickTargetAnimation({ x: e.clientX, y: e.clientY });
      }
    });
};
export const addPlayerAttackEvent = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "a" || e.key === "ㅁ") {
      player.attack();
    }
  });
};
