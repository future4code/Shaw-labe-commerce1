import React from "react";
import Filtro from "./componentes/Filtro/Filtro";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Produtos from "./componentes/Produtos/Produtos";
import { ListaDeProdutos } from "./listaProdutos";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./componentes/Header/Header";
import DetalheProduto from "./componentes/DetalheProduto/DetalheProduto";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0px;
    margin: 0px;
    box-sizing:border-box;
    text-decoration:none;
}
  *::-webkit-scrollbar{
    width: 5px;
    height:5px;
  }
  *::-webkit-scrollbar-thumb{
    background-image: linear-gradient(to top, darkblue,blueviolet, rgb(228, 60, 161));
    
    border-radius: 5px;
  }
  body{
    /* background-color: rgb(46, 45, 45); */
    background-color: black;
    color: white;
    
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    *::-webkit-scrollbar{
    width: 1px;
    height:1px;
  }
  }
`;
const MainContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: main;
`;
const Borda = styled.div`
  border-left: 1px solid;
  border-right: 1px solid;
  border-top: 1px solid;
  border-image: linear-gradient(
      45deg,
      rgb(228, 60, 161),
      blueviolet,
      darkblue,
      black
    )
    1;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 2.6fr 0.7fr;
  grid-template-rows: 10% 90%;
  align-items: center;

  grid-template-areas: ${({ detalheProduto }) =>
    detalheProduto
      ? `"header header header"
     "main main sidebarright"`
      : `"header header header"  
     "sidebar main sidebarright"`
  };
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    grid-template-columns: 25vw 50vw 25vw;
  }
`;

export default class App extends React.Component {
  state = {
    listaDeCarrinho: [],
    selecCrescente: "",
    selecDecrescente: "",
    inputMax: "",
    inputMin: "",
    buscaPorNome: "",
    listaDeProdutos: ListaDeProdutos,
    detalheProduto: false,
    idVerMais: "",
  };
  componentDidMount() {
    const produtosSalvosCarrinho = JSON.parse(
      localStorage.getItem("listaDeCarrinho")
    );
    produtosSalvosCarrinho &&
      this.setState({ listaDeCarrinho: produtosSalvosCarrinho });
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.listaDeCarrinho !== this.state.listaDeCarrinho) {
      localStorage.setItem(
        "listaDeCarrinho",
        JSON.stringify(this.state.listaDeCarrinho)
      );
    }
  }
  removerProdutoCarrinho = (id) => {
    let copiaListaCarrinho = [...this.state.listaDeCarrinho];
    let copiaListaProduto = [...this.state.listaDeProdutos];
    let indexProdutoCarrinho = copiaListaCarrinho.findIndex(
      (produto) => produto.id === id
    );
    let indexProduto = copiaListaProduto.findIndex(
      (produto) => produto.id === id
    );
    copiaListaProduto[indexProduto].quantidade -= 1;
    copiaListaCarrinho.splice(indexProdutoCarrinho, 1);
    this.setState({
      listaDeCarrinho: copiaListaCarrinho,
      listaDeProdutos: copiaListaProduto,
    });
  };
  addProdutoCarrinho = (id) => {
    let copiaListaCarrinho = [...this.state.listaDeCarrinho];
    let copiaListaProduto = [...this.state.listaDeProdutos];
    let indexProduto = copiaListaProduto.findIndex(
      (produto) => produto.id === id
    );
    copiaListaProduto[indexProduto].quantidade += 1;
    copiaListaCarrinho.push(copiaListaProduto[indexProduto]);
    this.setState({
      listaDeCarrinho: copiaListaCarrinho,
      listaDeProdutos: copiaListaProduto,
    });
  };

  onChangeInputMin = (event) => {
    this.setState({ inputMin: event.target.value });
  };

  onChangeInputMax = (event) => {
    this.setState({ inputMax: event.target.value });
  };
  onChangeBuscaPorNome = (event) => {
    this.setState({ buscaPorNome: event.target.value });
  };
  verMais = (id) => {
    let indice= ListaDeProdutos.findIndex((item)=>item.id===id)
    this.setState({
      idVerMais: indice,
      detalheProduto: true,
    });
   
   
  };
  verMenos = () => {
    this.setState({
      detalheProduto: false,
    });
  };
  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Borda detalheProduto={this.state.detalheProduto}>
          <Header />
          {this.state.detalheProduto ? (
            <Container>
              <DetalheProduto
                produto={ListaDeProdutos[this.state.idVerMais]}
                addCarrinho={this.adicionarProdutoCarrinho}
                verMenos={this.verMenos}
                addProdutoCarrinho={this.addProdutoCarrinho}
              />
            </Container>
          ) : (
            <>
              <Filtro
                inputMin={this.state.inputMin}
                inputMax={this.state.inputMax}
                buscaPorNome={this.state.buscaPorNome}
                onChangeInputMin={this.onChangeInputMin}
                onChangeInputMax={this.onChangeInputMax}
                onChangeBuscaPorNome={this.onChangeBuscaPorNome}
              />
              <Produtos
                ListaDeProdutos={ListaDeProdutos}
                inputMin={this.state.inputMin}
                inputMax={this.state.inputMax}
                buscaPorNome={this.state.buscaPorNome}
                verMais={this.verMais}
                addProdutoCarrinho={this.addProdutoCarrinho}
              />
            </>
          )}
          <Carrinho
            listaCarrinho={this.state.listaDeCarrinho}
            removerProdutoCarrinho={this.removerProdutoCarrinho}
          />
        </Borda>
      </MainContainer>
    );
  }
}
