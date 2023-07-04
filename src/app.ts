import Player from "./object/player";
import Map from "./map/map";
import LowMonster from "./object/enemy/lowMonster";
import { MovingObject } from "./object/movingObject";
import { createEnemyObject } from "./util/createObject";
import store from "./store/store";
const player = new Player();

setInterval(() => {
  createEnemyObject();
}, 50);
//createEnemyObject();

document.addEventListener("mousedown", (e) => {
  player.move(e.clientX, e.clientY);
});

document.addEventListener("keydown", (e) => {
  const isPlayerMoving = store.getState().player.isMoving;
  if ((e.key.toLowerCase() === "a" || e.key === "ㅁ") && !isPlayerMoving) {
    player.attack();
  }
});
