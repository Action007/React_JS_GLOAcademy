import { createGlobalStyle } from 'styled-components';

const ResetCss = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Roboto;
    font-size: 16px;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  a {
    text-decoration: none;
    outline: transparent;
    display: inline-block;
  }
  img {
    width: 100%;
    height: 100%;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export default ResetCss;