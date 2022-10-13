import Carro from "./Carro";

function Garagem(props) {
console.log(props)
  return (
    <div>
      <h1>Garagem do {props.nome}</h1>
      <button onClick={props.mensagemApres}>Mensagem</button>.
      <Carro
        marca={"Hillux"}
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"} />
      <Carro
        marca={"Tesla"}
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"true"} />
      <Carro
        marca={"Santana"}
        adicionadoPor={props.nome}
        cor={"Azul"}
        ano={1999}
        flex={"false"} />
      <Carro
        marca={"Passat"}
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={1979}
        flex={"false"} />
        <Carro
        marca={"Passat"}
        adicionadoPor={props.nome}
        cor={"Prata"}
        ano={1979}
        flex={"false"} />
        <Carro
        marca={"Passat"}
        adicionadoPor={props.nome}
        cor={"Preto"}
        ano={1979}
        flex={"false"} />
        <Carro
        marca={"Passat"}
        adicionadoPor={props.nome}
        cor={"Cor de Burro quando foge"}
        ano={1979}
        flex={"false"} />
        <Carro
        marca={"Passat"}
        adicionadoPor={props.nome}
        cor={"Laranja"}
        ano={1979}
        flex={"false"} />
    </div>
  );
}

export default Garagem;
