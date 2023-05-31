import { useState } from "react";
import data from "./data";

const App = () => {
  const [person, setPerson] = useState(data);
  const handleClick = () => {
    setPerson([]);
  };
  return (
    <>
      {data.length === 1 ? (
        <h1>There is 1 birthday today.</h1>
      ) : (
        <h1>There are {person.length} birthdays today</h1>
      )}
      {person.map((onePerson) => {
        return (
          <div key={onePerson.id}>
            <h2>{onePerson.name}</h2>
          </div>
        );
      })}
      <button type="button" onClick={handleClick}>
        Clear all
      </button>
    </>
  );
};
export default App;
