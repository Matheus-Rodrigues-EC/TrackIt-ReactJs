import React from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "./../Assets/Images/Logo.png";
import { useNavigate, Link } from 'react-router-dom';
import { useState, createContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { UserDataContext } from "../Providers/UserData";

const Token = createContext();


function Login(props){

    const Navigator = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loadLogin, setLoadLogin] = useState(0);
    const {setUserData} = React.useContext(UserDataContext);

    function LogIn(){
        // e.preventDefault();
        
        const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const body ={email, password};

        const promisse = axios.post(Base_URL, body);
        promisse.then(response => {
            // console.log(response.data)
            const user = {name: response.data.name, image: response.data.image, token: response.data.token};
            setUserData (user);
            Navigator("/hoje");
        });
        promisse.catch(error => {
            if(email === undefined || password === undefined){
                alert('email e/ou devem ser preenchidos');
            }else{
                alert(error.response.data.message); 
            }
            setLoadLogin(0)
        });
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
                    disabled={(loadLogin > 0) ? true : false}
                    data-test="email-input"
                />
                <Input 
                    placeholder="senha" 
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={(loadLogin > 0) ? true : false}
                    data-test="password-input"
                />
                {(loadLogin !== 0) ? (
                        <Button disabled={true} type="submit" data-test="login-btn" >
                            <ThreeDots 
                                height="80" 
                                width="80" 
                                radius="9"
                                color="#FFFFFF" 
                                ariaLabel="three-dots-loadLogining"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                
                            />
                        </Button>
                    ) : (
                        <Button type="submit" data-test="login-btn" onClick={() => {LogIn(); setLoadLogin(1);}}>Entrar</Button>
                )}
            </Form>
                <Link to={"/cadastro"} data-test="signup-link">
                    <CadastroLink type="button" >
                        Não tem uma conta? Cadastre-se!
                    </CadastroLink>
                </Link>
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

    :disabled{
        background: #F2F2F2;
        color: #AFAFAF;
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

    :disabled{
        background: #52B6FF;
        opacity: 0.7;
    }
`

const CadastroLink = styled.div`
        color: #52B6FF;
        background-color: transparent;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        margin-top: 25px;
        cursor: pointer;        
`