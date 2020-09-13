import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import styled from "styled-components";
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";
import avatarPlaceholder from "../../../../public/icons/avatar_placeholder.png";
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
  padding: 0 50px 0 50px;
  justify-content: space-between;
  align-items: center;
  min-width: 800px;
  border: 1px grey solid;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f4f4f4;
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

const StyledAvatar = styled.img`
  border-radius: 50%;
  position: relative;
  border: 5px solid white;
`;

const StyledAvatar2 = styled.img`
  border-radius: 50%;
  position: relative;
  border: 5px solid white;
`;

const StyledError = styled.p`
  color: red;
  font-weight: bold;
  font-size: 25px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledList = styled.li`
  text-decoration:none;
`;

function Users(props) {
  const [selectedUser, setSelectedUser] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { users, errors } = props;

  const openModal = (user) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedUser(user);
    console.log("selected User " + selectedUser);
  };

  return (
    <React.Fragment>
      {errors && <StyledError>{errors}</StyledError>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          overlay: {
            backgroundColor: "#71090D",
          },
        }}
      >
        <StyledAvatar2
          src={modalIsOpen && selectedUser.picture.large}
          alt="userAvatar"
        />
        <p>
          {modalIsOpen &&
            selectedUser.name.first + " " + selectedUser.name.last}
        </p>
      </Modal>
      <StyledUsersWrapper>
        <StyledWrapper>
          {users.map((user) => (
            <StyledUserTile>
              <UserInfoWrapper>
                <StyledAvatar
                  src={user.picture.medium || avatarPlaceholder}
                  alt="userAvatar"
                />
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
              </UserInfoWrapper>
              <Button id={user.login.uuid} onClick={() => openModal(user)} />
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
