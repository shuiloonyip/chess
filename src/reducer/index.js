import { Chess } from "chess.js";

export function chessReducer(state, action) {
  switch (action.type) {
    case "SELECTED": {
      const moves = state.chess.moves({ square: action.payload.square });
      const newMoves = moves.map((item) => {
        if (item === "O-O") {
          if (action.payload.square === "e1") {
            return "g1";
          } else {
            return "g8";
          }
        } else if (item === "O-O-O") {
          if (action.payload.square === "e1") {
            return "c1";
          } else {
            return "c8";
          }
        } else {
          // regex remove symbols and uppercase
          return item.replace(/[^a-z0-9]/g, "").slice(-2);
        }
      });

      return {
        ...state,
        selectedPiece: action.payload.square,
        moves: newMoves,
      };
    }
    case "MOVE": {
      const chessCopy = new Chess(state.fen);
      const currentTurn = state.turn === "w" ? "b" : "w";
      chessCopy.move({ from: state.selectedPiece, to: action.payload.square });

      return {
        ...state,
        chess: new Chess(chessCopy.fen()),
        fen: chessCopy.fen(),
        board: chessCopy.board(),
        selectedPiece: "",
        moves: [],
        turn: currentTurn,
      };
    }
    case "NEWGAME": {
      return {
        ...state,
        newGame: action.payload.newGame,
      };
    }
    case "ENDGAME": {
      return {
        ...state,
        newGame: action.payload.newGame,
      };
    }
  }
}

export function createInitialState() {
  const chess = new Chess();
  return {
    newGame: true,
    chess: chess,
    fen: chess.fen(),
    board: chess.board(),
    selectedPiece: "",
    selectedTile: "",
    moves: [],
    turn: "w",
  };
}
