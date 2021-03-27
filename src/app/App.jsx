import { hot } from "react-hot-loader/root";
import React, { useEffect, useState,} from "react";
import Router from "Routing/Router";
import UserContext from "./config/userContext";
import ErrorContext from "./config/userContext";

const AppRoot = () => {
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
      <ErrorContext.Provider value={error}>
        <UserContext.Provider value={users}>
          <Router />
        </UserContext.Provider>
      </ErrorContext.Provider>
  );
};

export default hot(AppRoot);
