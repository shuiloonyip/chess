import Tile from "./Tile";
import { createBoardTiles } from "../util";
import "./Board.css";

function Board({ board, selectedPiece, moves, onClickMove }) {
  const boardTiles = createBoardTiles();

  const boardRender = boardTiles.map((row, i) => {
    return (
      <div className="row" key={i}>
        {row.map((tile, j) => {
          return (
            <Tile
              key={tile.square}
              square={tile.square}
              tileColor={tile.tileColor}
              piece={board[i][j]}
              isSelected={selectedPiece === tile.square}
              hightlightMove={moves.includes(tile.square)}
              onClickMove={onClickMove}
            />
          );
        })}
      </div>
    );
  });

  return <div className="board">{boardRender}</div>;
}

export default Board;
