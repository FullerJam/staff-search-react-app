import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import PropTypes from "prop-types";
import UserTile from "../UserTile/UserTile";
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
} from "./Users.styled";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#app"); // https://github.com/reactjs/react-modal/issues/632
} //set app element for accessability
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
      <Modal
        id="root"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalContentStyle}
      >
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
            <p>{dobObject.date}</p>
          </li>
          <li>
            <img src={icon3} alt="Phone Icon" />
            <p>{selectedUser.phone}</p>
          </li>
        </StyledList>
      </Modal>
      <StyledWrapper>
        <StyledUsersWrapper>
          {users.map((user, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }}>
              <div onClick={() => openModal(user)}>
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
                  />
                </UserTile>
              </div>
            </motion.div>
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
