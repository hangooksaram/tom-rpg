import Enemy, { EnemyType } from "../object/moving/enemy/Enemy";
import { enemyStore } from "../store/enemy";
import { mapsStore } from "../store/maps";

export const createEnemies = (type: EnemyType) => {
  const repeater = setInterval(() => {
    if (enemyStore.enemiesList.length === 10) {
      return;
    }

    createEnemy(type);
  }, 50);
};

export const reaeatCreateEnemy = (type: EnemyType) => {
  const repeater = setInterval(() => {
    if (enemyStore.enemiesList.length === 10) {
      clearInterval(repeater);
      return;
    }

    createEnemy(type);
  }, 50);
};

export const createEnemy = (type: EnemyType) => {
  const enemy = new Enemy(
    `${type}-enemy`,
    `${type}-enemy-${new Date().toISOString()}`,
    type
  );
  enemyStore.addEnemy(enemy);
};

export const deleteAllEnemies = () => {
  enemyStore.deleteAllEnemies();
  Array.from(document.getElementsByClassName("low-enemy enemy")).map((el) => {
    document.getElementById(mapsStore.currentMap!.id)?.removeChild(el);
  });
};
