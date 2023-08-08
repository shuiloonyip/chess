import Graveyard from "./Graveyard";

function PlayerInfo({ turn, player, capture, score }) {
  return (
    <div className="flex p-4 text-white">
      <div className="flex self-center bg-white w-8 h-8 text-black">
        <div>{score[player]}</div>
      </div>
      <div className="flex-1 ml-4">
        <div className="flex justify-between">
          <div>Player 1</div>
          {turn === player ? (
            <div className="self-center">{"Your Turn"}</div>
          ) : null}
        </div>
        <Graveyard player={player} capture={capture} />
      </div>
    </div>
  );
}

export default PlayerInfo;
