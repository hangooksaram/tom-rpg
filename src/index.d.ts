interface MovingObject {
  id: string;
  position: Position;
  power: number;
  health: number;
  isHit: boolean;
}

interface Enemy extends MovingObject {
  type: string;
}

interface Player extends MovingObject {
  mana: number;
}

type Position = {
  x: number;
  y: number;
};

type NextPosition = {
  nextX: number;
  nextY: number;
} | null;

type Speed = {
  value: number;
  xSpeed: number;
  ySpeed: number;
};

type ObjectId = string;

export { MovingObject, Position, Player, Enemy, ObjectId, NextPosition, Speed };
