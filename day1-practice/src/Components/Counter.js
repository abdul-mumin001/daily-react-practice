import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <h2>Counter :</h2>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </>
  );
};

export default Counter;
