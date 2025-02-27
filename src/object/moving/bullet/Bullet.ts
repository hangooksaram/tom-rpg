import { Position, Speed } from '../../..';
import { MovingObject } from '..';
import { player } from '../player/Player';
import { enemyStore } from '../../../store/enemy';
import Enemy from '../enemy/Enemy';
import { mapsStore } from '../../../store/maps';

export class Bullet extends MovingObject {
  #targetEnemy: Enemy | undefined = undefined;
  public speed: Speed = { value: 4, xSpeed: 0, ySpeed: 0 };

  constructor(className: string, id: string, power: number) {
    super(className, id, true);
    this.power = power;
  }
  init(): void {
    const playerPos = player.position;
    this.el.style.top = '0px';
    this.el.style.left = '0px';
    this.setPos({ x: playerPos.x, y: playerPos.y });
  }

  destroy(id?: string): void {
    this.el.style.visibility = 'hidden';
  }

  setPos(position: Position): void {
    super.setPos(position);
    this.findTargetEnemy();

    if (this.#targetEnemy && !this.isHit) {
      this.#hitEnemy();
      return;
    }
  }

  #hitEnemy() {
    this.destroy(mapsStore.currentMap!.id);
    this.isHit = true;
    this.#targetEnemy!.hit(this.power);
    this.#targetEnemy = undefined;

    return;
  }

  findTargetEnemy() {
    this.#targetEnemy = enemyStore.enemiesList.find(
      (e) => Math.abs(e.position.x - this.position.x) < 30 && Math.abs(e.position.y - this.position.y) < 30,
    );
  }

  transfer() {
    super.transfer();
    const { nextX, nextY } = this.nextPosition!;
    if (Math.abs(nextX - this.position.x) < 10 && Math.abs(nextY - this.position.y) < 10) {
      this.destroy(mapsStore.currentMap!.id);
    }
  }
}
