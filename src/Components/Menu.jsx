import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PercentHabitsContext } from './../Providers/PercentHabits';

import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function Menu(){

    const Navigator = useNavigate();
    const {percent} = React.useContext(PercentHabitsContext);

    return(
        <MainMenu>
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
    )
}

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