import Piece from "../game/Piece";

function Graveyard({ player, capture }) {
  // const pieceValue = {
  //   p: 1,
  //   n: 3,
  //   b: 3,
  //   r: 5,
  //   q: 9,
  // };

  const pieceSort = ["p", "n", "b", "r", "q"];
  const color = player === "w" ? "b" : "w";

  const sortCapture = capture.sort(
    (a, b) => pieceSort.indexOf(a) - pieceSort.indexOf(b)
  );

  return (
    <div className="flex">
      {sortCapture.map((piece, i) => {
        return (
          <div key={i}>
            <Piece piece={{ color: color, type: piece }} />
          </div>
        );
      })}
    </div>
  );
}

export default Graveyard;
