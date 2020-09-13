import React, { useEffect, useState } from "react";
import Search from "Components/Search/Search";
import useUserStore from "../config/useUserStore";

const users = () => ({
  userStore: useUserStore()
})

const userProviderContext = createContext();

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
      <userProviderContext.Provider value={users()}>
        <Search error={error} />
      </userProviderContext.Provider>
    </>
  );
};

export default HomepageUsingHooks;
