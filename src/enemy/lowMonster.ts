import { MovingObject } from "../object/movingObject";
import { enemyActions } from "../store/enemyStore";
import store from "../store/store";
import { transferToInteger } from "../util/calculate";

const INNER_WIDTH = 1100;
const INNER_HEIGHT = 760;

const { dispatch } = store;
console.log(store);
const { setEnemyPos } = enemyActions;
export default class LowMonster extends MovingObject {
  constructor() {
    super();
  }

  moveRandomly() {
    setInterval(() => {
      const randomX = transferToInteger(Math.random() * INNER_WIDTH);
      const randomY = transferToInteger(Math.random() * INNER_HEIGHT);
      this.move(randomX, randomY);
      dispatch(
        setEnemyPos({
          id: new Date().toISOString(),
          position: {
            x: randomX,
            y: randomY,
          },
        })
      );
    }, 5000);
  }
}
