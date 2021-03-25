import React from "react";
import { Tile } from "./UserTile.styled";


function UserTile(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Tile>{children}</Tile>
    </React.Fragment>
  );
}


export default UserTile;