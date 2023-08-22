import LowMonster from "../object/moving/enemy/LowMonster";
import { enemyStore } from "../store/enemy";

const createEnemyObject = () => {
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

export { createEnemyObject };
