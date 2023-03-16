import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Providers/UserData";
import { HabitsListContext } from "../Providers/HabitsList";
import Trash from "./../Assets/Images/Trash.png"
// import { CircularProgressbar } from "react-circular-progressbar";

export default function Habits(props){

    const Navigator = useNavigate();
    const {UserData} = React.useContext(UserDataContext);
    const {habitsList, setHabitsList} = React.useContext(HabitsListContext);
    const [habitName, setHabitName] = useState();
    const [select, setSelect] = useState([]);
    const [visible, setVisible] = useState("none");

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function toggleWeekday(day){
        if(!select.includes(day)){
            const newArr = [...select];
            setSelect([...newArr, day])
        }else{
            const newArr = [...select];
            const indexId = newArr.indexOf(day);
            newArr.splice(indexId, 1);
            setSelect([...newArr]);
        }
        // console.log(select)
    }

    useEffect(() => {
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
        const config = {
            headers: {Authorization: `Bearer ${UserData.token}`}
        }

        const promisse = axios.get(Base_URL, config)
        promisse.then((response) => {
            // console.log(response.data);
            setHabitsList(response.data);
        })
        promisse.catch((error) => {
            alert(error.response.data.message);
            Navigator('/');
            
        })

    }, [habitsList]);

    console.log(habitsList);

    function AddHabit(){
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {Authorization: `Bearer ${UserData.token}`}
        }

        const newHabit = {
            name: habitName,
            days: select
        }

        const promisse = axios.post(Base_URL, newHabit, config);
        promisse.then(response => {
            setHabitName("");
            setSelect([]);
            setVisible("none");
        });
        promisse.catch(error => {
            alert(error.response.data.message);
            Navigator('/');
        })
    }

    function deleteHabit(id){
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

        const config = {
            headers: {Authorization: `Bearer ${UserData.token}`}
        }

        const promisse = axios.delete(url, config);
        promisse.then(response => console.log(response.data));
        promisse.catch(error => error.data.message);
    }

    return(
        <Container>
            <NavBar data-test="header">
                <NavTitle>TrackIt</NavTitle>
                <Profile src={UserData.image} />
            </NavBar>
            <CreateHabit>
                <Title>Meus hábitos</Title>
                <Button onClick={() => {setVisible("flex")}} data-test="habit-create-btn" >+</Button>
            </CreateHabit>
            <List>
                <HabitContainer visible={visible} data-test="habit-create-container">
                    <Input 
                        placeholder="Nome do hábito" 
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        data-test="habit-name-input"
                    />
                    <ListWeekdays>

                        {weekdays.map((day, index) => (
                            (select.includes(index) ? (
                                <ButtonWeekdayOn key={index} onClick={() => {toggleWeekday(index)}} data-test="habit-day" >{day}</ButtonWeekdayOn>
                            ) : (
                                <ButtonWeekdayOff key={index} onClick={() => {toggleWeekday(index)}} data-test="habit-day" >{day}</ButtonWeekdayOff>
                            )
                            )
                        ))}
                    </ListWeekdays>
                    <ContainerButtons>
                        <Cancel onClick={() => {setVisible("none")}} data-test="habit-create-cancel-btn" >Cancelar</Cancel>
                        <SaveHabit onClick={() => {AddHabit()}} data-test="habit-create-save-btn" >Salvar</SaveHabit>
                    </ContainerButtons>
                </HabitContainer>
                {((habitsList.length !== 0)) ? (
                    habitsList.map((habit) => 
                        <HabitContainerItem data-test="habit-container">
                            <TitleContainer>
                            <NameHabit data-test="habit-name" > {habit.name} </NameHabit>
                                <Icon src={Trash} onClick={() => deleteHabit(habit.id)} data-test="habit-delete-btn" />
                            </TitleContainer>
                            <ListWeekdays>
                            {weekdays.map((day, index) => (
                                (habit.days.includes(index) ? (
                                    <ButtonWeekdayOn key={index} data-test="habit-day" >{day}</ButtonWeekdayOn>
                                ) : (
                                    <ButtonWeekdayOff key={index} data-test="habit-day" >{day}</ButtonWeekdayOff>
                                )
                                )
                            ))}
                            </ListWeekdays>
                        </HabitContainerItem>
                    )
                ) : ( 
                    <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                )}
            </List>
            <Footer data-test="menu">
                <FButton onClick={() => Navigator("/habitos")}  data-test="habit-link" >
                    Hábitos
                </FButton>
                <TButton onClick={() => Navigator("/hoje")} data-test="today-link" >
                    {/* <CircularProgressbar value={50} text={`Hoje`} />; */}
                    Hoje
                </TButton>
                <FButton onClick={() => Navigator("historico")} data-test="history-link" >
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
    flex-direction: column;
    background-color: #E7E7E7;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    padding-bottom: 100px;
`

const CreateHabit = styled.div`
    display: flex;
    margin-top: 98px;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
`

const List = styled.div`
    width: 100vw;
    height:auto;
`

const NoHabits = styled.h2`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    padding: 0 20px;
`

const HabitContainer = styled.div`
    display: ${(props) => props.visible};
    flex-direction: column;
    width: 90%;
    height: 180px;
    margin: 10px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
`
const HabitContainerItem = styled(HabitContainer)`
    height: auto;
    padding-bottom: 5px;
`

const Input = styled.input`
    width: 305px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 15px auto;
    padding:  0 11px 0 11px;
    box-sizing: border-box;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;

    ::placeholder {
        color: #DBDBDB;
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const NameHabit = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin: 15px;
    color: #666666;
`

const Icon = styled.img`
    width: 15px;
    height: 15px;
    margin: 20px 15px;
`

const ListWeekdays = styled.div`
    display: flex;
    width: 65%;
    height: 30px;
    justify-content: space-between;
    margin: 5px 15px 10px 15px;
`

const ButtonWeekdayOff = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #D5D5D5;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`

const ButtonWeekdayOn = styled(ButtonWeekdayOff)`
    background: #D5D5D5;
    color: #FFFFFF;
    border: 1px solid #D5D5D5;
`

const Title = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    padding: 0 20px;
`

const Button = styled.button`
    display: flex;
    width: 40px;
    height: 35px;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    padding-bottom: 7px;
    
    margin: 0 20px;
    box-sizing: border-box;

    background: #52B6FF;
    border-radius: 5px;
    border: none;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 27px;
`

const ContainerButtons = styled.div`
    display: flex;
    margin: 15px 0 15px auto;
`

const SaveHabit = styled(Button)`
    width: 84px;
    height: 35px;
    font-size: 16px;
`

const Cancel = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #52B6FF;

    border: none;
    background-color: transparent;
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