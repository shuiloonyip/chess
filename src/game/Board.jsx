import { useReducer } from "react";
import Tile from "./Tile";
import { chessReducer, createInitialState } from "../reducer";
import { createBoardTiles } from "../util";
import "./Board.css";

function Board() {
  const [state, dispatch] = useReducer(chessReducer, null, createInitialState);

  function handleClickMove(square) {
    dispatch({
      type: "SELECTED",
      payload: { square: square },
    });
  }

  const boardTiles = createBoardTiles();

  const board = boardTiles.map((row, i) => {
    return (
      <div className="row" key={i}>
        {row.map((tile, j) => {
          return (
            <Tile
              key={tile.square}
              tileColor={tile.tileColor}
              square={tile.square}
              piece={state.board[i][j]}
              onClickMove={handleClickMove}
              isSelected={state.selectedPiece === tile.square}
              hightlightMove={state.moves.includes(tile.square)}
            />
          );
        })}
      </div>
    );
  });

  return <div className="board">{board}</div>;
}

export default Board;
