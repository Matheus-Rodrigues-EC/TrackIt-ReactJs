import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import { UserDataContext } from "../Providers/UserData";
import { useNavigate } from "react-router-dom";
import { PercentHabitsContext } from './../Providers/PercentHabits';
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Historic(){

    const {UserData} = React.useContext(UserDataContext);
    const {percent} = React.useContext(PercentHabitsContext);
    const [history, setHistory] = useState([]);
    const Navigator = useNavigate();

    useEffect(() => {
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        
        const config = {
            headers: {Authorization: `Bearer ${UserData.token}`}
        }

        const promisse = axios.get(Base_URL, config)
        promisse.then((response) => {
            console.log(response.data);
            setHistory(response.data);
        })
        promisse.catch((error) => {
            alert(error.response.data.message);
            Navigator('/');
            
        })

    }, [Navigator, UserData, history, setHistory]);
// Em breve você poderá ver o histórico dos seus hábitos aqui!
    return(
        <Container>
            <Head data-test="header">
                <Titleheader>TrackIt</Titleheader>
                <Profile src={UserData.image} />
            </Head>
            
            {(history.length === 0) ? (
                <>
                <Title>Histórico</Title>
                <NoHistory data-test="calendar">
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </NoHistory>
                </>
            ) : (
                <>
                <Title>Histórico</Title>
                <CalendarContainer>
                    <Calendar
                        calendarType="US"
                        onClickDay={(value, event) => alert('Clicked day: ', value)}
                        data-test="calendar"
                    />
                </CalendarContainer>
                </>
            ) }

            

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
    flex-direction: column;
    background-color: #E7E7E7;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    padding: 70px 20px 100px 20px;
    
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
    object-fit: cover;
    padding: 0 20px;
`

const Title = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
`

const NoHistory = styled.h2`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`

const CalendarContainer = styled.div`
    min-width: 300px;
    height: 400px;
    margin-top: 20px;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 15px;

    .react-calendar__navigation {
    display: flex;

        .react-calendar__navigation__label {
            font-weight: bold;
        }

        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
        }
    }

    .react-calendar__viewContainer{
        height: 400px;
    }

    .react-calendar__month-view__days {
        display: grid;
        grid-template-columns: center center center center center center center; 
        .react-calendar__tile {
            max-width: initial !important;
        }
    }

    .react-calendar__tile--now {
        background: #ffff76;
    }

    .react-calendar__div {
        border-radius: 10px;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.7;
    }

    .react-calendar__month-view__days{

    }

    .react-calendar__month-view__weekdays{
        text-align: center;
    }

    .react-calendar__month-view__weekdays__weekday{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 15px;
        text-transform: uppercase;
    }
    
    button {
        width: 10px;
        background-color: transparent;
        border: 0;
        border-radius: 3px;
        color: #000000;
        padding: 5px 0;
        margin: 20px 0;
        

        &:hover {
            background-color: #52B6FF;
        }

        &:active {
            background-color: #f8ff24;
        }
    }
    `

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