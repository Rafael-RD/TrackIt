import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {
    // eslint-disable-next-line
    const [percentage, setPercentage] = useState(40);

    function progressStyle() {
        return buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#FFFFFF",
            pathColor: "#FFFFFF",
            trailColor: "transparent",
            // rotation: -(percentage/100)/2
        })
    }

    return (
        <Foot>
            <Link to='/habitos' >Hábitos</Link>
            <Link to='/hoje' >
                <div>
                    <CircularProgressbar
                        value={percentage}
                        styles={progressStyle()}
                        background
                        backgroundPadding={6}
                        text={'Hoje'} />
                </div>
            </Link>
            <Link to='/historico' >Histórico</Link>
        </Foot>
    )
}

const Foot = styled.footer`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, .15);

    div{
        height: 90px;
        width: 90px;
        position: relative;
        top: -20px;
    }

    a{
        font-family: 'Lexend Deca';
        font-size: 20px;
        color: #52B6FF;
        text-decoration: none;
    }
`;