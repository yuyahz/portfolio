import React from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages";
import case1Page from "./pages/articleCase1";
import rv1 from "./pages/articleRv1";
import case2Page from "./pages/articleCase2";
import case3Page from "./pages/articleCase3";
import caseMpPage from "./pages/articleCaseMp";
import larryPage from "./pages/articleLarry";
import vectorPage from "./pages/articleVector";
import darumaPage from "./pages/articleDaruma";
import dailyUiPage from "./pages/articleDailyUi";
import portfolioPage from "./pages/articlePortfolio";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/case1Page" component={case1Page} exact />
        <Route path="/rv1" component={rv1} exact />
        <Route path="/case2Page" component={case2Page} exact />
        <Route path="/case3Page" component={case3Page} exact />
        <Route path="/caseMpPage" component={caseMpPage} exact />
        <Route path="/larryPage" component={larryPage} exact />
        <Route path="/vectorPage" component={vectorPage} exact />
        <Route path="/darumaPage" component={darumaPage} exact />
        <Route path="/dailyUiPage" component={dailyUiPage} exact />
        <Route path="/portfolioPage" component={portfolioPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
