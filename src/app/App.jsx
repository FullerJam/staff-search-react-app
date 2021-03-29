import { hot } from "react-hot-loader/root";
import React from "react";
import Router from "Routing/Router";
/**
 * Contexts - for sharing data around
 */
import UserContext from "./config/user.Context";
import ErrorContext from "./config/error.Context";
import LoaderContext from "./config/loader.Context";
import { ThemeProvider } from "styled-components";
/**
 * Global Theme
 */
import theme from "./config/theme.js";

//custom hook
import useRandomUser from "./services/useRandomUser";

import Loader from "./components/Loader/Loader";
const AppRoot = () => {
  const { errors, users, loading } = useRandomUser();

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
