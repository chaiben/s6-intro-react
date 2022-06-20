export default function Intro(props){
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={props.handerClick}>Seguir</button>
    </div>
  );
}