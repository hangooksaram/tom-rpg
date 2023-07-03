import { Enemy } from "..";
import { addEnemy, afterHit, deleteEnemy, hit } from "../store/enemyStore";
import store, { enemies, player } from "../store/store";
import { decreaseHPBar } from "../ui/enemy";
import { MovingObject } from "./movingObject";

export class Bullet extends MovingObject {
  private targetEnemy: Enemy | undefined = undefined;
  public speed: number = 1;
  constructor() {
    super();
  }
  init(className: string): void {
    super.init(className);
    this.el!.id = `bullet-${new Date().toISOString()}`;
    const playerPos = player.position;
    addEnemy({
      id: this.el!.id,
      position: this.position,
      health: 30,
      isHit: false,
    });
    this.position = { x: playerPos.x, y: playerPos.y };
    this.drawAtThePosition();
    this.el!.addEventListener("transitionend", (e) => {
      if (e.propertyName === "top") {
        if (document.getElementById(this.el!.id)) {
          this.destroy();
        }
      }
    });
  }

  fire(nextX: number, nextY: number) {
    if (
      Math.abs(this.position.x - nextX) < 20 &&
      Math.abs(this.position.y - nextY) < 20
    ) {
      this.destroy();

      return; // 목표 위치에 도달하면 업데이트 종료
    }

    if (this.position.x < nextX && this.position.y < nextY) {
      this.setPos(
        this.position.x < nextX ? this.position.x + 1 : this.position.x,
        this.position.y < nextY ? this.position.y + 1 : this.position.y
      );
    }
    if (this.position.x < nextX && this.position.y > nextY) {
      this.setPos(
        this.position.x < nextX ? this.position.x + 1 : this.position.x,
        this.position.y > nextY ? this.position.y - 1 : this.position.y
      );
    }
    if (this.position.x > nextX && this.position.y < nextY) {
      this.setPos(
        this.position.x > nextX ? this.position.x - 1 : this.position.x,
        this.position.y < nextY ? this.position.y + 1 : this.position.y
      );
    }
    if (this.position.x > nextX && this.position.y > nextY) {
      this.setPos(
        this.position.x > nextX ? this.position.x - 1 : this.position.x,
        this.position.y > nextY ? this.position.y - 1 : this.position.y
      );
    }

    // if (x < nextX) {
    //   this.position.x += this.speed;
    // } else if (this.position.x > nextX) {
    //   this.position.x -= this.speed;
    // }

    // if (y < nextY) {
    //   this.position.y += this.speed;
    // } else if (this.position.y > nextY) {
    //   this.position.y -= this.speed;
    // }
    this.findTargetEnemy();
    if (this.targetEnemy && !this.targetEnemy?.isHit) {
      this.hit(this.targetEnemy.id);
      this.destroy();
    } else this.drawAtThePosition();

    // 다음 프레임 요청

    requestAnimationFrame(() => this.fire(nextX, nextY));
  }

  move(nextX: number, nextY: number): void {
    super.move(nextX, nextY);
    this.findTargetEnemy();
    if (this.targetEnemy) {
      this.hit(this.targetEnemy.id);
    }
  }

  hit(id: string) {
    const enemy = enemies.find((e) => e.id === id);
    if (enemy!.health > 10) {
      store.dispatch(hit({ id }));
      decreaseHPBar(id);
    } else {
      this.deleteEnemy(id);
    }
    setTimeout(() => {
      store.dispatch(afterHit({ id }));
    }, 100);
  }
  deleteEnemy(id?: string | undefined): void {
    this.root.removeChild(document.getElementById(id!)!);
    store.dispatch(deleteEnemy({ id }));
  }

  findTargetEnemy() {
    this.targetEnemy = undefined;
    this.targetEnemy = enemies.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < 20 &&
        Math.abs(e.position.y - this.position.y) < 20
    );
  }
}
