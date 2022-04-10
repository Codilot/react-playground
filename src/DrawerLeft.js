import * as React from "react";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "./ListItem";

export default function DrawerLeft(props) {
  const drawerStyles = {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    mt: props.appBarHeight,
    width: props.width,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: props.width,
      boxSizing: "border-box",
      overflowX: "hidden",
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
