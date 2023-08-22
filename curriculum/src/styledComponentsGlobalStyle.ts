import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.families.font1};
    font-family: ${({ theme }) => theme.fonts.sizes.body};
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.grey};
    background-size: cover;
  }
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle
