import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ListItem = (props) => {
  return (
    <ListItemButton key={props.text}>
      <ListItemIcon>
        {props.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItemButton>
  );
};

export default ListItem;
