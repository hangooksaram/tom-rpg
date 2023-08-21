import { player } from "./object/moving/Player";
import { createEnemyObject } from "./util/createObject";

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
