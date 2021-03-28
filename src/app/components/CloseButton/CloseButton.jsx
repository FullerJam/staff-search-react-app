import React from "react";
import { StyledCloseButton } from "./CloseButton.styled";


function CloseButton(props) {
  const { ariaLabel } = props;

  return (
    <React.Fragment>
      <StyledCloseButton aria-label={ariaLabel}>✕</StyledCloseButton>
    </React.Fragment>
  );
}


export default CloseButton;