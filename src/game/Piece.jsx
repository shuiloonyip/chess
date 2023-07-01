import "./Piece.css";

function Piece(props) {
  const { piece } = props;

  return <div className={"piece " + piece.color}>{piece.type}</div>;
}

export default Piece;
