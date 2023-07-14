import "./Menu.css";

function Menu({ onCreateNewGame }) {
  function handleClick() {
    onCreateNewGame(false);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Chess</h1>
      <button
        className="bg-indigo-500 p-4 w-96 rounded text-2xl drop-shadow-lg"
        onClick={handleClick}
      >
        New game
      </button>
    </div>
  );
}

export default Menu;
