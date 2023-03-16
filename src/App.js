import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TodayPage from "./pages/TodayPage/TodayPage";


export const UserInfo = createContext();
export const SetUserInfo = createContext();


export default function App() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    console.log(user);
  },[user]);
  

  return (
    <BrowserRouter>
      <UserInfo.Provider value={user} >
        <SetUserInfo.Provider value={setUser} >
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/cadastro" element={<SignupPage />} />
            <Route exact path="/habitos" element={null} />
            <Route exact path="/hoje" element={<TodayPage />} />
            <Route exact path="/historico" element={null} />
          </Routes>
        </SetUserInfo.Provider>
      </UserInfo.Provider>
    </BrowserRouter>
  );
}


/*
font-family: 'Lexend Deca', sans-serif;
font-family: 'Playball', cursive;
*/