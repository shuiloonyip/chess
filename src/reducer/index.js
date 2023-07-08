import { Chess } from "chess.js";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      const moves = state.chess.moves({ square: action.payload.square });
      // Get last 2 letters from moves ['Nf3', 'Nh3']
      const newMoves = moves.map((item) => item.slice(-2));

      return {
        ...state,
        selectedPiece: action.payload.square,
        moves: newMoves,
      };
    }
    case "MOVE": {
      const chessCopy = new Chess(state.fen);
      chessCopy.move({ from: state.selectedPiece, to: action.payload.square });

      return {
        ...state,
        chess: new Chess(chessCopy.fen()),
        fen: chessCopy.fen(),
        board: chessCopy.board(),
        selectedPiece: "",
        moves: [],
      };
    }
  }
}

export function createInitialState() {
  const chess = new Chess();

  return {
    chess: chess,
    fen: chess.fen(),
    board: chess.board(),
    selectedPiece: "",
    selectedTile: "",
    moves: [],
  };
}
