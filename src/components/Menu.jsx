import { useState } from "react";
import "./Menu.css";

function Menu({ onCreateNewGame }) {
  const [gameMode, setGameMode] = useState("2p");

  function handleClick() {
    onCreateNewGame({
      newGame: false,
      gameMode: gameMode,
    });
  }

  function handleOptionClick(e) {
    setGameMode(e.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Chess</h1>
      <div className="flex">
        <button
          className={
            `${gameMode === "2p" ? "bg-indigo-500 " : "bg-indigo-800 "}` +
            "p-4 rounded text-2xl drop-shadow-lg"
          }
          onClick={handleOptionClick}
          value="2p"
        >
          2P
        </button>
        <button
          className={
            `${gameMode === "bot" ? "bg-indigo-500 " : "bg-indigo-800 "}` +
            "p-4 rounded text-2xl drop-shadow-lg"
          }
          onClick={handleOptionClick}
          value="bot"
        >
          Bot
        </button>
      </div>

      <button
        className="bg-indigo-500 p-4 rounded text-2xl drop-shadow-lg"
        onClick={handleClick}
      >
        New game
      </button>
    </div>
  );
}

export default Menu;
