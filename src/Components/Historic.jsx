import React from "react"
import styled from "styled-components"
import { UserDataContext } from "../Providers/UserData";
import { useNavigate } from "react-router-dom";
import { PercentHabitsContext } from './../Providers/PercentHabits';

import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Historic(){

    const {UserData} = React.useContext(UserDataContext);
    const {percent} = React.useContext(PercentHabitsContext);
    const Navigator = useNavigate();

    return(
        <Container>
            <Head data-test="header">
                <Titleheader>TrackIt</Titleheader>
                <Profile src={UserData.image} />
            </Head>
            
            <MainMenu data-test="menu">
                <SideButton onClick={() => Navigator("/habitos")}  data-test="habit-link" >
                    Hábitos
                </SideButton>
                <MidButton data-test="today-link" onClick={() => Navigator("/hoje")} >
                    <CircularProgressbar
                        value={percent}
                        text={`Hoje`}
                        background
                        backgroundPadding={1}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </MidButton>
                <SideButton onClick={() => Navigator("/historico")}  data-test="history-link" >
                    Histórico
                </SideButton>
            </MainMenu>
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

////////////////////////////////


const MainMenu = styled.div`
    display: flex;
    width: 100vw;
    height: 70px;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;

    position: fixed;
    bottom: 0;
    left: 0;
`

const SideButton = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;

    border: none;
    background-color: transparent;
`

const MidButton = styled.button`
    background-color: #52B6FF;
    width: 90px;
    height: 90px;
    color: #FFFFFF;
    position: relative;
    bottom: 35%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;

    border: none;
    border-radius: 100%;
`