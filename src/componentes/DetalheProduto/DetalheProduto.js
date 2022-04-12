import React from "react";
import styled from "styled-components";

const ContaineDetalhes = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto;
    grid-template-areas: 
    'imagem info'
    'imagem info'
    'perguntas tabela';
    color: white;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 5px;
    }
`
const Tabela = styled.div`
    width: 90%;
    grid-area:tabela;
    padding: 10px;
`
const ImgTamanhos = styled.img`
    width: 100%;
`
const Lateral = styled.div`
    width: 100%;
    grid-area:imagem;
`
const ImgProduto = styled.img`
    width: 80%;
    border: double 3px transparent;
    border-radius: 0px 20px;
    background-image: linear-gradient(white, white), linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin: 20px;
`
const TopInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    >p{
        cursor: pointer;
    }

`
const Infos = styled.div`
    height: 100%;
    width: 100%;
    grid-area:info;
    margin-top: 20px;
    padding-right: 30px;
    >span{
        color: darkgray;
    }
    button{
        cursor: pointer;
        border:none;
        outline: none;
        border-radius: 5px;
        color:white;
        padding: 5px;
        background-image: linear-gradient(to right,black, darkblue,blueviolet, rgb(228, 60, 161));
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 7px;
    button{
        font-size: 5px;
        padding: 2px;
        border-radius: 2px;
    }
    }
`
const Perguntas = styled.div`
    width: 100%;
    height: 100%;
    grid-area:perguntas;
    padding: 10px;
    display: flex;
    flex-direction: column;
    button{
        cursor: pointer;
        border:none;
        outline: none;
        border-radius: 5px;
        color:white;
        padding: 5px;
        background-image: linear-gradient(to right,black, darkblue,blueviolet, rgb(228, 60, 161));
        width: 50%;
        margin:5px auto;
    }
    div{
        display: flex;
        flex-direction: column;
        gap:5px;
        padding-top: 5px;

        input{
            outline: none;
            border: none;
            padding: 5px;
            border-radius:0px 5px;
            border-bottom:2px solid blueviolet;
            background-color: rgb(43, 43, 47);
            color:rgb(228, 60, 161);
        }
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    
    h1{
        font-size: 7px;
    }
    div{
        input{
            font-size: 7px;
            padding: 2px;
        }

    }
    button{
        font-size: 5px;
        padding: 2px;
        border-radius: 2px;
    }
    }
`
const Politicas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: auto;
    padding-bottom: 10px;
    border-bottom:1px solid;
    border-image:linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue, black )1;
`
const PoliticasItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: blueviolet;
    height: 100%;
    
    p{
        font-size: 9px;
    }
    img{
        height:40px;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        img{
            height:20px ;
        }
        p{
            font-size: 5px;
        }
    }
`
const Marca = styled.p`
    cursor: pointer;
    color:blueviolet;
    span{
        font-weight:bold;
    }
`
const Cor = styled.p`
    color:white;
    padding: 5px 2px;
    span{
        font-weight:bold;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 5px;

    }
`
const Preco = styled.p`
    color:rgb(233, 86, 86);
    font-size: 18px;
    padding:0px 15px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 7px; 
    }
    
`
const Label = styled.label`
    padding:5px 2px; 
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 5px;
    }
`
const Select = styled.select`
    background-color: rgb(43, 43, 47);
    color: white;
    border-image:linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue, black )1;
    outline: none;
    padding: 0px 2px;
    margin-left: 2px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 5px;
    }

`
const Titulo = styled.p`
    cursor: pointer;
    color:rgb(228, 60, 161);
    font-size: 20px;
    padding: 10px 2px;
    border-bottom:1px solid;
    border-image:linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue, black )1;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 9px;
    }
`
const ScrollContainer = styled.div`
  display:flex;
  overflow: auto;
  flex: none;
  flex-flow: column nowrap;
  overflow-y: scroll;
  height:100% ;
`
const MainContainer = styled.div`
  height: 100% ;
  display:flex;
  flex-flow:column nowrap;
  
`
const Span = styled.div`
  color: rgb(228, 60, 161);
`
const ContainerTamano = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        gap:2px;
    }
`

export default class DetalheProduto extends React.Component {
    state = {
        comentarios: [
            {
                user: 'lay',
                comentario: 'Quanto tempo para entregar no sertão da paraíba?'
            },
            {
                user: 'rani',
                comentario: 'Não tem na cor preta?'
            },
            {
                user: 'silvia',
                comentario: 'Dá pra retirar direto na loja?'
            },
        ],
        inputUser: '',
        inputComentario: '',
    }
    onChangeUser = (event) => {
        this.setState({ inputUser: event.target.value })
    }
    onChangeComentario = (event) => {
        this.setState({ inputComentario: event.target.value })
    }
    onClickEnviar = () => {
        const novoComentario = [... this.state.comentarios]
        novoComentario.push({
            user: this.state.inputUser,
            comentario: this.state.inputComentario
        })
        this.setState({
            comentarios: novoComentario,
            inputComentario: '',
            inputUser: ''
        })
    }
    render() {
        let render = this.state.comentarios.map((coment) => {
            return (
                <div>
                    <p><Span>{coment.user}:</Span> {coment.comentario}</p>
                </div>
            )
        })
        return (
            <MainContainer>
                <ScrollContainer>
                    <ContaineDetalhes>
                        <Lateral>
                            <ImgProduto src={this.props.produto.imagem} />
                        </Lateral>
                        <Infos>
                            <TopInfos>
                                <Marca><span>Marca:</span> {this.props.produto.loja}</Marca>
                                <p onClick={this.props.verMenos}>Voltar à página principal</p>
                            </TopInfos>
                            <Titulo>{this.props.produto.nome}</Titulo>

                            <span>Por:</span><Preco>R$ {this.props.produto.valor}</Preco>
                            <Politicas>
                                <PoliticasItem>
                                    <img src={'https://images-na.ssl-images-amazon.com/images/G/32/A2I-Convert/mobile/IconFarm/icon-payments-and-security._CB643514857_.png'} alt={"Pagamentos e segurança"} />
                                    <p>Pagamentos e Segurança</p>
                                </PoliticasItem>
                                <PoliticasItem>
                                    <img src={'https://images-na.ssl-images-amazon.com/images/G/32/A2I-Convert/mobile/IconFarm/icon-returns._CB406595335_.png'} alt={"Política de devolução"} />
                                    <p>Política de Devolução</p>
                                </PoliticasItem>
                            </Politicas>
                            <Cor><span>Cor:</span> {this.props.produto.cor}</Cor>
                            <ContainerTamano>
                                <Label>Tamanho:</Label>
                                <Select>
                                    <option value={''}>Selecione</option>
                                    <option value={'PP'}>PP</option>
                                    <option value={'P'}>P</option>
                                    <option value={'M'}>M</option>
                                    <option value={'G'}>G</option>
                                    <option value={'GG'}>GG</option>
                                    <option value={'3G'}>3G</option>
                                </Select>

                                <button onClick={() => { this.props.addProdutoCarrinho(this.props.produto.id) }}>Adicionar ao carrinho</button>
                            </ContainerTamano>
                        </Infos>
                        <Tabela>
                            <ImgTamanhos src="https://images.tcdn.com.br/img/editor/up/760957/LaMaglia_SizeChart_1.jpg" />
                        </Tabela>
                        <Perguntas>
                            <h1>Dúvidas?</h1>
                            <div>
                                <input
                                    placeholder="Usuário"
                                    value={this.inputUser}
                                    onChange={this.onChangeUser} />
                                <input
                                    placeholder="Pergunta"
                                    value={this.inputComentario}
                                    onChange={this.onChangeComentario} />
                            </div>
                            <button onClick={this.onClickEnviar}>Enviar</button>
                            <div>
                                {render}
                            </div>
                        </Perguntas>

                    </ContaineDetalhes>
                </ScrollContainer>
            </MainContainer>
        )
    }
}