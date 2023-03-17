import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TodayPage from "./pages/TodayPage/TodayPage";


export const UserInfo = createContext();
export const SetUserInfo = createContext();
export const FooterPercentageContext = createContext();


export default function App() {
  const [user, setUser] = useState({});
  const [footerPercentage, setFooterPercentage] = useState(0);

  return (
    <BrowserRouter>
      <UserInfo.Provider value={user} >
        <SetUserInfo.Provider value={setUser} >
          <FooterPercentageContext.Provider value={{ footerPercentage, setFooterPercentage }} >
            <CustomBody>
              <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/cadastro" element={<SignupPage />} />
                <Route exact path="/habitos" element={<HabitsPage />} />
                <Route exact path="/hoje" element={<TodayPage />} />
                <Route exact path="/historico" element={<HistoryPage />} />
              </Routes>
            </CustomBody>
          </FooterPercentageContext.Provider>
        </SetUserInfo.Provider>
      </UserInfo.Provider>
    </BrowserRouter>
  );
}


/*
font-family: 'Lexend Deca', sans-serif;
font-family: 'Playball', cursive;
*/

const CustomBody = styled.div`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background-color: #f2f2f2;
`