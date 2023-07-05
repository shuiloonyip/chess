import { Chess } from "chess.js";
import { createBoard } from "../util";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      return { ...state, selectedPiece: action.payload.square };
    }
  }
}

export function createInitialState() {
  const initialChessObj = new Chess();
  return { chessObj: initialChessObj, selectedPiece: "", board: createBoard() };
}
