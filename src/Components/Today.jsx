import { useEffect } from "react"
import styled from "styled-components"


export default function Today(){

    useEffect(() => {
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        
    }, [])


    return(
        <Container>
            <NavBar>
                <NavTitle>TrackIt</NavTitle>
                <Profile src="https://i.pinimg.com/originals/8c/16/cb/8c16cb9da19085e9ff307c5934ead19d.jpg" />
            </NavBar>
            
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