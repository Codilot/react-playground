import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "./ListItem";

export default function MainNav(props) {
  const theme = useTheme();
  const drawerStyles = {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    mt: props.appBarHeight,
    width: props.width,
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [`& .MuiDrawer-paper`]: {
      width: props.width,
      boxSizing: "border-box",
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  };

  return (
    <Drawer variant="persistent" open={true} sx={drawerStyles}>
      <Box sx={{ mt: props.appBarHeight }}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem text={text} index={index} key={index} />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
