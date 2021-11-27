import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    <GlobalStyle />
    <ToastContainer />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
