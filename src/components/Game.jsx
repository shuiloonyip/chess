import Board from "../game/Board";
import PlayerInfo from "./PlayerInfo";

function Game({
  board,
  selectedPiece,
  moves,
  onClickMove,
  onEndGame,
  turn,
  capture,
}) {
  function handleClick() {
    onEndGame(true);
  }
  return (
    <div className="md:w-2/3 xl:w-1/2">
      <PlayerInfo turn={turn} player={"b"} capture={capture} />
      <Board
        board={board}
        selectedPiece={selectedPiece}
        moves={moves}
        onClickMove={onClickMove}
      />
      <PlayerInfo turn={turn} player={"w"} capture={capture} />
      <button onClick={handleClick}>END GAME</button>
    </div>
  );
}

export default Game;
