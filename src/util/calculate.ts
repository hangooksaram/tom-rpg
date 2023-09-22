import { mapsStore } from "../store/maps";

const calcHypotenuse = (
  currentX: number,
  currentY: number,
  nextX: number,
  nextY: number
) => {
  return Math.sqrt(
    Math.pow(currentX - nextX, 2) + Math.pow(currentY - nextY, 2)
  );
};

const transferToInteger = (number: number) => {
  return parseInt(number.toString());
};
const randomPos = () => {
  return {
    x: transferToInteger(
      Math.random() * mapsStore.currentMap!.viewport.horizontal
    ),
    y: transferToInteger(
      Math.random() * mapsStore.currentMap!.viewport.vertical
    ),
  };
};

const decreasedValueByPercent = (value: number, percent: number) => {
  return value * ((100 - percent) / 100);
};

export {
  calcHypotenuse,
  transferToInteger,
  randomPos,
  decreasedValueByPercent,
};
