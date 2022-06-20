import React from "react";
import { P, Menu } from "./style";

export default function Escena(props){
  const [phraseOn, setPhraseOn] = React.useState(0);

  function changeMessage(value){
    setPhraseOn(prevPhraseOn => 
      (prevPhraseOn + value >= phrases.length || prevPhraseOn + value < 0) ? 
      prevPhraseOn : 
      prevPhraseOn + value
      )
  }

  const phrases = props.phrases.map(
    (phrase, index) => {
      const className = index === phraseOn ? "phrase selected" : "phrase";
    return <P 
      className= {className} 
      key={`phrase${index}`} 
      >{phrase}</P>
    });

  return (
    <div>
      <Menu>
        <button onClick={() => changeMessage(-1)}>Anterior</button>
        <button onClick={() => changeMessage(+1)}>Siguiente</button>
      </Menu>
      {phrases}
    </div>
  );
}