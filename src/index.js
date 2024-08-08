import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.render(
  <ParallaxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ParallaxProvider>,
  document.getElementById("root")
);
