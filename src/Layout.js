import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import AppBar from "./AppBar";
import DrawerLeft from "./DrawerLeft";
import Main from "./Main";

function Layout(props) {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const drawerWidth = 240;

  const appBarHeight = 8;
  let [open, setOpen] = useState(true);
  let [leftOffset, setLeftOffset] = useState(drawerWidth);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setLeftOffset(open ? drawerWidth : drawerWidth / 4);
  }, [open]);

  return (
    <Box>
      <AppBar clickMenuIcon={handleDrawerToggle} />
      <DrawerLeft appBarHeight={appBarHeight} width={leftOffset} open={open} />

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
