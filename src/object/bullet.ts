import { Enemy, Position } from "..";
import { deleteEnemy, hit } from "../store/enemySlice";
import store from "../store/store";
import { decreaseHPBar } from "../ui/enemy";
import { MovingObject } from "./movingObject";
import { player } from "./player";

export class Bullet extends MovingObject {
  private targetEnemy: Enemy | undefined = undefined;
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
      store.dispatch(hit({ id, power: this.power }));
      decreaseHPBar(id);
    } else {
      this.deleteEnemy(id);
    }

    this.targetEnemy = undefined;
    return;
  }

  findTargetEnemy() {
    this.targetEnemy = store
      .getState()
      .enemies.find(
        (e) =>
          Math.abs(e.position.x - this.position.x) < 30 &&
          Math.abs(e.position.y - this.position.y) < 30
      );
  }

  deleteEnemy(id?: string | undefined): void {
    document.getElementById("root")!.removeChild(document.getElementById(id!)!);
    store.dispatch(deleteEnemy({ id }));
  }
}
