import Player from "./player/player";
import Map from "./map/map";
import LowMonster from "./enemy/lowMonster";
import { MovingObject } from "./object/movingObject";
import { initEnemyObject } from "./util/initObject";

const player = new Player();
const movingObject = new MovingObject();

const map = new Map();
const lowMonsters = new LowMonster();

initEnemyObject();

// document.addEventListener("keydown", (e: KeyboardEvent) => {
//   player.move(e.code);
// });

document.addEventListener("mousedown", (e) => {
  player.move(e.clientX, e.clientY);
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key.toLowerCase() === "a") {
    player.attack();
  }
});
