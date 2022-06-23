import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    color: #fff;
    background-color: #000;
    font-family: 'Inter', sans-serif;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  .container {
    width: 700px;
    max-width: 100%;
    margin: auto;
  }
`;
