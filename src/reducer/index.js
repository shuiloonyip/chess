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
      console.log(move);
      let moveHistory = {
        ...state.moveHistory,
        [state.turn]: [...state.moveHistory[state.turn], move.san],
      };
      console.log(moveHistory);
      let capture = state.capture;
      let moveCounter = state.moveCounter;
      moveCounter = move.captured || move.piece === "p" ? 0 : moveCounter + 1;
      let boardPositions = { ...state.boardPositions };
      let boardPosition = chessCopy.fen().split(" ")[0];
      const castled = move.san === "O-O" || move.san === "O-O-O";
      if (move.captured || move.piece === "p" || castled) {
        boardPositions = {};
      } else {
        if (boardPosition in boardPositions) {
          let count = boardPositions[boardPosition];
          boardPositions[boardPosition] = count + 1;
        } else {
          boardPositions[boardPosition] = 1;
        }
      }

      if (move.captured && state.turn === "w") {
        capture = { ...state.capture, w: [...state.capture.w, move.captured] };
      }
      if (move.captured && state.turn === "b") {
        capture = { ...state.capture, b: [...state.capture.b, move.captured] };
      }
      let threefold = Object.values(boardPositions).includes(3);
      let type = "draw";
      let newScore = {};
      if (chessCopy.isGameOver() || moveCounter === 100 || threefold) {
        console.log("GAME OVER");
        if (chessCopy.isCheckmate()) {
          type = "checkmate";
          newScore = {
            ...state.score,
            [state.turn]: state.score[state.turn]++,
          };
        } else if (chessCopy.isDraw() || moveCounter === 100 || threefold) {
          newScore = { ...state.score };
          if (chessCopy.isInsufficientMaterial()) {
            type = "Draw by insufficient material";
          } else if (chessCopy.isStalemate()) {
            type = "stalemate";
          } else if (moveCounter === 100) {
            type = "Draw by 50 move rule";
          } else if (threefold) {
            type = "Draw by threefold repetition";
          }
          // 3 fold
          // 50 move
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
          gameState: type,
          score: newScore,
          moveHistory: moveHistory,
        };
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
        moveCounter: moveCounter,
        boardPositions: boardPositions,
        moveHistory: moveHistory,
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
    case "CONTINUENEWGAME": {
      const initialState = createInitialState();
      return { ...initialState, newGame: false, score: { ...state.score } };
    }
    case "RESIGNGAME": {
      const initialState = createInitialState();
      const opponent = state.turn === "w" ? "b" : "w";
      const score = { ...state.score, [opponent]: state.score[opponent]++ };
      return { ...initialState, newGame: false, score };
    }
  }
}

export function createInitialState() {
  const chess = new Chess();
  const boardPosition = chess.fen().split(" ")[0];
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
    moveCounter: 0,
    boardPositions: { [boardPosition]: 1 },
    moveHistory: { w: [], b: [] },
  };
}
