import { ObjectId } from '..';
import { player } from '../object/moving/player/Player';
import Enemy from '../object/moving/enemy/Enemy';

export class EnemyStore {
  private static instance: EnemyStore;
  public enemies: Enemy[] = [];
  public static getInstance() {
    if (!EnemyStore.instance) {
      EnemyStore.instance = new EnemyStore();
    }
    return EnemyStore.instance;
  }

  get enemiesList() {
    return this.enemies;
  }

  addEnemy(enemyClass: Enemy) {
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
