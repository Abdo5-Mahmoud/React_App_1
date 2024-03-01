import React, { useState, memo, useCallback } from "react";
import { useCount } from "./customhook";
import { useLog } from "./useLog";

function Child() {
  // const [count, setcount] = useState(0);

  // const increase = () => {
  //   setcount(count + 1);
  // };
  // const decrease = () => {
  //   setcount(count - 1);
  // };
  // useCallback(useLog(0));
  let [count, increase, decrease] = useCount(5);
  return (
    <>
      <hr />
      {useLog("welcome to my Website from child Component")}
      <button onClick={increase}>+</button>
      {count}
      <button onClick={decrease}>-</button>
    </>
  );
}

export default memo(Child);
