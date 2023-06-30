// import { Chess } from "chess.js";
import Tile from "./Tile";

function Board() {
  // const chess = new Chess();

  // let board = chess.board();

  const DUMMYDATA = [
    [
      {
        square: "a8",
        type: "r",
        color: "b",
      },
      {
        square: "b8",
        type: "n",
        color: "b",
      },
      {
        square: "c8",
        type: "b",
        color: "b",
      },
      {
        square: "d8",
        type: "q",
        color: "b",
      },
      {
        square: "e8",
        type: "k",
        color: "b",
      },
      {
        square: "f8",
        type: "b",
        color: "b",
      },
      {
        square: "g8",
        type: "n",
        color: "b",
      },
      {
        square: "h8",
        type: "r",
        color: "b",
      },
    ],
    [
      {
        square: "a7",
        type: "p",
        color: "b",
      },
      {
        square: "b7",
        type: "p",
        color: "b",
      },
      {
        square: "c7",
        type: "p",
        color: "b",
      },
      {
        square: "d7",
        type: "p",
        color: "b",
      },
      {
        square: "e7",
        type: "p",
        color: "b",
      },
      {
        square: "f7",
        type: "p",
        color: "b",
      },
      {
        square: "g7",
        type: "p",
        color: "b",
      },
      {
        square: "h7",
        type: "p",
        color: "b",
      },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      {
        square: "a2",
        type: "p",
        color: "w",
      },
      {
        square: "b2",
        type: "p",
        color: "w",
      },
      {
        square: "c2",
        type: "p",
        color: "w",
      },
      {
        square: "d2",
        type: "p",
        color: "w",
      },
      {
        square: "e2",
        type: "p",
        color: "w",
      },
      {
        square: "f2",
        type: "p",
        color: "w",
      },
      {
        square: "g2",
        type: "p",
        color: "w",
      },
      {
        square: "h2",
        type: "p",
        color: "w",
      },
    ],
    [
      {
        square: "a1",
        type: "r",
        color: "w",
      },
      {
        square: "b1",
        type: "n",
        color: "w",
      },
      {
        square: "c1",
        type: "b",
        color: "w",
      },
      {
        square: "d1",
        type: "q",
        color: "w",
      },
      {
        square: "e1",
        type: "k",
        color: "w",
      },
      {
        square: "f1",
        type: "b",
        color: "w",
      },
      {
        square: "g1",
        type: "n",
        color: "w",
      },
      {
        square: "h1",
        type: "r",
        color: "w",
      },
    ],
  ];

  // prettier-ignore
  return <div className="grid grid-cols-8 grid-rows-8">
  {[
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
    [<Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />, <Tile />],
  ]}</div>;
}

export default Board;
