import Enemy from "../object/moving/enemy";
import { enemyStore } from "../store/enemy";
import { mapsStore } from "../store/maps";

export const createLowEnemyObject = () => {
  if (enemyStore.enemiesList.length < 10) {
    const lowEnemy = new Enemy(
      "low-enemy",
      `low-enemy-${new Date().toISOString()}`,
      "low"
    );
    enemyStore.addEnemy(lowEnemy);
    lowEnemy.moveRandomly();
  }
};

export const deleteAllEnemies = () => {
  enemyStore.deleteAllEnemies();
  Array.from(document.getElementsByClassName("low-enemy enemy")).map((el) => {
    document.getElementById(mapsStore.currentMap!.id)?.removeChild(el);
  });
};
