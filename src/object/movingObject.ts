import { calcHypotenuse, transferToInteger } from "../util/calculate";

const root = document.getElementById("root")!;
const INNER_WIDTH = 1100;
const INNER_HEIGHT = 760;
type Position = {
  x: number;
  y: number;
};
export class MovingObject {
  public el: HTMLDivElement | null = null;
  public position: Position = { x: 0, y: 0 };
  get randomPos() {
    return {
      x: transferToInteger(Math.random() * INNER_WIDTH),
      y: transferToInteger(Math.random() * INNER_HEIGHT),
    };
  }
  constructor() {}

  init(className: string) {
    this.el = document.createElement("div");
    this.el.classList.add(className);
    if (className.includes("monster")) {
      this.setPos(this.randomPos.x, this.randomPos.y);
    } else {
      this.setPos(0, 0);
    }

    root.appendChild(this.el);
  }

  setPos(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
    this.el!.style.top = `${this.position.y}px`;
    this.el!.style.left = `${this.position.x}px`;
  }
  move(nextX: number, nextY: number) {
    const dist = calcHypotenuse(this.position.x, this.position.y, nextX, nextY);
    this.setPos(nextX, nextY);
    if (dist < 450) {
      this.el!.style.transition = `all 0.5s linear`;
    } else {
      this.el!.style.transition = `all 1s linear`;
    }
  }
  scroll() {
    window.scrollTo(this.position.x, this.position.y);
  }
}
