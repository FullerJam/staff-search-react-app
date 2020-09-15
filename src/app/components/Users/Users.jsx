import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import PropTypes from "prop-types";
import avatarPlaceholder from "../../../../public/icons/avatar_placeholder.png";
import icon1 from "../../../../public/icons/email.png";
import icon2 from "../../../../public/icons/dob.png";
import icon3 from "../../../../public/icons/phone.png";
import {
  Button,
  StyledUsersWrapper,
  StyledWrapper,
  StyledUserTile,
  StyledAvatarBorder,
  StyledAvatarBorder2,
  StyledError,
  UserInfoWrapper,
  StyledList,
} from "./Users.styled";



function Users(props) {
  const [selectedUser, setSelectedUser] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dobObject, setDobObject] = useState({});
  const { error, users, variants } = props;

  const openModal = (user) => {
    setModalIsOpen(!modalIsOpen);
    setSelectedUser(user);
    setDobObject(user.dob);
  };

  return (
    <React.Fragment>
      <motion.div initial="out" animate="in" exit="out" variants={variants}>
        {error && <StyledError>{error.message}</StyledError>}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              marginTop: "5vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 auto",
              fontFamily: "helvetica",
              overflowX: "hidden",
              maxWidth: "1000px",
            },
            overlay: {
              backgroundColor: "#71090D",
              overflowX: "hidden",
            },
          }}
        >
          <StyledAvatarBorder2
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
            {users.map((user, index) => (
              <motion.div whileHover={{ scale: 1.05 }}>
                <StyledUserTile key={index}>
                  <UserInfoWrapper key="1">
                    <StyledAvatarBorder
                      src={user.picture.medium || avatarPlaceholder}
                      alt="userAvatar"
                      key="2"
                    />
                    <p key="3">{user.name.first}</p>
                    <p key="4">{user.name.last}</p>
                  </UserInfoWrapper>
                  <Button
                    id={user.login.uuid}
                    onClick={() => openModal(user)}
                    key="5"
                  />
                </StyledUserTile>
              </motion.div>
            ))}
          </StyledWrapper>
        </StyledUsersWrapper>
      </motion.div>
    </React.Fragment>
  );
}
Users.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
};

Users.defaultProps = {
  error: "",
  users: [],
};

export default Users;
