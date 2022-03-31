import React from 'react';
import styled from 'styled-components';
import img from './fundo1.jpg';

const MainContainer = styled.div`
  height: 90%;
  width: 20%;
  border:2px solid black;
  margin-right: 10px;
  background-image: url(${img});
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const InputContainer=styled.label`
display:flex;
flex-direction:column;
align-items:flex-start;
margin-bottom:8px;
`




export default class Filtro extends React.Component{

render() {
return(
<MainContainer>
 <h3> Filtros</h3>

 Valor Mínimo
<InputContainer>

      
      
        <input type="number"
        value={this.props.inputMin}    
        onChange={this.props.onChangeInputMin}   
        />
        </InputContainer>
        <p></p>
        Valor Máximo
        <InputContainer>
        
        
        
                <input type="number"
        value={this.props.inputMax}  
        onChange={this.props.onChangeInputMax}   

        />
        </InputContainer>
        <p></p>
        Busca por nome
        <InputContainer>
       
        <input type="text" 
        value={this.props.buscaPorNome}  
        onChange={this.props.onChangeBuscaPorNome}   

        />
        </InputContainer>
        </MainContainer>
)
}

}
