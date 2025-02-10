interface ScoreBoardProps {
  scores: { X: number; O: number };
}

const ScoreBoard = ({ scores }: ScoreBoardProps) => (
  <div className="mt-6 w-64 bg-white shadow-lg rounded-xl p-4">
    <h2 className="text-lg font-semibold mb-2">Score History</h2>
    <div className="flex justify-between">
      <span >Player <span className="text-red-500">X</span>: {scores.X}</span>
      <span>Player <span className="text-green-500">O</span>: {scores.O}</span>
    </div>
  </div>
);

export default ScoreBoard;
