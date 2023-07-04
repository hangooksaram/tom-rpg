import { Position } from "..";
import { calcHypotenuse } from "../util/calculate";
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

  move(nextX: number, nextY: number) {
    const distance = calcHypotenuse(
      this.position.x,
      this.position.y,
      nextX,
      nextY
    );

    const xSpeed = (Math.abs(nextX - this.position.x) / distance) * 10;
    const ySpeed = (Math.abs(nextY - this.position.y) / distance) * 10;
    requestAnimationFrame(() => {
      this.trans(nextX, nextY, xSpeed, ySpeed);
    });
  }

  trans(nextX: number, nextY: number, xSpeed: number, ySpeed: number) {
    if (
      Math.abs(nextX - this.position.x) < 12 &&
      Math.abs(nextY - this.position.y) < 12
    ) {
      this.destroy();
      return;
    }
    if (this.position.x < nextX && this.position.y < nextY) {
      this.position.x += xSpeed;
      this.position.y += ySpeed;
    }
    if (this.position.x < nextX && this.position.y > nextY) {
      this.position.x += xSpeed;
      this.position.y -= ySpeed;
    }
    if (this.position.x > nextX && this.position.y < nextY) {
      this.position.x -= xSpeed;
      this.position.y += ySpeed;
    }
    if (this.position.x > nextX && this.position.y > nextY) {
      this.position.x -= xSpeed;
      this.position.y -= ySpeed;
    }

    this.setPos(this.position.x, this.position.y);
    requestAnimationFrame(() => this.trans(nextX, nextY, xSpeed, ySpeed));
  }
  hit(id?: string) {}
  destroy() {
    this.root.removeChild(this.el!);
  }
}
