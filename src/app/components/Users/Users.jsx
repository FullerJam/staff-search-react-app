import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types"
import styled from "styled-components";
import circleArrowIcon from "../../../../public/icons/circle-arrow.png";
import avatarPlaceholder from "../../../../public/icons/avatar_placeholder.png";
import icon1 from "../../../../public/icons/email.png";
import icon2 from "../../../../public/icons/dob.png";
import icon3 from "../../../../public/icons/phone.png";
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
  width: 800px;
  border: 1px grey solid;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom:10px;
  padding: 10px;
  background-color: #f4f4f4;
  p {
    margin-left: 8px;
    font-family: helvetica;
  }
  @media (max-width: 849px) {
    max-width:530px;
  }
  @media (max-width: 617px) {
    max-width:420px;
  }
  @media (max-width: 617px) {
    max-width:300px;
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

const StyledList = styled.ul`
  padding: 0;
  margin-top: 2%;
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  li {
    display: flex;
  }
  img {
    height: 20px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    li {
      display: block;
    }
  }
`;

function Users(props) {
  const [selectedUser, setSelectedUser] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dobObject, setDobObject] = useState({});
  const { users, filteredUsers, error } = props;

  const openModal = (user) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedUser(user);
    setDobObject(user.dob);
  };

  return (
    <React.Fragment>
      {error && <StyledError>{error.message}</StyledError>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            marginTop:"5vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
            fontFamily: "helvetica",
            overflowX: "hidden",
            maxWidth:"1000px"
          },
          overlay: {
            backgroundColor: "#71090D",
            overflowX: "hidden"
          },
        }}
      >
        <StyledAvatar2
          src={modalIsOpen && selectedUser.picture.large}
          alt="large_user_avatar"
        />
        <p>
          <h4>
            {modalIsOpen &&
              selectedUser.name.first + " " + selectedUser.name.last}
          </h4>
        </p>
        <StyledList>
          <li>
            <img src={icon1} alt="Email Icon" />
            <p>{selectedUser.email}</p>
          </li>
          <li>
            <img src={icon2} alt="Birthday Icon" />
            <p>{dobObject.date}</p>
          </li>
          <li>
            <img src={icon3} alt="Phone Icon" />
            <p>{selectedUser.phone}</p>
          </li>
        </StyledList>
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
