import React from "react"
import styled from "styled-components"
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Providers/UserData";
import dayjs from "dayjs";
// import { CircularProgressbar } from "react-circular-progressbar";

export default function Today(props){

    const Navigator = useNavigate();
    const {UserData} = React.useContext(UserDataContext);

    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];


    return(
        <Container>
            <NavBar data-test="header">
                <NavTitle>TrackIt</NavTitle>
                <Profile src={UserData.image} />
            </NavBar>
            <List>
                {/* {((habitsList === undefined) || (habitsList.length === 0)) ? ( */}
                    <Title>{weekdays[dayjs().day()]}, {`${dayjs().get('date')}/${dayjs().get('month') +1}`} </Title>
                    
                    <NoHabits>Nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                {/* ) : null} */}

            </List>
            <Footer data-test="menu">
                <FButton onClick={() => Navigator("/habitos")}  data-test="habit-link" >
                    Hábitos
                </FButton>
                <TButton data-test="today-link">
                    {/* <CircularProgressbar value={50} text={`Hoje`} />; */}
                    Hoje
                </TButton>
                <FButton onClick={() => Navigator("historico")}  data-test="history-link" >
                    Histórico
                </FButton>
            </Footer>
        </Container>
    )
}




const NavBar = styled.div`
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

const NavTitle = styled.h1`
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

const Container = styled.section`
    display: flex;
    background-color: #E7E7E7;
    flex-direction: column;
    padding: 70px 0 70px 0;
    width: 100vw;
    height: 100vh;
    
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

const Footer = styled.div`
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

const FButton = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;

    border: none;
    background-color: transparent;
`

const TButton = styled.button`
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