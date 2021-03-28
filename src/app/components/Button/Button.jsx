import React from "react";
import { Button } from "./Button.styled";


function UserTile(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Button>{children}</Button>
    </React.Fragment>
  );
}


export default UserTile;