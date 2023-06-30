import "./Tile.css";

function Tiles(props) {
  const { tileColor } = props;
  const { square } = props;

  const newClassName = tileColor + " tile";

  return <div className={newClassName}>{square}</div>;
}

export default Tiles;
