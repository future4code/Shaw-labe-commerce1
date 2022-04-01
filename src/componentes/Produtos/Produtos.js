import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 90%;
  width: 60%;
  border: 1px solid black;
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
  height: 20%;
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
