import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: 'Inter', sans-serif;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background:#FFFFFF
  }
`;

export default GlobalStyles;
