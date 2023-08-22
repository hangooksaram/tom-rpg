export interface MovingObject {
  id: string;
  position: Position;
  power: number;
  health: number;
  isHit: boolean;
}

export interface Enemy extends MovingObject {
  type: string;
}

export interface Player extends MovingObject {
  mana: number;
}

export type Position = {
  x: number;
  y: number;
};

export type NextPosition = {
  nextX: number;
  nextY: number;
} | null;

export type Speed = {
  value: number;
  xSpeed: number;
  ySpeed: number;
};

export type ObjectId = string;

export type CreateMapDirection = "row" | "column";
