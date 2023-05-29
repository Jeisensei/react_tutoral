import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "Reading books",
  });
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("Reading books");

  const displayPerson = () => {
    // setName("John");
    // setAge(42);
    // setHobby("Yelling at computer screens");
    // setPerson({ name: "John", age: 42, hobby: "Yelling at computer screens" });
    setPerson({ ...person, name: "Susan" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
