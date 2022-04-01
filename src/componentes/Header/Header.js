import React from "react";
import styled from'styled-components'

const HeaderCss = styled.header`
    grid-area: header;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color:blueviolet;
    padding: 15px;
    border-bottom: 1px solid;
    border-image:linear-gradient(45deg,rgb(228, 60, 161),blueviolet,darkblue, black )1;
    background-color: black;
    p{
        font-size: 20px;
        font-weight: bold;
    }
`
export default class Header extends React.Component{
    render(){
        return(
            <HeaderCss>
                <p>Store</p>
            </HeaderCss>
        )
    }
}