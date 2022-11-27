import React from "react";
import "@/index.css";

// valueを管理する必要がなくなったのでSquareコンポーネントから状態変数は削除
const Square = (props) => {
  return (
    // propsのhandleClickを受け取る
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
