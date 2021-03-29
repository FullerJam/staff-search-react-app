//hooks
import React, { useEffect, useState, useContext } from "react";
//contexts
import UserContext from "../../config/user.Context";
import ErrorContext from "../../config/error.Context";
//Components
import Users from "../UserResults/UserResults";
//styles
import {
  Button,
  StyledBackground,
  StyledSearchWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledOverlay,
} from "./SearchStaff.styled";

const Search = () => {
  //declare context so they can be used by component
  const error = useContext(ErrorContext);
  const users = useContext(UserContext);

  const [userInput, setUserInput] = useState(""); // records input value
  const [userFeedback, setUserFeedback] = useState(false); // boolean: error handling if no results are returned
  const [userResults, setUserResults] = useState([]); // The users results of their search set by the filteredArray
  let filteredArray = []; // empty array declared for users search function

  /**
   * Search input functionality
   */
  const filterUsers = () => {
    setUserFeedback(false);
    filteredArray = users.filter((user) => {
      // filter array
      const fullName = `${user.name.first} ${user.name.last}`; //create a users full name by combining first name & last name key
      return fullName.toLowerCase().includes(userInput.toLowerCase()); //return the full names that match the users input text
    });
    if (filteredArray.length > 0) {
      // if array has been populated
      setUserResults(filteredArray); // set useState array "userResults" to the filtered array
    } else {
      // else just pull in original user array
      setUserFeedback(true); // provide feedback to user
      setUserResults(users); // return the full list of users
    }
  };

  useEffect(() => {
    users ? setUserResults(users) : setUserResults([]); // if users is true setUserResults else reset to empty array to prevent crash
  }, [users]); // if users array changes re-render vDOM

  return (
    <React.Fragment>
      <header>
        <StyledBackground>
          <StyledOverlay>
            <StyledSearchWrapper>
              <h1>Find a member of staff</h1>
              <p>Use the search box to get started</p>
              <StyledInputWrapper>
                <StyledInput
                  onChange={(e) => {
                    setUserInput(e.target.value);
                  }} // update input useState
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      filterUsers();
                    } 
                  }} //if key press is enter filter the users array
                  aria-label="Search for a member of staff"
                />
                <Button
                  onClick={() => filterUsers()}
                  aria-label="Search"
                ></Button>
              </StyledInputWrapper>

              {
                userFeedback && (
                  <p>Your search returned no results</p>
                ) /*if userFeedback is true resolve <p> */
              }
            </StyledSearchWrapper>
          </StyledOverlay>
        </StyledBackground>
      </header>
      <main>
        <Users users={userResults} error={error} />
      </main>
    </React.Fragment>
  );
};

export default Search;
