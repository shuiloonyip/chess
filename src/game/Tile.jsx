import Piece from "./Piece";
import "./Tile.css";

function Tiles(props) {
  const { tileColor } = props;
  const { square } = props;
  const { piece } = props;
  const { onClickMove } = props;
  const { isSelected } = props;

  function handleClick() {
    onClickMove(square);
  }
  return (
    <div
      className={
        "tile " + tileColor + `${isSelected && piece ? " highlight" : ""}`
      }
      onClick={handleClick}
    >
      <div className="label">{square}</div>
      {piece !== null ? <Piece piece={piece} /> : null}
    </div>
  );
}

export default Tiles;
