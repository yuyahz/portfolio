import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import WebDevPage from "./pages/webdev";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/webdev" component={WebDevPage} exact />
      </Switch>
    </Router>
  );
}

export default App;