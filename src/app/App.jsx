import { hot } from "react-hot-loader/root";
import React from "react";
import Router from "Routing/Router";
/**
 * Contexts - for sharing data around
 */
import UserContext from "./config/userContext";
import ErrorContext from "./config/ErrorContext";
import LoaderContext from "./config/LoaderContext";
/**
 * Theme Provider
 */
import theme from "./config/globalStyle.js";
import { ThemeProvider } from "styled-components";

import useRandomuser from "./services/useRandomUser";

import Loader from "./components/Loader/Loader";
const AppRoot = () => {
  const { errors, users, loading } = useRandomuser();

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <LoaderContext.Provider value={loading}>
        <ErrorContext.Provider value={errors}>
          <UserContext.Provider value={users}>
            <Router />
          </UserContext.Provider>
        </ErrorContext.Provider>
      </LoaderContext.Provider>
    </ThemeProvider>
  );
};

export default hot(AppRoot);
