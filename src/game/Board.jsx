import Tile from "./Tile";
import "./Board.css";

function Board() {
  const DUMMYDATA = [
    [
      { square: "a8", type: "r", color: "b" },
      { square: "b8", type: "n", color: "b" },
      { square: "c8", type: "b", color: "b" },
      { square: "d8", type: "q", color: "b" },
      { square: "e8", type: "k", color: "b" },
      { square: "f8", type: "b", color: "b" },
      { square: "g8", type: "n", color: "b" },
      { square: "h8", type: "r", color: "b" },
    ],
    [
      { square: "a7", type: "p", color: "b" },
      { square: "b7", type: "p", color: "b" },
      { square: "c7", type: "p", color: "b" },
      { square: "d7", type: "p", color: "b" },
      { square: "e7", type: "p", color: "b" },
      { square: "f7", type: "p", color: "b" },
      { square: "g7", type: "p", color: "b" },
      { square: "h7", type: "p", color: "b" },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { square: "a2", type: "p", color: "w" },
      { square: "b2", type: "p", color: "w" },
      { square: "c2", type: "p", color: "w" },
      { square: "d2", type: "p", color: "w" },
      { square: "e2", type: "p", color: "w" },
      { square: "f2", type: "p", color: "w" },
      { square: "g2", type: "p", color: "w" },
      { square: "h2", type: "p", color: "w" },
    ],
    [
      { square: "a1", type: "r", color: "w" },
      { square: "b1", type: "n", color: "w" },
      { square: "c1", type: "b", color: "w" },
      { square: "d1", type: "q", color: "w" },
      { square: "e1", type: "k", color: "w" },
      { square: "f1", type: "b", color: "w" },
      { square: "g1", type: "n", color: "w" },
      { square: "h1", type: "r", color: "w" },
    ],
  ];

  const rowLabel = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columnLabel = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const boardArr = [];

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

  const boardRender = boardArr.map((row, i) => {
    return (
      <div className="row" key={rowLabel[i]}>
        {row.map((tile, j) => {
          return (
            <Tile
              key={tile.square}
              tileColor={tile.tileColor}
              square={tile.square}
              piece={DUMMYDATA[i][j]}
            />
          );
        })}
      </div>
    );
  });

  return <div className="board">{boardRender}</div>;
}

export default Board;
