import React from "react";
import { Tile } from "./UserTile.styled";

import { motion } from "framer-motion";

const UserTile = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <motion.div whileHover={{ scale: 1.02 }}>
        <Tile>{children}</Tile>
      </motion.div>
    </React.Fragment>
  );
}

export default UserTile;
