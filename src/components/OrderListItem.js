import React from 'react';
import styled from 'styled-components';
import trashImg from '../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin: 0 10px 0 20px;
  min-width: 65px;
  text-align: right;
`;

const TrashBtn = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const OrderListItem = () => {

  return (
    <OrderItemStyled>
      <ItemName>JS Burger</ItemName>
      <span>2</span>
      <ItemPrice>750 P</ItemPrice>
      <TrashBtn></TrashBtn>
    </OrderItemStyled>
  );
};

export default OrderListItem;