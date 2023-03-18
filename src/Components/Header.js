import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SetUserInfo, UserInfo } from "../App";


export default function Header(){
    const {image}=useContext(UserInfo);
    const setUserInfo=useContext(SetUserInfo);
    const navigate=useNavigate();

    useEffect(()=>{
        if(image===undefined){
            navigate('/');
        }
    },[image, navigate])

    function logout(){
        localStorage.clear();
        setUserInfo({});
        navigate('/');
    }

    return(
        <HeaderContainer data-test="header" >
            <Link to='/' >TrackIt</Link>
            <button onClick={logout} >Logout</button>
            <img src={image} alt="Perfil" />
        </HeaderContainer>
    );
}

const HeaderContainer=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;

    a{
        font-family: 'Playball', cursive;
        font-size: 40px;
        color: white;
        text-decoration: none;
    }

    button{
        border: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        padding: 10px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #444444;
        cursor: pointer;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }

`;