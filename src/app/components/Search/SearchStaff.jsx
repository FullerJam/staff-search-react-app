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
} from "./SearchStaff.styled";

function Search() {
  const error = useContext(ErrorContext);
  const users = useContext(UserContext);

  const [userInput, setUserInput] = useState("");
  const [userFeedback, setUserFeedback] = useState(false); // boolean: error handling if not results are return
  const [userResults, setUserResults] = useState([]);
  let filteredArray = []; // empty array declared for users search function

  /**
   * 
   */
  const filterUsers = () => {
    setUserFeedback(false);
    filteredArray = users.filter((user) => { // filter array 
      const fullName = `${user.name.first} ${user.name.last}`; //create a users full name by combining first name & last name key
      return fullName.toLowerCase().includes(userInput.toLowerCase()); //return the full names that match the users input text 
    });

    if (filteredArray.length > 0) { // if array has been poplated 
      setUserResults(filteredArray); // set useState array userResults to the filtered array 
    } else { // just pull in user array of objects  
      setUserFeedback(true); // provide feedback to user
      setUserResults(users); // return the full list of users
    }
  };

/**
 * 
 */
  useEffect(() => {
    if (users) {
      setUserResults(users);
    }
  }, [users]); // if users changes re-render vDOM

  return (
    <React.Fragment>
      <header>
        <StyledBackground>
          <StyledSearchWrapper>
            <h1>Find a member of staff</h1>
            <p>Use the search box to get started</p>
            <StyledInputWrapper>
              <StyledInput
                onChange={(e) => setUserInput(e.target.value)} // update input useState
                onKeyPress={(e) => {if (e.key == "Enter") {filterUsers();}}} //if key press is enter filter the users array
                aria-label="Search for a member of staff"
              />
              <Button onClick={() => filterUsers()} aria-label="Search"></Button>
            </StyledInputWrapper>
            
            {userFeedback && <p>Your search returned no results</p>/*if userFeedback is true resolve <p> */} 
          </StyledSearchWrapper>
        </StyledBackground>
      </header>
      <main>
        <Users users={userResults} error={error} />
      </main>
    </React.Fragment>
  );
}
Search.propTypes = {
  error: PropTypes.array,
  users: PropTypes.array,
};
Search.defaultProps = {
  error: [],
  users: [],
};

export default Search;
