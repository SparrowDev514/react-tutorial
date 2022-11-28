import React from "react";
import { ValueContext } from "@/components/Board.jsx";
import "@/index.css";

const Square = () => {
  return (
    //　子コンポーネントでは<ValueContext.Consumer>で囲み、オブジェクトから値(or関数)を取り出して使う
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
