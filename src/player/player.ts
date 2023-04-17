import LowMonster from "../enemy/lowMonster";
import { Bullet } from "../object/bullet";
import { MovingObject } from "../object/movingObject";
import store from "../store/store";
import { calcHypotenuse } from "../util/calculate";

export default class Player extends MovingObject {
  private range: number = 100;
  constructor() {
    super();
    this.init("player");
  }
  attack() {
    const { getState } = store;
    const { enemy } = getState();
    const bullet = new Bullet();
    bullet.init(`bullet`);
    let min = 999999;
    let adjustEnemy;
    let adjustEnemyId = "";
    enemy.map((e) => {
      const dist = calcHypotenuse(
        this.position.x,
        this.position.y,
        e.position.x,
        e.position.y
      );
      if (min > dist) {
        adjustEnemyId = e.id;
        min = dist;
      }
    });

    adjustEnemy = enemy.find((e) => e.id === adjustEnemyId);
    bullet.move(adjustEnemy!.position.x, adjustEnemy!.position.y);
  }

  getAdjEnemyPosition(x: number, y: number) {
    return { x, y };
  }
}
