import React from "react";
import { P, Menu } from "./style";

export default function Escena(props){
  const phrases = props.phrases.map(
    (phrase, index) => {
      const className = index === props.phraseOn ? "phrase selected" : "phrase";
    return <P 
      className= {className} 
      key={`phrase${index}`} 
      id={`phrase${index}`} 
      data-img={phrase.img}
      >{phrase.txt}</P>
    });

  return (
    <div>
      <Menu>
        <button onClick={() => props.changeMessage(-1)}>Anterior</button>
        <button onClick={() => props.changeMessage(+1)}>Siguiente</button>
      </Menu>
      {phrases}
    </div>
  );
}