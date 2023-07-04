import { useState } from "react";
import { Chess } from "chess.js";
import Tile from "./Tile";
import "./Board.css";

function Board() {
  const initialChessObj = new Chess();

  const [chessObj, setChessObj] = useState(initialChessObj);
  const [selectedPiece, setSelectPiece] = useState("");

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
              piece={chessObj.board()[i][j]}
              onClickMove={handleClickMove}
              isSelected={selectedPiece === tile.square}
            />
          );
        })}
      </div>
    );
  });

  function handleClickMove(square) {
    setSelectPiece(square);
  }

  return <div className="board">{boardRender}</div>;
}

export default Board;
