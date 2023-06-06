import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(user);
  if (user === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <h1>{user.name}</h1>
      </>
    );
  }
};

export default MultipleReturnsFetchData;
