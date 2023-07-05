import { Bullet } from "./bullet";
import { MovingObject } from "./movingObject";
import { Position } from "..";
import store, { dispatch } from "../store/store";
import { setPlayerPos } from "../store/playerSlice";

export default class Player extends MovingObject {
  private range: number = 100;
  private currentPosition: Position = store.getState().player.position;
  private cursorPosition: Position = {
    x: 0,
    y: 0,
  };

  init(): void {
    this.setPos({ x: 0, y: 0 });
    document.body.onmousemove = (event) => {
      this.cursorPosition.x = event.clientX;
      this.cursorPosition.y = event.clientY;
    };
  }
  attack() {
    const bullet = new Bullet("bullet", `bullet-${new Date().toISOString()}`);
    bullet.init();
    setTimeout(() => {
      bullet.move(this.cursorPosition.x, this.cursorPosition.y);
    }, 100);
  }

  move(nextX: number, nextY: number): void {
    // store.dispatch(playerActions.setIsPlayerMoving(true));
    super.move(nextX, nextY);
    // store.dispatch(playerActions.setPlayerPos({ x: nextX, y: nextY }));
    // this.el!.addEventListener("transitionend", (e) => {
    //   if (e.propertyName === "top") {
    //     store.dispatch(playerActions.setIsPlayerMoving(false));
    //   }
    // });
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    dispatch(setPlayerPos({ x, y }));
  }

  getAdjEnemyPosition(x: number, y: number) {
    return { x, y };
  }
}
