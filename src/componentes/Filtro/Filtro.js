import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  grid-area: sidebar;
  height: 100%;
  background-image: url('https://img.myloview.com.br/quadros/ceu-estrelado-700-58364744.jpg');
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  color:white;
  h1{
    font-size: 16px;
  }

`
const Input = styled.input`
    outline: none;
    border: double 2px transparent;
    height: 2rem;

    :focus{
      background-image: linear-gradient(white, white), linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
`
const InputContainer = styled.label`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-bottom:8px;
`




export default class Filtro extends React.Component {

  render() {
    return (
      <MainContainer>
        <h3> Filtros</h3>

        Valor Mínimo
        <InputContainer>
          <Input type="number"
            value={this.props.inputMin}
            onChange={this.props.onChangeInputMin}
          />
        </InputContainer>
        <p></p>

        Valor Máximo
        <InputContainer>
          <Input type="number"
            value={this.props.inputMax}
            onChange={this.props.onChangeInputMax}
          />
        </InputContainer>
        <p></p>
        Busca por nome
        <InputContainer>

          <Input type="text"
            value={this.props.buscaPorNome}
            onChange={this.props.onChangeBuscaPorNome}

          />
        </InputContainer>
      </MainContainer>
    )
  }

}
