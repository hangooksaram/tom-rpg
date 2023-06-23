import LowMonster from "../enemy/lowMonster";
import store from "../store/store";
const { getState } = store;

const createEnemyObject = () => {
  if (getState().enemy.length < 10) {
    const lowMonster = new LowMonster();
    lowMonster.init("low-monster");
    lowMonster.moveRandomly();
  }
};

export { createEnemyObject };
