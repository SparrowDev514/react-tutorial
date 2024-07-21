import React, { createContext, useState } from "react";
import Square from "@/components/Square.jsx";
import "@/index.css";

export const ValueContext = createContext();

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // 勝者を判定しておく
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    const nextPlayer = xIsNext ? "X" : "O";
    // 勝者が決まっているorマス目が埋まっている場合は早期にreturnしてしまう
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    setSquares(
      squares.map((squares, index) => (index === i ? nextPlayer : squares))
    );
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <ValueContext.Provider
        key={i}
        value={{ square: squares[i], handler: () => handleClick(i) }}
      >
        <Square />
      </ValueContext.Provider>
    );
  };

  const renderBoard = () => {
    const boardIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const boardArray = [];

    boardIndex.forEach((rowIndex, index) => {
      boardArray.push(
        <div key={index} className="board-row">
          {rowIndex.map((i) => renderSquare(i))}
        </div>
      );
    });
    return boardArray;
  };

  return (
    <div>
      {/* winnerの値によって表示を変える */}
      {winner ? (
        <div className="status">Winner is {winner}</div>
      ) : (
        <div className="status">
          <span>Next player : {xIsNext ? "X" : "O"} </span>
        </div>
      )}
      {renderBoard()}
    </div>
  );
};

export default Board;

// 勝者を判定する関数を定義する。
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
