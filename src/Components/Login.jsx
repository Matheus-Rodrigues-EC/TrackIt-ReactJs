import React from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "./../Assets/Images/Logo.png";
import { useNavigate } from 'react-router-dom';
import { useState, createContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { UserDataContext } from "../Providers/UserData";

const Token = createContext();


function Login(props){

    const Navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let teste = undefined;
    const {setUserData} = React.useContext(UserDataContext);

    function goToCadastro(){
        Navigator("/cadastro");
    }

    function LogIn(e){
        e.preventDefault();
        teste = "undefined";
        
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body ={email, password};

        const promisse = axios.post(Base_URL, body);
        promisse.then(response => {
            // console.log(response.data);
            const user = {name: response.data.name, image: response.data.image, token: response.data.token}

            setUserData (user);
            
            Navigator("/hoje");
        });

        promisse.catch(error => {alert(error.response.data.message); teste = undefined});
    }

    return(
        <MainContainer>
            <Image src={Logo} alt="Imagem da logo do TrackIt" />
            <Form onSubmit={LogIn}>
                <Input 
                    placeholder="email" 
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={(teste !== undefined) ? true : false}
                    data-test="email-input"
                />
                <Input 
                    placeholder="senha" 
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={(teste !== undefined) ? true : false}
                    data-test="password-input"
                />
                {(teste !== undefined) ? (
                        <Button disabled="true" type="button" data-test="login-btn" >
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
                        <Button type="submit" data-test="login-btn" >Entrar</Button>
                )}
            </Form>
            <CadastroLink 
                onClick={(e) => {
                    e.preventDefault(); 
                    goToCadastro();
                    }
                } 
                type="button"
                data-test="signup-link"
            >
                Não tem uma conta? Cadastre-se!
            </CadastroLink>
        </MainContainer>
    )
}

export {Login, Token};

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
    display: flex;
    width: 305px;
    height: 45px;
    margin: 5px auto;
    background: #52B6FF;
    justify-content: center;
    align-items: center;
    
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