import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          {" "}
          <MailIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/">Home</Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          {" "}
          <MailIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/launches">Launches</Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          {" "}
          <MailIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/rockets">Rockets</Link>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          {" "}
          <MailIcon />
        </ListItemIcon>
        <ListItemText>
          <Link to="/options">Options</Link>
        </ListItemText>
      </ListItem>
    </List>
  );
}
