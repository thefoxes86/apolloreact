import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Home from "../page/Home";
import Launches from "../page/Launches";

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


export default function DrawerHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          SpaceX Missions
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
      
        <List>
          
            <ListItem button>
              <ListItemIcon> <MailIcon/></ListItemIcon>
              <ListItemText>
                <Link to="/" exact>Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon> <MailIcon/></ListItemIcon>
              <ListItemText>
                <Link to="/launches" exact>Launches</Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon> <MailIcon/></ListItemIcon>
              <ListItemText>
                <Link to="/rockets" exact>Rockets</Link>
              </ListItemText>
            </ListItem>
            <Divider/>


        </List>
      </div>
    </Drawer>
  
  </div>
  );
}
