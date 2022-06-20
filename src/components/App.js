import React from "react";
// Components
import { dataPhrase } from "../data";
import Intro from "./Intro";
import Escena from "./Escena";

export default function App(){
  const [introPage, setIntroPage] = React.useState(true);
  
  function startApp() {
    setIntroPage(false);
  };

  return (
    <div className="container">
      {introPage && <Intro handerClick={startApp} />}
      {!introPage && <Escena phrases={dataPhrase} />}
    </div>
  );
}