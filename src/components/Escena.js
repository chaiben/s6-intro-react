import React from "react";

export default function Escena(props){
  return (
    props.phrases.map(phrase => <p className="phrase" key={phrase}>{phrase}</p>)
  );
}