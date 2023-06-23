import { Enemy } from "..";
import { enemyActions } from "../store/enemyStore";
import { playerActions } from "../store/playerStore";
import store from "../store/store";
import { decreaseHPBar } from "../ui/enemy";
import { MovingObject } from "./movingObject";

export class Bullet extends MovingObject {
  private targetEnemy: Enemy | undefined = undefined;
  public speed: number = 20;
  constructor() {
    super();
  }
  init(className: string): void {
    super.init(className);
    this.el!.id = `bullet-${new Date().toISOString()}`;
    const playerPos = store.getState().player.position;
    this.position.x = playerPos.x;
    this.position.y = playerPos.y;
    this.drawAtThePosition();
  }

  setPos(x: number, y: number): void {
    super.setPos(x, y);
  }

  fire(nextX: number, nextY: number) {
    if (
      Math.abs(this.position.x - nextX) < 20 &&
      Math.abs(this.position.y - nextY) < 20
    ) {
      setTimeout(() => {
        this.destroy();
      }, 500);

      return; // 목표 위치에 도달하면 업데이트 종료
    }

    if (this.position.x < nextX) {
      this.position.x += this.speed; // 오른쪽으로 이동
    } else if (this.position.x > nextX) {
      this.position.x -= this.speed; // 왼쪽으로 이동
    }

    // y 좌표 이동
    if (this.position.y < nextY) {
      this.position.y += this.speed; // 아래로 이동
    } else if (this.position.y > nextY) {
      this.position.y -= this.speed; // 위로 이동
    }
    this.findTargetEnemy();
    if (this.targetEnemy && !this.targetEnemy?.isHit) {
      this.hit(this.targetEnemy.id);
      this.destroy();
    }
    this.drawAtThePosition();

    // 다음 프레임 요청

    requestAnimationFrame(() => this.fire(nextX, nextY));
  }

  move(nextX: number, nextY: number): void {
    super.move(nextX, nextY);
    this.el!.addEventListener("transitionend", (e) => {
      if (e.propertyName === "top") {
        if (document.getElementById(this.el!.id)) {
          this.destroy();
        }
      }
    });
  }

  hit(id: string) {
    const enemy = store.getState().enemy.find((e) => e.id === id);
    if (enemy!.health > 10) {
      store.dispatch(enemyActions.hit({ id }));
      decreaseHPBar(id);
    } else {
      this.deleteEnemy(id);
    }
    setTimeout(() => {
      store.dispatch(enemyActions.afterHit({ id }));
    }, 100);
  }
  deleteEnemy(id?: string | undefined): void {
    this.root.removeChild(document.getElementById(id!)!);
    store.dispatch(enemyActions.deleteEnemy({ id }));
  }

  findTargetEnemy() {
    this.targetEnemy = undefined;
    const enemey: Enemy[] = store.getState().enemy;
    this.targetEnemy = enemey.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < 20 &&
        Math.abs(e.position.y - this.position.y) < 20
    );
  }
}
