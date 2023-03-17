import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import { UserInfo } from "../../../App";
import { weekDays } from "../HabitsPage";

export default function CreateHabit({ setReload, showCreation, setShowCreation }){
    const [days, setDays]=useState([]);
    const [value, setValue]=useState('');
    const [loading, setLoading]=useState(false);
    const {token}=useContext(UserInfo);

    function weekDaysClick(day){
        if(days.includes(day)){
            setDays(days.filter((e)=>e!==day));
        }else{
            setDays([...days, day].sort((a,b)=>a-b));
        }
    }

    function submitHandler(){
        if(days.length!==0 && value.length!==0){
            setLoading(true);
            const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
            const body={name: value, days};
            axios.post(url,body,{headers: {Authorization: `Bearer ${token}`}})
            .then(resp=>{
                console.log('habit criado');
                // console.log(resp);
                setShowCreation(false);
                setReload(true);
                setDays([]);
                setValue('');
                setLoading(false);
            })
            .catch(resp=>{
                console.log('erro criar habit');
                console.log(resp);
                setLoading(false);
            })
        }else{
            if(value.length===0) alert('Preencha o nome do habito');
            if(days.length===0) alert('Selecione os dias');
        }
    }

    return(
        <CreateCard show={showCreation} >
            <input type='text' value={value} onChange={e=>setValue(e.target.value)} placeholder="Nome do Hábito" disabled={loading} />
            <WeekDaysContainer>
                {weekDays.map((e,i)=><CustomButton selected={days.includes(i)} key={i} onClick={()=>weekDaysClick(i)} disabled={loading} >{e}</CustomButton>)}
            </WeekDaysContainer>
            <ButtonsContainer>
                <SaveButton disabled={loading} onClick={submitHandler} >Salvar</SaveButton>
                <CancelButton disabled={loading} onClick={()=>setShowCreation(false)} >Cancelar</CancelButton>
            </ButtonsContainer>
        </CreateCard>
    )
}

const CreateCard=styled.div`
    display: ${props=>props.show? 'initial':'none'};
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 180px;
    padding: 20px;
    margin-bottom: 10px;

    input{
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        padding: 0 10px;
        color: #666666;
        outline-color: rgba(0,0,0,.2);
        margin-bottom: 8px;
    }
    input::placeholder{
        color: #dbdbdb;
    }
    input:disabled{
        color: #AFAFAF;
        background: #F2F2F2;
    }
`

const WeekDaysContainer=styled.div`
    display: flex;

`

const CustomButton=styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-right: 5px;
    margin-bottom: 30px;
    background-color: ${props=>props.selected?'#CFCFCF':'#FFFFFF'};
    color: ${props=>props.selected?'#FFFFFF':'#DBDBDB'};
`

const ButtonsContainer=styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const SaveButton=styled.button`
    padding: 7px 15px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 20px;
    &:disabled{
        opacity: 0.7;
    }
`

const CancelButton=styled.button`
    border: none;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #52B6FF;
    cursor: pointer;
    margin-left: 20px;
    &:disabled{
        opacity: 0.7;
    }
`
