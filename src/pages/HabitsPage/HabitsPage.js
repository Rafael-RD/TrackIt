import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserInfo } from "../../App";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import CreateHabit from "./Components/CreateHabit";

export default function HabitsPage() {
    const [habits, setHabits] = useState({});
    const [reload, setReload]=useState(false);
    const [showCreation, setShowCreation]=useState(false);
    const {token}=useContext(UserInfo);

    useEffect(()=>{
        const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        axios.get(url, {headers:{Authorization: `Bearer ${token}`}})
        .then(resp=>{
            console.log('Habitos recebidos');
            console.log(resp);
            setHabits(resp.data);
        })
        .catch(resp=>{
            console.log('erro habitos')
            console.log(resp)
        })
    },[token])

    function showHabits() {
        if (Object.keys(habits).length === 0) {
            return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>;
        } else {
            return;
        }
    }


    return (
        <Habits>
            <Header />
            <MainContainer>
                <AddContainer>
                    <p>Meus hábitos</p>
                    <button onClick={()=>setShowCreation(true)} >+</button>
                </AddContainer>
                <HabitsContainer>
                    <CreateHabit setShowCreation={setShowCreation} showCreation={showCreation} setReload={setReload} />
                    {showHabits()}
                </HabitsContainer>
            </MainContainer>
            <Footer />
        </Habits>
    );
}

const Habits = styled.div`
    padding: 70px 0;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 500px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        color: #126BA5;
    }

    button{
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        text-align: center;
        font-weight: 400;
        font-size: 25px;
        color: #FFFFFF;
        width: 40px;
        height: 35px;
    }
`;

const HabitsContainer = styled.div`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
    }
`;
