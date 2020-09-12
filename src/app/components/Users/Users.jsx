import React from "react";
import styled from "styled-components";
// import theme from "../../config/theme";

const StyledUsersWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div``;

const StyledUserTile = styled.div`
  min-width: 800px;
  background-color:red;
  margin:10px;
  padding:10px;
  display:flex;
  p{
    margin-left:10px;
    font-family: helvetica;
  }
`;

const StyledAvatar = styled.div`
  padding:5px;
  background-color:white;
  background-image: url("");
`;

function Users(props) {
  //   const { onClick } = props;

  return (
    <React.Fragment>
      <StyledUsersWrapper>
        <StyledWrapper>
          <StyledUserTile>
            <StyledAvatar />
            <p>James</p>
            <p>Fuller</p>
          </StyledUserTile>
        </StyledWrapper>
      </StyledUsersWrapper>
    </React.Fragment>
  );
}
Users.propTypes = {
  //   onClick: PropTypes.func,
  //   text: PropTypes.string,
};
Users.defaultProps = {
  //   text: "Search",
};

export default Users;
