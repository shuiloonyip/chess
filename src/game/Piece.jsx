import bb from "../assets/bb.svg";
import bk from "../assets/bk.svg";
import bn from "../assets/bn.svg";
import bp from "../assets/bp.svg";
import bq from "../assets/bq.svg";
import br from "../assets/br.svg";
import wb from "../assets/wb.svg";
import wk from "../assets/wk.svg";
import wn from "../assets/wn.svg";
import wp from "../assets/wp.svg";
import wq from "../assets/wq.svg";
import wr from "../assets/wr.svg";
import "./Piece.css";

const chessPieces = {
  bb,
  bk,
  bn,
  bp,
  bq,
  br,
  wb,
  wk,
  wn,
  wp,
  wq,
  wr,
};

function Piece({ piece, className }) {
  return (
    <div className={["piece", className].join(" ")}>
      <img
        src={chessPieces[`${piece.color + piece.type}`]}
        alt={`${piece.color + piece.type}`}
      ></img>
    </div>
  );
}

export default Piece;
