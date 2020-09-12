import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";
// import theme from "../../config/theme";

const StyledUsersWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div``;

const StyledUserTile = styled.div`
  display: flex;
  padding:0 50px 0 50px;
  justify-content: space-between;
  align-items:center;
  min-width: 800px;
  border: 1px grey solid;
  border-radius: 5px; 
  margin: 10px;
  padding: 10px;
  background-color:#f4f4f4;
  p {
    margin-left: 8px;
    font-family: helvetica;
  }
`;

const Button = styled.button`
  background-image: url(${circleArrowIcon});
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 0;
  height: 50px;
  width: 49px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled.div`
  padding: 4px;
  background-color: white;
  border:.5px solid grey;
  border-radius: 50%;
  min-width:73px;
  img{
    border-radius: 50%;
    position: relative;
    bottom:-2px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items:center;
`;

function Users(props) {
  const { users, errors } = props;

  return (
    <React.Fragment>
      <StyledUsersWrapper>
        <StyledWrapper>
          {users.map((user) => (
            <StyledUserTile>
              <UserInfoWrapper>
                <StyledAvatar>
                  <img src={user.picture.medium} alt="userAvatar"/>
                </StyledAvatar>
          <p>{user.name.first}</p>
                <p>{user.name.last}</p>
              </UserInfoWrapper>
              <Button id={user.login.uuid}/>
            </StyledUserTile>
          ))}
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
