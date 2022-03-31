import React from 'react';
import Filtro from './componentes/Filtro/Filtro';
import Carrinho from './componentes/Carrinho/Carrinho';
import Produtos from './componentes/Produtos/Produtos';
import { ListaDeProdutos } from './listaProdutos';
import styled,{createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar{
    width: 5px;
    height:50px;
  }
  *::-webkit-scrollbar-thumb{
    background-image: linear-gradient(to top, darkblue,blueviolet, rgb(228, 60, 161));
  }
`
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
    produtosSalvosCarrinho && this.setState({ listaDeCarrinho: produtosSalvosCarrinho })
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
  onChangeInputMin=(event) =>{
    this.setState({inputMin:event.target.value})
 }

 onChangeInputMax=(event) =>{
   this.setState({inputMax:event.target.value})
} 
onChangeBuscaPorNome=(event) =>{
 this.setState({buscaPorNome:event.target.value})
}
 render(){
   return (
     <MainContainer>
       <Filtro 
       inputMin={this.state.inputMin}
       inputMax={this.state.inputMax}
       buscaPorNome={this.state.buscaPorNome}
       onChangeInputMin={this.onChangeInputMin}
       onChangeInputMax={this.onChangeInputMax}
       onChangeBuscaPorNome={this.onChangeBuscaPorNome}
       />
        <Produtos 
        ListaDeProdutos = {ListaDeProdutos}
        />
        <Carrinho
          listaCarrinho={this.state.listaDeCarrinho} 
          removerProdutoCarrinho={this.removerProdutoCarrinho}
        />

        <GlobalStyle/>
      </MainContainer>
    );
  }
}