import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import case1Page from "./pages/articleCase1";
import larryPage from "./pages/articleLarry";
import vectorPage from "./pages/articleVector";
import darumaPage from "./pages/articleDaruma";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/case1Page" component={case1Page} exact />
        <Route path="/larryPage" component={larryPage} exact />
        <Route path="/vectorPage" component={vectorPage} exact />
        <Route path="/darumaPage" component={darumaPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
