import styled from "styled-components";


export default function Habits(){

    function AddHabit(){
        console.log("New Habit")
    }

    return(
        <Container>
            <NavBar>
                <NavTitle>TrackIt</NavTitle>
                <Profile src="https://i.pinimg.com/originals/8c/16/cb/8c16cb9da19085e9ff307c5934ead19d.jpg" />
            </NavBar>
            <CreateHabit>
                <Title>Meus hábitos</Title>
                <Button onClick={() => AddHabit()} >+</Button>
            </CreateHabit>
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
`

const CreateHabit = styled.div`
    display: flex;
    margin-top: 98px;
    align-items: center;
    justify-content: space-between;
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
    box-sizing: border-box;

    background: #52B6FF;
    border-radius: 5px;
    border: none;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 27px;
`