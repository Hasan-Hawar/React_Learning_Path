export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Player {winner} won!</p>}
      {!winner && <p>it's a drow!</p>}
      <p>
        <button>Remactch!</button>
      </p>
    </div>
  );
}
