import { Enemy } from "..";
import { MovingObject } from "../object/movingObject";
import { addEnemy, setEnemyPos } from "../store/enemySlice";
import store from "../store/store";
import { initHPBar } from "../ui/enemy";
import { transferToInteger } from "../util/calculate";

const INNER_WIDTH = 1100;
const INNER_HEIGHT = 760;

const { dispatch } = store;

export default class LowMonster extends MovingObject {
  private id: string = `low-monster-${new Date().toISOString()}`;
  get randomPos() {
    return {
      x: transferToInteger(Math.random() * INNER_WIDTH),
      y: transferToInteger(Math.random() * INNER_HEIGHT),
    };
  }

  constructor() {
    super();
  }

  init(className: string): void {
    super.init(className);
    const newEnemyId = this.id;
    const randomX = transferToInteger(Math.random() * INNER_WIDTH);
    const randomY = transferToInteger(Math.random() * INNER_HEIGHT);
    this.setPos(randomX, randomY);
    this.el!.id = newEnemyId;
    Object.assign(this.el!.style, {
      display: "flex",
      justifyContent: "center",
    });
    initHPBar(newEnemyId);
    const newEnemy: Enemy = {
      id: newEnemyId,
      position: this.position,
      health: 30,
      isHit: false,
    };
    store.dispatch(addEnemy(newEnemy));
  }

  moveRandomly() {
    setInterval(() => {
      const randomX = transferToInteger(Math.random() * INNER_WIDTH);
      const randomY = transferToInteger(Math.random() * INNER_HEIGHT);
      this.move(randomX, randomY);
    }, 10000);
  }

  setPos(x: number, y: number): void {
    super.setPos(x, y);
    dispatch(
      setEnemyPos({
        id: this.id,
        position: {
          x,
          y,
        },
      })
    );
  }
}
