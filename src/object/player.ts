import { Bullet } from "./bullet";
import { MovingObject } from "./movingObject";
import { Enemy, Position } from "..";
import store, { dispatch } from "../store/store";
import { setPlayerPos } from "../store/playerSlice";
import { decreaseHPBar, initHPBar } from "../ui/player";

export default class Player extends MovingObject {
  private range: number = 100;
  private currentPosition: Position = store.getState().player.position;
  private adjacentEnemy: Enemy | undefined = undefined;
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
    initHPBar(this.id);
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
    this.findadjacentEnemy();

    if (this.adjacentEnemy && !this.isHit) {
      this.hit();
      return;
    }
    dispatch(setPlayerPos({ x, y }));
  }

  hit() {
    this.isHit = true;
    this.health -= 10;
    this.adjacentEnemy = undefined;
    console.log(this.health);
    decreaseHPBar(this.health);
    setTimeout(() => {
      this.isHit = false;
    }, 1000);

    return;
  }

  findadjacentEnemy() {
    this.adjacentEnemy = store
      .getState()
      .enemies.find(
        (e) =>
          Math.abs(e.position.x - this.position.x) < 30 &&
          Math.abs(e.position.y - this.position.y) < 30
      );
  }

  getAdjEnemyPosition(x: number, y: number) {
    return { x, y };
  }
}
