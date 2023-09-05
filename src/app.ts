import Map from "./object/map";
import { player } from "./object/moving/Player";
import { mapsStore } from "./store/maps";
import { gameUi } from "./ui/game";
import { createEnemyObject } from "./util/object";
import { mapId } from "./util/generateRandomId";
import { clickedTarget } from "./ui/clikedTarget";
import { getPlayerData, savePlayerData } from "./util/data";

const initialMap = new Map(mapId());
mapsStore.addMap(initialMap);
mapsStore.setCurrentMap(initialMap.id);
document.getElementById("save")?.addEventListener("click", savePlayerData);
setInterval(() => {
  createEnemyObject();
}, 50);
//createEnemyObject();
player.init();

document.addEventListener("mousedown", (e) => {
  if (!mapsStore.isChanging) {
    player.move(e.clientX, e.clientY);
    clickedTarget({ x: e.clientX, y: e.clientY });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a" || e.key === "ㅁ") {
    player.attack();
  }
});
