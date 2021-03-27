import React, { useContext } from "react";
import Search from "Components/Search/Search";
import UserContext from "../config/userContext";
import ErrorContext from "../config/userContext";

const HomepageUsingHooks = () => {
  const users = useContext(UserContext);
  const errors = useContext(ErrorContext);

  return <Search users={users} errors={errors}/>
  
};

export default HomepageUsingHooks;
