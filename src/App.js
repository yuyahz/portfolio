import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Case1Page from "./pages/articleCase1";
import Case1 from "./pages/articleCase_1";
import Case2Page from "./pages/articleCase2";
import Case2 from "./pages/articleCase_2";
import Case3Page from "./pages/articleCase3";
import Case3 from "./pages/articleCase_3";
import Case4Page from "./pages/articleCase4";
import Case4 from "./pages/articleCase_4";
import LarryPage from "./pages/articleLarry";
import VectorPage from "./pages/articleVector";
import DarumaPage from "./pages/articleDaruma";
import DailyUiPage from "./pages/articleDailyUi";
import PortfolioPage from "./pages/articlePortfolio";
import NoMatch from "./components/NoMatch";
import TouchStartListener from "./components/TouchStartListener";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case1Page" element={<Case1Page />} />
          <Route path="/case1" element={<Case1 />} />
          <Route path="/case2Page" element={<Case2Page />} />
          <Route path="/case2" element={<Case2 />} />
          <Route path="/case3Page" element={<Case3Page />} />
          <Route path="/case3" element={<Case3 />} />
          <Route path="/case4Page" element={<Case4Page />} />
          <Route path="/case4" element={<Case4 />} />
          <Route path="/larryPage" element={<LarryPage />} />
          <Route path="/vectorPage" element={<VectorPage />} />
          <Route path="/darumaPage" element={<DarumaPage />} />
          <Route path="/portfolioPage" element={<PortfolioPage />} />
          <Route path="/dailyUiPage" element={<DailyUiPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <TouchStartListener /> {/* Moved out of Routes */}
      </Router>
    </ParallaxProvider>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages";
// import Case1Page from "./pages/articleCase1";
// import Case1 from "./pages/articleCase_1";
// import Case2Page from "./pages/articleCase2";
// import Case2 from "./pages/articleCase_2";
// import Case3Page from "./pages/articleCase3";
// import Case3 from "./pages/articleCase_3";
// import Case4Page from "./pages/articleCase4";
// import Case4 from "./pages/articleCase_4";
// import LarryPage from "./pages/articleLarry";
// import VectorPage from "./pages/articleVector";
// import DarumaPage from "./pages/articleDaruma";
// import DailyUiPage from "./pages/articleDailyUi";
// import PortfolioPage from "./pages/articlePortfolio";

// import NoMatch from "./components/NoMatch";
// import TouchStartListener from "./components/TouchStartListener";
// import { ParallaxProvider } from "react-scroll-parallax";

// function App() {
//   return (
//     <ParallaxProvider>
//       <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/case1Page" element={<Case1Page />} />
//           <Route path="/case1" element={<Case1 />} />
//           <Route path="/case2Page" element={<Case2Page />} />
//           <Route path="/case2" element={<Case2 />} />
//           <Route path="/case3Page" element={<Case3Page />} />
//           <Route path="/case3" element={<Case3 />} />
//           <Route path="/case4Page" element={<Case4Page />} />
//           <Route path="/case4" element={<Case4 />} />
//           <Route path="/larryPage" element={<LarryPage />} />
//           <Route path="/vectorPage" element={<VectorPage />} />
//           <Route path="/darumaPage" element={<DarumaPage />} />
//           <Route path="/portfolioPage" element={<PortfolioPage />} />
//           <Route path="/dailyUiPage" element={<DailyUiPage />} />
//           <Route path="*" element={<NoMatch />} />
//           <TouchStartListener />
//         </Routes>
//       </BrowserRouter>
//     </ParallaxProvider>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./pages";
// import case1Page from "./pages/articleCase1";
// import case1 from "./pages/articleCase_1";
// import case2Page from "./pages/articleCase2";
// import case2 from "./pages/articleCase_2";
// import case3Page from "./pages/articleCase3";
// import case3 from "./pages/articleCase_3";
// import case4Page from "./pages/articleCase4";
// import case4 from "./pages/articleCase_4";
// import larryPage from "./pages/articleLarry";
// import vectorPage from "./pages/articleVector";
// import darumaPage from "./pages/articleDaruma";
// import dailyUiPage from "./pages/articleDailyUi";
// import portfolioPage from "./pages/articlePortfolio";
// import NoMatch from "./components/NoMatch";
// import TouchStartListener from "./components/TouchStartListener";
// import { ParallaxProvider } from "react-scroll-parallax";

// function App() {
//   return (
//     <ParallaxProvider>
//       <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
//         <Switch>
//           <Route path="/" component={Home} exact />
//           <Route path="/case1Page" component={case1Page} exact />
//           <Route path="/case1" component={case1} exact />
//           <Route path="/case2Page" component={case2Page} exact />
//           <Route path="/case2" component={case2} exact />
//           <Route path="/case3Page" component={case3Page} exact />
//           <Route path="/case3" component={case3} exact />
//           <Route path="/case4Page" component={case4Page} exact />
//           <Route path="/case4" component={case4} exact />
//           <Route path="/larryPage" component={larryPage} exact />
//           <Route path="/vectorPage" component={vectorPage} exact />
//           <Route path="/darumaPage" component={darumaPage} exact />
//           <Route path="/portfolioPage" component={portfolioPage} exact />
//           <Route path="/dailyUiPage" component={dailyUiPage} exact />
//           <Route path="*" component={NoMatch} />
//           <TouchStartListener />
//         </Switch>
//       </BrowserRouter>
//     </ParallaxProvider>
//   );
// }

// export default App;
