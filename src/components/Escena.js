import React from "react";

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
    return <p 
      className= {className} 
      key={`phrase${index}`} 
      >{phrase}</p>
    });

  return (
    <div>
      <div className="menu">
        <button onClick={() => changeMessage(-1)}>Anterior</button>
        <button onClick={() => changeMessage(+1)}>Siguiente</button>
      </div>
      {phrases}
    </div>
  );
}