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

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPred) => {
    predecessor ||= newPred;
  };

  const name = () => `${x}, ${y}`;

  const createKnightMoves = () => {
    return KNIGHT_OFFSETS.map(newSquareFrom).filter(Boolean);
  };

  const newSquareFrom = ([xOffset, yOffset]) => {
    const [newX, newY] = [xPos + xOffset, yPos + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
      return ChessSquare(newX, newY);
    }
  };

  if (squareRegistry.has(name())) {
    return squareRegistry.get(name());
  } else {
    const newSquare = {
      name,
      getPredecessor,
      setPredecessor,
      createKnightMoves,
    };
    squareRegistry.set(name(), newSquare);
    return newSquare;
  }
};
