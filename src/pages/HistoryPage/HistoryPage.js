import { Calendar } from "react-calendar";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../App";
import axios from "axios";
import HistoryHabitCard from "./Components/HistoryHabitCard";

export default function HistoryPage() {
    const [allHabits, setAllHabits]=useState([]);
    const [dayHabits, setDayHabits]=useState([]);
    const {user:{token}}=useContext(UserInfo);

    useEffect(()=>{
        if(token!==undefined){
            const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
            axios.get(url,{headers:{Authorization: `Bearer ${token}`}})
            .then(resp=>{
                console.log('history sucesso');
                console.log(resp.data);
                setAllHabits(resp.data);
            })
            .catch(resp=>{
                console.log('history falha');
                console.log(resp);
            })
        }
    },[token])

    function formatDay(locale, date){
        const formatedDate=dayjs(date).format('DD/MM/YYYY');
        const incompletos='#EA5766', completos='#8CC654', nenhum='initial';
        for(const day of allHabits){
            if(day.day===formatedDate){
                if(day.habits.some(e=>e.done===false)) return <CalendarDayBlock background={incompletos} cor={'#000000'} >{dayjs(date).format('DD')}</CalendarDayBlock>;
                else return <CalendarDayBlock background={completos} cor={'#000000'} >{dayjs(date).format('DD')}</CalendarDayBlock>;
            }
        }
        return <CalendarDayBlock background={nenhum}>{dayjs(date).format('DD')}</CalendarDayBlock>;
    }

    function clickDay(value, event){
        const formatedDate=dayjs(value).format('DD/MM/YYYY');
        console.log(formatedDate);
        for(const day of allHabits){
            if(day.day===formatedDate){
                console.log(day.habits);
                setDayHabits(day.habits);
                return null;
            }
        }
        setDayHabits([]);
    }

    return (
        <History>
            <Header />
            <MainContainer><CustomTittle>Meu Histórico</CustomTittle></MainContainer>
            <MainContainer><CustomText>Em breve você poderá ver o histórico dos seus hábitos aqui!</CustomText></MainContainer>
            <Calendar locale="pt-br" calendarType="US" formatDay ={formatDay} onClickDay={clickDay} />
            <Habitos>
                {dayHabits.map((e,i)=><HistoryHabitCard key={i} item={e} />)}
            </Habitos>
            <Footer />
        </History>
    );
}

const History = styled.div`
    padding: 65px 0 80px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MainContainer = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 500px;
`
const CustomTittle = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #126BA5;
    text-align: initial;
`

const CustomText = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`

const CalendarDayBlock=styled.div`
    color: ${props=>props.cor!==null?props.cor:'initial'};
    background-color: ${props=>props.background};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    height: 30px;
    width: 30px;
`

const Habitos = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    max-width: 500px;
`