import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // https://upmostly.com/tutorials/why-is-my-useeffect-hook-running-twice-in-react
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
