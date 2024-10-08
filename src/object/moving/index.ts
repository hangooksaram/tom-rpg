import { Position, Speed, NextPosition } from "../..";
import { mapsStore } from "../../store/maps";
import { calcHypotenuse } from "../../util/calculate";
export class MovingObject {
  public el: HTMLImageElement = new Image();
  public id: string;
  public position: Position = { x: 0, y: 0 };
  public nextPosition: NextPosition = null;
  public speed: Speed = { value: 10, xSpeed: 1.2, ySpeed:1.2  };
  public health: number = 100;
  public power: number = 0;
  public isHit: boolean = false;

  constructor(className: string, id: string, source:string) {
    this.id = id;
    this.el.id = id;
    this.el.classList.add(className);
    this.el.width= 100;
    this.el.height= 100;  
    this.el.onload = ()=> this.drawImage(0,0);
    this.el.src = source;
    const el = this.el;
  }

  drawImage(x:number, y:number){
    const el = this.el;
    const ctx = mapsStore.currentMap?.canvasCtx!;

    ctx.drawImage(el, x, y, 75, 75);
  }

  setPos({ x, y }: Position) {
    this.position = { ...this.position, x, y };
    // this.el!.style.top = `${y}px`;
    // this.el!.style.left = `${x}px`;
  }

  move(nextX: number, nextY: number) {
    this.nextPosition = { nextX, nextY };
    console.log(this.nextPosition);
    this.setSpeed(nextX, nextY);

  }

  clearCanvas (){
    const ctx = mapsStore.currentMap?.canvasCtx!;
    
    ctx.clearRect(0,0, mapsStore.currentMap?.el.width!,mapsStore.currentMap?.el.height! );
  }
  

  transfer() {
    const { nextX, nextY } = this.nextPosition!;
    const { xSpeed, ySpeed } = this.speed;

    if (
      Math.abs(nextX - this.position.x) < 10 &&
      Math.abs(nextY - this.position.y) < 10
    ) {
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
    requestAnimationFrame(() => this.transfer());
  }

  setSpeed(nextX: number, nextY: number) {
  }

  hit(power: number) {
    this.health -= power;
  }

  setPower(power: number) {
    this.power = power;
  }
}
