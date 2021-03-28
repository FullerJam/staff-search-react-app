import React from "react";
import { Button } from "./Button.styled";


function UserTile(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Tile>{children}</Tile>
    </React.Fragment>
  );
}


export default UserTile;