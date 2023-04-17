import LowMonster from "../enemy/lowMonster";

const initEnemyObject = () => {
  const mon = new LowMonster();
  mon.init("low-monster");
  mon.moveRandomly();
};

export { initEnemyObject };
