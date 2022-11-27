import React, { useState } from "react";
import Square from "@/components/Square.jsx";
import "@/index.css";

const Board = () => {
  // Squareコンポーネントで個別管理していたマスの値をBoardで一括に管理する。
  // こうした変更をStateのリフトアップという
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    // useStateで配列の特定の要素を変更したい場合は、map()を使用して、新たに配列を作成する。
    // useStateはオブジェクトが変更された時のみ再描画してくれるので、以下のようにすると
    // let newSquares = squares;
    // newSquares[i] = "X";
    // setSquares(newSquares);
    //描画されない
    setSquares(squares.map((squares, index) => (index === i ? "X" : squares)));
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
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

export default Board;
