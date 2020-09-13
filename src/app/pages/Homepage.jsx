import React, { useEffect, useState } from "react";
import Search from "Components/Search/Search";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Search />
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
          const response = await fetch("https://api.randomuser.me?results=10&nat=us,gb,fr,de");
          const data = await response.json();
          // console.log(data)
          setUsers(data.results);
        } catch (e) {
          setError(e);
        }
      })()
    }, []); 


  return (
    <>
      <Search users={users} error={error}/>
      {/* {console.log(users[0])} //just for testing, data pulled through*/}
      {/* <Users users={users} error={error} /> */}
    </>
  );
};

export default HomepageUsingHooks;

