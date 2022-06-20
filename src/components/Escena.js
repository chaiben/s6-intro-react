import React from "react";

export default function Escena(props){
  return (
    props.phrases.map(phrase => <p key={phrase}>{phrase}</p>)
  );
}