import { useReducer } from "react";
import { chessReducer, createInitialState } from "../reducer";
import Menu from "../components/Menu";
import Game from "../components/Game";

function Chess() {
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

  function handleCreateNewGame(bool) {
    dispatch({
      type: "NEWGAME",
      payload: { newGame: bool },
    });
  }

  function handleEndGame(bool) {
    dispatch({
      type: "ENDGAME",
      payload: { newGame: bool },
    });
  }

  return (
    <div className="container mx-auto">
      {state.newGame ? (
        <Menu onCreateNewGame={handleCreateNewGame} />
      ) : (
        <Game
          board={state.board}
          selectedPiece={state.selectedPiece}
          moves={state.moves}
          onClickMove={handleClickMove}
          onEndGame={handleEndGame}
        />
      )}
    </div>
  );
}

export default Chess;
