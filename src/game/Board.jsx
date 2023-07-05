import { useReducer } from "react";
import Tile from "./Tile";
import { chessReducer, createInitialState } from "../reducer";
import "./Board.css";

function Board() {
  const [state, dispatch] = useReducer(chessReducer, null, createInitialState);

  function handleClickMove(square) {
    dispatch({
      type: "SELECTED",
      payload: { square: square },
    });
  }

  const boardRender = state.board.map((row, i) => {
    return (
      <div className="row" key={i}>
        {row.map((tile, j) => {
          return (
            <Tile
              key={tile.square}
              tileColor={tile.tileColor}
              square={tile.square}
              piece={state.chessObj.board()[i][j]}
              onClickMove={handleClickMove}
              isSelected={state.selectedPiece === tile.square}
            />
          );
        })}
      </div>
    );
  });

  return <div className="board">{boardRender}</div>;
}

export default Board;
