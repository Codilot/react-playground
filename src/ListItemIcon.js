import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemButton from "@mui/material/ListItemButton";
import MUIListItemIcon from "@mui/material/ListItemIcon";

const ListItemIcon = (props) => {
  return (
    <ListItemButton key={props.text}>
      <MUIListItemIcon>
        {props.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </MUIListItemIcon>
    </ListItemButton>
  );
};

export default ListItemIcon;
