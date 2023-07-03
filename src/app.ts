import Player from "./player/player";
import Map from "./map/map";
import LowMonster from "./enemy/lowMonster";
import { MovingObject } from "./object/movingObject";
import { createEnemyObject } from "./util/createObject";
import store from "./store/store";
import { player as playerState } from "./store/store";
const player = new Player();
const movingObject = new MovingObject();

const { getState } = store;
const map = new Map();

setInterval(() => {
  createEnemyObject();
}, 50);
//createEnemyObject();

document.addEventListener("mousedown", (e) => {
  player.move(e.clientX, e.clientY);
});

document.addEventListener("keydown", (e) => {
  const isPlayerMoving = playerState.isMoving;
  if ((e.key.toLowerCase() === "a" || e.key === "ㅁ") && !isPlayerMoving) {
    player.attack();
  }
});
