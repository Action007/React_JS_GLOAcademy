import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import Header from '../Header';
import ResetCss from './ResetCss';
import Content from '../Content';
import ModalItem from '../Modal/ModalItem';
import UseOpenItem from '../Hooks/UseOpenItem';
import UseOrders from '../Hooks/UseOrders';
import { UseAuth } from '../Hooks/UseAuth';
import { UseTitle } from '../Hooks/UseTitle';
import UseOrderConfirm from '../Hooks/UseOrderConfirm';
import OrderConfirm from '../Order/OrderConfirm';
import { Context } from '../Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyD2nSX6cTZ-6l_vAdebbha1bVwjn91fa7s",
  authDomain: "mrdonadls.firebaseapp.com",
  databaseURL: "https://mrdonadls-default-rtdb.firebaseio.com",
  projectId: "mrdonadls",
  storageBucket: "mrdonadls.appspot.com",
  messagingSenderId: "286268013868",
  appId: "1:286268013868:web:7578a0ff96f304f23e8089",
  measurementId: "G-P1Y548WT3F"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const auth = UseAuth(firebase.auth);
  const openItem = UseOpenItem();
  const orders = UseOrders();
  const orderConfirm = UseOrderConfirm();

  UseTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem
    }}>
      <ResetCss />
      <Header />
      <Content
        orders={orders}
        auth={auth}
        orderConfirm={orderConfirm}
      />
      {openItem.openItem &&
        <ModalItem {...openItem} {...orders} />}
      {orderConfirm.openOrderConfirm &&
        <OrderConfirm {...orders} {...auth} {...orderConfirm} firebaseDatabase={firebase.database} />}
    </Context.Provider>
  );
};

export default App;