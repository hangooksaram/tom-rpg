import { Position } from '../../..';
import { player } from './Player';

export class PlayerUI {
  public el: HTMLDivElement;

  constructor(el: HTMLDivElement) {
    this.el = el;
  }

  setHpStatus() {
    (document.getElementsByClassName('player-hp')[0] as HTMLDivElement)!.style.height = `${
      (player.health / player.maxHealth) * 150
    }px`;
  }

  setHitAnimation() {
    this.el.classList.add('hit');

    setTimeout(() => {
      this.el.classList.remove('hit');
    }, 1000);
  }

  showHitDamage(damage: number) {
    const damageEl = document.createElement('div');
    if (this.el.id.includes('player')) {
      damageEl.classList.add('player-hit-damage');
    }
    damageEl.innerHTML = damage.toString();
    this.el!.appendChild(damageEl);
    setTimeout(() => {
      this.el.removeChild(damageEl);
    }, 1000);
  }

  setMovingMotion(currentX: number, nextX: number) {
    this.el.classList.add('move');
    if (currentX < nextX) {
      this.el.classList.add('reverse-direction');
    } else if (currentX > nextX) {
      this.el.classList.remove('reverse-direction');
    }
  }

  setAttackMotion(currentX: number, clickedXPosition: number) {
    this.el.classList.add('attack');
    if (currentX < clickedXPosition) {
      this.el.classList.add('reverse-direction');
    }

    if (currentX > clickedXPosition) {
      this.el.classList.remove('reverse-direction');
    }
    setTimeout(() => {
      this.el.classList.remove('attack');
    }, 500);
  }
}

export const setClickTargetAnimation = (clickedPosition: Position) => {
  const targetEl = document.createElement('div');
  targetEl.style.position = 'absolute';
  targetEl.style.zIndex = '999';
  targetEl.style.top = `${clickedPosition.y}px`;
  targetEl.style.left = `${clickedPosition.x}px`;
  targetEl.classList.add('clicked');

  document.getElementById('root')?.appendChild(targetEl);

  setTimeout(() => {
    document.getElementById('root')?.removeChild(targetEl);
  }, 1000);
};
