import { Enemy, Position } from "..";
import { deleteEnemy, hit } from "../store/enemySlice";
import store from "../store/store";
import { decreaseHPBar } from "../ui/enemy";
import { MovingObject } from "./movingObject";

export class Bullet extends MovingObject {
  private targetEnemy: Enemy | undefined = undefined;
  private isHit: boolean = false;
  constructor() {
    super();
  }
  init(className: string): void {
    super.init(className);
    this.el!.id = `bullet-${new Date().toISOString()}`;
    const playerPos = store.getState().player.position;
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
      store.dispatch(hit({ id }));
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
    this.root.removeChild(document.getElementById(id!)!);
    store.dispatch(deleteEnemy({ id }));
  }
}
