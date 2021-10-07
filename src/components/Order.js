import React from 'react';
import styled from 'styled-components';
import Button from './Button';
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

const Order = () => {

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <div>
        <OrderList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrderList>
      </div>
      <Total>
        <span>Itoqo</span>
        <span>5</span>
        <TotalPrice>850rub</TotalPrice>
      </Total>
      <Button>Оформить</Button>
    </OrderStyled>
  );
};

export default Order;