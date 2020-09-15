import React, { useEffect, useState } from "react";
import Search from "Components/Search/Search";

const HomepageUsingHooks = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.randomuser.me?results=10&nat=us,gb,fr,de"
        );
        const data = await response.json();
        // console.log(data)
        setUsers(data.results);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  return (
    <>
      <Search error={error} users={users} />
    </>
  );
};

export default HomepageUsingHooks;
