import { useState } from "react"
import styled from "styled-components"
import vector from "../../../assets/vector.svg"

export default function TodayCard({ toggleHabit, item: { currentSequence, done, highestSequence, id, name } }) {
    const record = currentSequence >= highestSequence && highestSequence > 0;

    return (
        <HabitCard>
            <TextContainer>
                <HabitName>{name}</HabitName>
                <HabitInfo highlighted={false} >Sequência atual: <HabitInfo highlighted={done} >{`${currentSequence} dias`}</HabitInfo></HabitInfo>
                <HabitInfo highlighted={false} >Seu recorde: <HabitInfo highlighted={record} >{`${highestSequence} dias`}</HabitInfo></HabitInfo>
            </TextContainer>
            <HabitButton highlighted={done} onClick={() => toggleHabit(done, id)} ><img src={vector} alt='Concluir hábito' /></HabitButton>
        </HabitCard>
    )
}

const HabitCard = styled.div`
    display: flex;
    width: 100%;
    height: 95px;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;
    align-items: center;
    margin-bottom: 10px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HabitName = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
`

const HabitInfo = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: ${props => props.highlighted ? '#8FC549' : '#666666'} ;
    margin-bottom: 5px;
`
const HabitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.highlighted ? '#8FC549' : '#ebebeb'} ;
`