import React from "react"
import Modal from "react-modal"

if (process.env.NODE_ENV !== "test") {
    Modal.setAppElement("#app"); // https://github.com/reactjs/react-modal/issues/632
  } //set app element for accessability

function ModalComponent(props){
    const { children, isOpen, onRequestClose, style } = props;
    return(
    <Modal style={style} isOpen={isOpen} onRequestClose={onRequestClose} >
        {children}
    </Modal>
    )
}

export default ModalComponent