import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  grid-area: main;
  height: 100%;
  width: 100%;
  border: 2px solid black;
  display: flex;
  flex-flow:column nowrap;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:5px;
  border: 1px solid black;
`;
const CardContainer = styled.div`
  max-width: 33%;
  border: 1px solid white;
  text-align: center;
  img {
    display: flex;
    width: 95%;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow: auto;
  flex:none;
  flex-flow:column nowrap;
  overflow-y: scroll;
  height: 100%;
`
const Header = styled.div`
display: flex;
flex-direction: rows ;
justify-content: center;
margin-top:5px;
gap:100px;
`
export default class Produto extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

  getFiltrar = () => {
    return this.props.ListaDeProdutos
      .filter((produto) => produto.valor > this.props.inputMin)
      .filter((produto) => produto.valor < this.props.inputMax)
      .filter((produto) => produto.nome.includes(this.props.buscaPorNome))
  }

  getOrdenar = () => {
    return this.props.ListaDeProdutos

      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
  }
  onChangeSort = (event) => {
    this.setState({ sort: event.target.value })
  }
  render() {
    const filtrarProd = this.getFiltrar()
    const ordenarProd = this.getOrdenar()

    let renderProdutos;
    let mostrarProdutos;
    { filtrarProd.length ? mostrarProdutos = filtrarProd : mostrarProdutos = this.props.ListaDeProdutos }
    renderProdutos = mostrarProdutos.map((produto) => {

      return (
        <CardContainer key={produto.id}>
          {/* <img src={produto.imagem} /> */}
          <h2> {produto.nome}</h2>
          <h3>Valor R$:{produto.valor}</h3>
          <p>quantidade: {produto.quantidade}</p>
          <addProdutoBotão
            onClick={() => this.props.addProdutoCarrinho(produto.id)}
          >
            Adicionar ao Carrinho
          </addProdutoBotão>
        </CardContainer>
      );
    });

    return (
      <MainContainer>
        <ScrollContainer>
          <Header>
            Quantidade de Produtos:  {mostrarProdutos.length}
            <label>
              Ordenação:
              <select value={this.state.sort} onChange={this.onChangeSort}>
                <option value={"CRESCENTE"}>Crescente</option>
                <option value={"DECRESCENTE"}>Decrescente</option>
              </select>
            </label>
          </Header>
          <ContainerProdutos>{renderProdutos}</ContainerProdutos>
        </ScrollContainer>
      </MainContainer>
    );
  }
}
