import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext, themes } from "../containers/ThemeContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const [bgColor, setBgColor] = useContext(ThemeContext);
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ backgroundColor: bgColor.background }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          SpaceX Missions
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
