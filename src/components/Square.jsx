// useStateはimportする必要がある。
import React, { useState } from "react";
import "@/index.css";

// 与えられたpropsはpropとして受け取る。
// propsはいくつ変数を渡されても、一つのオブジェクトにまとめられて渡される。
const Square = (props) => {
  // マスに渡す値（X or ○）を管理する。初期値はNull
  // setValue("hogehoge") → value = hogehogeのような動きをする
  const [value, setValue] = useState(null);

  return (
    <button
      className="square"
      // onClickでクリックイベントを動かすことができる
      // onClick={console.log('click')} とかくと、レンダリングのたびにconsole.logを読んでしまうので注意。onClickの中身は関数を渡すようにする
      onClick={() => {
        // console.log("click");
        setValue("X");
      }}
    >
      {value}
    </button>
  );
};

export default Square;
