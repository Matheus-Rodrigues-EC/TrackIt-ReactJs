import { useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { CircularProgressbar } from "react-circular-progressbar";

export default function Today(props){

    const Navigator = useNavigate();
    const {  user, habits, setHabits } = props;

    useEffect(() => {
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
        const config = {
            headers: {Authorization: `Bearer ${user.token}`}
        }

        const promisse = axios.get(Base_URL, config)
        promisse.then((res) => setHabits(res.data))
        promisse.catch((error) => alert(error.response.data.message))

        console.log(habits);
    }, [])


    return(
        <Container>
            <NavBar>
                <NavTitle>TrackIt</NavTitle>
                <Profile src={user.image} />
            </NavBar>
            <List>
                {((habits === undefined) || (habits.length === 0)) ? (
                    <NoHabits>Nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                ) : null}

            </List>
            <Footer>
                <FButton onClick={() => Navigator("/habitos")} >
                    Hábitos
                </FButton>
                <TButton>
                    {/* <CircularProgressbar value={50} text={`Hoje`} />; */}
                    Hoje
                </TButton>
                <FButton onClick={() => Navigator("historico")} >
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