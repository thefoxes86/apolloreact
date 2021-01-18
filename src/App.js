import { Route, BrowserRouter } from "react-router-dom";
import Launches from "./page/Launches";
import Rockets from "./page/Rockets";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Home from "./page/Home";
import "./App.css";

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

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Route path="/" exact component={Home} />
          <Route path="/launches" component={Launches} />
          <Route path="/rockets" component={Rockets} />
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
