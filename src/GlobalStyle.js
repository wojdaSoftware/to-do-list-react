import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body{
    background-color: rgb(226, 226, 226);
    margin: 20px;
  }
`;