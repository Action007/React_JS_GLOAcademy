import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { formatCurrency } from '../Functions/formatCurrency';
import { totalPriceItems } from '../Functions/secondaryFunction';
import OrderListItem from './OrderListItem';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  top: 85px;
  background-color: #fff;
  max-width: 380px;
  width: 100%;
  min-height: calc(100% - 84px);
  box-shadow: 3px 4px 5px 0px #00000040;
  padding: 23px 51px;
  font-size: 20px;
`;

const OrderTitle = styled.h2`
  margin-bottom: 30px; 
  text-align: center;
  font-family: Pacifico;
  font-size: 39px;
`;

const OrderList = styled.ul`
  margin-bottom: 100px;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 35px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const Empty = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 100px;
`;


const Order = ({ orders, setOrders, setOpenItem }) => {

  const deleteItem = (index) => {
    const newOrder = orders.filter((item, i) =>
      i !== index
    );
    setOrders(newOrder);
  };

  const total = orders.reduce((res, order) =>
    totalPriceItems(order) + res, 0);

  const totalCounter = orders.reduce((res, order) =>
    order.count + res, 0);;

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <div>
        {orders.length
          ?
          <OrderList>
            {orders.map((order, index) =>
              <OrderListItem
                key={index}
                order={order}
                deleteItem={deleteItem}
                index={index}
                setOpenItem={setOpenItem}
              />)}
          </OrderList>
          :
          <Empty>Список заказов пуст</Empty>}
      </div>
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <Button>Оформить</Button>
    </OrderStyled>
  );
};

export default Order;