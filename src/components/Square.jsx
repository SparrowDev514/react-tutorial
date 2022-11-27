import React from "react";
import "@/index.css";

// 与えられたpropsはpropとして受け取る。
// propsはいくつ変数を渡されても、一つのオブジェクトにまとめられて渡される。
const Square = (props) => {
  return (
    <button className="square">
      {console.log("propsの中身を表示", props)}
      {console.log("渡した値を表示", props.value)}
      {props.value}
    </button>
  );
};

export default Square;
