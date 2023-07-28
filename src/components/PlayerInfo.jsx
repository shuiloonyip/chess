function PlayerInfo({ turn, player }) {
  return (
    <div className="flex p-4 text-white">
      <div className="flex self-center bg-white w-8 h-8 text-black">
        <div>0</div>
      </div>
      <div className="flex-1 ml-4">
        <div>Player 1</div>
        <div>Graveyard</div>
      </div>
      {turn === player ? (
        <div className="self-center">{"Your Turn"}</div>
      ) : null}
    </div>
  );
}

export default PlayerInfo;
