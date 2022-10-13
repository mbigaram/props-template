import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Ammal"
  const nome2 = "Marcelo"
  function apresentaGaragem(){
    alert(`Boas vindas a garagem da ${nome}`);
  }
  function apresentaGaragem2(){
    alert(`Boas vindas a garagem d0 ${nome2}`);
  }
  return (
    <div className="App">
      <Garagem nome={nome}mensagemApres ={apresentaGaragem}/>
      <Garagem nome={nome2}
      mensagemApres = {apresentaGaragem2}/>
    </div>
  );
}
