import { useState } from "react";

const ToggleChallenge = () => {
  const [bool, setBool] = useState(false);

  return (
    <>
      {bool ? <h1>truth</h1> : <h1>false</h1>}
      <button className="btn" onClick={() => setBool(!bool)}>
        click me
      </button>
    </>
  );
};



export default ToggleChallenge;
