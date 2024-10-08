import { Bullet } from "../bullet/Bullet";
import { MovingObject } from "..";
import { Position } from "../../..";
import { enemyStore } from "../../../store/enemy";
import { mapsStore } from "../../../store/maps";

import Enemy from "../enemy/Enemy";
import { PlayerUi } from "./animation";
import { server } from "../../../server/server";
import { Modal } from "../../../game/modal";
import { inventory } from "../../inventory/Inventory";
import { decreasedValueByPercent } from "../../../util/calculate";
import { button } from "../../../ui/button";
import { GENERAL_ENEMY_HIT_X_RANGE, GENERAL_ENEMY_HIT_Y_RANGE } from "../../../constants/range";
import { objectSource } from "../../../constants/objectSource";
export default class Player extends MovingObject {
  private static instance: Player;
  public maxHealth: number;
  public mana: number;
  public maxMana: number;
  #ui: PlayerUi = new PlayerUi(this.el);

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player("player", "player",objectSource.PLAYER.PAUSE);
    }
    return Player.instance;
  }

  public adjacentEnemy: Enemy | undefined = undefined;
  #cursorPosition: Position = {
    x: 0,
    y: 0,
  };

  constructor(className: string, id: string, source:string) {
    super(className, id, source);
    
    this.maxHealth = 250;
    this.health = 250;
    this.power = 10;
    this.maxMana = 100;
    this.mana = 100;
  }

  async reInitialize() {
    this.health = this.maxHealth;
    this.#ui.setHpStatus();
    document.getElementById("root")!.appendChild(this.el);
    inventory.setGold(decreasedValueByPercent(inventory.gold, 20));

    await server.saveData();
  }

  async initialize() {
    const res = await server.getServerData();

    if (typeof res !== "string") {
      this.health = res.player.health;
      this.setPos({ x: res.player.position.x, y: res.player.position.y });
      this.maxHealth = res.player.maxHealth;
      this.#ui.setHpStatus();
    } else {
      this.setPos({ x: 0, y: 0 });
    }

    document.body.onmousemove = (event) => {
      this.#cursorPosition.x = event.clientX;
      this.#cursorPosition.y = event.clientY;
    };
  }
  attack() {
    const bullet = new Bullet(
      "bullet",
      `bullet-${new Date().toISOString()}`,
      this.power
    );
    this.el.classList.add("attack");
    if (this.position.x < this.#cursorPosition.x) {
      this.el.classList.add("reverse-direction");
    }

    if (this.position.x > this.#cursorPosition.x) {
      this.el.classList.remove("reverse-direction");
    }
    bullet.init();
    setTimeout(() => {
      bullet.move(this.#cursorPosition.x, this.#cursorPosition.y);
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
      requestAnimationFrame(()=>this.draw());
    }
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    this.findAdjacentEnemy();

    if (this.adjacentEnemy && !this.isHit) {
      this.hit();
      return;
    }
  }

  async hit() {
    const enemyPower = this.adjacentEnemy!.getPower()
    super.hit(enemyPower);
    
    this.isHit = true;

    this.#ui.setHpStatus();
    if (this.health <= 0) {
      this.destroy();
    }
    this.#ui.setHitAnimation();
    this.#ui.showHitDamage(enemyPower);

    setTimeout(() => {
      this.isHit = false;
    }, 1000);
    this.adjacentEnemy = undefined;

    await server.saveData();
    return;
  }

  findAdjacentEnemy() {
    this.adjacentEnemy = enemyStore.enemiesList.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < GENERAL_ENEMY_HIT_X_RANGE &&
        Math.abs(e.position.y - this.position.y) < GENERAL_ENEMY_HIT_Y_RANGE
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

  destroy(): void {
    document.getElementById("root")!.removeChild(this.el!);
    const modal = new Modal();
    modal.setText("사망하셨습니다. 골드가 20% 차감된 상태로 부활합니다");
    const confirm = button("확인", () => {
      modal.hideModal();
      this.reInitialize();
    });
    modal.setButtons([confirm]);
  }

  setAnimation (){
    if(this.el.src.includes(objectSource.PLAYER.PAUSE)){
      this.el.src = objectSource.PLAYER.RUN1;
      return;
    }
    if(this.el.src.includes(objectSource.PLAYER.RUN1)){
      this.el.src = objectSource.PLAYER.RUN2;
      return;
    }
    if(this.el.src.includes(objectSource.PLAYER.RUN2)){
      this.el.src = objectSource.PLAYER.RUN3;
      return;
    }
    if(this.el.src.includes(objectSource.PLAYER.RUN3)){
      this.el.src = objectSource.PLAYER.RUN1;
      return;
    }
  }

  draw(){
    this.clearCanvas();
    
    const { nextX, nextY } = this.nextPosition!;
    const { xSpeed, ySpeed } = this.speed;




    this.drawImage(this.position.x,  this.position.y);
    if (
      Math.abs(this.nextPosition?.nextX! - this.position.x) < 10 &&
      Math.abs(this.nextPosition?.nextY! - this.position.y) < 10
    ) {
      
      return;
    }


    this.setAnimation();
    

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
  
   requestAnimationFrame(()=>this.draw());
  }

  setAnimationInterval () {
    return setInterval(()=>{
      this.el.src = '/public/images/player/run1.png';

      setTimeout(()=>{
        this.el.src = '/public/images/player/run2.png';
      }, 250);
      
      setTimeout(()=>{
        this.el.src = '/public/images/player/run3.png';
      }, 500);
    },1000);
  }
}

const player = Player.getInstance();

export { player };
