
import './App.css'
import { useState } from "react";
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
interface PlayerScores {
  X: number;
  O: number;
}
function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState<(string | null)[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [scores, setScores] = useState<PlayerScores>({ X: 0, O: 0 });

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      const winnerMark = newBoard[index] as keyof PlayerScores;
      setWinner(winnerMark);
      setScores((prevScores) => ({
        ...prevScores,
        [winnerMark]: prevScores[winnerMark] + 1,
      }));
    } else if (isDraw(newBoard)) {
      setWinner('Draw');
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const checkWinner = (board: (string | null)[]) => {
    return winningCombinations.some(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  };

  const isDraw = (board: (string | null)[]) => board.every((cell) => cell !== null);

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Tic-Tac-Toe</h1>

      <Board board={board} handleClick={handleClick} />

      {winner && (
        <div className="text-xl mt-4">
          {winner === 'Draw' ? "It's a draw!" : `Winner: ${winner}`}
        </div>
      )}

      <button onClick={resetGame} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Restart Game
      </button>

      <ScoreBoard scores={scores} />
    </div>
  );
}

export default App
