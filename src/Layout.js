import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import AppBar from "./AppBar";
import DrawerLeft from "./DrawerLeft";
import Main from "./Main";

//constants
const drawerWidth = 240;
const appBarHeight = 8;

function Layout(props) {
  const [open, setOpen] = React.useState(true);
  const [leftOffset, setLeftOffset] = React.useState(drawerWidth);

  const handleDrawerToggle = () => {
    setOpen(!open);
    setLeftOffset(open ? drawerWidth / 4 : drawerWidth);
  };

  return (
    <Box>
      <AppBar clickMenuIcon={handleDrawerToggle} />
      <DrawerLeft
        appBarHeight={appBarHeight}
        leftOffset={leftOffset}
        open={open}
      />

      <Main leftOffset={leftOffset} appBarHeight={appBarHeight} />
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
