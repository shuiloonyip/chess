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
      const nextTurn = state.turn === "w" ? "b" : "w";
      const move = chessCopy.move({
        from: state.selectedPiece,
        to: action.payload.square,
      });

      let capture = state.capture;

      if (move.captured && state.turn === "w") {
        capture = { ...state.capture, w: [...state.capture.w, move.captured] };
      }

      if (move.captured && state.turn === "b") {
        capture = { ...state.capture, b: [...state.capture.b, move.captured] };
      }

      if (chessCopy.isGameOver()) {
        console.log("GAME OVER");
        if (chessCopy.isCheckmate()) {
          console.log("CHECKMATE");
          return {
            ...state,
            chess: new Chess(chessCopy.fen()),
            fen: chessCopy.fen(),
            board: chessCopy.board(),
            selectedPiece: "",
            moves: [],
            turn: nextTurn,
            capture: capture,
            gameState: "checkmate",
            score: { ...state.score, [state.turn]: state.score[state.turn]++ },
          };
        }
      }

      return {
        ...state,
        chess: new Chess(chessCopy.fen()),
        fen: chessCopy.fen(),
        board: chessCopy.board(),
        selectedPiece: "",
        moves: [],
        turn: nextTurn,
        capture: capture,
      };
    }
    case "NEWGAME": {
      return {
        ...state,
        newGame: action.payload.newGame,
      };
    }
    case "ENDGAME": {
      return createInitialState();
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
    capture: { w: [], b: [] },
    score: { w: 0, b: 0 },
    gameState: "",
  };
}
