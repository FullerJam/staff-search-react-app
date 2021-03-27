import { hot } from "react-hot-loader/root";
import React from "react";
import Router from "Routing/Router";
import UserContext from "./config/userContext";
import ErrorContext from "./config/ErrorContext";
import Loader from "./components/Loader/Loader"
import useRandomuser from "./services/useRandomUser"

const AppRoot = () => {

  const {
    errors,
    users,
    loading,
  } = useRandomuser();

  if (loading) {
    return <Loader />;
  }

  return (
      <ErrorContext.Provider value={errors}>
        <UserContext.Provider value={users}>
          <Router />
        </UserContext.Provider>
      </ErrorContext.Provider>
  );
};

export default hot(AppRoot);
