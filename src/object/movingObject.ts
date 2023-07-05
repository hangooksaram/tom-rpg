import { Position, Speed, TargetPosition } from "..";
import { calcHypotenuse } from "../util/calculate";
export class MovingObject {
  public el: HTMLDivElement | null = null;
  public position: Position = { x: 0, y: 0 };
  public targetPosition: TargetPosition = null;
  public speed: Speed = { xSpeed: 0, ySpeed: 0 };
  public root: HTMLElement = document.getElementById("root")!;
  constructor() {}

  init(className: string) {
    this.el = document.createElement("div");
    this.el.classList.add(className);
    this.root.appendChild(this.el);
  }

  setPos({ x, y }: Position) {
    this.position = { ...this.position, x, y };
    this.el!.style.top = `${y}px`;
    this.el!.style.left = `${x}px`;
  }

  move(nextX: number, nextY: number) {
    this.targetPosition = { nextX, nextY };
    const distance = calcHypotenuse(
      this.position.x,
      this.position.y,
      nextX,
      nextY
    );
    this.speed = {
      xSpeed: (Math.abs(nextX - this.position.x) / distance) * 10,
      ySpeed: (Math.abs(nextY - this.position.y) / distance) * 10,
    };

    requestAnimationFrame(() => {
      this.transfer();
    });
  }

  transfer() {
    const { nextX, nextY } = this.targetPosition!;
    const { xSpeed, ySpeed } = this.speed;

    if (
      Math.abs(nextX - this.position.x) < 10 &&
      Math.abs(nextY - this.position.y) < 10
    ) {
      this.arriveAtTarget();
    }

    const { x, y } = this.position;
    let newPosition: Position = { x, y };
    if (this.position.x < nextX && this.position.y < nextY) {
      newPosition = {
        x: x + xSpeed,
        y: y + ySpeed,
      };
    }
    if (this.position.x < nextX && this.position.y > nextY) {
      newPosition = {
        x: x + xSpeed,
        y: y - ySpeed,
      };
    }
    if (this.position.x > nextX && this.position.y < nextY) {
      newPosition = {
        x: x - xSpeed,
        y: y + ySpeed,
      };
    }
    if (this.position.x > nextX && this.position.y > nextY) {
      newPosition = {
        x: x - xSpeed,
        y: y - ySpeed,
      };
    }

    this.setPos(newPosition);
    requestAnimationFrame(() => this.transfer());
  }

  arriveAtTarget() {
    return;
  }
  hit(id?: string) {}
  destroy() {
    this.root.removeChild(this.el!);
  }
}
