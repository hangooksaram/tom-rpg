import Player, { player } from "./object/player";
import Map from "./map/map";
import LowMonster from "./object/enemy/lowMonster";
import { MovingObject } from "./object/movingObject";
import { createEnemyObject } from "./util/createObject";
import store from "./store/store";

player.init();

setInterval(() => {
  createEnemyObject();
}, 50);
//createEnemyObject();

document.addEventListener("mousedown", (e) => {
  player.move(e.clientX, e.clientY);
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a" || e.key === "ㅁ") {
    player.attack();
  }
});
