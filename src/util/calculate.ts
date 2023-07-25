import { gameUi } from "../ui/game";

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
    x: transferToInteger(Math.random() * gameUi.viewport.horizontal),
    y: transferToInteger(Math.random() * gameUi.viewport.vertical),
  };
};

export { calcHypotenuse, transferToInteger, randomPos };
