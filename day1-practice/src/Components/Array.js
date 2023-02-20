import { useState } from "react";

const Array = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
//   const [obj, setObj] = useState({});

  const increment = () => {
    setCount(count + 1);
    setArr([...arr, count]);
    // setObj({ ...obj, [count]: count });
  };

  return (
    <>
    <h1>Array Counter</h1>
      {arr}
      <button onClick={increment}>Inc</button>
    </>
  );
};

export default Array;