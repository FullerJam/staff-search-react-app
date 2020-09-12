import React from "react";
import styled from "styled-components";
import theme from "../../config/theme";
import bgImg from "../../../../public/images/background.jpg";
import searchIcon from "../../../../public/icons/search.png";

const Button = styled.button`
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  position: relative;
  bottom: -10px;
  border: 0;
  height: 30px;
  width: 30px;
  /* top:-10px; */
  margin-left: -35px;
  font-weight: 800;
  /* &:hover {
    background-color: palevioletred;
    color: white;
    cursor: pointer;
  } */
`;

const StyledBackground = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
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
`;

const StyledInputWrapper = styled.div``;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  width: 90%;
  background-color: #efefef;
`;

function Search(props) {
  //   const { onClick } = props;

  return (
    <React.Fragment>
      <StyledBackground>
        <StyledSearchWrapper>
          <h1>Find a member of staff</h1>
          <p>Use the search box to get started</p>
          {console.log("fuck you react")}
          <StyledInputWrapper>
            <StyledInput></StyledInput>
            <Button></Button>
          </StyledInputWrapper>
        </StyledSearchWrapper>
      </StyledBackground>
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
