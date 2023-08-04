import Piece from "../game/Piece";

function Graveyard({ player, capture }) {
  const pieceSort = ["p", "n", "b", "r", "q"];
  const pieceValue = {
    p: 1,
    n: 3,
    b: 3,
    r: 5,
    q: 9,
  };

  let whiteCaptureMaterial = 0;
  for (let i = 0; i < capture.w.length; i++) {
    whiteCaptureMaterial += pieceValue[capture.w[i]];
  }

  let blackCaptureMaterial = 0;
  for (let i = 0; i < capture.b.length; i++) {
    blackCaptureMaterial += pieceValue[capture.b[i]];
  }
  let whiteMaterialValue = whiteCaptureMaterial - blackCaptureMaterial;
  let whiteMaterialAdv =
    player === "w" && whiteMaterialValue > 0 ? (
      <div className="self-center ml-2">{"+" + whiteMaterialValue}</div>
    ) : null;

  let blackMaterialValue = whiteMaterialValue * -1;
  let blackMaterialAdv =
    player === "b" && blackMaterialValue > 0 ? (
      <div className="self-center ml-2">{"+" + blackMaterialValue}</div>
    ) : null;

  const opponentColor = player === "w" ? "b" : "w";

  const sortCapture = capture[player].sort(
    (a, b) => pieceSort.indexOf(a) - pieceSort.indexOf(b)
  );

  return (
    <div className="flex align-middle">
      {sortCapture.map((piece, i) => {
        return (
          <div key={i} className="h-8 ml-[-0.6em]">
            <Piece
              className="h-8"
              piece={{ color: opponentColor, type: piece }}
            />
          </div>
        );
      })}
      {player === "w" ? whiteMaterialAdv : blackMaterialAdv}
    </div>
  );
}

export default Graveyard;
