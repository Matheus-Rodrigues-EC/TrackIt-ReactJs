import React from "react"
import styled from "styled-components"
// import axios from "axios";
// import { UserDataContext } from "../Providers/UserData";
import Header from "./Header";
import Menu from "./Menu";

export default function Historic(){

    // const {UserData} = React.useContext(UserDataContext);

    return(
        <Container>
            <Header data-test="header" />
            
            <Menu data-test="menu" />
        </Container>
    )
}


const Container = styled.section`
    display: flex;
    background-color: #E7E7E7;
    flex-direction: column;
    padding: 70px 0 70px 0;
    width: 100vw;
    height: 100vh;
    
`