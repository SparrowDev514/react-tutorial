import React from "react";
import { ValueContext } from "@/components/Board.jsx";
import "@/index.css";

const Square = () => {
  return (
    <ValueContext.Consumer>
      {(value) => {
        return (
          <button className="square" onClick={value.handler}>
            {value.square}
          </button>
        );
      }}
    </ValueContext.Consumer>
  );
};

export default Square;
