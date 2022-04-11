import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import AppBar from "./AppBar";
import MainNav from "./MainNav";
import Main from "./Main";

function Layout(props) {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const appBarHeight = 8;

  const drawerSizes = {
    mobile: {
      open: "100%",
      collapsed: "0px",
    },
    desktop: {
      open: "240px",
      collapsed: "64px",
    },
  };
  const drawerWidthOpen = isXsScreen
    ? drawerSizes.mobile.open
    : drawerSizes.desktop.open;
  const drawerWidthCollapsed = isXsScreen
    ? drawerSizes.mobile.collapsed
    : drawerSizes.desktop.collapsed;

  let [open, setOpen] = useState(false);
  let [leftOffset, setLeftOffset] = useState(
    isXsScreen ? drawerSizes.mobile.collapsed : drawerSizes.desktop.collapsed
  );
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    open ? setLeftOffset(drawerWidthOpen) : setLeftOffset(drawerWidthCollapsed);
  }, [open, drawerWidthOpen, drawerWidthCollapsed]);

  return (
    <Box>
      <AppBar clickMenuIcon={handleDrawerToggle} />
      <MainNav appBarHeight={appBarHeight} width={leftOffset} open={open} />

      <Main leftOffset={leftOffset} appBarHeight={appBarHeight} />
    </Box>
  );
}

export default Layout;
