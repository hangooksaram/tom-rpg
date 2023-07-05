import LowMonster from "../object/enemy/lowMonster";
import store from "../store/store";

const createEnemyObject = () => {
  if (store.getState().enemies.length < 10) {
    const lowMonster = new LowMonster(
      "low-monster",
      `low-monster-${new Date().toISOString()}`
    );
    lowMonster.init();
    lowMonster.moveRandomly();
  }
};

export { createEnemyObject };
