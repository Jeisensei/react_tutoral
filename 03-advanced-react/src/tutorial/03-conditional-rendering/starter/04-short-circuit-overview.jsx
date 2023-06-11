import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [state1, setState1] = useState("taco")
  const [state2, setState2] = useState("")

  return (
    <>
      <h4>Falsy Or: {state2 || "hello world"}</h4>
      <h4>Falsy And: {state2 && "hello world"}</h4>
      <h4>Truthy Or: {state1 || "hello world"}</h4>
      <h4>Truthy And: {state1 && "hello world"}</h4>
    </>
  );
};
export default ShortCircuitOverview;
