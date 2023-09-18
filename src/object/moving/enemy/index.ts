import { MovingObject } from "..";
import { randomPos, transferToInteger } from "../../../util/calculate";
import { enemyStore } from "../../../store/enemy";
import { Position } from "../../..";
import { player } from "../Player";
import { inventory } from "../../inventory";
import { setAddGoldAnimation } from "../../../ui/item";
import { EnemyUi } from "../../../ui/enemy";

export type EnemyType = "low" | "high";

export default class Enemy extends MovingObject {
  public health: number = 50;
  #type: EnemyType;
  #ui: EnemyUi = new EnemyUi(this.el);

  constructor(className: string, id: string, type: EnemyType) {
    super(className, id);
    this.el!.id = id;

    this.el.classList.add("enemy");
    this.#type = type;

    this.#ui.setHitAnimationContainer();
    this.setPos({
      x: transferToInteger(Math.random() * randomPos().x),
      y: transferToInteger(Math.random() * randomPos().y),
    });

    this.#ui.setHpBar(this.health);
  }

  moveRandomly() {
    setInterval(() => {
      this.move(
        transferToInteger(Math.random() * randomPos().x),
        transferToInteger(Math.random() * randomPos().y)
      );
    }, 10000);
  }

  hit(power: number) {
    super.hit(power);
    this.#ui.decreaseHPBar(this.health);
    if (this.health === 0) {
      this.destroy();
      return;
    }

    this.#ui.setHitAnimation();
  }

  destroy(): void {
    inventory.addGold(20);
    setAddGoldAnimation(this.id, 20);
    this.#ui.setDestoryAnimation();
    setTimeout(() => {
      super.destroy();
    }, 1000);

    enemyStore.deleteEnemy(this.id!);
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    if (
      Math.abs(this.position.x - player.position.x) < 30 &&
      Math.abs(this.position.y - player.position.y) < 30
    ) {
      player.adjacentEnemy = this;
      player.hit();
    }
  }
}
