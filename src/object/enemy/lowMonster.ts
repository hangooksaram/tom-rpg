import { Enemy, Position } from "../..";
import { MovingObject } from "../movingObject";
import { addEnemy, setEnemyPos } from "../../store/enemySlice";
import store from "../../store/store";
import { initHPBar } from "../../ui/enemy";
import { randomPos, transferToInteger } from "../../util/calculate";

const { dispatch } = store;

export default class LowMonster extends MovingObject {
  init(): void {
    const newEnemyId = this.id;
    const randomX = transferToInteger(Math.random() * randomPos().x);
    const randomY = transferToInteger(Math.random() * randomPos().y);
    this.setPos({ x: randomX, y: randomY });
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
      const randomX = transferToInteger(Math.random() * randomPos().x);
      const randomY = transferToInteger(Math.random() * randomPos().y);
      this.move(randomX, randomY);
    }, 10000);
  }

  setPos(position: Position): void {
    super.setPos(position);
    dispatch(
      setEnemyPos({
        id: this.id,
        position,
      })
    );
  }
}
