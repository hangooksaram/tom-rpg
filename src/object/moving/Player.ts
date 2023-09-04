import { Bullet } from "./Bullet";
import { MovingObject } from ".";
import { Enemy, Position } from "../..";
import { playerUi } from "../../ui/player";
import { gameUi } from "../../ui/game";
import { showHitDamage } from "../../ui/movingObject";
import { enemyStore } from "../../store/enemy";
import LowMonster from "./enemy/LowMonster";
import { mapsStore } from "../../store/maps";

export default class Player extends MovingObject {
  private static instance: Player;

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player("player", "player");
    }
    return Player.instance;
  }

  private adjacentEnemy: LowMonster | undefined = undefined;
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
    this.el.classList.add("attack");
    if (this.position.x < this.cursorPosition.x) {
      this.el.classList.add("reverse-direction");
    }

    if (this.position.x > this.cursorPosition.x) {
      this.el.classList.remove("reverse-direction");
    }
    bullet.init();
    setTimeout(() => {
      bullet.move(this.cursorPosition.x, this.cursorPosition.y);
    }, 100);

    setTimeout(() => {
      this.el.classList.remove("attack");
    }, 500);
  }

  move(nextX: number, nextY: number): void {
    if (
      nextX < mapsStore.currentMap!.viewport.horizontal - 20 &&
      nextY < mapsStore.currentMap!.viewport.vertical - 20
    ) {
      this.el.classList.add("move");
      if (this.position.x < nextX) {
        this.el.classList.add("reverse-direction");
      } else if (this.position.x > nextX) {
        this.el.classList.remove("reverse-direction");
      }
      super.move(nextX, nextY);
    }
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
    super.hit();
    this.isHit = true;
    const enemyPower = this.adjacentEnemy!.power;

    this.health -= enemyPower;

    playerUi.setHpStatus();
    showHitDamage(this.el, enemyPower);

    setTimeout(() => {
      this.isHit = false;
    }, 1000);
    this.adjacentEnemy = undefined;
    return;
  }

  findadjacentEnemy() {
    this.adjacentEnemy = enemyStore.enemiesList.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < 30 &&
        Math.abs(e.position.y - this.position.y) < 30
    );
  }

  transfer() {
    const { nextX, nextY } = this.nextPosition!;
    if (
      Math.abs(nextX - this.position.x) < 10 &&
      Math.abs(nextY - this.position.y) < 10
    ) {
      setTimeout(() => {
        this.el.classList.remove("move");
      }, 300);
    }
    super.transfer();
  }
}

const player = Player.getInstance();

export { player };
