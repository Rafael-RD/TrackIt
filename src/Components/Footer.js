import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {
    const percentage = 30;

    function progressStyle(){
        return buildStyles({
            
        })
    }

    return (
        <Foot>
            <div>
                <CircularProgressbar value={percentage} styles={progressStyle} text={<Link to='/hoje' >Hoje</Link>} />
            </div>
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
    justify-content: center;
    align-items: center;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, .15);

    div{
        height: 50px;
        width: 50px;
        position: relative;
        top: -20px;
        border-radius: 100%;
        background-color: aqua;
    }
`;