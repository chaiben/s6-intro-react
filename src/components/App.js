import React from "react";
// Components
import { dataPhrase } from "../data";
import Intro from "./Intro";
import Escena from "./Escena";
import { Container } from "./style";

export default function App(){
  const [introPage, setIntroPage] = React.useState(true);
  const [phraseOn, setPhraseOn] = React.useState(0);
  const backgroundImg = dataPhrase[phraseOn].img;

  function changeMessage(value){
    setPhraseOn(prevPhraseOn => 
      (prevPhraseOn + value >= dataPhrase.length || prevPhraseOn + value < 0) ? 
      prevPhraseOn : 
      prevPhraseOn + value
      )
  }

  function startApp() {
    setIntroPage(false);
  };

  return (
    <Container img={backgroundImg}>
      {introPage && <Intro handerClick={startApp} />}
      {!introPage && 
      <Escena 
        phrases={dataPhrase} 
        changeMessage={changeMessage} 
        phraseOn={phraseOn} />}
    </Container>
  );
}