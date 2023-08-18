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

  function handleNewGame(newGameObj) {
    dispatch({
      type: "NEWGAME",
      payload: newGameObj,
    });
  }

  function handleEndGame(bool) {
    dispatch({
      type: "ENDGAME",
      payload: { newGame: bool },
    });
  }

  function handleContinueNewGame() {
    dispatch({
      type: "CONTINUENEWGAME",
    });
  }

  function handleResignGame(bool) {
    dispatch({
      type: "RESIGNGAME",
      payload: { newGame: bool },
    });
  }

  return (
    <div className="flex flex-col justify-center min-h-screen bg-slate-800">
      {state.newGame ? (
        <Menu onCreateNewGame={handleNewGame} />
      ) : (
        <Game
          board={state.board}
          selectedPiece={state.selectedPiece}
          moves={state.moves}
          onClickMove={handleClickMove}
          onEndGame={handleEndGame}
          onContinueNewGame={handleContinueNewGame}
          onResignGame={handleResignGame}
          turn={state.turn}
          capture={state.capture}
          score={state.score}
          gameState={state.gameState}
        />
      )}
    </div>
  );
}

export default Chess;
