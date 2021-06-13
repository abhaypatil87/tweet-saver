import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import storageWrapper from "./utils/storage";
import configureStore from "./store";
import App from "./App";
import { STORAGE_KEY } from "./config";

configureStore(storageWrapper.get(STORAGE_KEY));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
