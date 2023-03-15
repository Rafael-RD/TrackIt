import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg"

export default function SignupPage(){
    return (
        <Signup>
            <img src={logo} alt="TrackIt logo" />
            <CustomForm>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="url" placeholder="foto" />
                <button>Entrar</button>
            </CustomForm>
            <Link to='/' >Já tem uma conta? Faça login!</Link>
        </Signup>
    );
}

const Signup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        height: auto;
        margin-top: 80px;
        margin-bottom: 30px
    }

    a{
        color: #52b6ff;
        font-size: 14px;
        text-decoration: underline;
        font-family: 'Lexend Deca', sans-serif;
    }

    `

const CustomForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        padding: 10px;
        font-size: 20px;
    }
    input::placeholder{
        color: #CBCBCB;
    }
    
    button{
        width: 100%;
        height: 45px;
        margin-bottom: 25px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-size: 20px;
    }
`