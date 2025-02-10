interface BoardProps {
  board: (string | null)[];
  handleClick: (index: number) => void;
}

const Board = ({ board, handleClick }: BoardProps) => (
  <div className="grid grid-cols-3 gap-2 w-64">
    {board.map((cell, index) => (
      <button
        key={index}
        className={`bg-blue-100 border-2 border-blue-400 w-20 h-20 text-2xl font-bold flex items-center justify-center rounded-xl`}
        onClick={() => handleClick(index)}
      >
       <span className={`${cell === 'X' ? 'text-red-500' : cell === 'O' ? 'text-green-500' : ''}`}>
          {cell}
        </span>
      </button>
    ))}
  </div>
);

export default Board;
