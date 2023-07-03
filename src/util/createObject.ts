import LowMonster from "../enemy/lowMonster";
import store from "../store/store";

const createEnemyObject = () => {
  if (store.getState().enemies.length < 10) {
    const lowMonster = new LowMonster();
    lowMonster.init("low-monster");
    lowMonster.moveRandomly();
  }
};

export { createEnemyObject };
