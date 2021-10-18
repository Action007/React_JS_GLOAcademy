import React from 'react';
import Header from '../Header';
import ResetCss from './ResetCss';
import Content from '../Content';
import ModalItem from '../Modal/ModalItem';
import UseOpenItem from '../Hooks/UseOpenItem';
import UseOrders from '../Hooks/UseOrders';

const App = () => {
  const openItem = UseOpenItem();
  const orders = UseOrders();

  return (
    <React.Fragment>
      <ResetCss />
      <Header />
      <Content {...openItem} orders={orders} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
};

export default App;