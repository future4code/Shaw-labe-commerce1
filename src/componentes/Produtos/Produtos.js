import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  grid-area: main;
  height: 100%;
  width: 100%;
  border: 2px solid black;
  display: flex;
  flex-flow:column nowrap;
  background-color: black;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid black;
  padding: 5px;
 justify-content: center;
`;

const CardContainer = styled.div`
  max-width: 31%;
  height: 14%;
  text-align: center;
  background-image: linear-gradient(to top, darkblue,blueviolet,blue, rgb(228, 60, 161));
  margin: 7px;
  color:white;
  box-shadow: 5px 7px 5px #323638;

  h2,p{
    text-shadow: 10px 10px 5px blue;
  }
  p{
    font-size: 0.9em;
  }
  h2{
    font-size: 1.3rem;
   
  }

  h3{
    font-size: 1.1rem;
    color:orange;
    font-weight:bold;
   
  }
  img {
    display: flex;
    width: 95%;
    height: 55%;
    border: 2px solid black;
    margin:0 auto;
    margin-top:5px;
    background-size: cover;
  }
`;

const ProdutoBotao = styled.button`
  cursor: pointer;
  border:none;
  outline: none;
  border-radius: 5px;
  color:white;
  padding: 10px;
  background:black;
  margin-top: 5%;

  :hover{
    background-image: linear-gradient(to right, black,darkblue,blueviolet, rgb(228, 60, 161,0.5))
  }
`

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
          <img src={produto.imagem} />
          <h2> {produto.nome}</h2>

          <h3>R$ {produto.valor.toFixed(2).replace('.',',')}</h3>
          <p>{produto.parcelas}</p>
          <ProdutoBotao
            onClick={() => this.props.addProdutoCarrinho(produto.id)}
          >
            Adicionar ao Carrinho
          </ProdutoBotao>

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
