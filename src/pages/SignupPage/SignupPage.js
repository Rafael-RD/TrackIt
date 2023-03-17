import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg"

export default function SignupPage(){
    const [loading, setLoading]=useState(false);
    const [form, setForm]=useState({email:'', password:'', name: '', image: ''});
    const navigate=useNavigate();
    
    function botaoCadastrar(){
        if(loading===false){
            return 'Cadastrar';
        }else{
            return (<ThreeDots
            height="80" 
            width="80" 
            radius="9"
            color="#FFFFFF" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />)
        }
    }

    function changeHandler(e){
        const {name, value}=e.target;
        setForm({...form, [name]: value});
    }

    function submitHandler(e){
        e.preventDefault();
        setLoading(true);
        const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body={
            email: form.email,
            name: form.name,
            image: form.image,
            password: form.password
        }
        axios.post(url, body)
        .then(resp=>{
            console.log('deu ');
            console.log(resp);
            navigate('/')
        })
        .catch(({response})=>{
            console.log('deu ruim');
            console.log(response);
            alert(response.data.message);
            setForm({...form, password: ''});
            setLoading(false);
        })
    }

    return (
        <Signup>
            <img src={logo} alt="TrackIt logo" />
            <CustomForm onSubmit={submitHandler}>
                <input data-test="email-input" disabled={loading} onChange={changeHandler} value={form.email} name='email' type="email" placeholder="email" required />
                <input data-test="password-input" disabled={loading} onChange={changeHandler} value={form.password} name='password' type="password" placeholder="senha" required />
                <input data-test="user-name-input" disabled={loading} onChange={changeHandler} value={form.name} name='name' type="text" placeholder="nome" required />
                <input data-test="user-image-input" disabled={loading} onChange={changeHandler} value={form.image} name='image' type="url" placeholder="foto" required />
                <button data-test="signup-btn" disabled={loading} >{botaoCadastrar()}</button>
            </CustomForm>
            <Link data-test="login-link" to='/' >Já tem uma conta? Faça login!</Link>
        </Signup>
    );
}

const Signup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #FFFFFF;

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
    input:disabled{
        color: #AFAFAF;
        background: #F2F2F2;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:disabled{
        opacity: 0.7;
    }
`