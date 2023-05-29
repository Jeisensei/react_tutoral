import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    // // setValue((preValue) => {
    // //   const newValue = preValue + 1;
    // //   console.log(newValue);
    // //   return newValue;
    // });
    // testing
    setTimeout(() => {
      console.log(value);
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h1>The button has been clicked {value} times</h1>
      <button type="button" className="btn" onClick={handleClick}>
        add one
      </button>
    </>
  );
};

export default UseStateGotcha;
