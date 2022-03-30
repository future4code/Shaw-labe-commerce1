import React from 'react';
import styled from 'styled-components';
import iconeCarrinho from './carrinho-de-compras.png'

const MainContainer = styled.div`
  height: 90%;
  width: 20%;
  border:2px solid black;
  margin-right: 10px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const ListaProdutos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  
`
const ItemProduto = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
const Button = styled.button`
  cursor: pointer;
  border:none;
  outline: none;
  border-radius: 5px;
  color:white;
  /* font-weight: bold; */
  padding: 5px;
  background-image: linear-gradient(to right, darkblue,blueviolet, rgb(228, 60, 161));
  /* background-image: linear-gradient(to right, darkblue,blueviolet); */
`
const Img = styled.img`
  width: 15%;
`
const TituloCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:5px;
`

export default class Carrinho extends React.Component{
  render(){
    let listaProdutoCarrinho;
    listaProdutoCarrinho = this.props.listaCarrinho.map((produto)=>{
      return(
        <ItemProduto key={produto.id}>
          <p>{produto.quantidade}</p>
          <p>{produto.nome}</p>
          <Button onClick={()=>this.props.removerProdutoCarrinho(produto.id)}>Remover</Button>
        </ItemProduto>
      )
    });
    let valorTotal = 0;
    this.props.listaCarrinho.forEach(element => {
      valorTotal = valorTotal + element.valor*element.quantidade
    });

    return (
      <MainContainer>
        <TituloCarrinho>
          <Img src={iconeCarrinho} />
          <h3>Carrinho:</h3>
        </TituloCarrinho>
        <ListaProdutos>
          {listaProdutoCarrinho}
        </ListaProdutos>
        <p>Valor total: R${valorTotal},00</p>
      </MainContainer>
    );
  }
}