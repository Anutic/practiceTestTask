import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    padding: 20px;
  }

  @media (max-width: 390px) {
    body {
      padding: 10px;
    }
  }
`;