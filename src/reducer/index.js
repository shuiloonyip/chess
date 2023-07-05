import { Chess } from "chess.js";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      return { ...state, selectedPiece: action.payload.square };
    }
  }
}

export function createInitialState() {
  const chess = new Chess();
  return {
    chess: chess,
    selectedPiece: "",
    board: chess.board(),
  };
}
