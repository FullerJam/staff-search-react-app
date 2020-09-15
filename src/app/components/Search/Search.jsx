import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Users from "../Users/Users";
import {
  Button,
  StyledBackground,
  StyledSearchWrapper,
  StyledInputWrapper,
  StyledInput,
} from "./Search.styled";

function Search(props) {
  const { error, users } = props;
  const [userInput, setUserInput] = useState("");
  const [userFeedback, setUserFeedback] = useState(false);
  const [userResults, setUserResults] = useState([]);
  // setUserResults(users); // infinite loop
  // console.log(userResults);
  let filteredArray = [];
  const filterUsers = () => {
    //
    setUserFeedback(false);
    filteredArray = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(userInput.toLowerCase());
    });
    // console.log(filteredArray.length);
    if (filteredArray.length > 0) {
      setUserResults(filteredArray);
    } else {
      //filtered length is 0, display feedback?
      setUserFeedback(true);
      setUserResults(users);
    }
    //|| user.name.last.toLowerCase().includes(userInput.toLowerCase())
  };

  //check if the users array is empty and if it is set user results to original
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
