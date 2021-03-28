import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#app"); // https://github.com/reactjs/react-modal/issues/632
} //set app element for accessability

function ModalComponent(props) {
  const { children, isOpen, onRequestClose, style } = props;
  return (
    <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
        <Modal style={style} isOpen={isOpen} onRequestClose={onRequestClose}>
          {children}
        </Modal>
    </motion.div>
  );
}

export default ModalComponent;
