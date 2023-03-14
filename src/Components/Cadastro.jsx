import styled from "styled-components";
import Logo from "./../Assets/Images/Logo.png";
import { useNavigate } from 'react-router-dom';



export default function Cadastro(){

    const Navigator = useNavigate();

    function goToLogin(){
        Navigator("/");
    }

    return(
        <MainContainer>
            <Image src={Logo} alt="Imagem da logo do TrackIt" />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="nome" />
            <Input placeholder="foto" />
            <Button>Cadastrar</Button>
            <CadastroLink onClick={() => {goToLogin()}} >Já tem uma conta? Faça login!</CadastroLink>
        </MainContainer>
    )
}

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: auto;
`

const Image = styled.img`
    width: 180px;
    margin: 68px auto 30px auto;
`

const Input = styled.input`
    width: 305px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 5px auto;
    padding:  0 11px 0 11px;
    box-sizing: border-box;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;

    ::placeholder {
        color: #DBDBDB;
    }
`

const Button = styled.button`
    width: 305px;
    height: 45px;
    margin: 5px auto;
    background: #52B6FF;
    
    border: none;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`

const CadastroLink = styled.a`
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
`