import React from "react"
import styled from "styled-components"
import dayjs from "dayjs";
import Header from "./Header";
import Menu from "./Menu";




export default function Today(props){

    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];


    return(
        <Container>
            <Header data-test="header" />
            <List>
                {/* {((habitsList === undefined) || (habitsList.length === 0)) ? ( */}
                    <Title>{weekdays[dayjs().day()]}, {`${dayjs().get('date')}/${dayjs().get('month') +1}`} </Title>
                    
                    <NoHabits>Nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                {/* ) : null} */}

            </List>
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