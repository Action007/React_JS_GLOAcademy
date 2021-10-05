import React from 'react';
import Header from '../Header/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
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
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
};

export default App;