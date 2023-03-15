import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/cadastro" element={null} />
        <Route exact path="/habitos" element={null} />
        <Route exact path="/hoje" element={null} />
        <Route exact path="/historico" element={null} />
      </Routes>
    </BrowserRouter>
  );
}


/*
font-family: 'Lexend Deca', sans-serif;
font-family: 'Playball', cursive;
*/