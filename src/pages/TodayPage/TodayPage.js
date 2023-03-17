import styled from "styled-components";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function TodayPage(){
    return(
        <Today>
            <Header />
            <MainContainer>

            </MainContainer>
            <Footer />
        </Today>
    );
}

const Today=styled.div`
    padding: 65px 0 80px 0;
`;

const MainContainer=styled.div`
    
`;