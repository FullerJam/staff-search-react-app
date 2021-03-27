import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import Users from "../Users/Users";
import UserContext from "../../config/userContext";
import ErrorContext from "../../config/userContext";
import {
  Button,
  StyledBackground,
  StyledSearchWrapper,
  StyledInputWrapper,
  StyledInput,
} from "./Search.styled";

function Search() {
  const error = useContext(ErrorContext)
  const users = useContext(UserContext);
  
  const [userInput, setUserInput] = useState("");
  const [userFeedback, setUserFeedback] = useState(false);
  const [userResults, setUserResults] = useState([]);
  let filteredArray = [];

  const filterUsers = () => {

    setUserFeedback(false);
    filteredArray = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(userInput.toLowerCase());
    });
 
    if (filteredArray.length > 0) {
      setUserResults(filteredArray);
    } else {
      setUserFeedback(true);
      setUserResults(users);
    }
  };

  useEffect(() => {
    if (users) {
      setUserResults(users);
    }
  }, [users]);

  return (
    <React.Fragment>
      <StyledBackground>
        <StyledSearchWrapper>
          <h1>Find a member of staff</h1>
          <p>Use the search box to get started</p>
          <StyledInputWrapper>
            <StyledInput
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  filterUsers();
                }
              }}
            />
            <Button onClick={() => filterUsers()}></Button>
          </StyledInputWrapper>
          {userFeedback && <p>Your search returned no results</p>}
        </StyledSearchWrapper>
      </StyledBackground>
      <Users users={userResults} error={error} />
    </React.Fragment>
  );
}
Search.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
};
Search.defaultProps = {
  error: "",
  users: [],
};

export default Search;
