import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 90%;
  width: 60%;
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
export default class Produto extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

  getFiltraLista = () => {
    return this.props.produtos
      .filter((produto) => produto.preco > this.props.inputMin)
      .filter((produto) => produto.preco < this.props.inputMax)
      .filter((produto) => produto.nome.includes(this.props.buscaPorNome))
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.preco - b.preco : b.preco - a.preco
      );
  };

  render() {
    let renderProdutos;
    renderProdutos = this.props.ListaDeProdutos.map((produto) => {
      return (
        <CardContainer>
          <img src={produto.imagem} />
          <h2> {produto.nome}</h2>
          <h3>Valor R$:{produto.valor}</h3>
          <p>quantidade: {produto.quantidade}</p>
          <addProdutoBotao
            onClick={() => this.props.addProdutoCarrinho(produto.id)}
          >
            Adicionar ao Carrinho
          </addProdutoBotao>
        </CardContainer>
      );
    });

    return (
      <MainContainer>
        <ScrollContainer>
          <label>
            {" "}
            Ordenação:
            <select value={this.state.sort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>

          <ContainerProdutos>{renderProdutos}</ContainerProdutos>
        </ScrollContainer>
      </MainContainer>
    );
  }
}
