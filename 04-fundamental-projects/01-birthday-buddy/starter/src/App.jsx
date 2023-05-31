import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [person, setPerson] = useState(data);
  const handleClick = () => {
    setPerson([]);
  };
  return (
    // <>
    //   {data.length === 1 ? (
    //     <h1>There is 1 birthday today.</h1>
    //   ) : (
    //     <h1>There are {person.length} birthdays today</h1>
    //   )}
    //   {person.map((onePerson) => {
    //     return (
    //       <ul key={onePerson.id}>
    //         <li>
    //           <img src={onePerson.image} alt={onePerson.name}></img>
    //         </li>
    //         <li>{onePerson.name}</li>
    //         <li>{onePerson.age}</li>
    //       </ul>
    //     );
    //   })}
    //   <button type="button" onClick={handleClick}>
    //     Clear all
    //   </button>
    // </>
    <main>
      <section className="container">
        {person.length === 1 ? (
          <h3>1 birthday today</h3>
        ) : (
          <h3>{person.length} birthdays today</h3>
        )}
        <List people={person} />
        <button type="button" className="btn btn-block" onClick={handleClick}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
