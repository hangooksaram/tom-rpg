import { MovingObject } from "..";
import { NextPosition, Position } from "../../..";
import { GENERAL_ENEMY_HIT_X_RANGE, GENERAL_ENEMY_HIT_Y_RANGE } from "../../../constants/range";
import { server } from "../../../server/server";
import { enemyStore } from "../../../store/enemy";
import { mapsStore } from "../../../store/maps";

import { randomPos, transferToInteger } from "../../../util/calculate";
import { inventory } from "../../inventory/Inventory";
import { setAddGoldAnimation } from "../../inventory/animation";
import { player } from "../player/Player";
import { EnemyUi } from "./animation";
import { EnemyType, IEnemy } from "./types";

export default class Enemy extends MovingObject {
  public health: number;
  #type: EnemyType;
  #gold:number;
  #ui: EnemyUi = new EnemyUi(this.el);
  #power:number;

  constructor(dependencies:IEnemy) {
    const {className, id, type, gold, health, power, source} = dependencies;
    
    super(className, id, source);
    this.el!.id = id;

    this.el.classList.add("enemy");
    this.#type = type;
    this.health = health!;
    this.#gold = gold;
    this.#power = power;
    

    this.#ui.setHitAnimationContainer();
    this.setPos({
      x: transferToInteger(Math.random() * randomPos().x),
      y: transferToInteger(Math.random() * randomPos().y),
    });

    this.#ui.setHpBar(this.health);
    this.#moveRandomly();
  }

  getPower(){ 
    return this.#power;
  }

  #moveRandomly() {
    setInterval(() => {
      this.move(
        transferToInteger(Math.random() * randomPos().x),
        transferToInteger(Math.random() * randomPos().y)
      );
    }, 10000);
  }

  hit(power: number) {
    super.hit(power);
    this.#ui.decreaseHPBar(this.health);

    if (this.health === 0) {
      this.destroy();
      return;
    }


    this.#ui.setHitAnimation();
  }

  destroy(): void {
    inventory.addGold(this.#gold);
    setAddGoldAnimation(this.id, this.#gold);
    server.saveData();
    this.#ui.setDestroyAnimation();

    setTimeout(()=>{
      document.getElementById(mapsStore.currentMap!.id)!.removeChild(this.el!);
    },1000)
    
    enemyStore.deleteEnemy(this.id!);
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    if (
      Math.abs(this.position.x - player.position.x) < GENERAL_ENEMY_HIT_X_RANGE &&
      Math.abs(this.position.y - player.position.y) < GENERAL_ENEMY_HIT_Y_RANGE
    ) {
      
      player.adjacentEnemy = this;
      if (!player.isHit) player.hit();

      return;
    }
  }
}
