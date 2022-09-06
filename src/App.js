import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import image from "./Utils/images/GloboTerraqueo.png"
// -------------Components-----------------
import Home from "./Components/Home/Home.jsx";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app_container">
      <div>
        <img className="backgroundImg" src={image}></img>
      </div>
      <h2 className="app_title">
        Country search{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
      <p className="app_Subtitle">You can search any country and group them</p>
      <Home></Home>
    </div>
  </ApolloProvider>
);
export default App;
