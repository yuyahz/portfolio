import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages";
import case1Page from "./pages/articleCase1";
import case1 from "./pages/articleCase_1";
import case2Page from "./pages/articleCase2";
import case2 from "./pages/articleCase_2";
import case3Page from "./pages/articleCase3";
import case3 from "./pages/articleCase_3";
import case4Page from "./pages/articleCase4";
import case4 from "./pages/articleCase_4";
import larryPage from "./pages/articleLarry";
import vectorPage from "./pages/articleVector";
import darumaPage from "./pages/articleDaruma";
import dailyUiPage from "./pages/articleDailyUi";
import portfolioPage from "./pages/articlePortfolio";
import NoMatch from "./components/NoMatch";
import TouchStartListener from "./components/TouchStartListener";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/case1Page" component={case1Page} exact />
          <Route path="/case1" component={case1} exact />
          <Route path="/case2Page" component={case2Page} exact />
          <Route path="/case2" component={case2} exact />
          <Route path="/case3Page" component={case3Page} exact />
          <Route path="/case3" component={case3} exact />
          <Route path="/case4Page" component={case4Page} exact />
          <Route path="/case4" component={case4} exact />
          <Route path="/larryPage" component={larryPage} exact />
          <Route path="/vectorPage" component={vectorPage} exact />
          <Route path="/darumaPage" component={darumaPage} exact />
          <Route path="/portfolioPage" component={portfolioPage} exact />
          <Route path="/dailyUiPage" component={dailyUiPage} exact />
          <Route path="*" component={NoMatch} />
          <TouchStartListener />
        </Switch>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
