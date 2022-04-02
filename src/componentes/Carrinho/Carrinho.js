import React from "react";
import styled from "styled-components";
import iconeCarrinho from "../../carrinho-de-compras.png";
import astronauta from "../img/imagem-astronauta.png";

const MainContainer = styled.div`
  grid-area: sidebarright;
  height: 100%;
  padding: 15px 5px;
  background-image: url("https://img.myloview.com.br/quadros/ceu-estrelado-700-58364744.jpg");
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgAstronauta = styled.img`
  width: 15%;
  position: absolute;
  bottom: 0;
`;
const ScrollContainer = styled.div`
   display: flex;
  flex-flow:column nowrap;
  max-height: 60%;
  margin-bottom: 20px;
`;
const ListaProdutos = styled.div`
  display: flex;
  overflow: auto;
  flex:none;
  flex-flow:column nowrap;
  overflow-y: scroll;
  height: 100%;
  align-items: center;
  gap: 5px;
`;
const ItemProduto = styled.div`
  display: grid;
  grid-template-columns: 5% 60% 30%;
  padding: 5px;
  gap: 5px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-size: 13px;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 12px;
  background-image: linear-gradient(
    to right,
    darkblue,
    blueviolet,
    rgb(228, 60, 161)
  );
`;
const Img = styled.img`
  width: 15%;
`;
const TituloCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  h3 {
    font-size: 16px;
  }
`;

export default class Carrinho extends React.Component {
  render() {
    let listaProdutoCarrinho;
    const filteredArray = this.props.listaCarrinho.filter((ele, pos) => {
      return this.props.listaCarrinho.indexOf(ele) === pos;
    });
    listaProdutoCarrinho = filteredArray.map((produto) => {
      return (
        <ItemProduto key={produto.id}>
          <p>{produto.quantidade}</p>
          <p>{produto.nome}</p>
          <Button onClick={() => this.props.removerProdutoCarrinho(produto.id)}>
            Remover
          </Button>
        </ItemProduto>
      );
    });
    let valorTotal = 0;
    filteredArray.forEach((element) => {
      valorTotal = valorTotal + element.valor * element.quantidade;
    });

    return (
      <MainContainer>
        <TituloCarrinho>
          <Img src={iconeCarrinho} />
          <h3>Carrinho:</h3>
        </TituloCarrinho>
        <ScrollContainer><ListaProdutos>{listaProdutoCarrinho}</ListaProdutos></ScrollContainer>
        <p>Valor total: R${valorTotal.toFixed(2).replace(".", ",")}</p>
        <ImgAstronauta src={astronauta} />
      </MainContainer>
    );
  }
}
