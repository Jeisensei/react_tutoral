import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClickOne = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const handleClickAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => handleClickOne(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={handleClickAll}>
        Remove all
      </button>
    </div>
  );
};

export default UseStateArray;
