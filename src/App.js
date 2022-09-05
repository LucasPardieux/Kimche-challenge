import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// -------------Components-----------------
import Home from "./Components/Home/Home.jsx";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>
        Country search{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
      <Home></Home>
    </div>
  </ApolloProvider>
);
export default App;
