import { ObjectId } from "..";
import { player } from "../object/moving/Player";
import LowMonster from "../object/moving/enemy/LowMonster";

export class EnemyStore {
  private static instance: EnemyStore;
  private enemies: LowMonster[] = [];
  public static getInstance() {
    if (!EnemyStore.instance) {
      EnemyStore.instance = new EnemyStore();
    }
    return EnemyStore.instance;
  }

  get enemiesList() {
    return this.enemies;
  }

  addEnemy(enemyClass: LowMonster) {
    this.enemies.push(enemyClass);
  }

  deleteEnemy(id: string) {
    this.enemies = this.enemies.filter((enemy) => enemy.id !== id);
  }

  deleteAllEnemies() {
    this.enemies = [];
  }
}

const enemyStore = EnemyStore.getInstance();

export { enemyStore };
