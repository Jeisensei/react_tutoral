import { useState } from "react";
import data from "./data";
const App = () => {
  const [person, setPerson] = useState(data.name);
  return <>
    <h2>testing</h2>
    <h4>{data.length}</h4>
  </>
};
export default App;
