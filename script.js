const squareRegistry = new Map();

const ChessSquare = (x, y) => {
  const xPos = x;
  const yPos = y;
  let predecessor;

  const KNIGHT_OFFSETS = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];
};
