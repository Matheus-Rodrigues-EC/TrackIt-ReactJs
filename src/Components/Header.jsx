import styled from "styled-components"
import React from "react";
import { UserDataContext } from "../Providers/UserData";

export default function Header(){

    const {UserData} = React.useContext(UserDataContext);

    return (
        <Head data-test="header">
            <Titleheader>TrackIt</Titleheader>
            <Profile src={UserData.image} />
        </Head>
    )
}


const Head = styled.div`
    background-color:#126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
`

const Titleheader = styled.h1`
    font-family: 'Playball', cursive;
    font-weight: 400;
    color: #FFFFFF;
    padding: 0 20px;
    box-sizing: border-box;
    
`

const Profile = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0 20px;
`