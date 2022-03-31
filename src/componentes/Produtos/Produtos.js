import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 90%;
  width:60%;
  border:2px solid black;
`

export default class Produto extends React.Component{
  state={
      sort:"DECRESCENTE"
  }
  
      getFiltraLista=()=>{
  return this.props.produtos
  .filter((produto)=>produto.preco>this.props.inputMin)
  .filter((produto)=>produto.preco<this.props.inputMax)
  .filter((produto)=>produto.nome.includes(this.props.buscaPorNome))
  .sort((a,b) => this.state.sort==="CRESCENTE" ? a.preco-b.preco :b.preco-a.preco)
  
  
      }
  
      render() {
  
          return (            
  <MainContainer>
                  
      <label> Ordenação:
        <select value={this.state.sort}>
          <option value={"CRESCENTE"}>Crescente</option>
          <option value={"DECRESCENTE"}>Decrescente</option>
        </select>
      </label>
      </MainContainer>
      
          )
      }
      }