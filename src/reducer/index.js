import { Chess } from "chess.js";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      const moves = state.chess.moves({ square: action.payload.square });
      // Remove "N" from knight moves ['Nf3', 'Nh3']
      const newMoves = moves.map((item) => item.replace("N", ""));

      return {
        ...state,
        selectedPiece: action.payload.square,
        moves: newMoves,
      };
    }
  }
}

export function createInitialState() {
  const chess = new Chess();
  return {
    chess: chess,
    board: chess.board(),
    selectedPiece: "",
    moves: [],
  };
}
