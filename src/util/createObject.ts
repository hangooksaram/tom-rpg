import LowMonster from "../enemy/lowMonster";
import store, { enemies } from "../store/store";

const createEnemyObject = () => {
  if (enemies.length < 10) {
    const lowMonster = new LowMonster();
    lowMonster.init("low-monster");
    lowMonster.moveRandomly();
  }
};

export { createEnemyObject };
