import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../assets/Group 8.svg'


export default function LoginPage() {
    return (
        <Login>
            <img src={logo} alt="TrackIt logo" />
            <CustomForm>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button>Entrar</button>
            </CustomForm>
            <Link>Não tem uma conta? Cadastre-se!</Link>
        </Login>
    );
}

const Login = styled.div`
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