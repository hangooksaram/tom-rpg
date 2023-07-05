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
const INNER_WIDTH = window.innerWidth;
const INNER_HEIGHT = window.innerHeight;
const randomPos = () => {
  return {
    x: transferToInteger(Math.random() * INNER_WIDTH),
    y: transferToInteger(Math.random() * INNER_HEIGHT),
  };
};

export { calcHypotenuse, transferToInteger, randomPos };
