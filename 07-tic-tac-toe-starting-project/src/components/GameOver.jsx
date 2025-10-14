export default function GameOver({ winner, onRestartGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} wins!</p> : <p>it's a drow!</p>}
      <p>
        <button onClick={onRestartGame}>Rematch!</button>
      </p>
    </div>
  );
}
