import Piece from "./Piece";
import "./Tile.css";

function Tiles(props) {
  const { tileColor } = props;
  const { square } = props;
  const { piece } = props;

  return (
    <div className={"tile " + tileColor}>
      <div className="label">{square}</div>
      {piece !== null ? <Piece piece={piece} /> : null}
    </div>
  );
}

export default Tiles;
