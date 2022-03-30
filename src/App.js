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
    listaDeCarrinho:"",
    selecCrescente:"",
    selecDecrescente:"",
    inputMax:"",
    inputMin:"",
    buscaPorNome:""
  }
  
  render(){
    return (
      <MainContainer>
        <Filtro 
        />
        <Produtos 
        />
        <Carrinho 
        />
      </MainContainer>
    );
  }
}