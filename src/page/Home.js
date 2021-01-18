import React from "react";
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import DrawerHeader from "../components/DrawerHeader";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DrawerHeader/>
      <main className={classes.content}>
      
      <Typography paragraph>
        Home 
      </Typography>
    
      
    </main>
    </React.Fragment>
  );
}
