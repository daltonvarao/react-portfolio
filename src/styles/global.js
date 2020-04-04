import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  html, body, #root {
    height: 100%;
  } 

  a {
    text-decoration: none;
  }
`;

export default globalStyle;
