import React from "react";
import Square from "@/components/Square.jsx";
import "@/index.css";

const Board = () => {
  // 最初は変数iが渡されているが、その値は読み取られない。
  // value={i}を追加することでSquareコンポーネントに値が渡る。
  const renderSquare = (i) => {
    return <Square value={i} />;
  };

  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* // returnの中でjsを書くときは{}で囲む */}
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
