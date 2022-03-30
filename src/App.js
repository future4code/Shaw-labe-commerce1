import React from 'react';
import Filtro from './componentes/Filtro/Filtro';
import Carrinho from './componentes/Carrinho/Carrinho';
import Produtos from './componentes/Produtos/Produtos';
import { ListaDeProdutos } from './listaProdutos';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100vh ;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  
`

export default class App extends React.Component{
  state = {
    listaDeCarrinho:ListaDeProdutos.filter(produto => produto.quantidade!==0),
    selecCrescente:"",
    selecDecrescente:"",
    inputMax:"",
    inputMin:"",
    buscaPorNome:""
  }
  componentDidMount(){
    const produtosSalvosCarrinho = JSON.parse(localStorage.getItem("listaDeCarrinho"));
    produtosSalvosCarrinho.length && this.setState({ listaDeCarrinho: produtosSalvosCarrinho })
  }
  componentDidUpdate(prevProps,prevState){
    if (prevState.listaDeCarrinho !== this.state.listaDeCarrinho) {
      localStorage.setItem("listaDeCarrinho", JSON.stringify(this.state.listaDeCarrinho));
    }  
  }
  removerProdutoCarrinho = (id) => {
    let copiaListaCarrinho = [...this.state.listaDeCarrinho]
    let indexProduto = copiaListaCarrinho.findIndex(produto => produto.id===id) 
    copiaListaCarrinho.splice(indexProduto,1)
    this.setState({listaDeCarrinho: copiaListaCarrinho})
  }
  render(){

    return (
      <MainContainer>
        <Filtro 
        />
        <Produtos 
        />
        <Carrinho
          listaCarrinho={this.state.listaDeCarrinho} 
          removerProdutoCarrinho={this.removerProdutoCarrinho}
        />
      </MainContainer>
    );
  }
}