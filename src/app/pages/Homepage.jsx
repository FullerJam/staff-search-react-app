import React, { useEffect, useState } from "react";
import Search from "Components/Search/Search";
import Users from "Components/Users/Users";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Users />
      </>
    );
  }
}

// OR

const HomepageUsingHooks = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async ()  => {
        try {
          const response = await fetch("https://api.randomuser.me?results=10");
          const data = await response.json();
          setUsers(...data.results);
        } catch (e) {
          setError(e);
        }
      })()
    }, []); 


  return (
    <>
      <Search />
      {console.log(users)}
      <Users users={users} error={error} />
    </>
  );
};

export default Homepage;

export { Homepage, HomepageUsingHooks };
