import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { formatCurrency } from '../Functions/formatCurrency';
import { projection, totalPriceItems } from '../Functions/secondaryFunction';
import { ButtonWrap, Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked)
    .map(obj => obj.name), arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices']
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
};

const OrderConfirm = ({
  orders,
  setOrders,
  authentication,
  setOpenOrderConfirm,
  firebaseDatabase
}) => {
  console.log(firebaseDatabase);
  const dataBase = firebaseDatabase();
  const total = orders.reduce((res, order) =>
    totalPriceItems(order) + res, 0);



  return (
    <Overlay>
      <Modal>
        <OrderTitle>
          {authentication.displayName}
        </OrderTitle>
        <Text>
          Осталось только подтвердить ваш заказ
        </Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonWrap>
          <Button
            onClick={() => {
              sendOrder(dataBase, orders, authentication)
              setOrders([]);
              setOpenOrderConfirm(false);
            }}>
            Подтвердить
          </Button>
        </ButtonWrap>
      </Modal>
    </Overlay>
  );
};

export default OrderConfirm;