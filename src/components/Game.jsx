import { useState, useEffect } from "react";
import Board from "../game/Board";
import PlayerInfo from "./PlayerInfo";
import Modal from "./Modal";

function Game({
  board,
  selectedPiece,
  moves,
  onClickMove,
  onEndGame,
  onContinueNewGame,
  onResignGame,
  turn,
  capture,
  score,
  gameState,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(gameState !== "");
  }, [gameState]);

  function handleOpenModal() {
    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function handleEndGame() {
    onEndGame(true);
    setOpen(false);
  }

  function handleContinueNewGame() {
    onContinueNewGame();
  }

  function handleResignGame() {
    onResignGame();
    setOpen(false);
  }

  return (
    <div className="md:w-2/3 xl:w-1/2">
      <PlayerInfo turn={turn} player={"b"} capture={capture} score={score} />
      <Board
        board={board}
        selectedPiece={selectedPiece}
        moves={moves}
        onClickMove={onClickMove}
      />
      <PlayerInfo turn={turn} player={"w"} capture={capture} score={score} />
      <button
        className="bg-indigo-500 p-4 rounded text-2xl drop-shadow-lg"
        onClick={handleResignGame}
      >
        Resign
      </button>
      <button
        className="bg-indigo-500 p-4 rounded text-2xl drop-shadow-lg"
        onClick={handleEndGame}
      >
        Quit
      </button>
      <Modal open={open} onClose={handleCloseModal}>
        <div>
          <h2>{gameState}</h2>

          <div className="flex gap-4">
            <button
              className="bg-indigo-500 p-4 rounded text-2xl drop-shadow-lg"
              onClick={handleContinueNewGame}
            >
              New Game
            </button>
            <button
              className="bg-indigo-500 p-4 rounded text-2xl drop-shadow-lg"
              onClick={handleEndGame}
            >
              Quit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Game;
