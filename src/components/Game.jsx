import Board from "../game/Board";

function Game({ board, selectedPiece, moves, onClickMove, onEndGame }) {
  function handleClick() {
    onEndGame(true);
  }

  return (
    <div>
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
