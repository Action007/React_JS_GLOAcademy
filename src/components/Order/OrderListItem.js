import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import { formatCurrency } from '../Functions/formatCurrency';
import { totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
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

const Toppings = styled.div`
  color: #9a9a9a;
  font-size: 14px;
`;

const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <OrderItemStyled onClick={() => setOpenItem({ ...order, index })}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>
        {formatCurrency(totalPriceItems(order))}
      </ItemPrice>
      <TrashBtn onClick={(e) => {
        e.stopPropagation();
        deleteItem(index);
      }}></TrashBtn>
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
  );
};

export default OrderListItem;