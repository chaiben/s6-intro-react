import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";

// Components
import { dataPhrase } from "./data";
import Escena from "./components/Escena";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <Escena phrases={dataPhrase} />
  </div>
);