import styled from "styled-components";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function HistoryPage() {
    return (
        <History>
            <Header />
            <MainContainer><CustomTittle>Meu Histórico</CustomTittle></MainContainer>
                <MainContainer><CustomText>Em breve você poderá ver o histórico dos seus hábitos aqui!</CustomText></MainContainer>
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
const CustomTittle=styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #126BA5;
    text-align: initial;
`

const CustomText=styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`