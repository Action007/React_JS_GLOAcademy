import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { formatCurrency } from '../Functions/formatCurrency';
import { totalPriceItems } from '../Functions/secondaryFunction';
import UseCount from '../Hooks/UseCount';
import CountItem from './CountItem';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  max-height: 400px;
  padding: 20px 52px 43px 37px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Pacifico;
  font-size: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = UseCount();

  const order = {
    ...openItem,
    count: counter.count
  };

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Wrapper>
          <Inner>
            <span>{openItem.name}</span>
            <span>
              {formatCurrency(openItem.price)}
            </span>
          </Inner>
          <CountItem {...counter} />
          <TotalPriceItem>
            <span>Цена</span>
            <span>{totalPriceItems(order).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</span>
          </TotalPriceItem>
          <ButtonWrap >
            <Button onClick={addToOrder}>
              Добавить
            </Button>
          </ButtonWrap>
        </Wrapper>
      </Modal>
    </Overlay >
  );
};

export default ModalItem;