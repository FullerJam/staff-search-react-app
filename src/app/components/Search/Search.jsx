import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../../config/theme";
import bgImg from "../../../../public/images/background.jpg";
import bgImgMobile from "../../../../public/images/background_mobile.png";
import bgImgMobile2 from "../../../../public/images/background_mobile_2.png";
import searchIcon from "../../../../public/icons/search.png";
import Users from "../Users/Users";

const Button = styled.button`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  position: relative;
  background-size: 22px 22px;
  /* bottom: -10px; */
  border: 0;
  height: 25px;
  width: 25px;
  top: 8px;
  margin-left: -33px;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none; /*doesnt stop outline drawn when clicking :( */
  }
`;

const StyledBackground = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: 50% 1%;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  @media (max-width: 380px) {
    background-image: url(${bgImgMobile2});
    height: 40vh;
    h1 {
      font-size: 40px !important;
    }
  }
`;

const StyledSearchWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  h1 {
    font-size: 4rem;
    font-family: helvetica;
    margin-top: 0;
  }
  p {
    font-size: 1rem;
    font-family: helvetica;
    font-weight: 700;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  @media (max-width: 674px) {
    max-width: 380px;
  }
  @media (max-width: 449px) {
    max-width: 300px;
  }
`;

const StyledInputWrapper = styled.div`
  display:flex;
  justify-content:center;
  margin-left:-5%;
  padding
  `;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  width: 90%;
  background-color: #efefef;
`;

function Search(props) {
  const { users, error } = props;
  const [userInput, setUserInput] = useState("");
  const [userFeedback, setUserFeedback] = useState(false);
  const [userResults, setUserResults] = useState([]);
  // setUserResults(users); // infinite loop
  console.log(userResults);
  let filteredArray = [];
  const filterUsers = () => {
    //
    setUserFeedback(false);
    filteredArray = users.filter((user) => {
    const names = `${user.name.first} ${user.name.last}`  
      return names.toLowerCase().includes(userInput.toLowerCase());
    });
    console.log(filteredArray.length);
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
  }, [users])


  return (
    <React.Fragment>
      <StyledBackground>
        <StyledSearchWrapper>
          <h1>Find a member of staff</h1>
          <p>Use the search box to get started</p>
          {userFeedback && (<h1> </h1>)}
          <StyledInputWrapper>
            <StyledInput onChange={(e) => setUserInput(e.target.value)} />
            <Button onClick={() => filterUsers()}></Button>
          </StyledInputWrapper>
        </StyledSearchWrapper>
      </StyledBackground>
      <Users users={userResults} error={error} />
    </React.Fragment>
  );
}
Search.propTypes = {
  //   onClick: PropTypes.func,
  //   text: PropTypes.string,
};
Search.defaultProps = {
  //   text: "Search",
};

export default Search;
