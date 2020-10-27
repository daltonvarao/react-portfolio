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

  body {
    background: #282a36;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    color: #f8f8f2;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyle;
