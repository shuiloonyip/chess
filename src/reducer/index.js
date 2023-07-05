import { Chess } from "chess.js";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      console.log(state);
      return { ...state, selectedPiece: action.payload.square };
    }
  }
}

export function createInitialState() {
  const initialChessObj = new Chess();
  return { chessObj: initialChessObj, selectedPiece: "" };
}
