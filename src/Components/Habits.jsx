import styled from "styled-components";


export default function Habits(props){

    
    const {  user, habits } = props;

    function AddHabit(){
        console.log("New Habit")
    }

    return(
        <Container>
            <NavBar>
                <NavTitle>TrackIt</NavTitle>
                <Profile src={user.image} />
            </NavBar>
            <CreateHabit>
                <Title>Meus hábitos</Title>
                <Button onClick={() => AddHabit()} >+</Button>
            </CreateHabit>
            <List>
                {((habits === undefined) || (habits.length === 0)) ? (
                    <NoHabits>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabits>
                ) : (
                    null
                )}

            </List>
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
    padding: 0 20px;
    box-sizing: border-box;
    width: 100vw;
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
`

const Title = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
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