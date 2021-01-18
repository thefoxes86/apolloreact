import { Route, BrowserRouter } from "react-router-dom";
import Launches from "./page/Launches";
import Rockets from "./page/Rockets";
import Home from "./page/Home";
import Options from "./page/Options";
import Menu from "./components/Menu";
import Topbar from "./components/Topbar";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeColorProvider } from "./containers/ThemeContext";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://api.spacex.land/graphql/",
});
const client = new ApolloClient({
  link: link,
  cache: cache,
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeColorProvider>
          <div className={classes.root}>
            <CssBaseline />

            <Topbar />

            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <Menu />
              </div>
            </Drawer>
            <main className={classes.content}>
              <Toolbar />
              <ApolloProvider client={client}>
                <Route path="/" exact component={Home} />
                <Route path="/launches" component={Launches} />
                <Route path="/rockets" component={Rockets} />
                <Route path="/options" component={Options} />
              </ApolloProvider>
            </main>
          </div>
        </ThemeColorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
