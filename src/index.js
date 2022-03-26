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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
