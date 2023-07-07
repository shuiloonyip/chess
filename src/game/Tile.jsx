import Piece from "./Piece";
import "./Tile.css";

function Tiles(props) {
  const { tileColor } = props;
  const { square } = props;
  const { piece } = props;
  const { onClickMove } = props;
  const { isSelected } = props;
  const { hightlightMove } = props;

  function handleClick() {
    onClickMove(square);
  }
  return (
    <div
      className={
        "tile" +
        `${tileColor === "w" ? " white" : " black"}` +
        `${isSelected && piece ? " highlight" : ""}` +
        `${hightlightMove ? " highlight-move" : ""}`
      }
      onClick={handleClick}
    >
      <div className="label">{square}</div>
      {piece !== null ? <Piece piece={piece} /> : null}
    </div>
  );
}

export default Tiles;
