import LowMonster from "../object/moving/enemy/LowMonster";
import { enemyStore } from "../store/enemy";
import { mapsStore } from "../store/maps";

export const createEnemyObject = () => {
  if (enemyStore.enemiesList.length < 10) {
    const lowMonster = new LowMonster(
      "low-monster",
      `low-monster-${new Date().toISOString()}`
    );
    enemyStore.addEnemy(lowMonster);

    lowMonster.init();
    lowMonster.moveRandomly();
  }
};

export const deleteAllEnemies = () => {
  enemyStore.deleteAllEnemies();
  Array.from(document.getElementsByClassName("low-monster")).map((el) => {
    console.log(el);
    document.getElementById(mapsStore.currentMap!.id)?.removeChild(el);
  });
};
