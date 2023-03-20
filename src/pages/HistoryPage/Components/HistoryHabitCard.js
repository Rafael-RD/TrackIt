import styled from "styled-components"
import vector from "../../../assets/vector.svg"

export default function HistoryHabitCard({ item: {done, name } }) {

    return (
        <HabitCard data-test="today-habit-container" >
            <TextContainer>
                <HabitName data-test="today-habit-name" >{name}</HabitName>
            </TextContainer>
            <HabitButton data-test="today-habit-check-btn" highlighted={done} ><img src={vector} alt='Concluir hábito' /></HabitButton>
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
    justify-content: center;
    align-items: center;
    width: 90%;
`

const HabitName = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
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