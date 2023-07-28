import Board from "../game/Board";

function Game({ board, selectedPiece, moves, onClickMove, onEndGame }) {
  function handleClick() {
    onEndGame(true);
  }

  return (
    <div className="md:w-2/3 xl:w-1/2">
      <Board
        board={board}
        selectedPiece={selectedPiece}
        moves={moves}
        onClickMove={onClickMove}
      />
      <button onClick={handleClick}>END GAME</button>
    </div>
  );
}

export default Game;
