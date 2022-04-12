import React from "react";
import './styles/global.css';
interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>High</h1>
      <Title text="Entregue em qualquer lugar" />
      <Title text="Cadastre-se e começe a usar" />
      <Title text="Um market place com Avaliação de seus usuarios" />
    </div>
  );
}

export default App;
