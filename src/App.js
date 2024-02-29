import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages";
import case1Page from "./pages/articleCase1";
import rv1 from "./pages/articleRv1";
import case2Page from "./pages/articleCase2";
import rv2 from "./pages/articleRv2";
import case3Page from "./pages/articleCase3";
import rv3 from "./pages/articleRv3";
import caseMpPage from "./pages/articleCaseMp";
import mp1 from "./pages/articleMp1";
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
          <Route path="/rv1" component={rv1} exact />
          <Route path="/case2Page" component={case2Page} exact />
          <Route path="/rv2" component={rv2} exact />
          <Route path="/case3Page" component={case3Page} exact />
          <Route path="/rv3" component={rv3} exact />
          <Route path="/caseMpPage" component={caseMpPage} exact />
          <Route path="/mp1" component={mp1} exact />
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
