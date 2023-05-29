import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("hello")[0];
  // console.log(value);
  // const func = useState("hello")[1];
  // console.log(func);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("No Name");
  console.log(count, setCount);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleUpdate = () => {
    setName(document.getElementById("name").textContent);
  };

  return (
    <div>
      <h4>You clicked {count} times!</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
      <h4>You're name is {name}</h4>
      <form type="form">
        <input type="text" id="name"></input>
        <button type="button" onClick={handleUpdate}>
          name update
        </button>
      </form>
    </div>
  );
};
export default UseStateBasics;
