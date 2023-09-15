import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <ParallaxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById("root")
);
