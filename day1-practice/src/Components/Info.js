import { useState } from "react";

function Info({ firstName, num1, num2 }) {
  // let name = "Aditya";

  // function changeName() {
  //   name = "Aircampus";
  //   console.log(name);
  // }

  let [Name, changeN] = useState("Abdul");
//   const [number, setNumber] = useState();

  function changeName() {
    changeN("Mumin");
  }

  return (
    <>
      <h1 id="name">My name is {Name}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default Info;