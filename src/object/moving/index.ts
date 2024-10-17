import { Position, Speed, NextPosition } from '../..';
import { mapsStore } from '../../store/maps';
import { calcHypotenuse } from '../../util/calculate';

type MovingStatusType = 'paused' | 'moving' | 'duplicated';

export class MovingObject {
  public el: HTMLDivElement = document.createElement('div');
  public id: string;
  public position: Position = { x: 0, y: 0 };
  public nextPosition: NextPosition = null;
  public speed: Speed = { value: 10, xSpeed: 0, ySpeed: 0 };
  public health: number = 100;
  public power: number = 0;
  public isHit: boolean = false;
  public movingStatus: MovingStatusType = 'paused';

  constructor(className: string, id: string) {
    this.id = id;
    this.el.id = id;
    this.el.classList.add(className);

    if (document.readyState === 'complete') {
      document.getElementById(mapsStore.currentMap?.id!)!.appendChild(this.el);
    }
  }

  setPos({ x, y }: Position) {
    this.position = { ...this.position, x, y };
    this.el!.style.top = `${y}px`;
    this.el!.style.left = `${x}px`;
  }

  move(nextX: number, nextY: number) {
    if (this.movingStatus === 'paused') {
      this.setMovingStatus('moving');
    } else if (this.movingStatus === 'moving') {
      this.setMovingStatus('duplicated');
    }

    this.nextPosition = { nextX, nextY };
    this.setSpeed(nextX, nextY);

    requestAnimationFrame(() => {
      this.transfer();
    });
  }

  setMovingStatus(status: MovingStatusType) {
    this.movingStatus = status;
  }

  transfer() {
    let raf;
    const { nextX, nextY } = this.nextPosition!;
    const { xSpeed, ySpeed } = this.speed;

    if (Math.abs(nextX - this.position.x) < 10 && Math.abs(nextY - this.position.y) < 10) {
      this.setMovingStatus('paused');
      return;
    }

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
    raf = requestAnimationFrame(() => this.transfer());

    if (this.movingStatus === 'duplicated') {
      cancelAnimationFrame(raf);
      this.setMovingStatus('paused');
    }
  }

  setSpeed(nextX: number, nextY: number) {
    const distance = calcHypotenuse(this.position.x, this.position.y, nextX, nextY);

    this.speed.xSpeed = (Math.abs(nextX - this.position.x) / distance) * this.speed.value;
    this.speed.ySpeed = (Math.abs(nextY - this.position.y) / distance) * this.speed.value;
  }

  hit(power: number) {
    this.health -= power;

    if (this.health <= 0) {
      this.health = 0;
    }
  }

  setPower(power: number) {
    this.power = power;
  }
}
