import "./App.css";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Community from "./pages/Community";
import About from "./pages/About";
import Governance from "./pages/Governance";
import Space from "./pages/Space";
import NavBar from "./components/NavBar";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/space">
            <Space />
          </Route>
          <Route path="/governance">
            <Governance />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
