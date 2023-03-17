import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FooterPercentageContext, UserInfo } from "../../App";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'dayjs/locale/pt-br';
import TodayCard from "./Components/TodayCard";
dayjs.locale('pt-br');

export default function TodayPage() {
    const [today, setToday] = useState([]);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const [percent, setPercent] = useState(0);
    const { token } = useContext(UserInfo);
    const {setFooterPercentage}=useContext(FooterPercentageContext);

    useEffect(() => {
        setLoading(true);
        if (token !== undefined) {
            const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
            axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
                .then(resp => {
                    console.log('today sucesso');
                    // console.log(resp);
                    setToday(resp.data);
                    setLoading(false);
                })
                .catch(resp => {
                    console.log('today falha');
                    console.log(resp);
                })
        }
        setLoading(false);
        setReload(false);
    }, [token, reload])

    useEffect(() => {
        const dashIndex = dayjs().format('dddd').indexOf('-');
        const dia = dayjs().format('dddd').substring(0, dashIndex > 0 ? dashIndex : Infinity);
        const diaMes = dayjs().format(', DD/MM');
        setDate(dia + diaMes);
    }, [reload]);

    function toggleHabit(prev, id) {
        setLoading(true);
        if (prev === false) {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            axios.post(url, {}, { headers: { Authorization: `Bearer ${token}` } })
                .then((resp) => {
                    console.log('toggle sucess');
                    // console.log(resp);
                    setLoading(false);
                    setReload(true);
                })
                .catch((resp) => {
                    console.log('toggle fail');
                    console.log(resp);
                    setLoading(false);
                })
        } else {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            axios.post(url, {}, { headers: { Authorization: `Bearer ${token}` } })
                .then((resp) => {
                    console.log('toggle sucess');
                    // console.log(resp);
                    setLoading(false);
                    setReload(true);
                })
                .catch((resp) => {
                    console.log('toggle fail');
                    console.log(resp);
                    setLoading(false);
                })
        }
    }

    useEffect(() => {
        if (today.length > 0) {
            let total = 0, done = 0;
            today.forEach((e) => {
                total++;
                if (e.done === true) done++;
            });
            const auxPercent= (done/total)*100;
            setPercent(auxPercent);
            setFooterPercentage(auxPercent);
        }
    }, [today, setFooterPercentage])

    function showTodayInfo() {
        if (loading === true) return <TodayInfo data-test="today-counter" highlighted={false} >Carregando!</TodayInfo>;
        else if (Object.keys(today).length === 0) return <TodayInfo data-test="today-counter" highlighted={false} >Você não tem nenhum hábito hoje,<br />Crie um na pagina Hábitos!</TodayInfo>;
        else if(percent===0) return <TodayInfo data-test="today-counter" highlighted={false} >Nenhum hábito concluido ainda</TodayInfo>;
        else return <TodayInfo data-test="today-counter" highlighted={true} >{`${percent}% dos hábitos concluídos`}</TodayInfo>;
    }

    return (
        <Today>
            <Header />
            <MainContainer>
                <div><Dia data-test="today">{date}</Dia></div>
                <div>{showTodayInfo()}</div>
                <Habitos>
                    {today.map((e, i) => <TodayCard key={i} toggleHabit={toggleHabit} item={e} />)}
                </Habitos>
            </MainContainer>
            <Footer />
        </Today>
    );
}

const Today = styled.div`
    padding: 70px 0 80px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const MainContainer = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 500px;
    & > div{
        display: flex;
        width: 100%;
        margin-bottom: 10px;
    }
`;

const Dia = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #126BA5;
    &::first-letter{
        text-transform: uppercase;
    }
`

const TodayInfo = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${props=>props.highlighted?'#8FC549':'#BABABA'};
`

const Habitos = styled.div`
    display:flex;
    flex-direction: column;
`
