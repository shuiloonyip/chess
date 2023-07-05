// [
//   [
//     { square: "a8", tileColor: "w" },
//     { square: "b8", tileColor: "b" },
//     { square: "c8", tileColor: "w" },
//     { square: "d8", tileColor: "b" },
//     { square: "e8", tileColor: "w" },
//     { square: "f8", tileColor: "b" },
//     { square: "g8", tileColor: "w" },
//     { square: "h8", tileColor: "b" },
//   ],
//   [...],
//   [...],
//   [...],
//   [...],
//   [...],
//   [...],
//   [...],
// ];

export function createBoardTiles() {
  const boardTiles = [];
  const rowLabel = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columnLabel = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let i = 0; i < rowLabel.length; i++) {
    const row = [];
    for (let j = 0; j < columnLabel.length; j++) {
      if ((i + j) % 2 === 0) {
        row.push({
          square: `${columnLabel[j]}${rowLabel[i]}`,
          tileColor: "w",
        });
      } else {
        row.push({
          square: `${columnLabel[j]}${rowLabel[i]}`,
          tileColor: "b",
        });
      }
    }
    boardTiles.push(row);
  }

  return boardTiles;
}
