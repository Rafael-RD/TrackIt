import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TodayPage from "./pages/TodayPage/TodayPage";


export const UserInfo = createContext();
export const SetUserInfo = createContext();


export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserInfo.Provider value={user} >
        <SetUserInfo.Provider value={setUser} >
          <CustomBody>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route exact path="/cadastro" element={<SignupPage />} />
              <Route exact path="/habitos" element={<HabitsPage />} />
              <Route exact path="/hoje" element={<TodayPage />} />
              <Route exact path="/historico" element={<HistoryPage />} />
            </Routes>
          </CustomBody>
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
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
`