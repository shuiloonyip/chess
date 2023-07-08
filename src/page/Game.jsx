import { useReducer } from "react";
import { chessReducer, createInitialState } from "../reducer";
import Board from "../game/Board";

function Game() {
  const [state, dispatch] = useReducer(chessReducer, null, createInitialState);

  function handleClickMove(square) {
    if (state.selectedPiece && state.moves.includes(square)) {
      return dispatch({
        type: "MOVE",
        payload: { square: square },
      });
    }

    return dispatch({
      type: "SELECTED",
      payload: { square: square },
    });
  }

  return (
    <div>
      <Board
        board={state.board}
        selectedPiece={state.selectedPiece}
        moves={state.moves}
        onClickMove={handleClickMove}
      />
    </div>
  );
}

export default Game;
