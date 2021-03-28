import React, { useState } from "react";
import { motion, useViewportScroll } from "framer-motion"
import DayJS from "react-dayjs";
import ModalComponent from "../Modal/ModalComponent";
import PropTypes from "prop-types";
import UserTile from "../UserTile/UserTile";
import CloseButton from "../CloseButton/CloseButton";
import avatarPlaceholder from "../../../../public/icons/avatar_placeholder.png";
import icon1 from "../../../../public/icons/email.png";
import icon2 from "../../../../public/icons/dob.png";
import icon3 from "../../../../public/icons/phone.png";
import {
  Button,
  StyledUsersWrapper,
  StyledWrapper,
  StyledAvatarBorder,
  StyledAvatarBorder2,
  StyledError,
  StyledUserInfoWrapper,
  StyledList,
  modalContentStyle,
} from "./UserResults.styled";

function Users(props) {
  const [selectedUser, setSelectedUser] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dobObject, setDobObject] = useState({});
  const { error, users } = props;

  const openModal = (user) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedUser(user);
    setDobObject(user.dob);
  };

  return (
    <React.Fragment>
      {error && <StyledError>{error.message}</StyledError>}

      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalContentStyle}
        className="Modal"
      >
        <CloseButton
          ariaLabel={"close"}
          onClick={() => setModalIsOpen(false)}
        />
        <StyledAvatarBorder2
          src={modalIsOpen ? selectedUser.picture.large : undefined} // replaced with ternary operator as && was throwing error when closing modal as src set to "false"
          alt="large_user_avatar"
        />
        <h4>
          {modalIsOpen &&
            selectedUser.name.first + " " + selectedUser.name.last}
        </h4>
        <StyledList>
          <li>
            <div>
              <img src={icon1} alt="Email Icon" />
            </div>
            <p>{selectedUser.email}</p>
          </li>
          <li>
            <img src={icon2} alt="Birthday Icon" />
            <p>
              <DayJS format="MM-DD-YYYY">{dobObject.date}</DayJS>
            </p>
          </li>
          <li>
            <img src={icon3} alt="Phone Icon" />
            <p>{selectedUser.phone}</p>
          </li>
        </StyledList>
      </ModalComponent>
      <StyledWrapper>
        <StyledUsersWrapper>
          {users.map((user, index) => (
            //map out all the results from either filtered array or just the users array
            <div key={index} onClick={() => openModal(user)}>
              <UserTile>
                <StyledUserInfoWrapper>
                  <div>
                    <StyledAvatarBorder
                      src={user.picture.medium || avatarPlaceholder}
                      alt="userAvatar"
                    />
                  </div>
                  <div>
                    <p>
                      {user.name.first}&nbsp;{user.name.last}
                    </p>
                  </div>
                </StyledUserInfoWrapper>
                <Button
                  id={user.login.uuid}
                  onClick={() => openModal(user)}
                  aria-label="Further details"
                  alt="button img"
                  role="button"
                />
              </UserTile>
            </div>
          ))}
        </StyledUsersWrapper>
      </StyledWrapper>
    </React.Fragment>
  );
}
Users.propTypes = {
  error: PropTypes.array,
  users: PropTypes.array,
};

Users.defaultProps = {
  error: [],
  users: [],
};

export default Users;
