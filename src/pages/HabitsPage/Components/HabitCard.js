import styled from "styled-components";
import { weekDays } from "../HabitsPage";
import trash from "../../../assets/trash.svg";
import axios from "axios";
import { useContext } from "react";
import { UserInfo } from "../../../App";

export default function HabitCard({setReload, name, id, days}){
    const {token}=useContext(UserInfo);

    function deleteHandler(){
        if(window.confirm('Deseja realmente deletar este habito?')===true){
            const url=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            axios.delete(url,{headers: {Authorization: `Bearer ${token}`}})
            .then(resp=>{
                console.log('delete sucesso');
                setReload(true);
            })
            .catch(resp=>{
                console.log('delete falha');
                console.log(resp);
            })
        }
    }

    return(
        <Card data-test="habit-container">
            <p data-test="habit-name">{name}</p>
            <WeekDaysContainer>
                {weekDays.map((e,i)=><WeekDay data-test="habit-day" key={i} selected={days.includes(i)} >{e}</WeekDay>)}
            </WeekDaysContainer>
            <DeleteButton data-test="habit-delete-btn" onClick={deleteHandler}><img src={trash} alt='Deletar' /></DeleteButton>
        </Card>
    )
}

const Card=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    padding: 15px;
    p{
        margin-bottom: 8px;
        font-size: 20px;
    }
`

const WeekDaysContainer=styled.div`
    display: flex;
`
const WeekDay=styled.div`
    display: flex;
    margin-right: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: default;
    border: 1px solid ${props=>props.selected?'#CFCFCF':'#D5D5D5'};
    background-color: ${props=>props.selected?'#CFCFCF':'#FFFFFF'};
    color: ${props=>props.selected?'#FFFFFF':'#DBDBDB'};
`

const DeleteButton=styled.button`
    border: none;
    background-color: #FFFFFF;
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    img{
        width: 1.2vw;
        min-width: 16px;
        height: auto;
    }
`