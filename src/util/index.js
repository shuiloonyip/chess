export function createBoard() {
  const boardArr = [];
  const rowLabel = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columnLabel = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let i = 0; i < rowLabel.length; i++) {
    const rowArr = [];
    for (let j = 0; j < columnLabel.length; j++) {
      if ((i + j) % 2 === 0) {
        rowArr.push({
          square: `${columnLabel[j]}${rowLabel[i]}`,
          tileColor: "white",
        });
      } else {
        rowArr.push({
          square: `${columnLabel[j]}${rowLabel[i]}`,
          tileColor: "black",
        });
      }
    }
    boardArr.push(rowArr);
  }

  return boardArr;
}
