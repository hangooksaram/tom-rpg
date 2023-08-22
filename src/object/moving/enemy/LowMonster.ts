import { MovingObject } from "..";
import { decreaseHPBar, initHPBar } from "../../../ui/enemy";
import { randomPos, transferToInteger } from "../../../util/calculate";
import { enemyStore } from "../../../store/enemy";

export default class LowMonster extends MovingObject {
  public health: number = 50;
  public power: number = 10;
  init(): void {
    const { id } = this;
    this.el!.id = id;

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

  hit(id: string) {
    if (this.health > 10) {
      this.health -= this.power;
      decreaseHPBar(id);
    } else {
      this.destroy(id);
    }

    return;
  }

  destroy(id?: string | undefined): void {
    super.destroy();
    enemyStore.deleteEnemy(id!);
    console.log(enemyStore.enemiesList);
  }
}
