import { Bullet } from "./bullet";
import { MovingObject } from "./movingObject";
import { Enemy, Position } from "..";
import store, { dispatch } from "../store/store";
import { playerUi } from "../ui/player";
import { gameUi } from "../ui/game";

export default class Player extends MovingObject {
  private static instance: Player;

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player("player", "player");
    }
    return Player.instance;
  }

  private adjacentEnemy: Enemy | undefined = undefined;
  public maxHealth: number = 150;
  public health: number = 150;
  public power: number = 10;
  public maxMana: number = 100;
  public mana: number = 100;
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
    const bullet = new Bullet(
      "bullet",
      `bullet-${new Date().toISOString()}`,
      this.power
    );
    bullet.init();
    setTimeout(() => {
      bullet.move(this.cursorPosition.x, this.cursorPosition.y);
    }, 100);
  }

  move(nextX: number, nextY: number): void {
    if (
      nextX < gameUi.viewport.horizontal - 20 &&
      nextY < gameUi.viewport.vertical - 20
    )
      super.move(nextX, nextY);
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    this.findadjacentEnemy();

    if (this.adjacentEnemy && !this.isHit) {
      this.hit();
      return;
    }
  }

  hit() {
    this.isHit = true;
    const enemyPower = this.adjacentEnemy!.power;

    this.health -= enemyPower;

    playerUi.setHpStatus();
    setTimeout(() => {
      this.isHit = false;
    }, 1000);
    this.adjacentEnemy = undefined;
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
}

const player = Player.getInstance();

export { player };
