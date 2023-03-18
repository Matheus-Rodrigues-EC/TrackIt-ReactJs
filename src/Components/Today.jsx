import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import dayjs from "dayjs";
// import Header from "./Header";
// import Menu from "./Menu";
import { UserDataContext } from "../Providers/UserData";
import { TodayHabitsContext } from "../Providers/TodayHabits";
import { PercentHabitsContext } from './../Providers/PercentHabits';
import { useNavigate } from 'react-router-dom';
import Check from './../Assets/Images/Check.png';

import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Today(){

    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

    const Navigator = useNavigate();
    const {UserData} = React.useContext(UserDataContext);
    const {todayHabits, setTodayHabits} = React.useContext(TodayHabitsContext);
    const {percent, setPercent} = React.useContext(PercentHabitsContext);

    useEffect(() => {
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        
        const config = {
            headers: {Authorization: `Bearer ${UserData.token}`}
        }

        const promisse = axios.get(Base_URL, config)
        promisse.then((response) => {
            setTodayHabits(response.data);
            const max = todayHabits.length;
            const list = todayHabits.filter((habit) => habit.done === true);
            const result = (100/max) * list.length
            setPercent(result);
        })
        promisse.catch((error) => {
            alert(error.response.data.message);
            Navigator('/');
            
        })

    }, [Navigator, UserData, todayHabits, setTodayHabits, percent, setPercent]);

    function ToggleHabit(id, verify){
        if(verify === false){
            const Check_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const config = {
                headers: {Authorization: `Bearer ${UserData.token}`}
            }
            const body = {}
            const promisse = axios.post(Check_URL, body, config)
            promisse.then(() => {})
            promisse.catch((error) => {
                alert(error.data.message);
            })
        }else{
            const UnCheck_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const config = {
                headers: {Authorization: `Bearer ${UserData.token}`}
            }
            const body = {}
            const promisse = axios.post(UnCheck_URL, body, config)
            promisse.then(() => {})
            promisse.catch((error) => {
                alert(error.data.message);
            })
        }
    }

    return(
        <Container>
            {/* <Header data-test="header" /> */}
        <Head data-test="header">
            <Titleheader>TrackIt</Titleheader>
            <Profile src={UserData.image} />
        </Head>
            <Title data-test="today" >
                {weekdays[dayjs().day()]}, 
                {` ${(dayjs().get('date') < 10) ? ('0' + dayjs().get('date')) : (dayjs().get('date'))}/${((dayjs().get('month')) < 10 ? ('0' + (dayjs().get('month')+1)) : (dayjs().get('month')+1))}`} 
            </Title>
            <List>
                {(todayHabits.length === 0) ? (
                    <NoHabits data-test="today-counter" >Nenhum hábito concluído ainda</NoHabits>
                ) : (
                    <>
                    <PercentContainer data-test="today-counter">
                        {(percent === 0) ? (
                            <Habitchecked percent={percent} >Nenhum hábito concluído ainda</Habitchecked>
                        ) : (
                            <Habitchecked percent={percent} > {percent.toFixed(0)}% dos hábitos concluídos</Habitchecked>
                        )
                    }
                    </PercentContainer>
                    {todayHabits.map((habit) => 
                    <HabitContainer key={habit.id} data-test="today-habit-container" >
                        <TitleContainer>
                            <TitleHabit data-test="today-habit-name" >{habit.name}</TitleHabit>
                            <SequenceHabit done={habit.done} data-test="today-habit-sequence" >
                                Sequência atual:
                                {(habit.currentSequence !== 1) ? (<p>{habit.currentSequence} dias</p>) : <p>{habit.currentSequence} dia</p>}
                            </SequenceHabit>
                            <RecordHabit done={habit.done} sequence={habit.currentSequence} record={habit.highestSequence} data-test="today-habit-record" >
                                Seu recorde:
                                {(habit.highestSequence !== 1) ? (<p>{habit.highestSequence} dias</p>) : <p>{habit.highestSequence} dia</p>}
                            </RecordHabit>
                        </TitleContainer>
                        <CheckButton onClick={() => {ToggleHabit(habit.id, habit.done);}} habit={habit.done} data-test="today-habit-check-btn" >
                            <CheckImage src={Check} />
                        </CheckButton>
                    </HabitContainer>
                    )}
                    </>
                )}

            </List>
            {/* <Menu data-test="menu" /> */}
            <MainMenu data-test="menu" >
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
    padding: 70px 0 100px 0;
    width: 100vw;
    min-height: 100vh;
    max-height: auto;
    overflow-y: scroll;
    
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

const List = styled.div`
    width: 100vw;
    height:auto;
`

const Title = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    padding: 0 20px;
    color: #126BA5;
`

const NoHabits = styled.h2`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    padding: 0 20px;
`

const PercentContainer = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 0 auto 0 15px;

    color: #BABABA;
`

const HabitContainer = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    margin: 10px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding-bottom: 15px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
`

const TitleHabit = styled.h1`
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 20px;
    margin: 15px;
    color: rgb(102, 102, 102);
`

const SequenceHabit = styled.h4`
    display: flex;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
    margin: 0 15px;
    p{
        margin: 0 5px;
        display: flex;
        color:${(props) => (props.done === true) ? "#8FC549" : "#666666"}
    }
`

const RecordHabit = styled.h4`
    display: flex;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
    margin: 0 15px;
    p{
        margin: 0 5px;
        display: flex;
        color:${(props) => (((props.sequence === props.record)) && ((props.record > 0) && (props.done === true))) ? "#8FC549" : "#666666"}
    }
`

const Habitchecked = styled.p`
    margin: 0 5px;
    display: flex;
    color: ${(props) => (props.percent > 0) ? "#8FC549" : "#666666"}
`

const CheckButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: ${(props) => (props.habit === true) ? "#8FC549" : "#E7E7E7"};
    border: none;
    border-radius: 5px;
    margin: 15px 15px auto auto;
`

const CheckImage = styled.img`
    width: 50px;
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