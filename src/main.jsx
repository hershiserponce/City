import React from "react";
import ReactDOM from "react-dom/client";
import { CityApp } from "./CityApp";
import { BrowserRouter } from "react-router-dom";
// import './css/styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CityApp />
    </BrowserRouter>
  </React.StrictMode>
);
