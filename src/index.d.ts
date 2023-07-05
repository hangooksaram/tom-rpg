interface MovingObject {
  id: string;
  position: Position;
  health: number;
  isHit: boolean;
}

interface Enemy extends MovingObject {}

interface Player extends MovingObject {
  mana: number;
  isMoving: boolean;
}

type Position = {
  x: number;
  y: number;
};

type TargetPosition = {
  nextX: number;
  nextY: number;
} | null;

type Speed = {
  xSpeed: number;
  ySpeed: number;
};

type ObjectId = string;

export {
  MovingObject,
  Position,
  Player,
  Enemy,
  ObjectId,
  TargetPosition,
  Speed,
};
