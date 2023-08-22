import { Enemy, Position } from "../..";
import { decreaseHPBar } from "../../ui/enemy";
import { MovingObject } from ".";
import { player } from "./Player";
import { enemyStore } from "../../store/enemy";
import LowMonster from "./enemy/LowMonster";

export class Bullet extends MovingObject {
  private targetEnemy: LowMonster | undefined = undefined;
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

    if (this.targetEnemy && !this.isHit) {
      this.hit(this.targetEnemy.id);
      return;
    }
  }

  hit(id: string) {
    this.destroy();

    this.isHit = true;
    if (this.targetEnemy!.health > 10) {
      this.targetEnemy!.hit(id);

      decreaseHPBar(id);
    } else {
      this.targetEnemy!.destroy(id);
    }
    this.targetEnemy = undefined;

    return;
  }

  findTargetEnemy() {
    this.targetEnemy = enemyStore.enemiesList.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < 30 &&
        Math.abs(e.position.y - this.position.y) < 30
    );
  }
}
