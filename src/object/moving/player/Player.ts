import { Bullet } from '../bullet/Bullet';
import { MovingObject } from '..';
import { Position } from '../../..';
import { enemyStore } from '../../../store/enemy';
import { mapsStore } from '../../../store/maps';

import Enemy from '../enemy/Enemy';
import { PlayerUI } from './PlayerUI';
import { server } from '../../../server/server';
import { Modal } from '../../../game/modal';
import { inventory } from '../../../game/inventory/Inventory';
import { decreasedValueByPercent } from '../../../util/calculate';
import { button } from '../../../ui/button';
import { GENERAL_ENEMY_HIT_X_RANGE, GENERAL_ENEMY_HIT_Y_RANGE } from '../../../constants/range';
import { BulletController } from '../bullet/Controller';
export default class Player extends MovingObject {
  private static instance: Player;
  public maxHealth: number;
  public mana: number;
  public maxMana: number;
  private bulletController: BulletController;
  #ui: PlayerUI = new PlayerUI(this.el);

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player('player', 'player');
    }
    return Player.instance;
  }

  public adjacentEnemy: Enemy | undefined = undefined;
  #cursorPosition: Position = {
    x: 0,
    y: 0,
  };

  constructor(className: string, id: string) {
    super(className, id);
    document.getElementById('root')!.appendChild(this.el);
    this.maxHealth = 250;
    this.health = 250;
    this.power = 10;
    this.maxMana = 100;
    this.mana = 100;
    this.speed = { value: 2, xSpeed: 0, ySpeed: 0 };
    this.bulletController = new BulletController();
  }

  async reInitialize() {
    this.health = this.maxHealth;
    this.#ui.setHpStatus();
    document.getElementById('root')!.appendChild(this.el);
    inventory.setGold(decreasedValueByPercent(inventory.getGold(), 20));

    await server.saveData();
  }

  async initialize() {
    const res = await server.getServerData();

    if (typeof res !== 'string') {
      this.health = res.player.health;
      this.power = res.player.power;
      this.setPos({ x: res.player.position.x, y: res.player.position.y });
      this.maxHealth = res.player.maxHealth;
      this.#ui.setHpStatus();
    } else {
      this.setPos({ x: 0, y: 0 });
    }

    this.el!.style.top = `0px`;
    this.el!.style.left = `0px`;

    document.body.onmousemove = (event) => {
      this.#cursorPosition.x = event.clientX;
      this.#cursorPosition.y = event.clientY;
    };
  }
  attack() {
    const bullet = new Bullet('bullet', `bullet-${new Date().toISOString()}`, this.power);
    bullet.init();
    this.bulletController.appendBulletEl(bullet.el);

    if (this.bulletController.isBulletFull()) {
      this.bulletController.deleteAllBullets();
    }

    this.bulletController.appendBulletContainer();

    this.#ui.setAttackMotion(this.position.x, this.#cursorPosition.x);

    bullet.move(this.#cursorPosition.x, this.#cursorPosition.y);
  }

  move(nextX: number, nextY: number): void {
    if (
      nextX < mapsStore.currentMap!.viewport.horizontal - 20 &&
      nextY < mapsStore.currentMap!.viewport.vertical - 20
    ) {
      this.el.classList.add('move');
      if (this.position.x < nextX) {
        this.direction = 'right';
      } else {
        this.direction = 'left';
      }

      super.move(nextX, nextY);
    }
  }

  setPos({ x, y }: Position): void {
    super.setPos({ x, y });
    this.findAdjacentEnemy();

    if (!this.adjacentEnemy?.getIsIncludedCurrentMap()) {
      return;
    }

    if (this.adjacentEnemy && !this.isHit) {
      this.hit();
      return;
    }
  }

  async hit() {
    const enemyPower = this.adjacentEnemy!.getPower();
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
      this.adjacentEnemy = undefined;
    }, 1000);

    await server.saveData();
    return;
  }

  findAdjacentEnemy() {
    this.adjacentEnemy = enemyStore.enemiesList.find(
      (e) =>
        Math.abs(e.position.x - this.position.x) < GENERAL_ENEMY_HIT_X_RANGE &&
        Math.abs(e.position.y - this.position.y) < GENERAL_ENEMY_HIT_Y_RANGE,
    );
  }

  transfer() {
    const { nextX, nextY } = this.nextPosition!;
    if (Math.abs(nextX - this.position.x) < 10 && Math.abs(nextY - this.position.y) < 10) {
      setTimeout(() => {
        this.el.classList.remove('move');
      }, 300);

      mapsStore?.currentMap!.change();
    }
    super.transfer();
  }

  destroy(): void {
    super.destroy();
    const modal = new Modal();
    modal.setText('사망하셨습니다. 골드가 20% 차감된 상태로 부활합니다');
    const confirm = button('확인', () => {
      this.reInitialize();
    });

    confirm.addEventListener('click', () => {
      modal.el.close();
    });
    modal.setButtons([confirm]);
  }
}

const player = Player.getInstance();

export { player };
