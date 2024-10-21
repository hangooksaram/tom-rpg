import { Portal } from './Portal';

export enum Direction {
  NORTH = 'north',
  SOUTH = `south`,
  EAST = 'east',
  WEST = 'west',
}

type IPortals = {
  [key in Direction]: Portal;
};
