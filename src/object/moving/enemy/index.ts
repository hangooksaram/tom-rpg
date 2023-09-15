import { MovingObject } from "..";
import {
  decreaseHPBar,
  setHpBar,
  setDestoryAnimation,
  setHitAnimation,
  setHitAnimationContainer,
} from "../../../ui/enemy";
import { randomPos, transferToInteger } from "../../../util/calculate";
import { enemyStore } from "../../../store/enemy";
import { Position } from "../../..";
import { player } from "../Player";
import { storage } from "../../item/Storage";
import { setAddGoldAnimation } from "../../../ui/item";

export type EnemyType = "low" | "high";

export default class Enemy extends MovingObject {
  public health: number = 50;
  public power: number = 10;
  public type: EnemyType;

  constructor(className: string, id: string, type: EnemyType) {
    super(className, id);
    this.el!.id = id;
    this.el.classList.add("enemy");
    this.type = type;
    setHitAnimationContainer(this.el);
    this.setPos({
      x: transferToInteger(Math.random() * randomPos().x),
      y: transferToInteger(Math.random() * randomPos().y),
    });

    setHpBar(id);
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
    if (this.health <= 0) {
      this.destroy(id);
      return;
    }

    this.health -= this.power;
    decreaseHPBar(id);
    setHitAnimation(id);
  }

  destroy(id?: string | undefined): void {
    storage.addGold(20);
    setAddGoldAnimation(this.id, 20);
    // setDestoryAnimation(this.el);
    setTimeout(() => {
      super.destroy();
    }, 2000);

    enemyStore.deleteEnemy(id!);
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
