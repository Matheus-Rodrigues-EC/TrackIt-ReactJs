import styled from "styled-components";
import axios from "axios";
import Logo from "./../Assets/Images/Logo.png";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";


export default function Cadastro(){

    const Navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    let teste = undefined;

    function goToLogin(){
        Navigator("/");
    }

    function SigUp(e){
        e.preventDefault();
        
        teste = "loading"
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const body ={email, name, image, password};
        // console.log(body);
        const promisse = axios.post(Base_URL, body);
        promisse.then(response => {console.log(response.data); Navigator("/");});
        promisse.catch(erro => {alert(erro.response.data.message); teste = undefined});

    }

    return(
        <MainContainer>
            <Image src={Logo} alt="Imagem da logo do TrackIt" />
            <Form onSubmit={SigUp}>
                <Input 
                    placeholder="email" 
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={(teste === "loading") ? true : false}
                    data-test="email-input"
                />
                <Input 
                    placeholder="senha"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={(teste === "loading") ? true : false}
                    data-test="password-input"
                />
                <Input 
                    placeholder="nome" 
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={(teste === "loading") ? true : false}
                    data-test="user-name-input"
                />
                <Input 
                    placeholder="foto" 
                    type="url"
                    required
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    disabled={(teste === "loading") ? true : false}
                    data-test="user-image-input"
                />
                {(teste === "loading") ? (
                        <Button disabled="true" type="button" data-test="signup-btn">
                            <ThreeDots disabled="true"
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#FFFFFF" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </Button>
                    ) : (
                        <Button type="submit" data-test="signup-btn" >Entrar</Button>
                )}
            </Form>
            <CadastroLink 
                onClick={() => {goToLogin()}} 
                type="button" 
                data-test="login-link"
            >
                Já tem uma conta? Faça login!
            </CadastroLink>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
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
    cursor: pointer;
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
    cursor: pointer;
`