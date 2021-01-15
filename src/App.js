import { Route } from "react-router-dom";
import Page from "./components/page";
import Lists from "./components/lists";
import Header from "./components/header";
import Currency from "./components/currency";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import "./App.css";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
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
      <Header />
      <ApolloProvider client={client}>
        <Route path="/apollo" component={Currency} />
        <Route path="/page" component={Page} />
      </ApolloProvider>
      <Route path="/lists" component={Lists} />
    </div>
  );
}

export default App;
