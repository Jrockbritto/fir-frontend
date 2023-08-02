import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
