import React, { createContext, useState } from "react";
import Square from "@/components/Square.jsx";
import "@/index.css";

// 関数の外でexportする
export const ValueContext = createContext();

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const nextPlayer = xIsNext ? "X" : "O";
    setSquares(
      squares.map((squares, index) => (index === i ? nextPlayer : squares))
    );
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    // for文を回すためにkeyを追加

    return (
      // keyの位置を ValueContextに書かないといけないことに注意
      // 渡したいコンポーネントを`ValueContext.Provider`で囲み
      // 関数も渡せる渡したい値を{hogehoge}でかく
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
      {/* <div className="status">{"Next player: " + (xIsNext ? "X" : "O")}</div> */}
      {/* jsxの中でif文を切り替えてstyleを切り替えることで色を変える */}
      {/* CSSはオブジェクトの形にして渡す*/}
      <div className="status">
        <span>Next player : </span>
        {xIsNext ? (
          <span style={{ color: "red" }}>X</span>
        ) : (
          <span style={{ color: "blue" }}>O</span>
        )}
      </div>

      {renderBoard()}

      {/* <div className="board-row">{[1, 2, 3].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[4, 5, 6].map((i) => renderSquare(i))}</div>
      <div className="board-row">{[7, 8, 9].map((i) => renderSquare(i))}</div> */}

      {/* <div className="board-row">
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
      </div> */}
    </div>
  );
};

export default Board;
