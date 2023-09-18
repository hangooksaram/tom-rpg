import { Position } from "../..";
import { MovingObject } from ".";
import { player } from "./Player";
import { enemyStore } from "../../store/enemy";
import Enemy from "./enemy";

export class Bullet extends MovingObject {
  #targetEnemy: Enemy | undefined = undefined;
  constructor(className: string, id: string, power: number) {
    super(className, id);
    this.power = power;
  }
  init(): void {
    const playerPos = player.position;
    this.setPos({ x: playerPos.x, y: playerPos.y });
  }

  setPos(position: Position): void {
    super.setPos(position);
    this.findTargetEnemy();

    if (this.#targetEnemy && !this.isHit) {
      this.#hitEnemy();
      return;
    }
  }

  #hitEnemy() {
    this.destroy();
    this.isHit = true;
    this.#targetEnemy!.hit(this.power);
    this.#targetEnemy = undefined;

    return;
  }

  findTargetEnemy() {
    this.#targetEnemy = enemyStore.enemiesList.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < 30 &&
        Math.abs(e.position.y - this.position.y) < 30
    );
  }

  transfer() {
    super.transfer();
    const { nextX, nextY } = this.nextPosition!;
    if (
      Math.abs(nextX - this.position.x) < 10 &&
      Math.abs(nextY - this.position.y) < 10
    ) {
      this.destroy();
    }
  }
}
