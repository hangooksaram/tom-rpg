import { Enemy, Position } from "../..";
import { MovingObject } from "../movingObject";
import { addEnemy, setEnemyPos } from "../../store/enemySlice";
import store from "../../store/store";
import { initHPBar } from "../../ui/enemy";
import { randomPos, transferToInteger } from "../../util/calculate";

const { dispatch } = store;

export default class LowMonster extends MovingObject {
  public health: number = 50;
  public power: number = 10;
  init(): void {
    const { id } = this;
    store.dispatch(
      addEnemy({
        id,
        type: "lowMonster",
        position: this.position,
        power: this.power,
        health: this.health,
        isHit: false,
      })
    );
    this.el!.id = id;
    Object.assign(this.el!.style, {
      display: "flex",
      justifyContent: "center",
    });

    this.setPos({
      x: transferToInteger(Math.random() * randomPos().x),
      y: transferToInteger(Math.random() * randomPos().y),
    });

    initHPBar(id);
  }

  moveRandomly() {
    setInterval(() => {
      this.move(
        transferToInteger(Math.random() * randomPos().x),
        transferToInteger(Math.random() * randomPos().y)
      );
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
