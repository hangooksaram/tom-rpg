import { player } from './Player';

export class PlayerUI {
  private el: HTMLDivElement;

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

  setAttackMotion(currentX: number, clickedXPosition: number) {
    this.el.classList.add('attack');
    if (currentX < clickedXPosition) {
      this.el.classList.add('reverse-direction');
      this.el.style.transform += ` scaleX(-1) `;
    }

    if (currentX > clickedXPosition) {
      this.el.classList.remove('reverse-direction');
      this.el.style.transform += ` scaleX(1) `;
    }
    setTimeout(() => {
      this.el.classList.remove('attack');
    }, 500);
  }
}
