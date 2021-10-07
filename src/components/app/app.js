import React from 'react';
import Header from '../Header';
import ResetCss from './ResetCss';
import Content from '../Content';
import ModelItem from '../ModelItem';

const App = () => {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <React.Fragment>
      <ResetCss />
      <Header />
      <Content setOpenItem={setOpenItem} />
      <ModelItem openItem={openItem} setOpenItem={setOpenItem} />
    </React.Fragment>
  );
};

export default App;