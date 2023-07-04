import { Bullet } from "../object/bullet";
import { MovingObject } from "../object/movingObject";
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
  constructor() {
    super();
    this.init("player");
    this.setPos(0, 0);
  }

  init(className: string): void {
    super.init(className);
    document.body.onmousemove = (event) => {
      this.cursorPosition.x = event.clientX;
      this.cursorPosition.y = event.clientY;
    };
  }
  attack() {
    const { x, y } = store.getState().player.position;
    const bullet = new Bullet();
    bullet.init("bullet");
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

  setPos(x: number, y: number): void {
    super.setPos(x, y);
    dispatch(setPlayerPos({ x, y }));
  }

  getAdjEnemyPosition(x: number, y: number) {
    return { x, y };
  }
}
