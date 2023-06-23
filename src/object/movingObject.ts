import { calcHypotenuse, transferToInteger } from "../util/calculate";
import { Position } from "..";
import { enemyActions } from "../store/enemyStore";
import store from "../store/store";
export class MovingObject {
  public el: HTMLDivElement | null = null;
  public position: Position = { x: 0, y: 0 };
  public root: HTMLElement = document.getElementById("root")!;
  constructor() {}

  init(className: string) {
    this.el = document.createElement("div");
    this.el.classList.add(className);
    this.root.appendChild(this.el);
  }

  drawAtThePosition() {
    this.el!.style.top = `${this.position.y}px`;
    this.el!.style.left = `${this.position.x}px`;
  }

  setPos(x: number, y: number) {
    this.position = { ...this.position, x, y };
    this.drawAtThePosition();
  }

  newMove(nextX: number, nextY: number) {
    console.log(this.position);
    if (this.position.x === nextX && this.position.y === nextY) {
      return;
    }
    if (this.position.x <= nextX && this.position.y <= nextY) {
      this.setPos(
        this.position.x < nextX ? this.position.x + 1 : this.position.x,
        this.position.y < nextY ? this.position.y + 1 : this.position.y
      );
      requestAnimationFrame(() => this.newMove(nextX, nextY));
    }
    if (this.position.x <= nextX && this.position.y >= nextY) {
      this.setPos(
        this.position.x < nextX ? this.position.x + 1 : this.position.x,
        this.position.y > nextY ? this.position.y - 1 : this.position.y
      );
      requestAnimationFrame(() => this.newMove(nextX, nextY));
    }
    if (this.position.x >= nextX && this.position.y <= nextY) {
      this.setPos(
        this.position.x > nextX ? this.position.x - 1 : this.position.x,
        this.position.y < nextY ? this.position.y + 1 : this.position.y
      );
      requestAnimationFrame(() => this.newMove(nextX, nextY));
    }
    if (this.position.x >= nextX && this.position.y >= nextY) {
      this.setPos(
        this.position.x > nextX ? this.position.x - 1 : this.position.x,
        this.position.y > nextY ? this.position.y - 1 : this.position.y
      );
      requestAnimationFrame(() => this.newMove(nextX, nextY));
    }
  }

  move(nextX: number, nextY: number) {
    if (this.position.x < nextX && this.position.y < nextY) {
      while (this.position.x < nextX || this.position.y < nextY) {
        this.setPos(
          this.position.x < nextX ? this.position.x + 1 : this.position.x,
          this.position.y < nextY ? this.position.y + 1 : this.position.y
        );
      }
    }
    if (this.position.x < nextX && this.position.y > nextY) {
      while (this.position.x < nextX || this.position.y > nextY) {
        this.setPos(
          this.position.x < nextX ? this.position.x + 1 : this.position.x,
          this.position.y > nextY ? this.position.y - 1 : this.position.y
        );
      }
    }
    if (this.position.x > nextX && this.position.y < nextY) {
      while (this.position.x > nextX || this.position.y < nextY) {
        this.setPos(
          this.position.x > nextX ? this.position.x - 1 : this.position.x,
          this.position.y < nextY ? this.position.y + 1 : this.position.y
        );
      }
    }
    if (this.position.x > nextX && this.position.y > nextY) {
      while (this.position.x > nextX || this.position.y > nextY) {
        this.setPos(
          this.position.x > nextX ? this.position.x - 1 : this.position.x,
          this.position.y > nextY ? this.position.y - 1 : this.position.y
        );
      }
    }
  }
  hit(id?: string) {}
  destroy() {
    this.root.removeChild(this.el!);
  }
}
