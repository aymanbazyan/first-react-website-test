import React from "react";
import ReactDOM from "react-dom/client";

import * as model from "./model";

import App from "./components/App";
import "./styles/main.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
