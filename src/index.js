import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppRedux from "./AppRedux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import FirstApp from "./Apps/Tests/FirstApp";
import HomeWork from "./Apps/HomeWork/HomeWork";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Provider store={store}>
        <AppRedux />
      </Provider>
      <FirstApp />

      <HomeWork />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
