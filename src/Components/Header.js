import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserInfo } from "../App";


export default function Header(){
    const {image}=useContext(UserInfo);
    const navigate=useNavigate();

    useEffect(()=>{
        if(image===undefined){
            navigate('/');
        }
    },[image, navigate])

    return(
        <HeaderContainer data-test="header" >
            <Link to='/' >TrackIt</Link>
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

    img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
    }

`;