import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  :root {
    --primary: #006EFF;
    --primary-hover: #005DD6;
    --primary-active: #0054C2;
    --white-100: #FFFFFF;
    --white-90: #E6E7E8;
    --white-80: #CCCCCC;
    --white-70: #B3B3B3;
    --white-60: #999999;
    --white-50: #808080;
    --white-40: #666666;
    --white-30: #4D4D4D;
    --white-20: #333333;
    --white-10: #1A1A1A;
    --black: #000000;
    --background: #17181C;
    --subpannel-color: #191A1F;
    --pannel-color: #1E1F24;
    --subpannel-color-light: #3A3C46;
    --overlay: #17181CA6;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    min-height: 100vh;
    background-color: var(--background);
  }
`;

export default GlobalStyles;
