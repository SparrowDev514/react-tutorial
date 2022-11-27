import React from "react";
import ReactDOM from "react-dom/client";
import Board from "@/components/Board.jsx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);
