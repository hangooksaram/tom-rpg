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

export { calcHypotenuse, transferToInteger };
