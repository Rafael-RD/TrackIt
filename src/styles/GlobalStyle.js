import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
}

html{
    width: 100vw;
    overflow-x: hidden;
}

div.react-calendar{
    margin: 20px 0;
    border: none;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
    border-radius: 10px;

    .react-calendar__month-view__days__day{
        border-radius: 10%;

        abbr{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

`;

export default GlobalStyle;