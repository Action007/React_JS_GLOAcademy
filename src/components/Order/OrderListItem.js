import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import { formatCurrency } from '../Functions/formatCurrency';
import { totalPriceItems } from '../Functions/secondaryFunction';

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

const OrderListItem = ({ order }) => {

  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>
        {formatCurrency(totalPriceItems(order))}
      </ItemPrice>
      <TrashBtn></TrashBtn>
    </OrderItemStyled>
  );
};

export default OrderListItem;