import React from "react";
import ReactDOM from "react-dom/client";
import Square from "@/components/Square.jsx";
import "@/index.css";

const Board = () => {
  const renderSquare = (i) => {
    return <Square />;
  };

  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

// アロー関数は宣言後にしかexportできない
export default Board;
