import React from 'react';
import Header from '../Header';
import ResetCss from './ResetCss';
import Content from '../Content';

const App = () => {
  return (
    <React.Fragment>
      <ResetCss />
      <Header />
      <Content />
    </React.Fragment>
  );
};

export default App;